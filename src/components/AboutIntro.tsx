export interface AboutIntroProps {
  vision_title: string
  vision_statement: string
  mission_statement: string
  who_we_are_title: string
  who_we_are_p1: string
  who_we_are_p2: string
  who_we_are_p3: string
  values_title: string
  values_list: string
}

export function AboutIntro({
  vision_title,
  vision_statement,
  mission_statement,
  who_we_are_title,
  who_we_are_p1,
  who_we_are_p2,
  who_we_are_p3,
  values_title,
  values_list,
}: AboutIntroProps) {
  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base/7 text-slate-700">
        <p className="text-base/7 font-semibold text-blue-600">
          {vision_title}
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl">
          {vision_statement}
        </h1>
        <p className="mt-6 text-xl/8 text-balance">{mission_statement}</p>
        <div className="mt-10 max-w-2xl text-slate-600">
          <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-slate-900">
            {who_we_are_title}
          </h2>
          <p className="mt-6">{who_we_are_p1}</p>
          <p className="mt-8">{who_we_are_p2}</p>
          <p className="mt-8">{who_we_are_p3}</p>
          <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-slate-900">
            {values_title}
          </h2>
          <p className="mt-6 font-semibold">{values_list}</p>
        </div>
      </div>
    </div>
  )
}