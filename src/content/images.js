// All imagery lives here so it can be swapped for Media Library uploads in WordPress.
// Source: Unsplash (https://unsplash.com/license). Replace with self-hosted media before launch.
const u = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`

export const images = {
  hero: { src: u('1579037005241-a79202c7e9fd', 1600), alt: 'Ambulance driving down a city street' },
  about: { src: u('1516841273335-e39b37888115', 1000), alt: 'Medical team walking down a bright hospital corridor' },
  micu: { src: u('1696243144290-792f1f48339e', 1200), alt: 'Interior of an ambulance with stretcher, monitors and medical equipment' },
  crew: { src: u('1634025130850-1d24389e25c7', 900), alt: 'Two medics loading a stretcher into the back of an ambulance' },
  response: { src: u('1649260257572-91bf6f94cff6', 1000), alt: 'Paramedics giving emergency care to a patient' },
  wheelchair: { src: u('1732194438396-394d2b7c2436', 1000), alt: 'Smiling man seated in a wheelchair at home' },
  fleet: { src: u('1554734867-bf3c00a49371', 1000), alt: 'Ambulance speeding past with lights on' },
  events: { src: u('1629217855633-79a6925d6c47', 1200), alt: 'Packed stadium at night during a live event' },
  houston: { src: u('1585501365481-dce341e1de0c', 1600), alt: 'Houston skyline under a blue sky' },
  houstonNight: { src: u('1692154600992-463fa9b27abd', 1600), alt: 'Houston skyline lit up at night' },
  medic: { src: u('1622253692010-333f2da6031d', 900), alt: 'Smiling medical professional in blue scrubs with a stethoscope' },
  clinician: { src: u('1532938911079-1b06ac7ceec7', 1000), alt: 'Clinician in a white coat holding a red stethoscope' },
  care: { src: u('1580869318757-a6c605b061ed', 900), alt: 'Caregiver holding a patient’s hand in a supportive gesture' },
  caregiver: { src: u('1762955911431-4c44c7c3f408', 1000), alt: 'Caregiver helping two older adults at a table' },
}
