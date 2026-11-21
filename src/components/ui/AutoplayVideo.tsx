'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowPathIcon, PlayIcon, SpeakerWaveIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'

/*
 * The slice of the YouTube IFrame Player API this component uses.
 * https://developers.google.com/youtube/iframe_api_reference
 */
interface YouTubePlayer {
  playVideo(): void
  seekTo(seconds: number, allowSeekAhead: boolean): void
  mute(): void
  unMute(): void
  isMuted(): boolean
  setVolume(volume: number): void
  getIframe(): HTMLIFrameElement
  destroy(): void
}

interface YouTubePlayerEvent {
  target: YouTubePlayer
  data: number
}

interface YouTubeApi {
  Player: new (
    element: HTMLElement,
    options: {
      videoId: string
      width?: string
      height?: string
      playerVars?: Record<string, string | number>
      events?: {
        onReady?: (event: YouTubePlayerEvent) => void
        onStateChange?: (event: YouTubePlayerEvent) => void
        onError?: (event: YouTubePlayerEvent) => void
      }
    },
  ) => YouTubePlayer
}

declare global {
  interface Window {
    YT?: YouTubeApi
    onYouTubeIframeAPIReady?: () => void
  }
}

const API_SRC = 'https://www.youtube.com/iframe_api'
const STATE_ENDED = 0
const STATE_PLAYING = 1

let apiPromise: Promise<YouTubeApi> | null = null

/** Loads YouTube's player script once per page, however many videos ask for it. */
function loadYouTubeApi(): Promise<YouTubeApi> {
  if (apiPromise) return apiPromise

  const loading = new Promise<YouTubeApi>((resolve, reject) => {
    if (window.YT?.Player) {
      resolve(window.YT)
      return
    }
    // YouTube calls this global when the script is ready. Keep any handler
    // that another script on the page registered first.
    const previous = window.onYouTubeIframeAPIReady
    window.onYouTubeIframeAPIReady = () => {
      previous?.()
      if (window.YT) resolve(window.YT)
    }
    if (!document.querySelector(`script[src="${API_SRC}"]`)) {
      const script = document.createElement('script')
      script.src = API_SRC
      script.async = true
      script.onerror = () => {
        // Leave no dead tag behind, so a later attempt can add a fresh one.
        script.remove()
        reject(new Error('The YouTube player script did not load'))
      }
      document.head.appendChild(script)
    }
    window.setTimeout(() => reject(new Error('The YouTube player script timed out')), 15000)
  })
  // A blocked or timed-out script should not poison later attempts.
  loading.catch(() => {
    apiPromise = null
  })
  apiPromise = loading
  return loading
}

/**
 * A YouTube video that starts playing on its own when the page loads.
 *
 * Browsers only allow a video to start by itself if it is muted, so it begins
 * silently and offers a "Play with sound" button that restarts it from the top
 * with audio. Visitors who ask their device for reduced motion or data saving
 * get the poster and a play button instead, as does `autoPlay={false}`.
 *
 * Styled for dark backgrounds.
 */
export function AutoplayVideo({
  id,
  title,
  poster,
  caption,
  autoPlay = true,
  className,
}: {
  /** YouTube video id, the part after `v=` or `youtu.be/`. */
  id: string
  /** Name of the video, announced to screen readers. */
  title: string
  /** Image shown until the player has loaded, and again when the video ends. */
  poster: string
  /** Short line shown under the video. */
  caption?: string
  autoPlay?: boolean
  className?: string
}) {
  // How playback was asked for: by the page itself (muted) or by a click (with sound).
  const [start, setStart] = useState<'auto' | 'user' | null>(null)
  // True once we know the video will not start by itself, so a play button is needed.
  const [manual, setManual] = useState(false)
  const [ready, setReady] = useState(false)
  const [muted, setMuted] = useState(false)
  const [ended, setEnded] = useState(false)
  const [failed, setFailed] = useState(false)

  const hostRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<YouTubePlayer | null>(null)

  // Decide on the client whether this visitor gets autoplay.
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const saveData =
      (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
        ?.saveData === true
    if (autoPlay && !reducedMotion && !saveData) {
      setStart('auto')
    } else {
      setManual(true)
    }
  }, [autoPlay])

  // Build the player once playback has been asked for.
  useEffect(() => {
    const host = hostRef.current
    if (!start || !host) return

    // YouTube swaps this element for its iframe. React never renders into the
    // host, so the two do not fight over the DOM.
    const mount = document.createElement('div')
    host.appendChild(mount)
    let cancelled = false
    let player: YouTubePlayer | null = null

    loadYouTubeApi()
      .then((YT) => {
        if (cancelled) return
        player = new YT.Player(mount, {
          videoId: id,
          width: '100%',
          height: '100%',
          playerVars: {
            autoplay: 1,
            mute: start === 'auto' ? 1 : 0,
            playsinline: 1,
            rel: 0,
          },
          events: {
            onReady: (event) => {
              if (cancelled) return
              const frame = event.target.getIframe()
              frame.title = title
              if (start === 'auto') {
                event.target.mute()
              } else {
                // The play button that was pressed is gone, so hand focus to the player.
                frame.focus()
              }
              event.target.playVideo()
              playerRef.current = event.target
              setMuted(start === 'auto')
              setReady(true)
            },
            onStateChange: (event) => {
              if (cancelled) return
              if (event.data === STATE_PLAYING) {
                setEnded(false)
                setMuted(event.target.isMuted())
              } else if (event.data === STATE_ENDED) {
                setEnded(true)
              }
            },
            onError: () => {
              if (!cancelled) setFailed(true)
            },
          },
        })
      })
      .catch(() => {
        if (!cancelled) setFailed(true)
      })

    return () => {
      cancelled = true
      playerRef.current = null
      try {
        player?.destroy()
      } catch {
        // The iframe was already removed along with the page.
      }
      host.replaceChildren()
    }
  }, [start, id, title])

  // YouTube has no "unmuted" event, and visitors can also unmute with the
  // player's own controls, so check while our sound button is showing.
  useEffect(() => {
    if (!ready || !muted) return
    const timer = window.setInterval(() => {
      const player = playerRef.current
      if (player && !player.isMuted()) setMuted(false)
    }, 500)
    return () => window.clearInterval(timer)
  }, [ready, muted])

  function playFromStart({ withSound }: { withSound: boolean }) {
    const player = playerRef.current
    if (!player) return
    if (withSound) {
      player.unMute()
      player.setVolume(100)
      setMuted(false)
    }
    player.seekTo(0, true)
    player.playVideo()
    setEnded(false)
  }

  const showSoundButton = ready && muted && !ended && !failed

  return (
    <div className={clsx('@container relative', className)}>
      {/* Soft brand glow behind the frame */}
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-lavender-500/40 via-gold-400/25 to-teal-400/35 blur-2xl sm:-inset-6"
      />

      {/* Gradient edge */}
      <div className="relative rounded-3xl bg-gradient-to-br from-lavender-300 via-gold-400 to-teal-400 p-1 shadow-strong sm:p-1.5">
        <div className="relative aspect-video overflow-hidden rounded-[1.25rem] bg-charcoal-950">
          <Image
            fill
            priority
            src={poster}
            alt=""
            sizes="(min-width: 1280px) 44rem, (min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />

          {/* YouTube puts its iframe in here. */}
          <div
            ref={hostRef}
            className="absolute inset-0 [&>iframe]:absolute [&>iframe]:inset-0 [&>iframe]:size-full"
          />

          {manual && !start && !failed && (
            <button
              type="button"
              onClick={() => setStart('user')}
              aria-label={`Play video: ${title}`}
              className="group absolute inset-0 flex cursor-pointer items-center justify-center bg-charcoal-950/20 transition-colors duration-200 hover:bg-charcoal-950/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-teal-400"
            >
              <span className="flex size-16 items-center justify-center rounded-full bg-teal-500 text-white shadow-strong ring-4 ring-white/40 transition-all duration-200 group-hover:scale-110 group-hover:bg-teal-600 group-hover:shadow-glow-teal sm:size-20">
                <PlayIcon className="ml-1 size-8 sm:size-10" />
              </span>
            </button>
          )}

          {ended && !failed && (
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <Image
                fill
                src={poster}
                alt=""
                sizes="(min-width: 1280px) 44rem, (min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-charcoal-950/60" />
              <button
                type="button"
                onClick={() => playFromStart({ withSound: false })}
                className="relative inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-charcoal-900 shadow-strong transition-all duration-200 hover:-translate-y-0.5 hover:bg-charcoal-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <ArrowPathIcon className="size-5 text-teal-600" />
                Watch again
              </button>
            </div>
          )}

          {failed && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-charcoal-950/50">
              <a
                href={`https://www.youtube.com/watch?v=${id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-charcoal-900 shadow-strong transition-all duration-200 hover:-translate-y-0.5 hover:bg-charcoal-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <PlayIcon className="size-5 text-teal-600" />
                Watch on YouTube
              </a>
            </div>
          )}
        </div>
      </div>

      {/*
        One row of fixed height, so nothing below jumps when the sound button
        comes and goes. Where the video is too narrow for both, the button
        takes the caption's place while it is showing.
      */}
      <div className="relative mt-4 flex min-h-11 items-center justify-between gap-x-4">
        {caption && (
          <p
            className={clsx(
              'text-sm font-medium text-white/70',
              showSoundButton && 'hidden @lg:block',
            )}
          >
            {caption}
          </p>
        )}
        {showSoundButton && (
          <button
            type="button"
            onClick={() => playFromStart({ withSound: true })}
            className="relative inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-charcoal-900 shadow-medium @lg:ml-auto transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-50 hover:shadow-glow-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold-400 opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex size-2.5 rounded-full bg-gold-500" />
            </span>
            <SpeakerWaveIcon className="size-5 text-teal-600" />
            Play with sound
          </button>
        )}
      </div>
    </div>
  )
}
