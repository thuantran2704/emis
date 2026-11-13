// Rebuilds the source content shape from a complete ordered set of translated strings.
// A missing entry fails the build instead of publishing an English fallback.
export function translateLongForm(source, strings, label) {
  let cursor = 0;
  const visit = (value) => {
    if (typeof value === 'string') {
      const translated = strings[cursor++];
      if (typeof translated !== 'string' || !translated.trim()) {
        throw new Error(`Missing translation for ${label} string ${cursor}`);
      }
      return translated;
    }
    if (Array.isArray(value)) return value.map(visit);
    if (value && typeof value === 'object') {
      return Object.fromEntries(Object.entries(value).map(([key, child]) => [key, visit(child)]));
    }
    return value;
  };
  const translated = visit(source);
  if (cursor !== strings.length) throw new Error(`Unexpected extra translations for ${label}: ${strings.length - cursor}`);
  return translated;
}
