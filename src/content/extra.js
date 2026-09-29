// Additional page content (trust strip, audiences, values, comparison, careers extras, FAQs...).
// Facts come from txcriticalcare.com; wording marked "drafted" is new copy to review before launch.
// WordPress: ACF repeaters / CPT entries on the matching Page.

// Icons used below are defined in components/Icon.jsx.

export const trust = [
  { icon: 'shield', title: 'DSHS licensed', text: 'Texas MICU provider license' },
  { icon: 'award', title: 'ACLS protocols', text: 'Current emergency guidelines' },
  { icon: 'users', title: 'Certified medics', text: 'EMTs, intermediates, paramedics' },
  { icon: 'pin', title: 'Local coverage', text: 'Fort Bend & Harris County' },
]

// Drafted
export const audiences = {
  eyebrow: 'Who we serve',
  title: 'Trusted by facilities, families and event organizers.',
  text: 'Whether it is a critical transfer between hospitals or a routine trip to dialysis, we match the unit and crew to the patient.',
  items: [
    { icon: 'hospital', title: 'Hospitals & ERs', text: 'Inter-facility transfers with the monitoring and equipment the patient needs during the journey.' },
    { icon: 'home', title: 'Nursing & rehab facilities', text: 'Safe transport to and from rehabilitation centres and healthcare facilities.' },
    { icon: 'heart', title: 'Patients & families', text: 'Hospital discharges, appointments and treatments handled by a trained, caring crew.' },
    { icon: 'stethoscope', title: 'Physicians & clinics', text: 'Reliable transport for patients who need to move between offices, imaging and treatment sites.' },
    { icon: 'calendar', title: 'Event organizers', text: 'Standby ambulance coverage for private events, with medics on site.' },
    { icon: 'accessibility', title: 'Wheelchair clients', text: 'Non-emergency transport for wheelchair-bound clients, door to door.' },
  ],
}

// Drafted, based on the service facts
export const compare = {
  eyebrow: 'Compare levels of care',
  title: 'Which unit is right for the patient?',
  text: 'Our dispatch team will confirm the right level with you, but this is a quick guide.',
  columns: ['MICU', 'ALS', 'BLS'],
  rows: [
    { label: 'Crew', values: ['Critical care certified crew', 'State certified paramedic', 'Two state licensed medics'] },
    { label: 'Care provided', values: ['Ventilator support, 12 lead EKG, IV therapy, CPAP, ETCO2 and SPO2 monitoring', 'Intubation, EKG monitoring and IV therapy', 'Airway management, CPR, defibrillation, bleeding control'] },
    { label: 'Typical use', values: ['Critically ill patients moving between facilities', 'Patients needing advanced monitoring en route', 'Stable patients, non-invasive transfers'] },
  ],
}

// About page
export const missionVision = {
  eyebrow: 'Mission & values',
  title: 'What drives every call we take.',
  mission: {
    icon: 'target',
    title: 'Our mission',
    text: 'To provide quality lifesaving transport care to patients, delivered by highly trained staff using the latest technology.',
  },
  vision: {
    icon: 'eye',
    title: 'Our vision',
    text: 'To be the trusted provider of quality medical care ambulance transport services across South East Texas.',
  },
  values: [
    { icon: 'heart', title: 'Patient first', text: 'From the phone call to the ER, the patient’s care and comfort come before everything else.' },
    { icon: 'award', title: 'Clinical excellence', text: 'Certified medics, current ACLS guidelines and well-maintained equipment on every unit.' },
    { icon: 'clock', title: 'Readiness', text: 'Crews and units prepared so we can dispatch to any call within minutes.' },
    { icon: 'shield', title: 'Integrity', text: 'We meet State and City emergency response standards and document every handoff.' },
  ],
}

export const fleet = {
  eyebrow: 'Our fleet',
  title: 'Well-maintained ambulances, fully equipped.',
  text: 'Our ambulances carry 12 lead EKG monitor/defibrillators, transport ventilators, CPAP, ETCO2 and SPO2 monitoring equipment, and emergency medications that follow current ACLS guidelines.',
  points: ['Configured as MICU with the latest technology', 'Staffed by certified, highly trained medics', 'Maintained to State and City standards'],
  image: 'interior2',
}

export const location = {
  eyebrow: 'Find us',
  title: 'Based in Sugar Land, serving the region.',
  text: 'Our base is at 104 Industrial Blvd Suite B, Sugarland, Texas 77478. Crews cover Fort Bend and Harris County and can transfer patients between facilities.',
}

// Work page
export const pillars = {
  eyebrow: 'How we work',
  title: 'Three things every transport gets right.',
  items: [
    { icon: 'clock', title: 'Rapid response', text: 'Prepared crews and a well-maintained fleet let us dispatch to any call within minutes.' },
    { icon: 'activity', title: 'Continuous care', text: 'Patient condition is monitored regularly and required actions are taken throughout the trip.' },
    { icon: 'file', title: 'Safe handoff', text: 'The patient is handed to the receiving team with a complete, documented report.' },
  ],
}

export const eventsBlock = {
  eyebrow: 'Special events',
  title: 'Standby coverage for events of any size.',
  text: 'Texas Critical Care provides ambulance service as standby coverage for any private event. A trained crew and a fully equipped unit on site give organizers and guests peace of mind.',
  points: ['Sports events and tournaments', 'Concerts, festivals and gatherings', 'Corporate and private functions'],
  image: 'stadium',
}

// Careers page (drafted)
export const careersExtra = {
  intro: {
    eyebrow: 'Life at Texas Critical Care',
    title: 'A team that makes a difference in others’ lives.',
    text: 'We are a Texas DSHS licensed MICU provider that has served Fort Bend and Harris County since 2008. Our people work with modern equipment, current protocols and colleagues who care about the patient in front of them.',
    image: 'team',
  },
  qualities: {
    eyebrow: 'What we look for',
    title: 'Skill, composure and heart.',
    items: [
      { icon: 'activity', title: 'Composure', text: 'Calm, clear decisions when a patient’s condition changes.' },
      { icon: 'heart', title: 'Compassion', text: 'Comfort and dignity for every patient and their family.' },
      { icon: 'users', title: 'Teamwork', text: 'Working closely with your partner, dispatch and receiving staff.' },
      { icon: 'clipboard', title: 'Reliability', text: 'Showing up prepared, on time and with accurate documentation.' },
    ],
  },
  requirements: {
    Paramedic: ['Current state paramedic certification', 'Advanced life support and critical care skills', 'Ability to work in a team of two'],
    EMT: ['Current state EMT certification', 'Basic life support skills', 'Safe patient handling and driving'],
    EMR: ['Current emergency medical responder certification', 'Willingness to learn and grow', 'Support crews and patient care'],
  },
  process: {
    eyebrow: 'Hiring process',
    title: 'From application to your first shift.',
    steps: [
      { icon: 'file', title: 'Apply', text: 'Send your details and resume through the form below or by email.' },
      { icon: 'phone', title: 'Conversation', text: 'We talk through your experience, certifications and what you are looking for.' },
      { icon: 'clipboard', title: 'Credential check', text: 'We verify your state certification and required documents.' },
      { icon: 'truck', title: 'Onboarding', text: 'Meet the crew, learn our units and protocols, and get on the road.' },
    ],
  },
  faq: [
    { q: 'Which roles are you hiring for?', a: 'We are seeking Paramedics, EMTs and EMRs. Send your details even if a role is not listed and we will keep them on file.' },
    { q: 'Do I need to be certified?', a: 'Yes, you will need the valid state certification for the role you are applying for. Our team will verify it during the hiring process.' },
    { q: 'How do I apply?', a: 'Use the application form on this page or email your resume to info@txcriticalcare.com.' },
  ],
}

// Contact page (drafted)
export const contactExtra = {
  steps: {
    eyebrow: 'How dispatch works',
    title: 'Three steps to get a crew moving.',
    steps: [
      { icon: 'phone', title: 'Call or send a request', text: 'Give us the pickup, destination and the patient’s condition.' },
      { icon: 'clipboard', title: 'We confirm the level of care', text: 'Our team recommends MICU, ALS, BLS or wheelchair transport and assigns a crew.' },
      { icon: 'truck', title: 'Crew on the way', text: 'Your unit is dispatched and the receiving facility is kept informed.' },
    ],
  },
  prepare: {
    eyebrow: 'Before you call',
    title: 'Have this information ready.',
    text: 'It helps our dispatch team confirm the right unit quickly.',
    points: [
      'Patient’s name and date of birth',
      'Pickup location and room or unit number',
      'Destination facility and accepting physician',
      'Diagnosis and current condition',
      'Level of care required, if known',
      'A callback number',
    ],
    image: 'ambulanceCity',
  },
}

// Per-service extras keyed by slug (drafted)
export const serviceExtras = {
  micu: {
    glance: [
      { icon: 'users', label: 'Crew', value: 'Critical care certified' },
      { icon: 'activity', label: 'Monitoring', value: '12 lead EKG, ETCO2, SPO2' },
      { icon: 'shield', label: 'License', value: 'Texas DSHS MICU' },
    ],
    faqs: [
      { q: 'What makes an MICU different from a standard ambulance?', a: 'An MICU is the highest level of ambulance service. It carries critical care equipment such as transport ventilators and 12 lead EKG monitor/defibrillators, and is staffed by a critical care certified crew.' },
      { q: 'Is Texas Critical Care licensed for MICU?', a: 'Yes. We are licensed by the Texas Department of State Health Services as a Mobile Intensive Care Unit provider.' },
    ],
  },
  als: {
    glance: [
      { icon: 'users', label: 'Crew', value: 'State certified paramedic' },
      { icon: 'activity', label: 'Care', value: 'Intubation, EKG, IV therapy' },
      { icon: 'stethoscope', label: 'Best for', value: 'Advanced monitoring' },
    ],
    faqs: [
      { q: 'When is ALS transport needed?', a: 'ALS is used when a patient needs medical monitoring and care by a paramedic, which may include intubation, EKG monitoring and IV therapy.' },
      { q: 'Who provides care during an ALS transport?', a: 'A Texas Department of State Health Services certified paramedic provides medical monitoring and care throughout the trip.' },
    ],
  },
  bls: {
    glance: [
      { icon: 'users', label: 'Crew', value: 'Two licensed medics' },
      { icon: 'heart', label: 'Care', value: 'CPR, airway, defibrillation' },
      { icon: 'truck', label: 'Best for', value: 'Non-invasive transfers' },
    ],
    faqs: [
      { q: 'What does BLS transport include?', a: 'BLS units are fully equipped and staffed by two state licensed medics who provide emergency medical care, basic airway management, orthopedic care and non-invasive inter-facility transport.' },
      { q: 'Is the patient monitored during the trip?', a: 'Yes. Patient condition is monitored regularly and required actions are taken, including breathing and circulation support, CPR, defibrillation and control of external bleeding.' },
    ],
  },
  'wheelchair-transport': {
    glance: [
      { icon: 'accessibility', label: 'Service', value: 'Non-emergency (WTS)' },
      { icon: 'calendar', label: 'Trips', value: 'Treatments & appointments' },
      { icon: 'home', label: 'Access', value: 'To and from facilities' },
    ],
    faqs: [
      { q: 'What trips can you help with?', a: 'We assist wheelchair-bound clients with medical treatments such as radiology and dialysis, hospital discharges, doctor appointments, post-surgery trips and travel to and from rehabilitation centres and healthcare facilities.' },
      { q: 'How do I book a wheelchair transport?', a: 'Call (832) 451-6994 or send a request through our contact page with the pickup, destination and appointment time.' },
    ],
  },
  'special-events': {
    glance: [
      { icon: 'calendar', label: 'Service', value: 'Standby coverage' },
      { icon: 'users', label: 'Crew', value: 'Licensed medics on site' },
      { icon: 'phone', label: 'Booking', value: 'Phone or email' },
    ],
    faqs: [
      { q: 'What events can you cover?', a: 'We provide ambulance service as standby coverage for any private event.' },
      { q: 'How do I reserve coverage?', a: 'For enquiries and reservations, contact us at (832) 451-6994 or info@txcriticalcare.com with the event date, location and expected attendance.' },
    ],
  },
}

// Full FAQ page (drafted, non-committal on policy questions)
export const faqGroups = [
  {
    id: 'requesting',
    title: 'Requesting transport',
    items: [
      { q: 'Who can request a transport?', a: 'Hospitals, facilities, physicians, families and event organizers can contact our dispatch team to request transport or standby coverage.' },
      { q: 'What information do you need?', a: 'The patient’s pickup and destination, their condition and the level of care required (MICU, ALS, BLS or wheelchair), plus a contact number.' },
      { q: 'How quickly can a crew be dispatched?', a: 'Our staff and fleet are prepared so that we can dispatch to any call within minutes of a confirmed request.' },
      { q: 'Which areas do you serve?', a: 'We serve Fort Bend and Harris County, Texas. Call dispatch to discuss destinations beyond our usual area.' },
    ],
  },
  {
    id: 'care-levels',
    title: 'Levels of care',
    items: [
      { q: 'What is the difference between MICU, ALS and BLS?', a: 'MICU is critical care transport with equipment such as ventilators. ALS adds a certified paramedic for intubation, EKG monitoring and IV therapy. BLS covers non-invasive transfers with two licensed medics.' },
      { q: 'How do I know which level I need?', a: 'The sending physician or facility usually determines this. Our dispatch team will review the patient’s condition with you and recommend the right unit.' },
      { q: 'Can a family member ride along?', a: 'Please ask our dispatch team when you book. It depends on the patient’s condition and the unit assigned.' },
    ],
  },
  {
    id: 'wheelchair-events',
    title: 'Wheelchair & events',
    items: [
      { q: 'Do you provide wheelchair transport?', a: 'Yes. We assist wheelchair-bound clients with dialysis, radiology, hospital discharges, appointments and rehabilitation trips.' },
      { q: 'Can I book standby ambulance coverage for an event?', a: 'Yes. Call or email us with the event details and we will arrange standby coverage.' },
    ],
  },
  {
    id: 'billing',
    title: 'Billing & insurance',
    items: [
      { q: 'Do you accept insurance?', a: 'Please call (832) 451-6994 and our team will explain billing and insurance options for your situation.' },
      { q: 'Can I get a cost estimate for a scheduled transport?', a: 'For scheduled transports such as wheelchair trips and event coverage, contact us with the details and we will discuss pricing with you.' },
    ],
  },
  {
    id: 'careers',
    title: 'Careers',
    items: careersExtra.faq,
  },
]
