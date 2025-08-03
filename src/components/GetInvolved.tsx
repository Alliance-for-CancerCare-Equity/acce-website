import Image from 'next/image'
import Link from 'next/link'

export function GetInvolved() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-4xl">
          <p className="text-base/7 font-semibold text-blue-600">
            Get Involved
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl">
            Join Us in the Fight for Cancer Care Equity
          </h1>
          <p className="mt-6 text-xl/8 text-balance text-slate-700">
            At the Alliance for CancerCare Equity (ACCE), we believe that no one
            should be denied cancer treatment because of where they live or how
            much money they have. Yet every day, patients in Ghana and
            underserved communities in Canada are forced to choose between food,
            shelter, and lifesaving care.
          </p>
        </div>
        <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          <div className="lg:pr-8">
            <h2 className="text-2xl font-semibold tracking-tight text-pretty text-slate-900">
              Current Volunteer Opportunities
            </h2>
            <ul className="mt-6 list-disc space-y-2 pl-6 text-base/7 text-slate-600">
              <li>
                <a
                  href="https://www.allianceforcancercareequity.ca/_files/ugd/8b0cc2_e3229ade47174d018dc7be7cec27fcdd.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Social Media & Digital Communications Volunteer
                </a>
              </li>
              <li>
                <a
                  href="https://www.allianceforcancercareequity.ca/_files/ugd/8b0cc2_8042ee40f1ef4b739cdd65b5f7c0c49c.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Event Organizer – Cancer Awareness Day (February 2026)
                  (Volunteer)
                </a>
              </li>
            </ul>
            <p className="mt-8 text-base/7 text-slate-600">
              This is not just a health issue—it’s a justice issue.
            </p>
            <p className="mt-8 text-base/7 text-slate-600">
              We’re working to close the gap by providing direct financial
              support for cancer treatments, raising awareness, and advocating
              for equitable healthcare policies. But we can’t do it alone.
            </p>
            <p className="mt-8 text-base/7 text-slate-600">
              You can make a difference. Whether you give, volunteer, start a
              fundraiser, or simply spread the word, your action can help save
              lives and bring dignity to those in their most vulnerable moments.
            </p>
          </div>
          <div className="pt-16 lg:row-span-2">
            <div className="-mx-8 grid grid-cols-1 gap-8 sm:-mx-16 lg:mx-0">
              <Link
                href="/volunteer"
                className="group relative aspect-video overflow-hidden rounded-2xl shadow-xl"
              >
                <Image
                  fill
                  src=""
                  alt="Volunteer With Us"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white">
                  Volunteer With Us
                </h3>
              </Link>
              <Link
                href="/partner-with-us"
                className="group relative aspect-video overflow-hidden rounded-2xl shadow-xl"
              >
                <Image
                  fill
                  src=""
                  alt="Partner With Us"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white">
                  Partner With Us
                </h3>
              </Link>
              <Link
                href="/ways-to-give"
                className="group relative aspect-video overflow-hidden rounded-2xl shadow-xl"
              >
                <Image
                  fill
                  src=""
                  alt="Fundraise For Us"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white">
                  Fundraise For Us
                </h3>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
