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
import ImplantInfo from './pages/implantInfo.jsx';
import SonPage from './pages/bsPage.jsx';
import CrownLanding from './pages/bocRang.jsx';
import DentalVisitorProgram from './pages/flightassist.jsx';
import WhiteningAd from './pages/whitening.jsx';
import ImplantAd from './pages/implant.jsx';
import CrownAd from './pages/crown.jsx';
import GenAd from './pages/genAd.jsx';
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
          <Route path="/" element={<Home  />} />
          <Route path="/contact" element={<Contact  />} />
          <Route path="/about" element={<About  />} />
          <Route path="/services" element={<Services  />} />
          <Route path="/equipment" element={<Equipment  />} />
          <Route path="/veneer" element={<VeneerLanding />} />
          <Route path="/implant" element={<ImplantInfo />}/>
          <Route path="/crown" element={<CrownLanding/>}/>
          <Route path="dr-son" element={<SonPage />}/>
          <Route path="/visitor-program" element={<DentalVisitorProgram />} />
          <Route path="/whiteningAd" element={<WhiteningAd/>}/>
          <Route path="/implantAd" element={<ImplantAd/>}/>
          <Route path="/crownAd" element={<CrownAd/>}/>
          <Route path="genAd" element={<GenAd/>}/>

          
          
          
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