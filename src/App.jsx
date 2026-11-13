import { BrowserRouter, StaticRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import About from './pages/About';
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet';
import { schemaMarkup } from './components/seoMarkup';
import Footer from './components/Footer.jsx';
import Equipment from './pages/Equipment';
import FloatingContactButton from './components/floatingContactButton.jsx';
import GuidedChat from './components/GuidedChat.jsx';
import VeneerLanding from './pages/landingPage1.jsx';
import CrownLanding from './pages/crown.jsx';
import DentalVisitorProgram from './pages/flightassist.jsx';
import Implant from './pages/implant.jsx';
import Doctors from './pages/doctors.jsx';
import DrTuPage from './pages/drTuPage.jsx';
import DrLongPage from './pages/drLongPage.jsx';
import InternationalPatients from './pages/InternationalPatients.jsx';
import OralSurgery from './pages/OralSurgery.jsx';
import RestorativeDentistry from './pages/RestorativeDentistry.jsx';
import Solutions from './pages/solutions.jsx';
import FixedTeeth from './pages/fixedTeeth.jsx';
import SmileAesthetics from './pages/SmileAesthetics.jsx';
import FullMouth from './pages/fullMouth.jsx';
import Faq from './pages/Faq.jsx';
import Privacy from './pages/Privacy.jsx';
import MediaConsent from './pages/MediaConsent.jsx';
import MedicalDisclaimer from './pages/MedicalDisclaimer.jsx';
import Warranty from './pages/Warranty.jsx';
import PatientJourney from './pages/PatientJourney.jsx';
import PatientCase1 from './pages/PatientCase1.jsx';
import RealCases from './pages/RealCases.jsx';
import RealCaseDetail from './pages/RealCaseDetail.jsx';
import { localeFromPath, locales, availableLocalesForRoute, canonicalForPath, pathForLocale } from './seo/locales.js';

function ExternalRedirect({ to }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return null;
}

function AppShell({ localePrefix = '' }) {
  const location = useLocation();
  const isRedirectRoute = ['/mail', '/drive'].includes(location.pathname);
  const canonicalUrl = canonicalForPath(`${localePrefix}${location.pathname}`);
  const zohoMailUrl = import.meta.env.VITE_ZOHO_MAIL_URL || 'https://mail.zoho.com';
  const zohoDriveUrl = import.meta.env.VITE_ZOHO_DRIVE_URL || 'https://workdrive.zoho.com';
  const language = useSelector((state) => state.language.language);
  const htmlLang = {
    english: 'en', vietnamese: 'vi', french: 'fr', korean: 'ko',
    simplified: 'zh-Hans', traditional: 'zh-Hant',
  }[language] || 'en';
  const availableLocales = availableLocalesForRoute(location.pathname);
  const isIndexable = !isRedirectRoute && availableLocales.includes(language);

  useEffect(() => {
    if (!isRedirectRoute) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [location.pathname, isRedirectRoute]);

    // guide add new promos:
    // add new pics in ./pics/ads/
    // then add a new entry in AdBanner (just the pic)
    // Then add new path in App.jsx
    // then create new website for it

  return (
    <>
      <Helmet htmlAttributes={{ lang: htmlLang }}>
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content={isIndexable ? 'index, follow' : 'noindex, nofollow'} />
        {isIndexable && availableLocales.map((alternate) => (
          <link key={alternate} rel="alternate" hrefLang={locales.find(({ language: name }) => name === alternate).code} href={canonicalForPath(pathForLocale(location.pathname, alternate))} />
        ))}
        {isIndexable && <link rel="alternate" hrefLang="x-default" href={canonicalForPath(location.pathname)} />}
        <script type="application/ld+json">
          {schemaMarkup}
        </script>
      </Helmet>
      <div className="min-h-screen bg-[#fdfcf8]">
        {!isRedirectRoute && <Navbar language={language} />}
        {!isIndexable && !isRedirectRoute ? <NotFound /> : <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/contact" element={<Contact  />} />
          <Route path="/about" element={<About  />} />
          <Route path="/international-patients" element={<InternationalPatients  />} />
          <Route path="/patient-journey" element={<PatientJourney />} />
          <Route path="/patient-story/dental-implants" element={<PatientCase1 />} />
          <Route path="/real-cases" element={<RealCases />} />
          <Route path="/real-cases/:caseId" element={<RealCaseDetail />} />
          <Route path="/smile-aesthetics" element={<SmileAesthetics />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/full-mouth" element={<FullMouth />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/media-consent" element={<MediaConsent />} />
          <Route path="/medical-disclaimer" element={<MedicalDisclaimer />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/fixed-teeth" element={<FixedTeeth />} />
          <Route path="/oral-surgery" element={<OralSurgery />} />
          <Route path="/restorative-dentistry" element={<RestorativeDentistry />} />
          <Route path="/equipment" element={<Equipment  />} />
          <Route path="/veneer" element={<VeneerLanding />} />
          <Route path="/implant" element={<Implant />}/>
          <Route path="/crown" element={<CrownLanding/>}/>
          <Route path="/dr-tu" element={<DrTuPage />} />
          <Route path="/dr-long" element={<DrLongPage />} />
          <Route path="/visitor-program" element={<DentalVisitorProgram />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/mail" element={<ExternalRedirect to={zohoMailUrl} />} />
          <Route path="/drive" element={<ExternalRedirect to={zohoDriveUrl} />} />
          <Route path="*" element={<NotFound />} />

        </Routes>}
        {!isRedirectRoute && <Footer language={language} />}
        {!isRedirectRoute && <FloatingContactButton />}
        {!isRedirectRoute && <GuidedChat />}
      </div>
    </>
  );
}

export default function App({ staticPath }) {
  const currentPath = staticPath || (typeof window === 'undefined' ? '/' : window.location.pathname);
  const { prefix } = localeFromPath(currentPath);
  const Router = staticPath ? StaticRouter : BrowserRouter;
  return (
    <Router basename={prefix || undefined} {...(staticPath ? { location: staticPath } : {})}>
      <AppShell localePrefix={prefix} />
    </Router>
  );
}
