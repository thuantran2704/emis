import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';
import LanguageToggle from './components/LanguageToggle';

export default function App() {
  const [language, setLanguage] = useState('vietnamese');

  // This now directly sets the selected language
  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    //comment
  };

  return (
    <Router>
      <div className="min-h-screen bg-[#fffaf0]">
        <Navbar language={language} />
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/contact" element={<Contact language={language} />} />
          <Route path="/admin" element={<Admin/>} />
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