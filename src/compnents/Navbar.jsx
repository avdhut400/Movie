import React from 'react';
import logo from '../assets/ok.jpg';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex items-center justify-between">
      
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Logo" className="w-[40px] h-[40px] rounded-full" />
        <span className="text-xl font-bold text-gray-800">NEXA</span>
      </div>

      
      <div className="flex space-x-6 text-gray-700 font-medium">
        <a href="/" className="hover:text-blue-600 transition">Home</a>
        <a href="/watchlist" className="hover:text-blue-600 transition">Watchlist</a>
      </div>
    </nav>
  );
};

export default Navbar;


