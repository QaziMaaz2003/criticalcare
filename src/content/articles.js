// Educational articles for the News section (drafted sample content: replace with real posts).
// WordPress: standard `post` type (title, excerpt, featured image, category, content).
// Route: /news/:slug  ->  single.php
export const articles = [
  {
    slug: 'micu-vs-als-vs-bls',
    title: 'MICU, ALS or BLS: which level of ambulance care do you need?',
    category: 'Guides',
    date: '2026-09-15',
    readTime: '3 min read',
    image: 'interior2',
    excerpt: 'A plain-language guide to the three levels of ambulance transport and when each one is used.',
    body: [
      'Not every ambulance transfer is the same. The right unit depends on the patient’s condition, the equipment they need on the way and the level of monitoring required.',
      'A Mobile Intensive Care Unit (MICU) is the highest level. It is used to transfer critical care patients between facilities and carries equipment such as transport ventilators, 12 lead EKG monitor/defibrillators, CPAP, ETCO2 and SPO2 monitoring and IV therapy equipment.',
      'Advanced Life Support (ALS) requires medical monitoring and care by a state certified paramedic and may include intubation, EKG monitoring and IV therapy.',
      'Basic Life Support (BLS) units are staffed by two state licensed medics and are suited to non-invasive inter-facility transports, where the patient’s condition is monitored regularly and basic interventions are available if needed.',
      'If you are unsure, call dispatch. We will review the patient’s condition with you and recommend the right unit.',
    ],
  },
  {
    slug: 'how-to-request-an-ambulance-transfer',
    title: 'How to request an inter-facility ambulance transfer',
    category: 'Guides',
    date: '2026-08-28',
    readTime: '2 min read',
    image: 'ambulanceCity',
    excerpt: 'What to have ready when you call so that dispatch can confirm the right crew quickly.',
    body: [
      'Requesting a transfer is simple when you have the key details to hand. Our dispatch team will ask for the patient’s name and date of birth, the pickup location and room number, the destination facility and accepting physician, and a callback number.',
      'It also helps to describe the patient’s diagnosis and current condition, and to say what level of care has been ordered, if you know it.',
      'Once we have those details, we confirm the level of care, assign a qualified crew and keep the receiving facility informed. At the end of the trip, the patient is handed over with a documented report.',
    ],
  },
  {
    slug: 'what-is-a-mobile-intensive-care-unit',
    title: 'What is a Mobile Intensive Care Unit?',
    category: 'About MICU',
    date: '2026-08-10',
    readTime: '3 min read',
    image: 'ambulanceRoad',
    excerpt: 'Why the MICU license is the highest provider license in Texas and what it means for patients.',
    body: [
      'A Mobile Intensive Care Unit is an ambulance configured and staffed to deliver intensive care during transport.',
      'Texas Critical Care is licensed by the Texas Department of State Health Services as a Mobile Intensive Care Unit provider, the highest level provider license that can be obtained and a rarity among hundreds of ambulance providers in South East Texas.',
      'Our MICU ambulances are configured with the latest technology and staffed with certified, highly trained medics, including critical care certified EMTs, intermediates and paramedics.',
    ],
  },
  {
    slug: 'preparing-for-wheelchair-transport',
    title: 'Preparing for a wheelchair transport appointment',
    category: 'Patient tips',
    date: '2026-07-22',
    readTime: '2 min read',
    image: 'caregiver',
    excerpt: 'A few simple steps that make dialysis, radiology and appointment trips smoother for everyone.',
    body: [
      'Wheelchair transport is a non-emergency medical service for clients who need help getting to treatments and appointments, such as radiology and dialysis, hospital discharges, doctor appointments and trips to and from rehabilitation centres.',
      'To help the trip run smoothly, book as early as you can, confirm the appointment time and address, and let the dispatcher know about any mobility needs.',
      'On the day, have the person ready a little before pick-up, with any paperwork, medication lists or identification they need for the appointment.',
    ],
  },
  {
    slug: 'standby-ambulance-for-events',
    title: 'Why your next event should have standby ambulance coverage',
    category: 'Events',
    date: '2026-07-05',
    readTime: '2 min read',
    image: 'stadium',
    excerpt: 'Standby coverage puts a trained crew and a fully equipped unit on site before anything happens.',
    body: [
      'Large gatherings, sports events and private functions all carry some risk. Having an ambulance and trained medics on site means help is seconds away rather than minutes.',
      'Texas Critical Care provides ambulance service as standby coverage for any private event. To reserve coverage, contact us with the date, location and expected attendance.',
      'The earlier you book, the easier it is to plan the right crew and unit for your event.',
    ],
  },
]

export const getArticle = (slug) => articles.find((a) => a.slug === slug)
export const articlePath = (a) => `/news/${a.slug}`
