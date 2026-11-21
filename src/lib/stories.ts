import { type StaticImageData } from 'next/image'

import rukminiImage from '../../public/stories/rukmini.png'
import adisaImage from '../../public/stories/adisa.png'
import cynthiaImage from '../../public/stories/cynthia.png'
import salomeyImage from '../../public/stories/salomey.png'
import emmanuelImage from '../../public/stories/emmanuel.png'
import ritaImage from '../../public/stories/rita.png'
import michaelImage from '../../public/stories/michael.png'
import abigailImage from '../../public/stories/abigail.jpg'
import fuseiniImage from '../../public/stories/fuseini.jpg'
import christineImage from '../../public/stories/christine.jpg'

/**
 * One block of a story's text: a paragraph, or a bulleted list.
 *
 * Inside any string, **double asterisks** mark text the author set in bold, and a
 * line break (\n) is kept as a line break.
 */
export type StoryBlock = string | { list: string[] }

export interface PatientStory {
  slug: string
  name: string
  /** Short label shown under the name, as printed on the story's thumbnail ("Breast Cancer Survivor"). */
  condition?: string
  title: string
  imageUrl: StaticImageData
  youtubeUrl: string
  quote?: string
  /** Who said the quote, when it was not the patient (for example a relative speaking for them). */
  quoteBy?: string
  /** Pronoun used in listing copy ("Read his/her full story"). Defaults to 'her'. */
  pronoun?: 'his' | 'her'
  /** Story paragraphs. Leave empty for video-only stories — the listing then links straight to YouTube. */
  content: StoryBlock[]
}

// The order here is the order on the Patient Stories page, three to a row.
export const patientStories: PatientStory[] = [
  {
    slug: 'rukmini-adjetey',
    name: 'Rukmini Adjetey',
    condition: 'Breast Cancer Survivor',
    title: 'From Diagnosis to Hope: Rukmini\'s Story',
    imageUrl: rukminiImage,
    youtubeUrl: 'https://www.youtube.com/watch?v=wVpQ4W2ST9c',
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
    slug: 'cynthia-botchway',
    name: 'Dr Cynthia Botchway',
    condition: 'Head and Neck Cancer Survivor',
    imageUrl: cynthiaImage,
    title: 'A Second Chance at Life after Head and Neck Cancer',
    youtubeUrl: 'https://www.youtube.com/watch?v=c6dbg6dNgyA',
    quote: 'Please donate to help. There are people dying silently. I\'m pleading with anyone who can help to donate to ACCE, to help people like me.',
    content: [
      'In November 2023, Dr. Cynthia Botchway felt a small discomfort in her throat. At first, she thought it would go away, but it did not. Months of tests and long waits brought fear and uncertainty. Finally, she received the diagnosis she had been fearing: head and neck cancer.',
      'At 45, and working in Ghana\'s Ministry of Education, her life changed in ways she never imagined. She underwent two major surgeries, including jaw reconstruction, followed by radiotherapy, which cost 70,000 GHS (nearly 9,000 CAD). The process was physically and emotionally challenging, and at times, it felt impossible.',
      'Late one night, searching for help, she reached out to the Alliance for CancerCare Equity (ACCE). Within 30 minutes, someone responded. "That response brought me comfort. I felt that someone truly cared," she recalls. With the support of ACCE donors, Dr. Botchway was able to complete her treatment.',
      'Recovery was difficult. She lost her ability to taste, speak, and swallow, and even simple everyday activities became a challenge. But slowly, she regained strength. Today, she is in remission and returning to the life she loves.',
      'Dr. Botchway\'s journey is a powerful reminder that behind every diagnosis is a person holding onto hope. She urges others to help by donating to ACCE, to help people like her. Watch her full story and support more people like her. Your donation can make a huge difference.',
    ],
  },
  {
    slug: 'emmanuel-grusi',
    name: 'Emmanuel Grusi',
    condition: 'Bladder Cancer Survivor',
    imageUrl: emmanuelImage,
    title: 'Holding On to Hope: Yaw Emmanuel\'s Journey with Bladder Cancer',
    youtubeUrl: 'https://www.youtube.com/watch?v=txQpp1Ngs0I',
    pronoun: 'his',
    quote: '[ACCE] supported me and enabled me to return to the hospital to continue my treatment.',
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
    slug: 'abigail-adjei',
    name: 'Abigail Adjei',
    condition: 'Breast Cancer Survivor',
    imageUrl: abigailImage,
    title: 'At Just 36, Abigail Faced Breast Cancer. Her Biggest Fear Was How to Pay for Treatment.',
    youtubeUrl: 'https://www.youtube.com/watch?v=5ScVxG7gp4A',
    quote: 'Your support eased the burden on my family. Your support gave me hope to keep fighting.',
    content: [
      'Meet Abigail. She is 36 years old, a wife, and a mother with a family and a future she wants to be part of.',
      'But in August 2025, Abigail discovered a lump in her right breast.',
      'She went to the hospital for an ultrasound scan. Although the scan did not initially reveal anything suspicious, her family history of breast cancer meant further investigation was necessary.',
      'Her first biopsy did not provide a clear result. She had to undergo another ultrasound and biopsy before receiving the diagnosis no one wants to hear:',
      '**Abigail had breast cancer.**',
      'The diagnosis brought fear and uncertainty. Her family provided emotional support, but another problem threatened her ability to move forward.',
      '**She could not afford the treatment she needed.**',
      'Abigail\'s greatest fear was not simply the cancer. It was the possibility that she might be unable to pay for treatment.',
      'Imagine facing a life-changing diagnosis while wondering whether you can afford the care that could help you fight it.',
      'For Abigail, this was not a hypothetical fear. It was her reality.',
      '**Then came a message of hope.**',
      'A colleague told Abigail about the **Alliance for CancerCare Equity (ACCE)**. Desperate for financial assistance, she reached out to ACCE.',
      '**Within two days, ACCE contacted Abigail and confirmed that it would help support her treatment.**',
      'Thanks to donor support, ACCE provided financial assistance toward her radiotherapy costs and emotional support during a frightening period of her life.',
      'The assistance also helped Abigail receive radiotherapy at a different facility to avoid delays.',
      'This was the difference your generosity helped make.',
      '**Without ACCE\'s support, Abigail\'s treatment would have been delayed or might not have happened at all.**',
      'Instead, she was able to complete her radiotherapy.',
      'Today, Abigail reports that she is doing well.',
      'She no longer had to face the entire cost of treatment alone. Her family received relief from the financial burden, and Abigail could continue her cancer journey with renewed hope.',
      'Her experience reminds us that cancer care is about more than medical treatment. It is also about making sure that financial hardship does not prevent someone from accessing the care they need.',
      '**Your donation can make this possible for another patient.**',
      'Abigail received help because someone chose to give.',
      '**Your donation to ACCE can help turn fear into relief, financial barriers into access to treatment, and uncertainty into hope.**',
      'Your generosity helps ACCE provide practical support for patients who struggle to afford essential cancer care, including:',
      {
        list: [
          'Radiotherapy and chemotherapy costs.',
          'Diagnostic tests and procedures.',
          'Medications and other essential treatment expenses.',
          'Transportation and other barriers that can make accessing care difficult.',
        ],
      },
      'Every patient\'s needs are different, and every contribution helps ACCE respond to the real financial challenges that patients and families face.',
      'Abigail\'s story is not just about what happened to one patient. It is about what becomes possible when a community decides that people should not have to face cancer alone.',
      '**Abigail received the support she needed. There are other patients who still need that chance.**',
      'Will you help ACCE reach the next person?',
      '❤️ **Donate today. Help a patient access treatment. Give a family hope. Help ensure that financial circumstances never determine who gets a chance to fight cancer.**',
      '**You helped make Abigail\'s treatment possible. Will you help us do it again?**',
    ],
  },
  {
    slug: 'fuseini-sumaila',
    name: 'Fuseini Sumaila',
    condition: 'Bone Cancer Patient',
    imageUrl: fuseiniImage,
    title: 'He Is Only 21. He Lost Part of His Leg to Cancer. And His Family Nearly Ran Out of Money for Treatment.',
    youtubeUrl: 'https://www.youtube.com/watch?v=j6KGwEil3X4',
    quote: 'You helped give my brother a chance to keep fighting for his future.',
    quoteBy: 'Rahanatu, Fuseini\'s sister',
    pronoun: 'his',
    content: [
      'Meet Fuseini Sumaila, a 21-year-old student in Ghana.',
      'At an age when many young people are studying, building friendships, and planning their futures, Fuseini has spent six years battling an illness that has changed his life and placed an enormous burden on his family.',
      'His journey began with uncertainty. An initial X-ray failed to reveal the cause of his illness, leaving his family struggling for answers. In desperation, they explored different possibilities, delaying treatment.',
      'Eventually, Fuseini underwent surgery at a private hospital in Takoradi, where his family was told he had a giant cell tumour.',
      'They hoped the worst was over. But about a year later, the tumour returned.',
      'Referred to Korle Bu Teaching Hospital, doctors determined that Fuseini needed an amputation below the knee.',
      'He was only 21.',
      'Losing part of his leg was devastating. Then, pathology results revealed another difficult truth: Fuseini had osteosarcoma, a type of bone cancer.',
      'Six years of illness. Surgery. A returning tumour. An amputation. A cancer diagnosis.',
      'Through it all, Fuseini and his family kept going.',
      'He completed six cycles of chemotherapy, but years of medical expenses had left his family financially exhausted. They were struggling to find the money needed to continue his treatment.',
      'Their fear was no longer just about the disease. What would happen if they could no longer afford his care?',
      'Without assistance, Fuseini\'s treatment risked being delayed or stopped completely, while his family faced the possibility of sinking deeper into debt.',
      'This is the heartbreaking reality for many cancer patients: even when treatment is available, its cost can become a barrier to receiving it.',
      '**Then, someone stepped in.**',
      'Fuseini\'s sister, Rahanatu, searched online for organizations that could help. Through information shared by another organization, she discovered the Alliance for CancerCare Equity (ACCE) and reached out for assistance.',
      'ACCE responded with financial support toward Fuseini\'s treatment bills.',
      'That support helped him continue treatment when his family had almost nothing left to give.',
      'For Fuseini, it meant he wouldn\'t have to stop treatment simply because his family could no longer afford it.',
      'For Rahanatu, who had stood beside her brother throughout this journey, it brought relief from the fear that financial hardship would prevent him from receiving continued care.',
      'For their family, it meant help when the burden had become almost unbearable.',
      'And for Fuseini, it restored something deeply important: hope for a future beyond the suffering he had endured.',
      'Today, Fuseini is still receiving treatment. He is still fighting, and he has not given up hope.',
      'His journey continues, but the support of ACCE donors has helped him move forward when financial barriers threatened to stop his treatment.',
      '**This is what your donation makes possible.**',
      'When you give to Alliance for CancerCare Equity, you help patients and families facing a devastating choice: how to pay for essential cancer treatment when their financial resources have run out.',
      'Your donations help ACCE provide financial assistance for essential cancer-care needs, including:',
      {
        list: [
          'Chemotherapy and radiotherapy to help patients access prescribed treatment.',
          'Medications and diagnostic procedures needed throughout their cancer journey.',
          'Other essential treatment-related expenses that may prevent patients from continuing care.',
        ],
      },
      'Every patient\'s circumstances are different. ACCE assesses individual needs and provides support where it can make a meaningful difference.',
      'Your generosity helps bridge the gap between needing treatment and being able to access it.',
      'Fuseini\'s family had already spent six years fighting to find answers and obtain care. They had reached a point where they could no longer carry the financial burden alone.',
      'Your support helped keep his treatment going.',
      'Other patients in Ghana face similar barriers today. Some are young. Some are parents. Some have families who have already spent everything trying to save someone they love.',
      'They need a community willing to stand beside them.',
      '**Will you be part of that community?**',
      'Your donation can help another patient continue chemotherapy, access essential medication, or receive treatment that financial hardship might otherwise put out of reach.',
      'You don\'t have to give a large amount to make a difference. Every contribution helps ACCE work toward a future where a patient\'s financial circumstances do not determine their access to cancer care.',
      'Fuseini is still fighting. His future still matters. And your support can help another patient keep fighting, too.',
      'You helped make Fuseini\'s continued treatment possible. Will you help us do it again for the next patient?',
      'No patient should have to face cancer alone.',
    ],
  },
  {
    slug: 'christine',
    name: 'Christine',
    condition: 'Breast Cancer Survivor',
    imageUrl: christineImage,
    title: 'Christine\'s Story: Hope When It Mattered Most',
    youtubeUrl: 'https://www.youtube.com/watch?v=HRFcUy8kruw',
    quote: 'I was afraid I would die. Then ACCE gave me hope.',
    content: [
      'Christine is a wife and mother in Ghana. Her family is at the centre of her life, and like any mother, she wanted to be there to see her children grow and build a future with them.',
      'But in September 2024, Christine felt something that changed everything, a lump in her breast.',
      'She was frightened. She couldn\'t sleep.',
      'But there was another problem: she didn\'t have the money to get the tests she needed.',
      'Although she eventually accessed free breast cancer screening during Breast Cancer Awareness Month, the scans and mammogram still came with costs she struggled to afford. She waited nearly two weeks before she could proceed.',
      'Then came the news she feared most.',
      'Christine was diagnosed with invasive, grade III breast cancer.',
      'The diagnosis was devastating, not only because of the cancer itself, but because Christine\'s sister had died from the same disease. Suddenly, the fear of cancer became the fear of losing her own life.',
      'At the same time, her husband had lost his job. The family was already struggling to pay for their children\'s education.',
      '**Christine was facing cancer while her family was facing financial hardship.**',
      'Even getting to treatment was difficult. The journey from her home to the Cancer Center at Korle-Bu was long, adding transportation costs to an already overwhelming financial burden. Delays in getting the necessary biopsy added even more anxiety.',
      'Christine\'s greatest fears were simple:',
      '**Would I survive? Would I receive treatment in time? Would my family be able to afford it?**',
      'Then someone told her about **Alliance for CancerCare Equity (ACCE).**',
      'Christine reached out because she needed financial help to continue her treatment.',
      '**ACCE responded in less than a week.**',
      'And this is where **your support made a difference.**',
      'Christine needed radiotherapy. She knew there was a less expensive option, but ACCE chose to fund the treatment option that would allow her to receive care without unnecessary delay.',
      '**ACCE covered the cost of her radiotherapy.**',
      'For Christine, this wasn\'t simply financial assistance.',
      'It meant treatment instead of waiting.',
      'It meant hope instead of fear.',
      'It meant being able to tell her family, “I can keep fighting.”',
      'Today, Christine says she is doing very well. She feels that she has been given another chance at life, and she is deeply grateful to the donors whose generosity made her treatment possible.',
      '**“I really don\'t know what would have happened if I didn\'t receive their support. I wouldn\'t have gotten the best treatment.”**',
      '**Christine\'s story is what your donation can do.**',
      'Your donation to ACCE can help a patient who has already heard the word cancer but is now facing another devastating question:',
      '**“How can I afford to treat it?”**',
      'Your support can help pay for radiotherapy, chemotherapy, diagnostic procedures, medications, transportation and other essential cancer-care needs when financial hardship threatens to put treatment out of reach.',
      'Christine received the help she needed because someone chose to give.',
      '**Now there is another patient waiting for that same chance.**',
      'You can help make that possible.',
      'Your donation can become someone\'s treatment.\nYour donation can become someone\'s hope.\nYour donation can give a family more time together.',
      '**Christine is living with hope today.**',
      '**Will you help ACCE give that hope to the next patient?**',
      '👉 **Donate to ACCE. Help ensure that financial circumstances never determine who gets a chance to fight cancer.**',
      '**You helped make Christine\'s treatment possible.\nTogether, let\'s do it again for the next person.**',
    ],
  },
  {
    slug: 'michael-carr',
    name: 'Michael Carr',
    condition: 'Stomach Cancer Survivor',
    imageUrl: michaelImage,
    title: 'A Lifeline When It Was Needed Most: Michael Carr\'s Journey with Stomach Cancer',
    youtubeUrl: 'https://www.youtube.com/watch?v=p1w2cd_54ko',
    quote: 'At a time when I felt lost and overwhelmed, I found hope.',
    pronoun: 'his',
    content: [
      'No one is ever prepared for the moment when their life changes because of cancer. Michael Carr, from the Amansie-Adansi Municipality in Ghana, never expected his life to change because of cancer. When he received the information that the cancer had returned, he was faced with a reality no one should have to experience: not only fighting a serious illness, but also wondering how he would afford the care he needed.',
      'The days that followed were filled with worry and uncertainty. Michael wanted to focus on his recovery, but the cost of treatment became another heavy weight to carry. He feared that financial challenges could prevent him from getting the care that could help save his life.',
      'Searching for a way forward, Michael reached out to organizations online, hoping to find support. The first organization he contacted could not assist him, but they referred him to the Alliance for CancerCare Equity (ACCE) in Canada. That connection brought new hope.',
      'When Michael spoke with Dr. Osei, Founder and CEO of ACCE, he felt more than just support. He felt understood. "On the other end of the phone was a man who spoke with humility, kindness, understanding, empathy, and genuine care. At a time when I felt lost and overwhelmed, I found hope," Michael recalls.',
      'Through the generosity of ACCE donors, Michael received the financial and medical support needed to continue his treatment. The support lifted a burden that no patient should have to carry alone. For the first time in a long time, Michael could focus less on how he would pay for care and more on healing.',
      'Michael\'s story reminds us that cancer is not only a medical battle. It is also a journey filled with fear, uncertainty, and moments when people need someone to stand beside them.',
      'Your donation to ACCE can be that support. It helps patients access cancer treatment when financial barriers stand in the way. It helps families feel less alone. It gives people like Michael the chance to continue fighting, continue healing, and continue hoping. Behind every donation is a person whose life can be changed. Together, we can make sure that no one has to face cancer without support.',
      'Watch Michael\'s full story to learn more about his journey and how ACCE support made a difference. Your donation can help more cancer patients access the care they need and remind them that they are not alone.',
    ],
  },
  {
    slug: 'salomey-appiah',
    name: 'Salomey Appiah',
    condition: 'Breast Cancer Survivor',
    imageUrl: salomeyImage,
    title: 'A Mother\'s Courage: Salomey\'s Battle with Breast Cancer',
    youtubeUrl: 'https://www.youtube.com/watch?v=cDxfLwCynlc',
    quote: 'Thank you very much for your support, and my prayer is that God will bless everyone with kindness to donate to the Alliance for CancerCare Equity, so that they can always help those with cancer who have no means to afford their treatment.',
    content: [
      'In 2021, Salomey Appiah felt a lump in her breast and went to the hospital for a checkup. After several tests, she received the life-changing news that she has breast cancer. She was referred to the Breast Clinic at Komfo Anokye Teaching Hospital in Ghana, where doctors recommended chemotherapy followed by a mastectomy.',
      'The news was heartbreaking. At the time, Salomey was still breastfeeding her baby, who was less than a year old. Facing the loss of her breast while caring for a young child felt overwhelming, but she chose to continue treatment with courage, thinking about her child and her future.',
      'The journey quickly became not only physically and emotionally exhausting but also financially heavy. Earning less than 2,000 Ghana cedis (under $249 CAD) a month, Salomey relied on loans to continue chemotherapy, using most of her income to repay the debt. After completing chemotherapy and surgery, she was told she needed radiotherapy. With her savings gone, continuing treatment felt out of reach.',
      'That is when she contacted Alliance for CancerCare Equity (ACCE) who then offered their support. Because of ACCE, Salomey was able to complete her radiotherapy and continue her recovery. Today, she shares her story with gratitude and hope, showing that caring hearts can truly change lives.',
    ],
  },
  {
    slug: 'rita-benson',
    name: 'Rita Benson',
    condition: 'Cervical Cancer Survivor',
    imageUrl: ritaImage,
    title: 'Saved in Time: Rita Benson\'s Journey Through Cervical Cancer',
    youtubeUrl: 'https://www.youtube.com/watch?v=11lxmfUfzms',
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
  {
    slug: 'adisa-iddrisu',
    name: 'Adisa Iddrisu',
    condition: 'Cervical Cancer Survivor',
    title: 'Adisa Iddrisu\'s Journey Through Cancer',
    imageUrl: adisaImage,
    youtubeUrl: 'https://www.youtube.com/watch?v=GxaqF-Lf88g',
    quote: 'The work of ACCE is truly inspiring, bringing hope, healing, and dignity to people who would otherwise be left without access to cancer care.',
    content: [
      'When Adisa Iddrisu received the words no one is ever prepared to hear, "you have cervical cancer," her world stood still. She began her initial surgical treatment in Ghana\'s Upper West Region, the place she calls home, holding onto hope despite the fear that filled her heart.',
      'After recovering from the surgery, she required further treatment with radiation therapy and was therefore referred to the Komfo Anokye Teaching Hospital in Kumasi. But hope quickly turned to despair when she learned the cost of the radiotherapy treatment she desperately needed. It was far beyond what she could afford. Overwhelmed and afraid, Adisa burst into tears at the clinic in front of her doctor, uncertain if she would survive.',
      'In that moment of heartbreak, compassion met her pain. Her doctor, aware of the life-saving work of the Alliance for CancerCare Equity (ACCE), connected Adisa to the organization. ACCE stepped in and did what seemed impossible—covering the full cost of her radiotherapy treatment and giving her a fighting chance at life.',
      'Adisa successfully completed her treatment without any financial burden. Her tears are no longer from fear, but from gratitude. She is deeply thankful for the support that saved her life and restored her hope.',
      'Adisa calls the work of ACCE truly inspiring, bringing hope, healing, and dignity to people who would otherwise be left without access to cancer care.',
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

/** What the home page carousel shows for a story: everything except the long text. */
export type StoryHighlight = Pick<
  PatientStory,
  'slug' | 'name' | 'condition' | 'imageUrl' | 'youtubeUrl' | 'quoteBy'
> & { quote: string }

/** Every story that has a quote, in page order, without its text (which the carousel never shows). */
export function getStoryHighlights(): StoryHighlight[] {
  return patientStories.flatMap(
    ({ slug, name, condition, imageUrl, youtubeUrl, quote, quoteBy }) =>
      quote ? [{ slug, name, condition, imageUrl, youtubeUrl, quote, quoteBy }] : [],
  )
}
