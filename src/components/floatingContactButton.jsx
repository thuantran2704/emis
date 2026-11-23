import { contactItems } from '../data/contactChannels';
import { useSelector } from 'react-redux';

const contactLabels = {
  english: { heading: 'Quick contact', Phone: 'Phone', Email: 'Email' },
  vietnamese: { heading: 'Liên hệ nhanh', Phone: 'Gọi', Email: 'Email' },
  french: { heading: 'Contact rapide', Phone: 'Appel', Email: 'E-mail' },
  korean: { heading: '빠른 연락', Phone: '전화', Email: '이메일' },
  simplified: { heading: '快速联系', Phone: '电话', Email: '电邮' },
  traditional: { heading: '快速聯絡', Phone: '電話', Email: '電郵' },
};

const quickContacts = contactItems.filter(({ label }) =>
  ['WhatsApp', 'Phone', 'Email', 'Zalo', 'Facebook'].includes(label)
);

export default function FloatingContactButton() {
  const language = useSelector((state) => state.language.language);
  const labels = contactLabels[language] || contactLabels.english;

  return (
    <nav
      aria-label={labels.heading}
      className="fixed inset-x-2 z-40 sm:inset-x-auto sm:left-6"
      style={{ bottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
    >
      <ul className="mx-auto flex max-w-[23rem] items-end justify-center gap-1.5 sm:mx-0 sm:max-w-none sm:gap-2">
        {quickContacts.map((item) => {
          const { label, href } = item;
          const displayLabel = labels[label] || label;
          const isExternal = href.startsWith('http');
          return (
            <li key={label} className="min-w-0 flex-1 sm:flex-none">
              <a
                href={href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                aria-label={displayLabel}
                title={displayLabel}
                className="group flex min-h-[4.5rem] w-full flex-col items-center justify-center rounded-xl border border-[#c8a54f] bg-[#162d38] px-1 py-1.5 text-[#f2d887] shadow-[0_8px_24px_rgba(14,34,41,0.25)] transition-colors hover:bg-[#244452] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9a7525] sm:h-12 sm:min-h-0 sm:w-12 sm:rounded-full sm:p-0 lg:w-auto lg:flex-row lg:gap-2 lg:px-3"
              >
                <item.icon aria-hidden="true" className="h-5 w-5 shrink-0 sm:h-[1.35rem] sm:w-[1.35rem]" />
                <span className="mt-1 max-w-full truncate text-[10px] font-medium leading-3 text-white sm:sr-only lg:not-sr-only lg:mt-0 lg:text-xs">{displayLabel}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
