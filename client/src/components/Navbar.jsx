import { Radius } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo + Name (Left-Aligned) */}
        <div className="flex items-center space-x-2 ml-0"> {/* Left-aligned */}
          <img src="/logo.jpg" alt="Logo" className="h-12 w-12 object-contain" /> {/* Increased logo size */}
          <Link to="/" className="text-white text-4xl font-bold hover:text-red-300 transition-all duration-200">
            BloodBank
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg"> {/* Increased font size */}
          <Link to="/" className="text-white hover:text-red-300 font-medium transition-all duration-200">Home</Link>
          <Link to="/request-blood" className="text-white hover:text-red-300 font-medium transition-all duration-200">Request Blood</Link>
          <Link to="/login" className="text-white hover:text-red-300 font-medium transition-all duration-200">Login</Link>
          <Link to="/register" className="text-white hover:text-red-300 font-medium transition-all duration-200">Register</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button className="text-white text-2xl">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
