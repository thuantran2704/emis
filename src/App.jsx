import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Services from './pages/Services';
import { useSelector, useDispatch } from 'react-redux'
import { setLanguage } from './slices/languageSlice.js'
import { Helmet } from 'react-helmet';
import { schemaMarkup } from './components/seoMarkup';
import Footer from './components/Footer.jsx';
import Equipment from './pages/Equipment';
import FloatingContactButton from './components/floatingContactButton.jsx';
import VeneerLanding from './pages/landingPage1.jsx';
import SonPage from './pages/drSonPage.jsx';
import CrownLanding from './pages/bocRang.jsx';
import DentalVisitorProgram from './pages/flightassist.jsx';
import WhiteningAd from './pages/whitening.jsx';
import Implant from './pages/implant.jsx';
import CrownAd from './pages/crown.jsx';
import GenAd from './pages/genAd.jsx';
import CanalAd from './pages/canal.jsx';
import Doctors from './pages/doctors.jsx';

function ExternalRedirect({ to }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return null;
}

function AppShell() {
  const location = useLocation();
  const isRedirectRoute = ['/mail', '/drive'].includes(location.pathname);
  const zohoMailUrl = import.meta.env.VITE_ZOHO_MAIL_URL || 'https://mail.zoho.com';
  const zohoDriveUrl = import.meta.env.VITE_ZOHO_DRIVE_URL || 'https://workdrive.zoho.com';
  const language = useSelector((state) => state.language.language);
  const dispatch = useDispatch();

  useEffect(() => {
    const browserLanguage = navigator.language || navigator.languages?.[0] || '';
    const normalizedBrowserLanguage = browserLanguage.toLowerCase();

    if (normalizedBrowserLanguage.startsWith('vi')) {
      dispatch(setLanguage('vietnamese'));
    }
  }, [dispatch]);

  const handleLanguageChange = (selectedLanguage) => {
    dispatch(setLanguage(selectedLanguage));
  };
  
    // guide add new promos:
    // add new pics in ./pics/ads/
    // then add a new entry in AdBanner (just the pic)
    // Then add new path in App.jsx
    // then create new website for it

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {schemaMarkup}
        </script>
      </Helmet>
      <div className="min-h-screen bg-[#fdfcf8]">
        {!isRedirectRoute && <Navbar language={language} />}
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/contact" element={<Contact  />} />
          <Route path="/about" element={<About  />} />
          <Route path="/services" element={<Services  />} />
          <Route path="/equipment" element={<Equipment  />} />
          <Route path="/veneer" element={<VeneerLanding />} />
          <Route path="/implant" element={<Implant />}/>
          <Route path="/crown" element={<CrownLanding/>}/>
          <Route path="dr-son" element={<SonPage />}/>
          <Route path="/visitor-program" element={<DentalVisitorProgram />} />
          <Route path="/whiteningAd" element={<WhiteningAd/>}/>
          <Route path="/crownAd" element={<CrownAd/>}/>
          <Route path="genAd" element={<GenAd/>}/>
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/canal" element={<CanalAd />} />
          <Route path="/mail" element={<ExternalRedirect to={zohoMailUrl} />} />
          <Route path="/drive" element={<ExternalRedirect to={zohoDriveUrl} />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
        {!isRedirectRoute && <Footer language={language} />}
        {!isRedirectRoute && <FloatingContactButton />}
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}