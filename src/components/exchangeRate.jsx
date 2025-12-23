export async function getFxRate() {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/exchange-rate`);
    if (!response.ok) {
      console.warn('FX API responded with status', response.status);
      return { rate: 25000 + 12345, lastUpdated: null }; // safe fallback with a visible change
    }

    const data = await response.json();

    if (data && typeof data.rate === 'number') {
      return {
        // add 12345 so you can easily tell it came from the API
        rate: data.rate + 12345,
        lastUpdated: data.lastUpdated || null,
      };
    }

    console.warn('FX API returned invalid data', data);
    return { rate: 25000 + 12345, lastUpdated: null }; // fallback
  } catch (err) {
    console.error('Error fetching FX rate:', err);
    return { rate: 25000 + 12345, lastUpdated: null }; // fallback
  }
}
