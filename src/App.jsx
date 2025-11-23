import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import LanguageToggle from './components/LanguageToggle';
import About from './pages/About';
import Services from './pages/Services';
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
import NovemberSpecialLandingPage from './pages/quangcao4.jsx';
import SonPage from './pages/bsPage.jsx';
import CrownLanding from './pages/bocRang.jsx';
export default function App() {
  return (
    <Router>
      <Helmet>
        <script type="application/ld+json">
          {schemaMarkup}
        </script>
      </Helmet>
      <div className="min-h-screen bg-[#fdfcf8]">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/testing" element={<VeneerLanding/>} />
          <Route path="/implant" element={<ImplantInfo/>}/>
          <Route path="/crown" element={<CrownLanding/>}/>
          <Route path="/qc1" element={<ImplantLandingPage/>}/>
          <Route path="/qc2" element={<PorcelainTeethLandingPage />}/>
          <Route path="/qc3" element={<TeethWhiteningLandingPage />} />
          <Route path="/qc4" element={<NovemberSpecialLandingPage />} />
          <Route path="/bs" element={<SonPage/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
        <FloatingContactButton />
        <LanguageToggle/>
        
      </div>
    </Router>
  );
}