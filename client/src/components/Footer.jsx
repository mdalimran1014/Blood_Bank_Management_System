import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  HeartPulse,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Branding */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <HeartPulse className="text-red-500" size={24} />
            <h2 className="text-xl font-bold">BloodBank</h2>
          </div>
          <p className="text-sm text-gray-300">
            Saving lives by connecting donors and recipients. Join us in making a difference.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-red-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-red-400">About</Link></li>
            <li><Link to="/services" className="hover:text-red-400">Services</Link></li>
            <li><Link to="/contact" className="hover:text-red-400">Contact</Link></li>
          </ul>
        </div>

        {/* Role-based */}
        <div>
          <h3 className="font-semibold mb-3">Get Involved</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/register?role=donor" className="hover:text-red-400">Become a Donor</Link></li>
            <li><Link to="/patient/request" className="hover:text-red-400">Request Blood</Link></li>
            <li><Link to="/admin/dashboard" className="hover:text-red-400">Admin Portal</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li className="flex items-center gap-2"><Phone size={16} /> +1 (123) 456-7890</li>
            <li className="flex items-center gap-2"><Mail size={16} /> support@bloodbank.org</li>
            <li className="flex items-center gap-2"><MapPin size={16} /> Dhaka, Bangladesh</li>
          </ul>
          <div className="flex mt-4 gap-4">
            <a href="#" className="hover:text-red-400"><Facebook size={20} /></a>
            <a href="#" className="hover:text-red-400"><Twitter size={20} /></a>
            <a href="#" className="hover:text-red-400"><Instagram size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} BloodBank. All rights reserved.</p>
        <p className="mt-2">Made with ❤️ for a better tomorrow.</p>
      </div>
    </footer>
  );
};

export default Footer;

















// // client>src>component>Footer.jsx

// import React from "react";
// import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-red-700 text-white mt-10">
//       <div className="max-w-6xl mx-auto py-10 px-4 grid md:grid-cols-3 gap-8">
//         <div>
//           <h3 className="text-xl font-bold mb-4">BloodBank</h3>
//           <p className="text-sm">
//             Saving lives one drop at a time. Join our community of lifesavers.
//           </p>
//         </div>
//         <div>
//           <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
//           <ul className="space-y-1 text-sm">
//             <li><a href="/" className="hover:underline">Home</a></li>
//             <li><a href="/donor" className="hover:underline">Donate Blood</a></li>
//             <li><a href="/request" className="hover:underline">Request Blood</a></li>
//             <li><a href="/register" className="hover:underline">Register</a></li>
//           </ul>
//         </div>
//         <div>
//           <h4 className="text-lg font-semibold mb-2">Connect with Us</h4>
//           <div className="flex gap-4 mt-2">
//             <a href="#"><Facebook /></a>
//             <a href="#"><Twitter /></a>
//             <a href="#"><Instagram /></a>
//             <a href="#"><Mail /></a>
//           </div>
//         </div>
//       </div>
//       <div className="text-center py-4 border-t border-white/20 text-sm">
//         © {new Date().getFullYear()} BloodBank. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;
