import Image from 'next/image'
import clsx from 'clsx'

/**
 * Displays a blog image fully, without cropping or text overlays.
 *
 * Blog imagery is often poster-style artwork with headlines and varying aspect
 * ratios baked in, so it must never be cropped (object-cover) or covered with
 * text. The image is shown with object-contain inside an aspect-ratio box, and
 * a blurred, dimmed copy of the same image fills any letterbox space so the bars
 * automatically match each image's own colors. Same pattern already used on the
 * patient stories page.
 *
 * The parent sets the box shape via `className` (e.g. `aspect-[3/2]`).
 */
export function BlogImage({
  src,
  alt,
  sizes,
  className,
  priority,
}: {
  src: string
  alt: string
  sizes?: string
  className?: string
  priority?: boolean
}) {
  return (
    <div className={clsx('relative overflow-hidden bg-lavender-50', className)}>
      {/* Blurred backdrop fill — matches the image's own colors */}
      <Image
        fill
        aria-hidden
        src={src}
        alt=""
        sizes={sizes}
        className="scale-110 object-cover opacity-40 blur-md"
      />
      {/* Foreground image — always shown in full, never cropped */}
      <Image
        fill
        src={src}
        alt={alt}
        sizes={sizes}
        priority={priority}
        className="relative z-10 object-contain"
      />
    </div>
  )
}
