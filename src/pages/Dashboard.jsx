// Dashboard.jsx
import { useState } from 'react';
import logo from '../pics/logo.jpg';

export default function Dashboard({ onLogout }) {
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
              onClick={onLogout}
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