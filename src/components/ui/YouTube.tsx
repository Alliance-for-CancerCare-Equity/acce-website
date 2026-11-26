'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { PlayIcon } from '@heroicons/react/24/solid'

/**
 * An embedded YouTube video for MDX content.
 *
 * YouTube's embed can't take a custom poster, so when `thumbnail` is set the
 * frame shows that image with a play button and swaps in the player once it is
 * pressed. As with BlogImage, the thumbnail is shown in full — never cropped —
 * over a blurred copy of itself that fills any letterbox space.
 *
 * `className` replaces the default vertical margin, for a video that sits
 * inside a card rather than in the flow of an article.
 *
 * `playButton="corner"` moves the play button out of the middle of the frame,
 * for a thumbnail with its own lettering there, such as a title card. The
 * whole thumbnail stays clickable either way.
 */
export function YouTube({
  id,
  title = 'Event video',
  thumbnail,
  className = 'my-8',
  playButton = 'center',
}: {
  id: string
  title?: string
  thumbnail?: string
  className?: string
  playButton?: 'center' | 'corner'
}) {
  const [playing, setPlaying] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const corner = playButton === 'corner'

  // Pressing play removes the button, so hand keyboard focus to the player.
  useEffect(() => {
    if (playing) iframeRef.current?.focus()
  }, [playing])

  return (
    <div className={clsx('overflow-hidden rounded-2xl shadow-strong ring-1 ring-charcoal-200', className)}>
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
            <span
              className={clsx(
                'absolute inset-0 flex bg-charcoal-950/10 transition-colors duration-200 group-hover:bg-transparent group-focus-visible:ring-4 group-focus-visible:ring-inset group-focus-visible:ring-teal-400',
                corner ? 'items-end justify-end p-2.5 sm:p-5' : 'items-center justify-center',
              )}
            >
              <span
                className={clsx(
                  'flex items-center justify-center rounded-full bg-teal-500 text-white shadow-strong ring-4 ring-white/40 transition-all duration-200 group-hover:scale-110 group-hover:bg-teal-600 group-hover:shadow-glow-teal group-focus-visible:scale-110 group-focus-visible:bg-teal-600',
                  corner ? 'size-10 sm:size-16' : 'size-16 sm:size-20',
                )}
              >
                <PlayIcon className={corner ? 'ml-0.5 size-5 sm:ml-1 sm:size-8' : 'ml-1 size-8 sm:size-10'} />
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
