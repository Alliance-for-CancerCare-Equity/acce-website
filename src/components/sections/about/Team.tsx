import Image, { type StaticImageData } from 'next/image'

interface Person {
  name: string
  role: string
  imageUrl: string | StaticImageData
  bio: string
}

interface TeamProps {
  title: string
  subtitle: string
  people: Person[]
}

export function Team({ title, subtitle, people }: TeamProps) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-slate-900 sm:text-5xl">
            {title}
          </h2>
          <p className="mt-6 text-lg/8 text-slate-600">{subtitle}</p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {people.map((person) => (
            <li
              key={person.name}
              className="flex flex-col gap-6 xl:flex-row xl:items-start"
            >
              <Image
                alt={person.name}
                src={person.imageUrl}
                width={208}
                height={260}
                className="aspect-4/5 w-52 flex-none rounded-2xl bg-sky-100 object-cover outline-1 -outline-offset-1 outline-black/5 xl:self-start"
              />
              <div className="flex-auto">
                <h3 className="text-lg/8 font-semibold tracking-tight text-slate-900">
                  {person.name}
                </h3>
                <p className="text-base/7 text-slate-600">{person.role}</p>
                <p className="mt-6 whitespace-pre-line text-base/7 text-slate-600">
                  {person.bio}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}