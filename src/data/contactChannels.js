import {
  FaEnvelope,
  FaFacebookF,
  FaMapLocationDot,
  FaPhone,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa6';
import { SiZalo } from 'react-icons/si';

export const contactItems = [
  {
    icon: FaWhatsapp,
    alt: 'WhatsApp',
    label: 'WhatsApp',
    href: 'https://wa.me/84909967649',
  },
  {
    icon: FaPhone,
    alt: 'Phone',
    label: 'Phone',
    href: 'tel:+84919100021',
  },
  {
    icon: FaEnvelope,
    alt: 'Email',
    label: 'Email',
    href: 'mailto:Emisdentalclinic@gmail.com',
  },
  {
    icon: SiZalo,
    alt: 'Zalo',
    label: 'Zalo',
    href: 'https://zalo.me/2143697215679541994',
  },
  {
    icon: FaFacebookF,
    alt: 'Facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/emisinternationaldental/',
  },
  {
    icon: FaYoutube,
    alt: 'YouTube',
    label: 'YouTube',
    href: 'https://www.youtube.com/@NhaKhoaEmis',
  },
  {
    icon: FaMapLocationDot,
    alt: 'Google Reviews',
    label: 'Google Reviews',
    href: 'https://maps.app.goo.gl/8T1cPtEKUBe6wLFz9',
  },
];

export const primaryContactItems = contactItems.slice(0, 4);
export const socialContactItems = contactItems.slice(4);
