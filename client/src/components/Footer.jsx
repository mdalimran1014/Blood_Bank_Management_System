// client>src>component>Footer.jsx

import React from "react";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-red-700 text-white mt-10">
      <div className="max-w-6xl mx-auto py-10 px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">BloodBank</h3>
          <p className="text-sm">
            Saving lives one drop at a time. Join our community of lifesavers.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/donor" className="hover:underline">Donate Blood</a></li>
            <li><a href="/request" className="hover:underline">Request Blood</a></li>
            <li><a href="/register" className="hover:underline">Register</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Connect with Us</h4>
          <div className="flex gap-4 mt-2">
            <a href="#"><Facebook /></a>
            <a href="#"><Twitter /></a>
            <a href="#"><Instagram /></a>
            <a href="#"><Mail /></a>
          </div>
        </div>
      </div>
      <div className="text-center py-4 border-t border-white/20 text-sm">
        © {new Date().getFullYear()} BloodBank. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
