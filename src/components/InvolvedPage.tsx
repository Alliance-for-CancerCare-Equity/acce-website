interface InvolvedPageProps {
  title: string
  subtitle: string
  children: React.ReactNode
}

export function InvolvedPage({
  title,
  subtitle,
  children,
}: InvolvedPageProps) {
  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base/7 text-slate-700">
        <p className="text-base/7 font-semibold text-blue-600">{title}</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl">
          {subtitle}
        </h1>
        <div className="mt-10 text-lg/8 text-slate-600">{children}</div>
      </div>
    </div>
  )
}
