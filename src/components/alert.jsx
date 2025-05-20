// components/alert.js
import { useEffect } from 'react';

export default function Alert({ message, type = "success", onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // auto close in 3s
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed top-4 right-4 z-50 px-6 py-3 rounded shadow-lg text-white transition-all duration-300
      ${type === "success" ? "bg-green-500" : "bg-red-500"}`}>
      {message}
    </div>
  );
}
