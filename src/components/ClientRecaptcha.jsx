import { useEffect, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function ClientRecaptcha({ sitekey, onChange }) {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  return ready
    ? <ReCAPTCHA sitekey={sitekey} onChange={onChange} />
    : <div className="h-[78px] w-[304px]" aria-hidden="true" />;
}
