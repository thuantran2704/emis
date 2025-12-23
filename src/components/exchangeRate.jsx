export async function getFxRate() {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/exchange-rate`);
    if (!response.ok) {
      console.warn('FX API responded with status', response.status);
      return 25000; // safe fallback
    }

    const data = await response.json();

    // If response contains a rate, return it; otherwise fallback
    if (data && typeof data.rate === 'number') {
      return data.rate;
    }

    console.warn('FX API returned invalid data', data);
    return 25000; // safe fallback

  } catch (err) {
    console.error('Error fetching FX rate:', err);
    return 25000; // safe fallback
  }
}
