// Copy for the remaining homepage sections.
// WordPress: process/why/faq can be ACF repeaters on the front page; news -> `post`; work -> `work` CPT.

export const process = {
  eyebrow: 'How it works',
  title: 'From first call to safe handoff.',
  steps: [
    { icon: 'phone', title: 'Call dispatch', text: 'Contact our team at the number below with the patient’s pickup, destination and level of care.' },
    { icon: 'clipboard', title: 'Clinical review', text: 'We confirm the right level of care (MICU, ALS, BLS or wheelchair) and assign a qualified crew.' },
    { icon: 'truck', title: 'Coordinated transport', text: 'Our medics monitor the patient throughout and keep the receiving facility informed.' },
    { icon: 'file', title: 'Documented handoff', text: 'The patient is handed to the receiving team with a complete, documented report.' },
  ],
}

export const why = {
  eyebrow: 'Why Texas Critical Care',
  title: 'Prepared crews. Purpose-built units.',
  items: [
    { icon: 'shield', title: 'Highest license level', text: 'Licensed by the Texas Department of State Health Services as a Mobile Intensive Care Unit.' },
    { icon: 'users', title: 'Certified medics', text: 'Critical care certified EMTs, intermediates and paramedics on every call.' },
    { icon: 'award', title: 'Current standards', text: 'We meet all emergency response protocols set by State and City authorities and follow current ACLS guidelines.' },
    { icon: 'truck', title: 'Well-maintained fleet', text: 'Ambulances carry monitor/defibrillators, ventilators, CPAP, ETCO2 and SPO2 monitoring.' },
  ],
}

export const coverage = {
  eyebrow: 'Coverage',
  title: 'Serving Fort Bend and Harris County.',
  text: 'Based in Sugar Land, our units respond across the Greater Houston area and transfer patients between facilities.',
  areas: ['Sugar Land', 'Richmond', 'Missouri City', 'Houston', 'Fort Bend County', 'Harris County'],
}

// Placeholder gallery: the live site's "Our Work" items are lorem ipsum.
export const work = {
  eyebrow: 'Our Work',
  title: 'Care in motion.',
  items: [
    { key: 'response', caption: 'Emergency response' },
    { key: 'crew', caption: 'Crew & fleet' },
    { key: 'micu', caption: 'MICU interior' },
    { key: 'wheelchair', caption: 'Wheelchair transport' },
    { key: 'events', caption: 'Special event standby' },
    { key: 'caregiver', caption: 'Compassionate care' },
    { key: 'clinician', caption: 'Clinical excellence' },
    { key: 'fleet', caption: 'Unit M-19 MICU side profile' },
    { key: 'ambulanceNight', caption: 'Unit M-21 Texas Star safety wrap' },
    { key: 'team', caption: 'Our team' },
    { key: 'ambulanceRoad', caption: 'Unit M-21 on the road' },
    { key: 'm19Rear', caption: 'Unit M-19 rear safety chevrons' },
  ],
}

export const news = {
  eyebrow: 'Latest News',
  title: 'News and guides from our team.',
}

export const testimonial = {
  quote: 'A transport partner should feel like an extension of your own clinical team.',
  cite: 'Our standard at Texas Critical Care',
}

export const faq = {
  eyebrow: 'FAQ',
  title: 'Common questions.',
  items: [
    { q: 'Who can request a transport?', a: 'Hospitals, facilities, physicians, families and event organizers can contact our dispatch team to request transport or standby coverage.' },
    { q: 'What information do you need?', a: 'The patient’s pickup and destination, their condition and the level of care required (MICU, ALS, BLS or wheelchair), plus a contact number.' },
    { q: 'What is the difference between MICU, ALS and BLS?', a: 'MICU is critical care transport with equipment such as ventilators. ALS adds a certified paramedic for intubation, EKG monitoring and IV therapy. BLS covers non-invasive transfers with two licensed medics.' },
    { q: 'Do you provide wheelchair transport?', a: 'Yes. We assist wheelchair-bound clients with dialysis, radiology, hospital discharges, appointments and rehabilitation trips.' },
    { q: 'Can I book standby ambulance coverage for an event?', a: 'Yes. Call or email us with the event details and we will arrange standby coverage.' },
  ],
}

export const careers = {
  eyebrow: 'Careers',
  title: 'Bring skill and composure to every mile.',
  text: [
    'Are you seeking an opportunity as a Paramedic, EMT or EMR with a commerce leading ambulance transportation service provider? You’ve come to the right place!',
    'Our employees are part of a team that makes a difference in others’ lives. We are continuously seeking talented individuals to join our company and support the community we are part of.',
  ],
  roles: ['Paramedic', 'EMT', 'EMR'],
}
