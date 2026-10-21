import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../pics/logo.jpg';
import footerContent from '../Translations/footerContent';
import navbarContent from '../Translations/navbarContent';
import { primaryContactItems, socialContactItems } from '../data/contactChannels';

// NOTE: The following footer links have no dedicated route yet and are mapped
// to the closest existing page (update once real pages/routes exist):
//   - "Patient Cases" / "Ca Điều Trị Thực Tế"  -> /solutions
//   - "Dental Resources" / "Kiến Thức Nha Khoa" -> /equipment
//   - "Send Your X-ray" / "Gửi Phim X-quang"    -> /contact
//   - "Restorative Dentistry" / "Điều Trị & Giữ Răng Thật" -> /restorative-dentistry
// Also intentionally omitted (no URL/route available): Instagram, LinkedIn,
// and "Terms of Use".

const mapOpenUrl = 'https://maps.app.goo.gl/8T1cPtEKUBe6wLFz9';
const mapEmbedUrl =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.327228104639!2d106.6896131335823!3d10.786230289363182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fa7462efccb%3A0xb79ba7e69cbb02b3!2sEmis%20Dental!5e0!3m2!1svi!2sus!4v1752074692262!5m2!1svi!2sus';
const whatsappUrl = 'https://wa.me/84909967649';
const facebookUrl = 'https://www.facebook.com/emisinternationaldental/';
const youtubeUrl = 'https://www.youtube.com/@NhaKhoaEmis';
const zaloUrl = 'https://zalo.me/2143697215679541994';

// Language-neutral footer navigation. Labels are resolved from the existing
// translations: `nav` = navbarContent (reused menu titles), `f` = footerContent
// (footer-specific strings + policy labels). Brand names (WhatsApp, Facebook,
// YouTube, Zalo) are proper nouns and stay as literals.
function buildFooterColumns(nav, f) {
  const fn = f.nav;
  return [
    {
      heading: fn.aboutHeading,
      links: [
        { label: nav.about, to: '/about' },
        { label: nav.doctors, to: '/doctors' },
        { label: nav.internationalPatients, to: '/international-patients' },
        { label: fn.visitorProgram, to: '/visitor-program' },
        { label: nav.contact, to: '/contact' },
      ],
    },
    {
      heading: nav.treatments,
      links: [
        { label: nav.implantSolutions, to: '/implant' },
        { label: nav.fixedTeethSolutions, to: '/fixed-teeth' },
        { label: nav.fullMouth, to: '/full-mouth' },
        { label: nav.oralSurgery, to: '/oral-surgery' },
        { label: nav.restorativeDentistry, to: '/restorative-dentistry' },
        { label: nav.smileAesthetics, to: '/smile-aesthetics' },
      ],
    },
    {
      heading: nav.resources,
      links: [
        { label: nav.patientCases, to: '/solutions' },
        { label: fn.dentalResources, to: '/equipment' },
        { label: nav.faq, to: '/faq' },
        { label: fn.sendXray, to: '/contact' },
      ],
    },
    {
      heading: fn.patientInfoHeading,
      links: [
        { label: f.privacy, to: '/privacy' },
        { label: f.disclaimer, to: '/medical-disclaimer' },
        { label: f.warranty, to: '/warranty' },
        { label: f.media, to: '/media-consent' },
      ],
    },
    {
      heading: nav.contact,
      links: [
        { label: fn.phone, href: 'tel:+84919100021' },
        { label: 'WhatsApp', href: whatsappUrl },
        { label: fn.email, href: 'mailto:Emisdentalclinic@gmail.com' },
        { label: fn.googleMaps, href: mapOpenUrl },
      ],
    },
    {
      heading: fn.followHeading,
      links: [
        { label: fn.googleReviews, href: mapOpenUrl },
        { label: 'Facebook', href: facebookUrl },
        { label: 'YouTube', href: youtubeUrl },
        { label: 'Zalo', href: zaloUrl },
      ],
    },
  ];
}

const linkClass =
  'text-sm text-gray-400 hover:text-[#d4af37] transition-colors duration-200';

function FooterLink({ link }) {
  const el = link.to ? (
    <Link to={link.to} className={linkClass}>
      {link.label}
    </Link>
  ) : (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {link.label}
    </a>
  );

  return el;
}

// Reuses the same channel data/style as the /contact page.
function ContactBubbles({ items }) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item) => {
        const isExternal = item.href.startsWith('http');
        return (
          <a
            key={item.label}
            href={item.href}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            aria-label={item.label}
            title={item.label}
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#d4af37]/45 bg-[#181a1f] text-[#d4af37] shadow-[0_8px_20px_rgba(0,0,0,0.2)] transition hover:-translate-y-1 hover:border-[#d4af37] hover:shadow-[0_12px_24px_rgba(212,175,55,0.14)]"
          >
            {typeof item.icon === 'string' ? (
              <img src={item.icon} alt={item.alt} className="h-6 w-6 object-contain" />
            ) : (
              <item.icon aria-hidden="true" className="h-5 w-5 transition-transform group-hover:scale-110" />
            )}
          </a>
        );
      })}
    </div>
  );
}

export default function Footer() {
  const language = useSelector((state) => state.language.language);
  const content = footerContent[language] || footerContent.english;
  const nav = navbarContent[language] || navbarContent.english;
  const columns = buildFooterColumns(nav, content);
  const contactColumn = columns[columns.length - 2];
  const followColumn = columns[columns.length - 1];

  return (
    <footer className="bg-[#111317] text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Logo */}
        <div className="mb-10 hidden lg:block">
          <img
            src={logo}
            alt={content.clinicName}
            className="h-14 w-14 rounded-full object-cover"
          />
        </div>

        {/* Desktop (landscape): Contact info (left) + Map (right) */}
        <div className="mb-12 hidden gap-8 sm:grid sm:grid-cols-2 lg:gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">
                {contactColumn.heading}
              </h3>
              <ContactBubbles items={primaryContactItems} />
            </div>

            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">
                {followColumn.heading}
              </h3>
              <ContactBubbles items={socialContactItems} />
            </div>

            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">
                {content.workingHoursTitle}
              </h3>
              <div className="space-y-1 text-sm text-gray-400">
                {content.workingHours.split('\n').map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              src={mapEmbedUrl}
              className="h-full min-h-64 w-full grayscale-[0.2]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={content.clinicName}
            ></iframe>
          </div>
        </div>

        {/* Navigation: 6 columns (hidden on mobile) */}
        <nav
          className="hidden gap-x-8 gap-y-10 sm:grid sm:grid-cols-3 lg:grid-cols-6"
          aria-label="Footer"
        >
          {columns.map((column) => (
            <div key={column.heading} className="flex flex-col">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">
                {column.heading}
              </h3>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink link={link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Mobile: Contact + Follow Us bubbles (reused from /contact), hours */}
        <div className="space-y-8 sm:hidden">
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">
              {contactColumn.heading}
            </h3>
            <ContactBubbles items={primaryContactItems} />
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">
              {followColumn.heading}
            </h3>
            <ContactBubbles items={socialContactItems} />
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">
              {content.workingHoursTitle}
            </h3>
            <div className="space-y-1 text-sm text-gray-400">
              {content.workingHours.split('\n').map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Map */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 sm:hidden">
          <iframe
            src={mapEmbedUrl}
            className="h-64 w-full grayscale-[0.2]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={content.clinicName}
          ></iframe>
        </div>

        {/* Brand statement */}
        <p
          className="mt-12 hidden text-xl font-medium text-[#d4af37] lg:block"
        >
          {content.nav.brandStatement}
        </p>

        {/* Divider 2: separates brand statement from copyright */}
        <hr className="my-8 border-white/10" />

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} {content.clinicName}. {content.rights}
        </p>
      </div>
    </footer>
  );
}
