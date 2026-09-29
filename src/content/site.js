// Global site settings.
// WordPress: becomes Customizer / ACF Options page fields (or theme_mod values).
export const site = {
  name: 'Texas Critical Care',
  legalName: 'Texas Critical Care Ambulance',
  tagline: 'Elite medical care ambulance transport services',
  founded: 2008,
  phone: '(832) 451-6994',
  phoneHref: 'tel:+18324516994',
  fax: '(832) 201-7696',
  email: 'info@txcriticalcare.com',
  address: {
    street: '104 Industrial Blvd Suite B',
    city: 'Sugarland',
    state: 'Texas',
    zip: '77478',
  },
  mapUrl:
    'https://www.google.com/maps/place/1305+Farm+to+Market+359,+Richmond,+TX+77406,+USA/@29.6146675,-95.7452094,19z',
  serviceArea: ['Fort Bend County', 'Harris County'],
  copyright: 'Texascriticalcare.com',
}

// Primary navigation. `href` values are in-page anchors (front-page.php sections).
// WordPress: register as a menu location and build the menu in Appearance > Menus.
export const nav = [
  { label: 'Home', href: '#top' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Our Work', href: '#work' },
  { label: 'Contact Us', href: '#contact' },
  { label: 'Careers', href: '#careers' },
]
