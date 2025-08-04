import Image from 'next/image'

export function WaysToGiveHero() {
  return (
    <div className="bg-white">
      <div className="relative isolate pt-14">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <h1 className="mt-10 max-w-lg text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
              Transforming Cancer Care With Compassion And Empathy
            </h1>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <div className="grid grid-cols-2 gap-4">
              <Image
                width={500}
                height={500}
                src=""
                alt="Gilda"
                className="aspect-square rounded-2xl bg-slate-100 object-cover"
              />
              <Image
                width={500}
                height={500}
                src=""
                alt="Ariel"
                className="aspect-square rounded-2xl bg-slate-100 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
