// client>src>component>HeroSection.jsx
import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-red-600 text-white py-16 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Donate Blood, Save Lives ❤️
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Be a hero. Your blood donation can bring hope and healing.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            to="/donor/register"
            className="bg-white text-red-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
          >
            Become a Donor
          </Link>
          <Link
            to="/patient/request"
            className="bg-white text-red-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
          >
            Request Blood
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
