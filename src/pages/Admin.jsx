import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../pics/logo.jpg';

export default function Admin() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Replace with actual authentication logic
      if (credentials.username === 'admin' && credentials.password === 'emis123') {
        setIsLoggedIn(true);
        // In a real app, you would store a token and verify it on all admin routes
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

  if (!isLoggedIn) {
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

  // Admin Dashboard after login
  return (
    <div className="min-h-screen bg-[#f7f2e7]">
      {/* Admin Header */}
      <header className="bg-gradient-to-r from-[#d4af37] via-[#C5AF73] to-[#d4af37] shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-[#1f2937] border-opacity-20 shadow-md">
                <img 
                  src={logo} 
                  alt="Emis Dental Logo" 
                  className="h-full w-full object-cover"
                />
              </div>
              <h1 
                className="text-2xl font-bold text-[#1f2937]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                <span className="text-[#2a3439]">EMIS</span> <span className="text-[#1f2937]">Admin</span>
              </h1>
            </div>
            <button 
              onClick={() => setIsLoggedIn(false)}
              className="px-4 py-2 bg-[#2a3439] text-[#C5AF73] rounded-md hover:bg-[#1f2937] transition-all duration-300"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Admin Dashboard */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Appointments Card */}
          <div className="bg-[#fffaf0] p-6 rounded-xl shadow-lg border-l-4 border-[#d4af37]">
            <h2 
              className="text-xl font-bold text-[#1f2937] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Today's Appointments
            </h2>
            <div className="text-3xl font-bold text-[#d4af37] mb-2">12</div>
            <p 
              className="text-[#1f2937]"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              <span className="text-green-600">↑ 3</span> from yesterday
            </p>
          </div>

          {/* Messages Card */}
          <div className="bg-[#fffaf0] p-6 rounded-xl shadow-lg border-l-4 border-[#2a3439]">
            <h2 
              className="text-xl font-bold text-[#1f2937] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              New Messages
            </h2>
            <div className="text-3xl font-bold text-[#2a3439] mb-2">5</div>
            <p 
              className="text-[#1f2937]"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              <span className="text-red-600">↓ 2</span> from last week
            </p>
          </div>

          {/* Patients Card */}
          <div className="bg-[#fffaf0] p-6 rounded-xl shadow-lg border-l-4 border-[#C5AF73]">
            <h2 
              className="text-xl font-bold text-[#1f2937] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              New Patients
            </h2>
            <div className="text-3xl font-bold text-[#C5AF73] mb-2">7</div>
            <p 
              className="text-[#1f2937]"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              <span className="text-green-600">↑ 4</span> this month
            </p>
          </div>
        </div>

        {/* Recent Appointments Table */}
        <div className="mt-8 bg-[#fffaf0] p-6 rounded-xl shadow-lg">
          <h2 
            className="text-xl font-bold text-[#1f2937] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Recent Appointments
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-[#d4af37]">
              <thead>
                <tr>
                  <th 
                    className="px-4 py-3 text-left text-[#1f2937]"
                    style={{ fontFamily: "'Cormorant', serif" }}
                  >
                    Patient
                  </th>
                  <th 
                    className="px-4 py-3 text-left text-[#1f2937]"
                    style={{ fontFamily: "'Cormorant', serif" }}
                  >
                    Service
                  </th>
                  <th 
                    className="px-4 py-3 text-left text-[#1f2937]"
                    style={{ fontFamily: "'Cormorant', serif" }}
                  >
                    Date & Time
                  </th>
                  <th 
                    className="px-4 py-3 text-left text-[#1f2937]"
                    style={{ fontFamily: "'Cormorant', serif" }}
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#d4af37]/20">
                {[1, 2, 3, 4, 5].map((item) => (
                  <tr key={item} className="hover:bg-[#f7f2e7]">
                    <td className="px-4 py-3 text-[#1f2937]" style={{ fontFamily: "'Cormorant', serif" }}>
                      Patient {item}
                    </td>
                    <td className="px-4 py-3 text-[#1f2937]" style={{ fontFamily: "'Cormorant', serif" }}>
                      {['Checkup', 'Cleaning', 'Implant', 'Braces', 'Whitening'][item-1]}
                    </td>
                    <td className="px-4 py-3 text-[#1f2937]" style={{ fontFamily: "'Cormorant', serif" }}>
                      May {20+item}, 2023 at {9+item}:00 AM
                    </td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        item % 2 === 0 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {item % 2 === 0 ? 'Confirmed' : 'Pending'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}