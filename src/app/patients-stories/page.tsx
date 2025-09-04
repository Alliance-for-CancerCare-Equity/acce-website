import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

import rukminiImage from '../../../public/stories/rukmini.jpg'
import adisaImage from '../../../public/stories/adisa.jpg'
import cynthiaImage from '../../../public/stories/cynthia.jpeg'
import salomeyImage from '../../../public/stories/salomey.jpg'
import emmanuelImage from '../../../public/stories/emmanuel.jpg'
import faustinaImage from '../../../public/stories/faustina.jpg'
import ritaImage from '../../../public/stories/rita.jpg'

export const metadata: Metadata = {
  title: 'Patients Stories',
}

const patientsStoriesContent = {
  title: 'Real Patients, Real Stories',
  subtitle:
    'Alliance for CancerCare Equity is committed to realizing a bold vision of equitable cancer care for every patient in need. As demand for our assistance grows, our commitment to advancing cancer care equity only strengthens.',
  people: [
    {
      name: 'Rukmini Adjetey',
      role: 'Click to hear her story',
      imageUrl: rukminiImage,
      youtubeUrl: 'https://www.youtube.com/watch?v=DBfATugq8r4',
    },
    {
      name: 'Adisa Iddrisu',
      role: 'Click to hear her story',
      imageUrl: adisaImage,
      youtubeUrl: 'https://www.youtube.com/watch?v=ZtpmeGBW1JI',
    },
    {
      name: 'Dr Cynthia Botchway',
      role: 'Click to hear her story',
      imageUrl: cynthiaImage,
      youtubeUrl: 'https://www.youtube.com/watch?v=SCVRsCAezk8',
    },
    {
      name: 'Salomey Appiah',
      role: 'Click to hear her story',
      imageUrl: salomeyImage,
      youtubeUrl: 'https://www.youtube.com/watch?v=TfBabZ19vqw',
    },
    {
      name: 'Emmanuel Grusi',
      role: 'Click to hear his story',
      imageUrl: emmanuelImage,
      youtubeUrl: 'https://www.youtube.com/watch?v=uMiacIM7w1Y',
    },
    {
      name: 'Faustina Anakwa',
      role: 'Click to hear her story',
      imageUrl: faustinaImage,
      youtubeUrl: 'https://www.youtube.com/watch?v=0x-i-cFkdh0',
    },
    {
      name: 'Rita Benson',
      role: 'Click to hear her story',
      imageUrl: ritaImage,
      youtubeUrl: 'https://www.youtube.com/watch?v=pE6oODZvlV8',
    },
  ],
}

import { type StaticImageData } from 'next/image'

interface Person {
  name: string
  role: string
  imageUrl: StaticImageData
  youtubeUrl: string
}

interface PatientsStoriesProps {
  title: string
  subtitle: string
  people: Person[]
}

function PatientsStories({ title, subtitle, people }: PatientsStoriesProps) {
  return (
    <div className="bg-white py-16 sm:py-20">
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
                className="group"
              >
                <div className="relative h-72 w-full overflow-hidden rounded-3xl">
                  <Image
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    src={person.imageUrl}
                    alt=""
                    sizes="(min-width: 1024px) 20rem, (min-width: 640px) 24rem, 100vw"
                  />
                </div>
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-slate-900 group-hover:text-blue-600">
                  {person.name}
                </h3>
                <p className="text-base/7 text-slate-600 group-hover:text-blue-600">
                  {person.role}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function PatientsStoriesPage() {
  return (
    <>
      <Header />
      <main>
        <PatientsStories {...patientsStoriesContent} />
      </main>
      <Footer />
    </>
  )
}
