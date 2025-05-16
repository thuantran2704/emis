import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound'; // Import your new 404 component

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#fffaf0]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add this catch-all route at the end */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}