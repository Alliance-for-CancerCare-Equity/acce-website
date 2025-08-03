import Image from 'next/image'

export function OurProjects() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-4xl">
          <p className="text-base/7 font-semibold text-blue-600">
            Our Projects
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl">
            Advancing Equity in Cancer Care
          </h1>
          <p className="mt-6 text-xl/8 text-balance text-slate-700">
            Cancer continues to be a major global health challenge, with
            significant implications, especially in sub-Saharan Africa. By 2030,
            it is anticipated that the region will experience over 1 million
            deaths and more than 1.4 million new cases annually.
          </p>
        </div>
        <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          <div className="lg:pr-8">
            <p className="text-base/7 text-slate-600">
              Disturbingly, Africa is also projected to bear half of the
              world&apos;s childhood cancers by 2050*. In Ghana alone, despite an
              estimated 24,000 new cases each year among its 31 million
              population, only approximately 3,500 patients receive treatment
              annually—highlighting a stark disparity. Tragically, around 15,800
              lives are lost to cancer yearly in the country**. Financial
              constraints further exacerbate this crisis, with over half of
              treated patients unable to afford to complete their treatment.
            </p>
            <p className="mt-8 text-base/7 text-slate-600">
              Addressing this urgent issue, Alliance for CancerCare Equity
              (ACCE) champion’s health equity by:
            </p>
            <ul className="mt-8 list-disc space-y-4 pl-6 text-base/7 text-slate-600">
              <li>
                Covering the expenses for the full spectrum of cancer
                treatments, including radiotherapy, chemotherapy, surgery, and
                associated costs, for patients in Ghana who lack the financial
                means to access adequate healthcare services.
              </li>
              <li>
                Providing financial support for cancer treatments to uninsured
                and underinsured patients in Canada (Kitchener-Waterloo).
              </li>
              <li>
                Assisting with the costs of essential, yet unfunded, medications
                for patients in Canada (Kitchener-Waterloo).
              </li>
              <li>
                Offering access to supportive networks and counseling services
                for cancer patients and their families.
              </li>
              <li>
                Providing essential medical equipment for the diagnosis and
                treatment of patients with cancer in non-profit community
                healthcare centers
              </li>
              <li>
                Conducting vital research into cancer and other diseases to
                advance understanding and management in both Canada and Ghana
              </li>
            </ul>
            <p className="mt-8 text-sm/6 text-slate-500">
              * Cancer in sub-Saharan Africa: a Lancet Oncology Commission. The
              lancet oncology, 2022-05-09. Published online May 9, 2022
              https://doi.org/10.1016/S1470-2045(21)00720-8
            </p>
            <p className="mt-2 text-sm/6 text-slate-500">
              ** International Agency for Research on Cancer (IARC), World
              Health Organization (WHO). Ghana:
              https://gco.iarc.fr/today/data/factsheets/populations/288-ghana-fact-sheets.pdf
            </p>
          </div>
          <div className="pt-16 lg:row-span-2">
            <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
              <div className="relative aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                <Image
                  fill
                  alt="Medical research"
                  src="https://images.unsplash.com/photo-1564732005956-20420ebdab60?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="object-cover"
                />
              </div>
              <div className="relative -mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                <Image
                  fill
                  alt="Patient support"
                  src="https://images.unsplash.com/photo-1517120026326-d87759a7b63b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                <Image
                  fill
                  alt="Chemotherapy treatment"
                  src="https://images.unsplash.com/photo-1579154204449-47c454770447?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="object-cover"
                />
              </div>
              <div className="relative -mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                <Image
                  fill
                  alt="Medical equipment"
                  src="https://images.unsplash.com/photo-1648047547783-8d64bf80c17f?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
