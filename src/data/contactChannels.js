import googleMaplogo from '../pics/googlemap-logo.png';
import mailIcon from '../pics/mail.jpg';
import phoneIcon from '../pics/phone.jpg';
import facebook from '../pics/facebook.jpg';
import zaloIcon from '../pics/zalo.jpg';
import youtubeLogo from '../pics/youtube-logo.png';
import whatsapp from '../pics/whatsapp-logo.png';

export const contactItems = [
  {
    icon: whatsapp,
    alt: 'WhatsApp',
    label: 'WhatsApp',
    href: 'https://wa.me/84909967649',
  },
  {
    icon: phoneIcon,
    alt: 'Phone',
    label: 'Phone',
    href: 'tel:+84919100021',
  },
  {
    icon: mailIcon,
    alt: 'Email',
    label: 'Email',
    href: 'mailto:Emisdentalclinic@gmail.com',
  },
  {
    icon: zaloIcon,
    alt: 'Zalo',
    label: 'Zalo',
    href: 'https://zalo.me/2143697215679541994',
  },
  {
    icon: facebook,
    alt: 'Facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/emisinternationaldental/',
  },
  {
    icon: youtubeLogo,
    alt: 'YouTube',
    label: 'YouTube',
    href: 'https://www.youtube.com/@NhaKhoaEmis',
  },
  {
    icon: googleMaplogo,
    alt: 'Google Reviews',
    label: 'Google Reviews',
    href: 'https://maps.app.goo.gl/8T1cPtEKUBe6wLFz9',
  },
];

export const primaryContactItems = contactItems.slice(0, 4);
export const socialContactItems = contactItems.slice(4);
