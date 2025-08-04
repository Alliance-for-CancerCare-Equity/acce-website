import Image from 'next/image'
import Link from 'next/link'

interface Person {
  name: string
  role: string
  imageUrl: string
  youtubeUrl: string
}

interface PatientsStoriesProps {
  title: string
  subtitle: string
  people: Person[]
}

export function PatientsStories({
  title,
  subtitle,
  people,
}: PatientsStoriesProps) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl">
            {title}
          </h2>
          <p className="mt-6 text-lg/8 text-slate-600">{subtitle}</p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {people.map((person) => (
            <li key={person.name}>
              <Link
                href={person.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  width={1024}
                  height={1024}
                  alt={person.name}
                  src={person.imageUrl}
                  className="aspect-3/2 w-full rounded-2xl bg-slate-100 object-cover outline-1 -outline-offset-1 outline-black/5"
                />
                <h3 className="mt-6 text-lg/8 font-semibold tracking-tight text-slate-900">
                  {person.name}
                </h3>
                <p className="text-base/7 text-blue-600">{person.role}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}