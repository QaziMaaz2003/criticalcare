// Services. WordPress: register a `service` custom post type
// (title, excerpt, badge, subtitle, content, featured image, highlights + ideal-for as ACF repeaters).
// Each entry becomes a single-service.php page at /services/{slug}.
//
// Facts (equipment, licensing, wheelchair uses) come from txcriticalcare.com.
// `idealFor` lists are drafted copy: review before launch.
export const services = [
  {
    slug: 'micu',
    code: 'MICU',
    badge: 'M',
    title: 'MICU',
    subtitle: 'Mobile Intensive Care Unit',
    image: 'micu',
    excerpt:
      'Transfers of critical care patients between facilities, as per the Texas Department of State Health Services.',
    body: [
      'Texas Critical Care has a proven record of transferring critical care conditioned patients between facilities as per the Texas Department of State Health Services.',
      'Our ambulances are equipped with the latest technology such as 12 lead EKG monitor/defibrillators, transport ventilators, CPAP, ETCO2, SPO2 monitoring, IV therapy equipment and emergency medications that follow current ACLS guidelines.',
    ],
    highlights: ['Critical care certified crew', 'Transport ventilators', '12 lead EKG monitor / defibrillator', 'IV therapy equipment', 'CPAP, ETCO2 and SPO2 monitoring', 'Emergency medications following current ACLS guidelines'],
    idealFor: ['Critically ill patients who need continuous monitoring', 'Ventilator-dependent patients', 'Hospital-to-hospital critical care transfers'],
  },
  {
    slug: 'als',
    code: 'ALS',
    badge: 'A',
    title: 'ALS',
    subtitle: 'Advanced Life Support',
    image: 'response',
    excerpt:
      'Medical monitoring and care by a state certified paramedic, including intubation, EKG monitoring and IV therapy.',
    body: [
      'Texas Critical Care Ambulance has enhanced its capabilities by adding Advanced Life Support services.',
      'This service requires medical monitoring and care by a Texas Department of State Health Services certified paramedic and may include intubation, EKG monitoring and IV therapy.',
    ],
    highlights: ['State certified paramedic', 'Intubation', 'EKG monitoring', 'IV therapy'],
    idealFor: ['Patients who need cardiac monitoring during transport', 'Patients receiving IV medications en route', 'Higher-acuity transfers that do not need a full MICU'],
  },
  {
    slug: 'bls',
    code: 'BLS',
    badge: 'B',
    title: 'BLS',
    subtitle: 'Basic Life Support',
    image: 'crew',
    excerpt:
      'Fully equipped ambulances staffed by two highly trained, state licensed medics for non-invasive inter-facility transports.',
    body: [
      'Our Basic Life Support (BLS) ambulances are fully equipped with the latest lifesaving technology, staffed by two highly trained, state licensed medics skilled in emergency medical care, basic airway management, orthopedic care, non-invasive inter-facility transports and emergency response.',
      'Patient condition is monitored regularly and required actions are taken, including breathing and circulation support, CPR, defibrillation and control of external bleeding.',
    ],
    highlights: ['Two state licensed medics', 'Basic airway management', 'Orthopedic care', 'CPR & defibrillation', 'Control of external bleeding', 'Non-invasive inter-facility transports'],
    idealFor: ['Stable patients who need to travel on a stretcher', 'Hospital discharges to home or a care facility', 'Non-emergency transfers between facilities'],
  },
  {
    slug: 'wheelchair-transport',
    code: 'WTS',
    badge: 'W',
    title: 'Wheelchair Transport',
    subtitle: 'Non-emergency medical transport',
    image: 'wheelchair',
    excerpt:
      'Safe, comfortable transport for wheelchair-bound clients to treatments, appointments and care facilities.',
    body: [
      'Texas Critical Care provides WTS for medical and non-emergency medical services to assist our wheelchair-bound clients with their needs, such as:',
    ],
    highlights: [
      'Medical treatments like radiology & dialysis',
      'Hospital discharges',
      'Doctor appointments',
      'Out-patient post-surgery transportation',
      'To and from rehabilitation centres',
      'To and from healthcare facilities',
    ],
    idealFor: ['Patients who can sit upright but cannot walk or transfer easily', 'Regular treatment trips such as dialysis', 'Families who want a trained crew rather than private transport'],
  },
  {
    slug: 'special-events',
    code: 'STANDBY',
    badge: 'E',
    title: 'Special Events',
    subtitle: 'Standby ambulance coverage',
    image: 'events',
    excerpt: 'Standby ambulance coverage for private events, with a trained crew on site.',
    body: [
      'Texas Critical Care provides ambulance service as standby coverage for any private event.',
      'For enquiries and reservations, please contact us by phone or email with your event details.',
    ],
    highlights: ['Standby ambulance on site', 'Licensed medics', 'Coverage for any private event', 'Reserve by phone or email'],
    idealFor: ['Sports events and tournaments', 'Concerts, festivals and community gatherings', 'Corporate and private functions'],
  },
]

export const servicePath = (s) => `/services/${s.slug}`
export const getService = (slug) => services.find((s) => s.slug === slug)
