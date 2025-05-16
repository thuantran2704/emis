import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import LanguageToggle from './components/LanguageToggle';

export default function App() {
  const [language, setLanguage] = useState('vietnamese');

  const toggleLanguage = () => {
    setLanguage(prev => {
      switch(prev) {
        case 'vietnamese': return 'english';
        case 'english': return 'simplified';
        case 'simplified': return 'traditional';
        case 'traditional': return 'vietnamese';
        default: return 'vietnamese';
      }
    });
  };

  return (
    <Router>
      <div className="min-h-screen bg-[#fffaf0]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/contact" element={<Contact language={language} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <LanguageToggle 
          currentLanguage={language} 
          onLanguageChange={toggleLanguage} 
        />
      </div>
    </Router>
  );
}