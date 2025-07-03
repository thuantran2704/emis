import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import LanguageToggle from './components/LanguageToggle';
import About from './pages/About';
import Services from './pages/Services';

export default function App() {
  const [language, setLanguage] = useState('vietnamese');

  // This now directly sets the selected language
  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    //comment
  };
//why the fuck is this not being updated?

  return (
    <Router>
      <div className="min-h-screen bg-[#fffaf0]">
        <Navbar language={language} />
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/contact" element={<Contact language={language} />} />
          <Route path="/about" element={<About language={language} />} />
          <Route path="/services" element={<Services language={language} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <LanguageToggle 
          currentLanguage={language} 
          onLanguageChange={handleLanguageChange}  // Now passes the selected language directly
        />
      </div>
    </Router>
  );
}