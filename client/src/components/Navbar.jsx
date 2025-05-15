import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';
import { Menu, X, UserCircle, Bell } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isLoggedIn = Boolean(user);

  return (
    <nav className={`${isLoggedIn ? 'bg-white text-teal-700' : 'bg-violet-800 text-white'} shadow-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo + Name */}
          <div className="flex items-center gap-2">
            <img src="/logo.jpg" alt="Logo" className="h-10 w-10 rounded-full object-cover" />
            <Link to="/" className="text-4xl font-bold">BloodBank</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center text-[20px]">
            <Link to="/" className="hover:text-gray-800 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-gray-800 transition-colors">About</Link>
            <Link to="/services" className="hover:text-gray-800 transition-colors">Services</Link>
            <Link to="/contact" className="hover:text-gray-800 transition-colors">Contact</Link>

            {!user && (
              <>
                <Link
                  to="/login"
                  className=" text-white px-4 py-1 rounded-full hover:bg-gray-200 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-sky-500 text-white px-4 py-1 rounded-full hover:bg-sky-700 transition-colors"
                >
                  Register
                </Link>
              </>
            )}

            {user && user.role === 'admin' && (
              <>
                <Link to="/admin/dashboard" className="hover:text-gray-800 transition-colors">Dashboard</Link>
                <Link to="/admin/donors" className="hover:text-gray-800 transition-colors">Donors</Link>
                <Link to="/admin/inventory" className="hover:text-gray-800 transition-colors">Inventory</Link>
                <Link to="/admin/requests" className="hover:text-gray-800 transition-colors">Requests</Link>
              </>
            )}

            {user && user.role === 'donor' && (
              <>
                <Link to="/donor/dashboard" className="hover:text-gray-800 transition-colors">Dashboard</Link>
                <Link to="/donor/history" className="hover:text-gray-800 transition-colors">My Donations</Link>
              </>
            )}

            {user && user.role === 'patient' && (
              <>
                <Link to="/patient/history" className="hover:text-gray-800 transition-colors">My Requests</Link>
              </>
            )}

            {user && (
              <>
                <Bell size={22} className="hover:text-gray-800 cursor-pointer" />
                <UserCircle size={24} className="ml-1" />
                <button
                  onClick={handleLogout}
                  className="hover:text-gray-800 text-sm transition-colors"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-3 pb-4 text-[17px]">
            <Link to="/" onClick={toggleMenu} className="hover:text-gray-800">Home</Link>
            <Link to="/about" onClick={toggleMenu} className="hover:text-gray-800">About</Link>
            <Link to="/services" onClick={toggleMenu} className="hover:text-gray-800">Services</Link>
            <Link to="/contact" onClick={toggleMenu} className="hover:text-gray-800">Contact</Link>

            {!user && (
              <>
                <Link
                  to="/login"
                  onClick={toggleMenu}
                  className="bg-white text-teal-700 px-4 py-1 rounded-full hover:bg-gray-200"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={toggleMenu}
                  className="bg-sky-400 text-white px-4 py-1 rounded-full hover:bg-sky-600"
                >
                  Register
                </Link>
              </>
            )}

            {user && user.role === 'admin' && (
              <>
                <Link to="/admin/dashboard" onClick={toggleMenu}>Dashboard</Link>
                <Link to="/admin/donors" onClick={toggleMenu}>Donors</Link>
                <Link to="/admin/inventory" onClick={toggleMenu}>Inventory</Link>
                <Link to="/admin/requests" onClick={toggleMenu}>Requests</Link>
              </>
            )}

            {user && user.role === 'donor' && (
              <>
                <Link to="/donor/dashboard" onClick={toggleMenu}>Dashboard</Link>
                <Link to="/donor/history" onClick={toggleMenu}>My Donations</Link>
              </>
            )}

            {user && user.role === 'patient' && (
              <>
                <Link to="/patient/history" onClick={toggleMenu}>My Requests</Link>
              </>
            )}

            {user && (
              <>
                <div className="flex items-center gap-2">
                  <Bell size={22} className="hover:text-gray-800" />
                  <UserCircle size={24} />
                </div>
                <button
                  onClick={() => { handleLogout(); toggleMenu(); }}
                  className="text-left hover:text-gray-800"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
