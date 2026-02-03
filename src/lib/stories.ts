import { type StaticImageData } from 'next/image'

import rukminiImage from '../../public/stories/rukmini.jpg'
import adisaImage from '../../public/stories/adisa.jpg'
import cynthiaImage from '../../public/stories/cynthia.jpeg'
import salomeyImage from '../../public/stories/salomey.jpg'
import emmanuelImage from '../../public/stories/emmanuel.jpg'
import faustinaImage from '../../public/stories/faustina.jpg'
import ritaImage from '../../public/stories/rita.jpg'

export interface PatientStory {
  slug: string
  name: string
  title: string
  imageUrl: StaticImageData
  youtubeUrl: string
  quote?: string
  content: string[]
}

export const patientStories: PatientStory[] = [
  {
    slug: 'rukmini-adjetey',
    name: 'Rukmini Adjetey',
    title: 'From Diagnosis to Hope: Rukmini\'s Story',
    imageUrl: rukminiImage,
    youtubeUrl: 'https://www.youtube.com/watch?v=DBfATugq8r4',
    quote: 'My life wouldn\'t have been this hopeful without this organization stepping in to support me.',
    content: [
      'In July 2024, Rukmini Adjetey\'s life changed suddenly. Rukmini is a young woman from Ghana with many dreams for her future. One day, she found a lump in her breast. After medical tests, she received difficult news. She had breast cancer. The diagnosis brought fear, worry, and many questions about what would come next. Her life may quickly be filled with hospital visits, medical tests, and hard conversations about survival.',
      'At the time of her diagnosis, Rukmini was not working. As doctors shared her treatment plan, another serious problem became clear. The cost of cancer care was more than her family could afford. Chemotherapy, radiotherapy, scans, and ongoing care were very expensive. Each appointment came with a painful question: How much longer could her family pay for treatment? Over time, the financial stress grew heavier. Her family worried that her treatment might have to stop, not because Rukmini gave up, but because they could no longer afford the care she needed.',
      'Rukmini wanted to live. She wanted to fight cancer and move forward with her life. But courage alone could not pay the bills. As the money ran out, the fear of losing access to care grew stronger. Rukmini felt scared and worried about being left without treatment. The illness was hard, but the stress of money made everything worse.',
      'When Rukmini reached her lowest point, help arrived. She was connected to the Alliance for CancerCare Equity (ACCE). ACCE made a life-changing decision to sponsor her full cancer treatment. This support transformed her journey. With ACCE\'s donors\' help, Rukmini no longer had to worry about how to pay for care. She could focus on healing her body, her mind, and her spirit. She felt reassured knowing she was not alone in her fight.',
      'Today, Rukmini feels strong and hopeful about her future. She looks forward to returning to work, rebuilding her dreams, and moving ahead with confidence. Her story shows what is possible when cancer care is fair and accessible. By supporting the Alliance for CancerCare Equity, you are not only helping to pay for treatment. You are restoring hope, saving lives, and making sure no one has to choose between survival and cost.',
    ],
  },
  {
    slug: 'adisa-iddrisu',
    name: 'Adisa Iddrisu',
    title: 'Adisa Iddrisu\'s Journey Through Cancer',
    imageUrl: adisaImage,
    youtubeUrl: 'https://www.youtube.com/watch?v=ZtpmeGBW1JI',
    quote: 'The work of ACCE is truly inspiring, bringing hope, healing, and dignity to people who would otherwise be left without access to cancer care.',
    content: [
      'When Adisa Iddrisu received the words no one is ever prepared to hear, "you have cervical cancer," her world stood still. She began her initial surgical treatment in Ghana\'s Upper West Region, the place she calls home, holding onto hope despite the fear that filled her heart.',
      'After recovering from the surgery, she required further treatment with radiation therapy and was therefore referred to the Komfo Anokye Teaching Hospital in Kumasi. But hope quickly turned to despair when she learned the cost of the radiotherapy treatment she desperately needed. It was far beyond what she could afford. Overwhelmed and afraid, Adisa burst into tears at the clinic in front of her doctor, uncertain if she would survive.',
      'In that moment of heartbreak, compassion met her pain. Her doctor, aware of the life-saving work of the Alliance for CancerCare Equity (ACCE), connected Adisa to the organization. ACCE stepped in and did what seemed impossible—covering the full cost of her radiotherapy treatment and giving her a fighting chance at life.',
      'Adisa successfully completed her treatment without any financial burden. Her tears are no longer from fear, but from gratitude. She is deeply thankful for the support that saved her life and restored her hope.',
      'Adisa calls the work of ACCE truly inspiring, bringing hope, healing, and dignity to people who would otherwise be left without access to cancer care.',
    ],
  },
  {
    slug: 'cynthia-botchway',
    name: 'Dr Cynthia Botchway',
    imageUrl: cynthiaImage,
    title: 'Dr Cynthia Botchway\'s Story',
    youtubeUrl: 'https://www.youtube.com/watch?v=SCVRsCAezk8',
    content: [],
  },
  {
    slug: 'salomey-appiah',
    name: 'Salomey Appiah',
    imageUrl: salomeyImage,
    title: 'Salomey Appiah\'s Story',
    youtubeUrl: 'https://www.youtube.com/watch?v=TfBabZ19vqw',
    content: [],
  },
  {
    slug: 'emmanuel-grusi',
    name: 'Emmanuel Grusi',
    imageUrl: emmanuelImage,
    title: 'Emmanuel Grusi\'s Story',
    youtubeUrl: 'https://www.youtube.com/watch?v=uMiacIM7w1Y',
    content: [],
  },
  {
    slug: 'faustina-anakwa',
    name: 'Faustina Anakwa',
    imageUrl: faustinaImage,
    title: 'Faustina Anakwa\'s Story',
    youtubeUrl: 'https://www.youtube.com/watch?v=0x-i-cFkdh0',
    content: [],
  },
  {
    slug: 'rita-benson',
    name: 'Rita Benson',
    imageUrl: ritaImage,
    title: 'Rita Benson\'s Story',
    youtubeUrl: 'https://www.youtube.com/watch?v=pE6oODZvlV8',
    content: [],
  },
]

export function getStoryBySlug(slug: string): PatientStory | undefined {
  return patientStories.find((story) => story.slug === slug)
}

export function getAllStorySlugs(): string[] {
  return patientStories.map((story) => story.slug)
}

export function getStoriesWithContent(): PatientStory[] {
  return patientStories.filter((story) => story.content.length > 0)
}
