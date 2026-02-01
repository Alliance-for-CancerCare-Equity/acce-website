import Image from 'next/image'

import backgroundImage from '@/images/background-auth.jpg'

export function SlimLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="relative flex min-h-full shrink-0 justify-center md:px-12 lg:px-0">
        <div className="relative z-10 flex flex-1 flex-col bg-white px-4 py-10 shadow-2xl sm:justify-center md:flex-none md:px-28">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-lavender-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-teal-100 rounded-full blur-3xl opacity-50" />

          <main className="relative mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
            {children}
          </main>
        </div>
        <div className="hidden sm:contents lg:relative lg:block lg:flex-1">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={backgroundImage}
            alt=""
            unoptimized
          />
          {/* Gradient overlay with brand colors */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-600/30 via-lavender-500/20 to-gold-500/30" />
        </div>
      </div>
    </>
  )
}
