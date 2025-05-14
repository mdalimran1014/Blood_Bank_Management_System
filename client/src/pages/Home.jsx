// pages/Home.jsx
import React from "react";
import HeroSection from "../components/HeroSection";
import Campaigns from "../components/Campaigns";
import Stats from "../components/Stats";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <HeroSection />
      <Campaigns />
      <Stats />
      <Footer />
    </div>
  );
};

export default Home;
