import fs from 'fs'
import path from 'path'

export type ImageSize = { width: number; height: number }

/**
 * Reads the pixel size of a PNG or JPEG under /public at build time.
 *
 * Event images are often posters with the details printed on them, so the
 * event page shows them whole, in a frame shaped like the image. Knowing the
 * size up front lets the page reserve that frame before the image loads, so
 * the page doesn't jump. Returns undefined for other formats or unreadable
 * files; callers fall back to a default shape. EXIF rotation is ignored, so a
 * sideways camera JPEG would get a frame of the wrong shape (still uncropped).
 */
export function getPublicImageSize(src: string): ImageSize | undefined {
  let bytes: Buffer
  try {
    bytes = fs.readFileSync(path.join(process.cwd(), 'public', decodeURIComponent(src)))
  } catch {
    return undefined
  }

  // PNG: the IHDR chunk always comes first, with width and height at bytes 16 and 20.
  if (bytes.length >= 24 && bytes.readUInt32BE(0) === 0x89504e47) {
    return { width: bytes.readUInt32BE(16), height: bytes.readUInt32BE(20) }
  }

  // JPEG: walk the marker segments to the start-of-frame marker (C0–CF, except
  // C4, C8 and CC, which share that range), which stores height then width.
  if (bytes[0] === 0xff && bytes[1] === 0xd8) {
    let offset = 2
    while (offset + 9 <= bytes.length && bytes[offset] === 0xff) {
      const marker = bytes[offset + 1]
      if (marker === 0xff) {
        offset += 1 // fill byte
        continue
      }
      if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
        return { height: bytes.readUInt16BE(offset + 5), width: bytes.readUInt16BE(offset + 7) }
      }
      offset += 2 + bytes.readUInt16BE(offset + 2)
    }
  }

  return undefined
}
