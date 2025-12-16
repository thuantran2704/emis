import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import LanguageToggle from './components/LanguageToggle';
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
import PorcelainTeethLandingPage from './pages/quangcao2.jsx';
import ImplantInfo from './pages/implantInfo.jsx';
import ImplantLandingPage from "./pages/quangcao1.jsx";
import TeethWhiteningLandingPage from './pages/quangcao3.jsx';
// import NovemberSpecialLandingPage from './pages/quangcao4.jsx';
import SonPage from './pages/bsPage.jsx';
import CrownLanding from './pages/bocRang.jsx';
export default function App() {
  const language = useSelector((state) => state.language.language);
  const dispatch = useDispatch();

  const handleLanguageChange = (selectedLanguage) => {
    dispatch(setLanguage(selectedLanguage));
  };
  
    // guide add new promos:
    // add new pics in ./pics/ads/
    // then add a new entry in AdBanner (just the pic)
    // Then add new path in App.jsx
    // then create new website for it

  return (
    <Router>
      <Helmet>
        <script type="application/ld+json">
          {schemaMarkup}
        </script>
      </Helmet>
      <div className="min-h-screen bg-[#fdfcf8]">
        <Navbar language={language} />
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/contact" element={<Contact language={language} />} />
          <Route path="/about" element={<About language={language} />} />
          <Route path="/services" element={<Services language={language} />} />
          <Route path="/equipment" element={<Equipment language={language} />} />
          <Route path="/testing" element={<VeneerLanding language={language}/>} />
          <Route path="/implant" element={<ImplantInfo language = {language}/>}/>
          <Route path="/qc1" element={<ImplantLandingPage language= {language}/>}/>
          <Route path="/crown" element={<CrownLanding language={language}/>}/>
          <Route path="/qc2" element={<PorcelainTeethLandingPage language={language}/>}/>
          <Route path="/qc3" element={<TeethWhiteningLandingPage language={language} />} />
          {/* <Route path="/qc4" element={<NovemberSpecialLandingPage language={language} />} /> */}
          <Route path="bs" element={<SonPage language={language}/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer language={language}/>
        <FloatingContactButton />
        <LanguageToggle 
          currentLanguage={language} 
          onLanguageChange={handleLanguageChange}  // Now passes the selected language directly
        />
        
      </div>
    </Router>
  );
}