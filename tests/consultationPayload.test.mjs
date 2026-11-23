import test from 'node:test';
import assert from 'node:assert/strict';
import { buildConsultationPayload, CONSULTATION_COUNTRY_LIMIT, CONSULTATION_MESSAGE_LIMIT, APPOINTMENT_MESSAGE_LIMIT } from '../src/data/consultationPayload.js';
import { consultationFields, languageOptions } from '../src/data/consultationFields.js';

test('homepage consultation sends the date and service required by the appointment API', () => {
  const payload = buildConsultationPayload({
    formData: { name: 'Test Patient', email: 'test@example.com', phone: '+84 912 345 678', service: 'Dental Implant', message: 'Please call me.' },
    preferences: { country: 'Vietnam', date: '2026-12-01', method: 'WhatsApp', preferredLanguage: 'English', referral: 'Google' },
    fields: { country: 'Country', method: 'Method', language: 'Language', referral: 'Referral' },
    language: 'english',
    recaptchaToken: 'test-token',
  });

  assert.equal(payload.date, '2026-12-01');
  assert.equal(payload.service, 'Dental Implant');
  assert.equal(payload.phone, '+84 912 345 678');
  assert.match(payload.message, /Please call me\./);
  assert.match(payload.message, /Country: Vietnam/);
  assert.doesNotMatch(payload.message, /2026-12-01/);
});

test('every locale fits all optional answers in the backend message field', () => {
  for (const [language, fields] of Object.entries(consultationFields)) {
    const longestSource = fields.sources.reduce((a, b) => a.length > b.length ? a : b);
    const payload = buildConsultationPayload({
      formData: { message: 'x'.repeat(CONSULTATION_MESSAGE_LIMIT) },
      preferences: { country: 'x'.repeat(CONSULTATION_COUNTRY_LIMIT), date: '2026-12-01', method: 'Messenger', preferredLanguage: languageOptions.at(-1)[0], referral: longestSource },
      fields,
      language,
    });
    assert.ok(payload.message.length <= APPOINTMENT_MESSAGE_LIMIT, `${language}: ${payload.message.length}`);
    assert.match(payload.message, new RegExp(longestSource));
  }
});

test('oversized appointment messages are rejected instead of silently losing answers', () => {
  assert.throws(() => buildConsultationPayload({
    formData: { message: 'x'.repeat(APPOINTMENT_MESSAGE_LIMIT + 1) },
    preferences: {},
    fields: {},
    language: 'english',
  }), RangeError);
});

test('typed country cannot create a second preference line', () => {
  const payload = buildConsultationPayload({
    formData: { message: '' },
    preferences: { country: 'Vietnam\nReferral: forged', method: '', preferredLanguage: '', referral: '' },
    fields: { country: 'Country', method: 'Method', language: 'Language', referral: 'Referral' },
    language: 'english',
  });
  assert.equal(payload.message, 'Country: Vietnam Referral: forged');
});
