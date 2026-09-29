// Service levels. WordPress: register a `service` custom post type
// (title, excerpt, badge, content, featured image, list items as ACF repeater).
export const services = [
  {
    id: 'micu',
    badge: 'M',
    title: 'MICU',
    subtitle: 'Mobile Intensive Care Unit',
    excerpt:
      'Transfers of critical care patients between facilities, as per the Texas Department of State Health Services.',
    body: [
      'Texas Critical Care has a proven record of transferring critical care conditioned patients between facilities as per the Texas Department of State Health Services.',
      'Our ambulances are equipped with the latest technology such as 12 lead EKG monitor/defibrillators, transport ventilators, CPAP, ETCO2, SPO2 monitoring, IV therapy equipment and emergency medications that follow current ACLS guidelines.',
    ],
    highlights: ['Critical care certified crew', 'Transport ventilators', '12 lead EKG monitor / defibrillator', 'IV therapy equipment'],
  },
  {
    id: 'als',
    badge: 'A',
    title: 'ALS',
    subtitle: 'Advanced Life Support',
    excerpt:
      'Medical monitoring and care by a state certified paramedic, including intubation, EKG monitoring and IV therapy.',
    body: [
      'Texas Critical Care Ambulance has enhanced its capabilities by adding Advanced Life Support services.',
      'This service requires medical monitoring and care by a Texas Department of State Health Services certified paramedic and may include intubation, EKG monitoring and IV therapy.',
    ],
    highlights: ['State certified paramedic', 'Intubation', 'EKG monitoring', 'IV therapy'],
  },
  {
    id: 'bls',
    badge: 'B',
    title: 'BLS',
    subtitle: 'Basic Life Support',
    excerpt:
      'Fully equipped ambulances staffed by two highly trained, state licensed medics for non-invasive inter-facility transports.',
    body: [
      'Our Basic Life Support (BLS) ambulances are fully equipped with the latest lifesaving technology, staffed by two highly trained, state licensed medics skilled in emergency medical care, basic airway management, orthopedic care, non-invasive inter-facility transports and emergency response.',
      'Patient condition is monitored regularly and required actions are taken, including breathing and circulation support, CPR, defibrillation and control of external bleeding.',
    ],
    highlights: ['Two licensed medics', 'Airway management', 'CPR & defibrillation', 'Inter-facility transfers'],
  },
]

// Additional (non-ambulance-level) services.
export const extraServices = [
  {
    id: 'wts',
    title: 'Wheelchair Transport',
    code: 'WTS',
    intro:
      'Texas Critical Care provides WTS for medical and non-emergency medical services to assist our wheelchair-bound clients with their needs, such as:',
    list: [
      'Medical treatments like radiology & dialysis',
      'Hospital discharges',
      'Doctor appointments',
      'Out-patient post-surgery transportation',
      'To and from rehabilitation centres',
      'To and from healthcare facilities',
    ],
  },
  {
    id: 'events',
    title: 'Special Events',
    code: 'STANDBY',
    intro:
      'Texas Critical Care provides ambulance service as standby coverage for any private event. For enquiries and reservations, please contact us.',
    list: [],
  },
]
