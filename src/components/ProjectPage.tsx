import Image from 'next/image'

interface ProjectPageProps {
  title: string
  subtitle: string
  children: React.ReactNode
  imageUrl: string
}

export function ProjectPage({
  title,
  subtitle,
  children,
  imageUrl,
}: ProjectPageProps) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <p className="text-base/7 font-semibold text-blue-600">{title}</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl">
            {subtitle}
          </h1>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base/7 text-slate-700 lg:max-w-none lg:grid-cols-2">
            {children}
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16 lg:pt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Image
            width={2432}
            height={1442}
            alt=""
            src={imageUrl}
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-slate-900/10"
          />
          <div aria-hidden="true" className="relative">
            <div className="absolute -inset-x-20 bottom-0 bg-linear-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
    </div>
  )
}
