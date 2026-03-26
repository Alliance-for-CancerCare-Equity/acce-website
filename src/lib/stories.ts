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
    title: 'A Mother\'s Courage: Salomey\'s Battle with Breast Cancer',
    youtubeUrl: 'https://www.youtube.com/watch?v=TfBabZ19vqw',
    quote: 'Thank you very much for your support, and my prayer is that God will bless everyone with kindness to donate to the Alliance for CancerCare Equity, so that they can always help those with cancer who have no means to afford their treatment.',
    content: [
      'In 2021, Salomey Appiah felt a lump in her breast and went to the hospital for a checkup. After several tests, she received the life-changing news that she has breast cancer. She was referred to the Breast Clinic at Komfo Anokye Teaching Hospital in Ghana, where doctors recommended chemotherapy followed by a mastectomy.',
      'The news was heartbreaking. At the time, Salomey was still breastfeeding her baby, who was less than a year old. Facing the loss of her breast while caring for a young child felt overwhelming, but she chose to continue treatment with courage, thinking about her child and her future.',
      'The journey quickly became not only physically and emotionally exhausting but also financially heavy. Earning less than 2,000 Ghana cedis (under $249 CAD) a month, Salomey relied on loans to continue chemotherapy, using most of her income to repay the debt. After completing chemotherapy and surgery, she was told she needed radiotherapy. With her savings gone, continuing treatment felt out of reach.',
      'That is when she contacted Alliance for CancerCare Equity (ACCE) who then offered their support. Because of ACCE, Salomey was able to complete her radiotherapy and continue her recovery. Today, she shares her story with gratitude and hope, showing that caring hearts can truly change lives.',
    ],
  },
  {
    slug: 'emmanuel-grusi',
    name: 'Emmanuel Grusi',
    imageUrl: emmanuelImage,
    title: 'Holding On to Hope: Yaw Emmanuel\'s Journey with Bladder Cancer',
    youtubeUrl: 'https://www.youtube.com/watch?v=uMiacIM7w1Y',
    quote: 'What once felt like the end of hope has become a journey toward healing.',
    content: [
      'In 2022, Yaw Emmanuel, a 39-year-old husband and father of two from Asante Akyem Agogo, Ghana, began noticing blood in his urine and having difficulty urinating. Concerned, he sought medical care at the Asante Akyem Hospital, where tests revealed a diagnosis that would change his life: bladder cancer.',
      'The news was devastating. Yaw had never encountered cancer before, either personally or within his family, and the diagnosis left him overwhelmed with fear. At the time, his children were still very young. His eldest was just three and a half years old, and his youngest only two years old. While sitting in the hospital, his thoughts were consumed not by his own mortality, but by his children\'s future. He worried about who would care for them and how they would be supported if he could no longer provide. It was these fears that brought him to tears.',
      'As his health declined, so did his financial stability. Yaw was forced to close his shop, which had been his family\'s main source of income. Without earnings, everyday life became increasingly difficult, and hospital bills quickly became impossible to manage. Eventually, the burden became too heavy. Feeling hopeless and unable to afford further treatment, Yaw stopped attending his clinic appointments altogether.',
      'It was at this breaking point that a turning moment arrived. A doctor at the oncology clinic at Komfo Anokye Teaching Hospital recognized Yaw\'s distress and connected him with Alliance for CancerCare Equity (ACCE). Through ACCE\'s intervention, he was able to return to the hospital and resume his treatment. The organization stepped in to support his chemotherapy and has continued to stand by him throughout his radiotherapy.',
      'Although Yaw is still undergoing treatment and has not yet fully recovered, his health has improved significantly. At one point, he had lost so much weight that people in his community were deeply concerned. Now, with ongoing care and support, he is regaining strength, and many would not realize he is ill unless told.',
      'Yaw speaks with deep gratitude for the support he has received. What once felt like the end of hope has become a journey toward healing. Thanks to ACCE and the generosity of its supporters, Yaw continues to receive the care he needs and the chance to remain present for the family he loves.',
    ],
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
    title: 'Saved in Time: Rita Benson\'s Journey Through Cervical Cancer',
    youtubeUrl: 'https://www.youtube.com/watch?v=pE6oODZvlV8',
    quote: 'Through ACCE, God has saved lives — including mine.',
    content: [
      'When Rita Benson first noticed the changes in her body, she did not think cancer could be the cause. The 35-year-old mother of two from Obuasi, Ghana, was living her normal life when unusual symptoms began to appear: vaginal bleeding, discharge with an unfamiliar colour and bleeding after sexual intercourse. Like many women, Benson initially attributed the signs to other illnesses. She made several trips to the hospital and took different medications, hoping the problem would resolve.',
      'It did not. It was only after a biopsy that she received the life-altering diagnosis: stage 3 cervical cancer.',
      'The news brought fear, uncertainty and overwhelming anxiety. Beyond the emotional toll of the diagnosis was the harsh reality of treatment costs. Cancer care is expensive, and Benson\'s family was already facing financial hardship. Her husband had lost his job, and she was responsible for caring for their two children. The thought of how to afford treatment weighed heavily on her. She recalls being worried about the burden.',
      'The delay in accessing care was significant. Like many patients in similar circumstances, Benson\'s path to treatment was slowed by financial barriers — a challenge that continues to affect countless people facing cancer diagnoses.',
      'Then help arrived. The Alliance for CancerCare Equity (ACCE) stepped in to cover the cost of her treatment. With this support, Benson was able to complete the necessary therapies. Today, she is experiencing significant improvement in her health and is filled with gratitude. She believes the intervention came at the right time.',
      'Benson\'s story is a powerful reminder that early diagnosis, timely treatment and financial support can mean the difference between despair and hope. It also highlights the vital role organizations like ACCE play in ensuring that cancer patients are not left to fight alone.',
      'There are many more patients like Rita — mothers, fathers, daughters and sons — who urgently need access to life-saving cancer care. Because no one should have to choose between survival and affordability.',
    ],
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
