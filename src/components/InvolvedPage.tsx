interface InvolvedPageProps {
  title: string
  subtitle: string
  p1?: string
  p2?: string
  p3?: string
  h2?: string
  p4?: string
  p5?: string
  list_items?: string[]
}

export function InvolvedPage({
  title,
  subtitle,
  p1,
  p2,
  p3,
  h2,
  p4,
  p5,
  list_items,
}: InvolvedPageProps) {
  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base/7 text-slate-700">
        <p className="text-base/7 font-semibold text-blue-600">{title}</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl">
          {subtitle}
        </h1>
        <div className="mt-10 text-lg/8 text-slate-600">
          {p1 && <p>{p1}</p>}
          {p2 && <p className="mt-8">{p2}</p>}
          {p3 && <p className="mt-8">{p3}</p>}
          {h2 && (
            <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-slate-900">
              {h2}
            </h2>
          )}
          {p4 && <p className="mt-6">{p4}</p>}
          {p5 && <p className="mt-8">{p5}</p>}
          {list_items && list_items.length > 0 && (
            <ul className="mt-6 list-disc space-y-4 pl-6">
              {list_items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
