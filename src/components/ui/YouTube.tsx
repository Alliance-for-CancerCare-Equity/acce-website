'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { PlayIcon } from '@heroicons/react/24/solid'

/**
 * An embedded YouTube video for MDX content.
 *
 * YouTube's embed can't take a custom poster, so when `thumbnail` is set the
 * frame shows that image with a play button and swaps in the player once it is
 * pressed. As with BlogImage, the thumbnail is shown in full — never cropped —
 * over a blurred copy of itself that fills any letterbox space.
 */
export function YouTube({
  id,
  title = 'Event video',
  thumbnail,
}: {
  id: string
  title?: string
  thumbnail?: string
}) {
  const [playing, setPlaying] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Pressing play removes the button, so hand keyboard focus to the player.
  useEffect(() => {
    if (playing) iframeRef.current?.focus()
  }, [playing])

  return (
    <div className="my-8 overflow-hidden rounded-2xl shadow-strong ring-1 ring-charcoal-200">
      <div className="relative aspect-video w-full bg-charcoal-900">
        {thumbnail && !playing ? (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${title}`}
            className="group absolute inset-0 cursor-pointer focus-visible:outline-none"
          >
            {/* margin: 0 overrides the prose styles' spacing for content images. */}
            <Image
              fill
              src={thumbnail}
              alt=""
              sizes="(min-width: 768px) 48rem, 100vw"
              className="scale-110 object-cover opacity-40 blur-md"
              style={{ margin: 0 }}
            />
            <Image
              fill
              src={thumbnail}
              alt=""
              sizes="(min-width: 768px) 48rem, 100vw"
              className="object-contain"
              style={{ margin: 0 }}
            />
            {/* The focus ring lives on this top layer: on the button itself the images would cover it. */}
            <span className="absolute inset-0 flex items-center justify-center bg-charcoal-950/10 transition-colors duration-200 group-hover:bg-transparent group-focus-visible:ring-4 group-focus-visible:ring-inset group-focus-visible:ring-teal-400">
              <span className="flex size-16 items-center justify-center rounded-full bg-teal-500 text-white shadow-strong ring-4 ring-white/40 transition-all duration-200 group-hover:scale-110 group-hover:bg-teal-600 group-hover:shadow-glow-teal group-focus-visible:scale-110 group-focus-visible:bg-teal-600 sm:size-20">
                <PlayIcon className="ml-1 size-8 sm:size-10" />
              </span>
            </span>
          </button>
        ) : (
          <iframe
            ref={iframeRef}
            src={`https://www.youtube.com/embed/${id}${playing ? '?autoplay=1' : ''}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        )}
      </div>
    </div>
  )
}
