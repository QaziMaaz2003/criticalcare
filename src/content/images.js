// All imagery lives here so it can be swapped for Media Library uploads in WordPress.
// Source: Unsplash (https://unsplash.com/license). Replace with self-hosted media before launch.
const u = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`

export const images = {
  hero: { src: u('1579037005241-a79202c7e9fd', 1600), alt: 'Texas Critical Care style ambulance driving down a city street' },
  about: { src: u('1516841273335-e39b37888115', 1000), alt: 'Medical team walking down a bright hospital corridor' },
  micu: { src: u('1696243144290-792f1f48339e', 1200), alt: 'Interior of an ambulance with stretcher, monitors and medical equipment' },
  crew: { src: u('1634025130850-1d24389e25c7', 900), alt: 'Two medics loading a stretcher into the back of an ambulance' },
  response: { src: u('1649260257572-91bf6f94cff6', 1000), alt: 'Paramedics giving emergency care to a patient' },
  wheelchair: { src: u('1732194438396-394d2b7c2436', 1000), alt: 'Smiling man seated in a wheelchair at home' },
  fleet: { src: u('1554734867-bf3c00a49371', 1000), alt: 'Ambulance speeding past with lights on' },
}
