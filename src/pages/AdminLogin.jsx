import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../pics/logo.jpg';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (credentials.username === 'admin' && credentials.password === 'emis123') {
        // Store authentication status
        localStorage.setItem('isAdminAuthenticated', 'true');
        navigate('/admin/dashboard');
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main className="min-h-screen bg-[#f7f2e7] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="h-20 w-20 rounded-full overflow-hidden border-2 border-[#1f2937] border-opacity-20 shadow-md">
              <img 
                src={logo} 
                alt="Emis Dental Logo" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <h1 
            className="text-3xl font-bold text-[#1f2937]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="text-[#2a3439]">EMIS</span> <span className="text-[#d4af37]">Admin</span>
          </h1>
          <p 
            className="mt-2 text-[#1f2937]"
            style={{ fontFamily: "'Cormorant', serif" }}
          >
            Clinic Management Portal
          </p>
        </div>

        <div className="bg-[#fffaf0] p-8 rounded-xl shadow-lg">
          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="p-3 bg-red-100 text-red-700 rounded-md text-center">
                {error}
              </div>
            )}

            <div>
              <label 
                htmlFor="username" 
                className="block text-[#1f2937] mb-2"
                style={{ fontFamily: "'Cormorant', serif" }}
              >
                Username
              </label>
              <input 
                type="text" 
                id="username"
                name="username"
                value={credentials.username}
                onChange={handleInputChange}
                className="w-full p-3 border border-[#6b7280] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                style={{ fontFamily: "'Cormorant', serif" }}
                required
                autoComplete="username"
              />
            </div>

            <div>
              <label 
                htmlFor="password" 
                className="block text-[#1f2937] mb-2"
                style={{ fontFamily: "'Cormorant', serif" }}
              >
                Password
              </label>
              <input 
                type="password" 
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleInputChange}
                className="w-full p-3 border border-[#6b7280] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                style={{ fontFamily: "'Cormorant', serif" }}
                required
                autoComplete="current-password"
              />
            </div>

            <button 
              type="submit"
              className={`w-full bg-[#d4af37] hover:bg-[#c19d30] text-white font-bold py-3 px-6 rounded-full transition-all text-lg shadow-md hover:shadow-lg ${
                isLoading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
              style={{ fontFamily: "'Playfair Display', serif" }}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Authenticating...
                </span>
              ) : (
                'Sign In'
              )}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}