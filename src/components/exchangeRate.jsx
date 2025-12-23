export async function getFxRate() {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/exchange-rate`);
    if (!response.ok) {
      console.warn('FX API responded with status', response.status);
      return { rate: 25000, lastUpdated: null }; // safe fallback
    }

    const data = await response.json();

    if (data && typeof data.rate === 'number') {
      return {
        rate: data.rate,
        lastUpdated: data.lastUpdated || null, // include lastUpdated if present
      };
    }

    console.warn('FX API returned invalid data', data);
    return { rate: 25000, lastUpdated: null }; // fallback
  } catch (err) {
    console.error('Error fetching FX rate:', err);
    return { rate: 25000, lastUpdated: null }; // fallback
  }
}
