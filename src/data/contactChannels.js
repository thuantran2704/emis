import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapLocationDot,
  FaPhone,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa6';
import { SiZalo } from 'react-icons/si';

export const googleReviewsUrl = 'https://maps.app.goo.gl/8T1cPtEKUBe6wLFz9';
export const publicEmail = 'emisdental@emisdental.com';
export const publicEmailHref = `mailto:${publicEmail}`;
export const socialProfiles = {
  facebook: 'https://www.facebook.com/emisinternationaldental/',
  instagram: 'https://www.instagram.com/emis.dental',
  youtube: 'https://www.youtube.com/@NhaKhoaEmis',
  tiktok: 'https://www.tiktok.com/@emisdentalclinic',
};

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
    href: publicEmailHref,
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
    href: socialProfiles.facebook,
  },
  {
    icon: FaInstagram,
    alt: 'Instagram',
    label: 'Instagram',
    href: socialProfiles.instagram,
  },
  {
    icon: FaTiktok,
    alt: 'TikTok',
    label: 'TikTok',
    href: socialProfiles.tiktok,
  },
  {
    icon: FaYoutube,
    alt: 'YouTube',
    label: 'YouTube',
    href: socialProfiles.youtube,
  },
  {
    icon: FaMapLocationDot,
    alt: 'Google Reviews',
    label: 'Google Reviews',
    href: googleReviewsUrl,
  },
];

export const primaryContactItems = contactItems.slice(0, 4);
export const socialContactItems = contactItems.slice(4);
