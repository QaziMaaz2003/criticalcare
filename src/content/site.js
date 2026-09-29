import { services, servicePath } from './services'

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
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=104+Industrial+Blvd+Suite+B+Sugar+Land+TX+77478',
  mapEmbed:
    'https://www.google.com/maps?q=104+Industrial+Blvd+Suite+B,+Sugar+Land,+TX+77478&output=embed',
  serviceArea: ['Fort Bend County', 'Harris County'],
  copyright: 'Texascriticalcare.com',
}

// Primary navigation. `to` values are routes (each is a WordPress page / menu item).
// WordPress: build in Appearance > Menus and register a `primary` location.
export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  {
    label: 'Services',
    to: '/services',
    children: services.map((s) => ({ label: s.title, to: servicePath(s) })),
  },
  { label: 'Our Work', to: '/our-work' },
  { label: 'News', to: '/news' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact Us', to: '/contact-us' },
]
