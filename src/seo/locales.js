import realCasesContent from '../Translations/realCasesContent.js';

export const locales = [
  { language: 'english', code: 'en', prefix: '' },
  { language: 'vietnamese', code: 'vi', prefix: '/vi' },
  { language: 'french', code: 'fr', prefix: '/fr' },
  { language: 'korean', code: 'ko', prefix: '/ko' },
  { language: 'simplified', code: 'zh-Hans', prefix: '/zh-hans' },
  { language: 'traditional', code: 'zh-Hant', prefix: '/zh-hant' },
];

const contentRoutes = [
  '/', '/contact', '/about', '/international-patients', '/patient-journey',
  '/patient-story/dental-implants', '/real-cases', '/smile-aesthetics',
  '/solutions', '/full-mouth', '/faq', '/privacy', '/media-consent',
  '/medical-disclaimer', '/warranty', '/fixed-teeth', '/oral-surgery',
  '/restorative-dentistry', '/equipment', '/veneer', '/implant', '/crown',
  '/dr-tu', '/dr-long', '/visitor-program', '/doctors',
];

export const publicRoutes = [
  ...contentRoutes,
  ...Object.keys(realCasesContent.english.cases).map((id) => `/real-cases/${id}`),
];

function normalizedPath(pathname) {
  const path = (pathname || '/').split(/[?#]/, 1)[0];
  if (locales.some(({ prefix }) => prefix && path === `${prefix}/`)) return path;
  return path === '/' ? '/' : path.replace(/\/+$/, '') || '/';
}

export function localeFromPath(pathname) {
  const path = normalizedPath(pathname);
  const match = locales.find(({ prefix }) => prefix && (path === prefix || path.startsWith(`${prefix}/`)));
  if (!match) return { language: 'english', routePath: path, prefix: '' };
  return {
    language: match.language,
    routePath: path.slice(match.prefix.length) || '/',
    prefix: match.prefix,
  };
}

export function pathForLocale(pathname, language) {
  const routePath = localeFromPath(pathname).routePath;
  const prefix = locales.find((entry) => entry.language === language)?.prefix ?? '';
  return routePath === '/' ? `${prefix}/` : `${prefix}${routePath}`;
}

export function canonicalForPath(pathname) {
  return `https://emisdental.com${normalizedPath(pathname)}`;
}

export function availableLocalesForRoute(pathname) {
  const routePath = localeFromPath(pathname).routePath;
  if (!publicRoutes.includes(routePath)) return [];
  return locales.map(({ language }) => language);
}

export function languageSwitchHref(pathname, language) {
  const routePath = localeFromPath(pathname).routePath;
  return pathForLocale(
    availableLocalesForRoute(routePath).includes(language) ? routePath : '/',
    language,
  );
}
