import Image from 'next/image'

interface ProjectPageProps {
  header: string
  title: string
  col1_p1: string
  col1_p2?: string
  col2_p1?: string
  col2_p2?: string
  buttonText: string
  buttonHref: string
  imageUrl: string
  imageAlt: string
}

export function ProjectPage({
  header,
  title,
  col1_p1,
  col1_p2,
  col2_p1,
  col2_p2,
  buttonText,
  buttonHref,
  imageUrl,
  imageAlt,
}: ProjectPageProps) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <p className="text-base/7 font-semibold text-blue-600">{header}</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            {title}
          </h1>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base/7 text-gray-700 lg:max-w-none lg:grid-cols-2">
            <div>
              <p>{col1_p1}</p>
              {col1_p2 && <p className="mt-8">{col1_p2}</p>}
            </div>
            {(col2_p1 || col2_p2) && (
              <div>
                {col2_p1 && <p>{col2_p1}</p>}
                {col2_p2 && <p className="mt-8">{col2_p2}</p>}
              </div>
            )}
          </div>
          <div className="mt-10 flex">
            <a
              href={buttonHref}
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16 lg:pt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Image
            width={2432}
            height={1442}
            alt={imageAlt}
            src={imageUrl}
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
          />
          <div aria-hidden="true" className="relative">
            <div className="absolute -inset-x-20 bottom-0 bg-linear-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
    </div>
  )
}
