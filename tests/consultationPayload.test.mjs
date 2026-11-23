import test from 'node:test';
import assert from 'node:assert/strict';
import { buildConsultationPayload } from '../src/data/consultationPayload.js';

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
