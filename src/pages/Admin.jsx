// Admin.jsx
import { useState } from 'react';
import AdminLogin from './AdminLogin';
import Dashboard from './Dashboard';

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {!isLoggedIn ? (
        <AdminLogin onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <Dashboard onLogout={() => setIsLoggedIn(false)} />
      )}
    </>
  );
}