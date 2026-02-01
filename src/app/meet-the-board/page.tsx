import { type Metadata } from 'next'
import Image from 'next/image'

import { Container } from '@/components/ui/Container'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

import ernestAvatar from '../../../public/avatars/1_ernest.png'
import danielAvatar from '../../../public/avatars/2_daniel.png'
import kasareAvatar from '../../../public/avatars/3_kasare.png'
import jdarkoAvatar from '../../../public/avatars/4_jdarko.png'

export const metadata: Metadata = {
  title: 'Meet the Board',
}

const meetTheBoardContent = {
  title: 'Meet the ACCE Board of Directors',
  subtitle:
    "We're a dynamic group of individuals who are passionate about what we do and dedicated to advancing equity in cancer care.",
  people: [
    {
      name: 'Dr. Ernest Osei',
      role: 'President & CEO',
      imageUrl: ernestAvatar,
      bio: `Dr. Ernest Osei holds a BSc in Physics from the University of Science and Technology in Ghana, an MSc in Health and Radiation Physics from McMaster University in Canada, and a PhD in Medical Physics from the University of Newcastle Upon Tyne in the United Kingdom. He subsequently completed a postdoctoral fellowship and a Medical Physics Residency program at the Princess Margaret Cancer Centre in Toronto.

Following his clinical residency, Dr. Osei joined the Medical Physics Department at the Waterloo Regional Health Network, where he has amassed over 22 years of experience in radiation oncology. He is a Fellow of the Canadian College of Physicists in Medicine and brings extensive expertise in managing comprehensive radiation oncology programs.

Dr. Osei currently serves as Director of the Medical Physics Department and Radiation Safety Officer at the Waterloo Regional Health Network, overseeing the entire medical physics program. He is a former Chair of the Ontario Provincial Physics Advisory Committee (PPAC) to Ontario Health – Cancer Care Ontario (OH-CCO).

He holds adjunct professorships in the Department of Physics and Astronomy, the Department of Systems Design Engineering, and the School of Public Health Sciences within the Faculty of Health at the University of Waterloo. In these roles, he teaches medical physics courses and is actively engaged in research focused on cancer and health equity.

Beyond his professional commitments, Dr. Osei is a long-standing advocate for prostate cancer research through his involvement with the Ride for Dad charity since 2010. He is also a dedicated community leader, currently serving as Chair of the Centerville Chicopee Community Association in Kitchener and Chair of the Waterloo Region Immigration Partnership Council.`,
    },
    {
      name: 'Dr. Johnson Darko',
      role: 'Vice-President',
      imageUrl: jdarkoAvatar,
      bio: `Dr. Johnson Darko holds a BSc in Physics from the University of Science and Technology in Ghana, an MSc in Physics from the University of Ghana, and a PhD in Medical Physics from the University of Wales, Swansea, in the United Kingdom. He subsequently completed a postdoctoral fellowship at the Princess Margaret Cancer Centre in Toronto and a Medical Physics Residency program at Kingston Health Sciences Centre (KHSC).

Following his clinical residency, Dr. Darko served as a staff Medical Physicist at Kingston Health Sciences Centre for over a decade before joining the Medical Physics Department, Waterloo Regional Health Network in March 2013, where he currently serves as a Senior Medical Physicist.

Throughout his career, Dr. Darko has held adjunct academic appointments at Queen's University and currently serves as an Adjunct Professor at the University of Waterloo. He has extensive leadership experience in the installation and commissioning of medical linear accelerators and advanced treatment planning systems, contributing significantly to the advancement of radiation oncology services.

In addition to his professional roles, Dr. Darko is deeply involved in community service, actively volunteering with several local organizations. He also plays a key role in the global Medical Physics community through his ongoing volunteer work with the International Organization for Medical Physics (IOMP).`,
    },
    {
      name: 'Mr. Daniel Manful',
      role: 'Secretary',
      imageUrl: danielAvatar,
      bio: `Mr. Daniel Manful is an experienced Caseworker with the Ontario Disability Support Program (ODSP), where he specializes in assessing, documenting, and evaluating client information to determine eligibility for ODSP income and Employment Supports in accordance with relevant legislation and established guidelines.

Mr. Daniel is a graduate of the University of Professional Studies (formerly IPS) in Accra, Ghana and has completed the Professional Level of the Chartered Governance Institute (ICSA), UK. He also studied Computer Information Systems at Humber College in Toronto and holds a certificate in the Governance of Non-Profit Organizations from the State University of a New York. Additionally, he is a certified Board Checkup Coordinator.

Mr. Daniel has a strong record of community service, having served as Chair of the Ross Drive Public School Parent-Teacher Association for two years and as a board member of Peel Pentecostal Tabernacle for two terms, including a term as Board Secretary.

Outside of his professional and volunteer commitments, Daniel is a passionate soccer enthusiast who enjoys spending his summers playing the sport with young adults in his community.`,
    },
    {
      name: 'Mr. Kwame Asare',
      role: 'Treasurer',
      imageUrl: kasareAvatar,
      bio: `Mr. Kwame Asare is a seasoned corporate finance professional with extensive expertise in credit and risk management. He has worked with leading global technology firms and major industrial players across sectors such as healthcare, energy, and aviation, among others.

Mr. Asare holds a Bachelor of Commerce degree from the University of Windsor and an MBA with a specialization in Corporate Finance from Walden University in the United States.

Deeply committed to community service, Mr. Asare currently serves as Board Treasurer of Peel Pentecostal Tabernacle. He is also a dedicated philanthropist, regularly supporting initiatives that provide education and meals to children in need, and personally sponsoring individuals to help them meet critical financial needs and achieve their personal and professional goals.`,
    },
  ],
}

import { type StaticImageData } from 'next/image'

interface Person {
  name: string
  role: string
  imageUrl: StaticImageData
  bio: string
}

function TeamHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-lavender-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-teal-300/30 rounded-full blur-3xl" />

      <Container className="relative py-20 sm:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-lavender-100 px-4 py-1.5 text-sm font-medium text-lavender-700 ring-1 ring-inset ring-lavender-200 mb-6">
            Leadership
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl lg:text-6xl">
            {meetTheBoardContent.title}
          </h1>
          <p className="mt-6 text-xl/8 text-charcoal-600">
            {meetTheBoardContent.subtitle}
          </p>
        </div>
      </Container>
    </section>
  )
}

function TeamGrid({ people }: { people: Person[] }) {
  return (
    <section className="bg-lavender-50 py-20 sm:py-28">
      <Container>
        <ul
          role="list"
          className="grid grid-cols-1 gap-12 lg:grid-cols-2"
        >
          {people.map((person) => (
            <li key={person.name} className="bg-white rounded-3xl shadow-soft p-8 ring-1 ring-charcoal-100">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-none">
                  <div className="relative h-48 w-48 overflow-hidden rounded-2xl bg-gradient-to-b from-lavender-100 to-white ring-2 ring-lavender-200 mx-auto sm:mx-0">
                    <div className="absolute inset-0 px-2 pt-2 pb-0">
                      <div className="relative h-full w-full">
                        <Image
                          fill
                          className="object-contain object-bottom origin-bottom scale-110"
                          src={person.imageUrl}
                          alt={person.name}
                          sizes="12rem"
                          placeholder="blur"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-auto text-center sm:text-left">
                  <h3 className="font-display text-xl font-bold leading-8 tracking-tight text-charcoal-900">
                    {person.name}
                  </h3>
                  <p className="text-base font-medium text-teal-600">{person.role}</p>
                </div>
              </div>
              <div className="mt-6 text-base/7 text-charcoal-600 whitespace-pre-line">
                {person.bio}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default function MeetTheBoardPage() {
  return (
    <>
      <Header />
      <main>
        <TeamHero />
        <TeamGrid people={meetTheBoardContent.people} />
      </main>
      <Footer />
    </>
  )
}
