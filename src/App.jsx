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
import LandingPage1 from './pages/landingPage1.jsx';
import ImplantInfo from './pages/implantInfo.jsx';
export default function App() {
  const language = useSelector((state) => state.language.language);
  const dispatch = useDispatch();

  const handleLanguageChange = (selectedLanguage) => {
    dispatch(setLanguage(selectedLanguage));
  };

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
          <Route path="*" element={<NotFound />} />
          <Route path="/equipment" element={<Equipment language={language} />} />
          <Route path="/testing" element={<LandingPage1 language={language}/>} />
          <Route path="/implant" element={<ImplantInfo language = {language}/>}/>
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