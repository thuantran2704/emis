export function buildConsultationPayload({ formData, preferences, fields, language, recaptchaToken }) {
  const details = [
    [fields.country, preferences.country],
    [fields.method, preferences.method],
    [fields.language, preferences.preferredLanguage],
    [fields.referral, preferences.referral],
  ].filter(([, value]) => value).map(([label, value]) => `${label}: ${value}`);

  return {
    ...formData,
    date: preferences.date,
    message: [formData.message.trim(), ...details].filter(Boolean).join('\n\n'),
    language,
    recaptchaToken,
  };
}
