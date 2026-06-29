import { Link } from 'react-router-dom';
import { ctaPrimaryClass, ctaSecondaryClass } from '../styles/ui';

// Standard "Contact us" call-to-action pair used across marketing pages.
// Render inside an existing flex wrapper. Pass a secondaryLabel to show the
// secondary (outline) button.
export default function ContactCtas({ primaryLabel, secondaryLabel }) {
  return (
    <>
      <Link to="/contact" className={ctaPrimaryClass}>
        {primaryLabel}
      </Link>
      {secondaryLabel && (
        <Link to="/contact" className={ctaSecondaryClass}>
          {secondaryLabel}
        </Link>
      )}
    </>
  );
}
