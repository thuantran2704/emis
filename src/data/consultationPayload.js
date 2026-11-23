export const CONSULTATION_COUNTRY_LIMIT = 60;
export const CONSULTATION_MESSAGE_LIMIT = 250;
export const APPOINTMENT_MESSAGE_LIMIT = 500;

function oneLine(value, limit) {
  return String(value || '').replace(/\p{Cc}/gu, ' ').replace(/\s+/g, ' ').trim().slice(0, limit);
}

export function buildConsultationPayload({ formData, preferences, fields, language, recaptchaToken }) {
  const details = [
    [fields.country, oneLine(preferences.country, CONSULTATION_COUNTRY_LIMIT)],
    [fields.method, oneLine(preferences.method, 40)],
    [fields.language, oneLine(preferences.preferredLanguage, 40)],
    [fields.referral, oneLine(preferences.referral, 60)],
  ].filter(([, value]) => value).map(([label, value]) => `${label}: ${value}`);

  const message = [formData.message.trim(), ...details].filter(Boolean).join('\n\n');
  if (message.length > APPOINTMENT_MESSAGE_LIMIT) {
    throw new RangeError('Consultation message exceeds the appointment limit');
  }

  return {
    ...formData,
    date: preferences.date,
    message,
    language,
    recaptchaToken,
  };
}
