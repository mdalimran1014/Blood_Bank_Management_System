import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">About Us</h1>
        <p className="text-gray-700 text-lg mb-6">
          BloodBank is a community-driven platform dedicated to bridging the gap between blood donors and those in urgent need. We aim to ensure that no life is lost due to the lack of blood.
        </p>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div>
            <h2 className="text-xl font-semibold text-red-500 mb-2">Our Mission</h2>
            <p className="text-gray-600">
              To provide a reliable and responsive system that helps hospitals, patients, and blood donors connect efficiently and save lives.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-red-500 mb-2">Why Choose Us?</h2>
            <ul className="list-disc ml-6 text-gray-600">
              <li>Real-time donor matching</li>
              <li>Secure and verified data</li>
              <li>Community awareness campaigns</li>
              <li>24/7 support & availability</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
