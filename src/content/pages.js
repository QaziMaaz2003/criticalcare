// Per-page banner copy and page-specific sections.
// WordPress: each key is a Page (title, excerpt, featured image) plus ACF fields for the sections.

export const pageHeroes = {
  about: {
    eyebrow: 'About Us',
    title: 'Quality lifesaving transport since 2008.',
    text: 'A licensed Mobile Intensive Care Unit provider serving Fort Bend and Harris County.',
    image: 'clinician',
  },
  services: {
    eyebrow: 'Our Services',
    title: 'The right level of care for every transfer.',
    text: 'MICU, ALS and BLS ambulance transport, wheelchair transport and special event standby coverage.',
    image: 'crew',
  },
  work: {
    eyebrow: 'Our Work',
    title: 'Care in motion.',
    text: 'A look at our crews, fleet and the patients we serve across the Greater Houston area.',
    image: 'fleet',
  },
  news: {
    eyebrow: 'Latest News',
    title: 'News from our team.',
    text: 'Updates, announcements and stories from Texas Critical Care.',
    image: 'houstonNight',
  },
  careers: {
    eyebrow: 'Careers',
    title: 'Bring skill and composure to every mile.',
    text: 'Join a team of paramedics, EMTs and EMRs that makes a difference in others’ lives.',
    image: 'medic',
  },
  contact: {
    eyebrow: 'Contact Us',
    title: 'Request transport or ask a question.',
    text: 'Tell us what you need and our team will call you back. For urgent transfers, call dispatch directly.',
    image: 'houston',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Common questions.',
    text: 'Quick answers about requesting transport and the levels of care we provide.',
    image: 'care',
  },
}

// About page
export const story = {
  eyebrow: 'Our story',
  title: 'Built around the patient, from the first call to the ER.',
  image: 'about',
}

export const crew = {
  eyebrow: 'Our crew',
  title: 'Certified medics who put the patient first.',
  text:
    'Our pre-hospital emergency specialists are dedicated to comforting the patient at every level, whether acute medical or trauma. Our staff consists of:',
  roles: ['Critical care certified EMTs', 'Intermediate EMTs', 'Paramedics'],
  image: 'medic',
}

export const standards = {
  eyebrow: 'Standards & licensing',
  title: 'The highest provider license in the state.',
  text:
    'Texas Critical Care is licensed by the Texas Department of State Health Services as a "Mobile Intensive Care Unit". It is the highest level provider license that can be obtained, and a rarity among hundreds of ambulance providers in South East Texas. We meet all standards for emergency response protocols set by the State and City authorities.',
  points: ['Texas DSHS licensed MICU provider', 'State and City emergency response protocols', 'ACLS-guideline emergency medications', 'Well maintained, fully equipped fleet'],
  image: 'micu',
}

// Careers page (copy other than the intro/roles is drafted)
export const careersPage = {
  perks: {
    eyebrow: 'Why join us',
    title: 'Work that makes a difference.',
    items: [
      { title: 'Meaningful work', text: 'Our employees are part of a team that makes a difference in others’ lives.' },
      { title: 'A growing team', text: 'We are continuously seeking talented individuals to join our company and support the community we are part of.' },
      { title: 'Modern equipment', text: 'Work with well-maintained ambulances carrying current monitoring, ventilation and life-support equipment.' },
    ],
  },
  positions: {
    eyebrow: 'Open roles',
    title: 'We are hiring.',
    items: [
      { title: 'Paramedic', text: 'Provide advanced life support and critical care monitoring on MICU and ALS transports.' },
      { title: 'EMT', text: 'Deliver basic life support and safe patient transport on BLS and wheelchair calls.' },
      { title: 'EMR', text: 'Support crews and patient care as an emergency medical responder.' },
    ],
  },
  form: {
    eyebrow: 'Apply now',
    title: 'Tell us about yourself.',
    text: 'Send your details and we will be in touch. You can also email your resume to the address below.',
  },
}

// Contact page
export const contactPage = {
  dispatch: {
    title: 'Need a transport right now?',
    text: 'Call our dispatch team directly. For non-urgent enquiries, event bookings or careers, use the form.',
  },
}

// Shared call-to-action band
export const cta = {
  title: 'Need a transport? Talk to dispatch.',
  text: 'Our team will confirm the right level of care and get a qualified crew moving.',
}

export const notFound = {
  title: 'Page not found',
  text: 'The page you are looking for does not exist or has moved.',
}
