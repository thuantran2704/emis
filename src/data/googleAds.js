const appointmentConversion = 'AW-18587883920/2YA0CNa218AdEJCzsp9F';

export function trackAppointmentConversion() {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', { send_to: appointmentConversion });
  }
}
