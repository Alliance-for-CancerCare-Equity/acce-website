interface ApplicationFormProps {
  title: string
  form_title: string
  submit_button_text: string
  sidebar_p1: string
  sidebar_link1_text: string
  sidebar_link1_href: string
  sidebar_link2_text: string
  sidebar_link2_href: string
  sidebar_p2: string
  sidebar_p3: string
}

export function ApplicationForm({
  title,
  form_title,
  submit_button_text,
  sidebar_p1,
  sidebar_link1_text,
  sidebar_link1_href,
  sidebar_link2_text,
  sidebar_link2_href,
  sidebar_p2,
  sidebar_p3,
}: ApplicationFormProps) {
  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-slate-200"
      >
        <defs>
          <pattern
            x="50%"
            y={-64}
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-64} className="overflow-visible fill-slate-50">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <div className="mx-auto max-w-xl lg:max-w-4xl">
        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl">
          {title}
        </h2>
        <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
          <form action="#" method="POST" className="lg:flex-auto">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm/6 font-semibold text-slate-900"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 backdrop-blur-sm placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm/6 font-semibold text-slate-900"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 backdrop-blur-sm placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="dob"
                  className="block text-sm/6 font-semibold text-slate-900"
                >
                  Date of Birth
                </label>
                <div className="mt-2.5">
                  <input
                    id="dob"
                    name="dob"
                    type="date"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 backdrop-blur-sm placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone"
                  className="block text-sm/6 font-semibold text-slate-900"
                >
                  Phone Number
                </label>
                <div className="mt-2.5">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 backdrop-blur-sm placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="address"
                  className="block text-sm/6 font-semibold text-slate-900"
                >
                  Home Address
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="address"
                    name="address"
                    rows={4}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 backdrop-blur-sm placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                    defaultValue={''}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="diagnosis"
                  className="block text-sm/6 font-semibold text-slate-900"
                >
                  Diagnosis and Treatment History
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="diagnosis"
                    name="diagnosis"
                    rows={4}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 backdrop-blur-sm placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                    defaultValue={''}
                  />
                </div>
              </div>
              <h3 className="text-lg/8 font-semibold tracking-tight text-slate-900 sm:col-span-2">
                {form_title}
              </h3>
              <div>
                <label
                  htmlFor="physician-first-name"
                  className="block text-sm/6 font-semibold text-slate-900"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    id="physician-first-name"
                    name="physician-first-name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 backdrop-blur-sm placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="physician-last-name"
                  className="block text-sm/6 font-semibold text-slate-900"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    id="physician-last-name"
                    name="physician-last-name"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 backdrop-blur-sm placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="physician-phone"
                  className="block text-sm/6 font-semibold text-slate-900"
                >
                  Phone Number
                </label>
                <div className="mt-2.5">
                  <input
                    id="physician-phone"
                    name="physician-phone"
                    type="tel"
                    autoComplete="tel"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 backdrop-blur-sm placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="physician-email"
                  className="block text-sm/6 font-semibold text-slate-900"
                >
                  Email Address
                </label>
                <div className="mt-2.5">
                  <input
                    id="physician-email"
                    name="physician-email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 backdrop-blur-sm placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                {submit_button_text}
              </button>
            </div>
          </form>
          <div className="lg:mt-6 lg:w-80 lg:flex-none">
            <div className="text-base/7 text-slate-600">
              <p>{sidebar_p1}</p>
              <p className="mt-4">
                <a
                  href={sidebar_link1_href}
                  className="font-semibold text-blue-600"
                >
                  {sidebar_link1_text}
                </a>
              </p>
              <p className="mt-2">
                <a
                  href={sidebar_link2_href}
                  className="font-semibold text-blue-600"
                >
                  {sidebar_link2_text}
                </a>
              </p>
              <p className="mt-8">{sidebar_p2}</p>
              <p className="mt-4">{sidebar_p3}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}