import React from 'react';
import { Heart, UserPlus, ShieldCheck, Hospital } from 'lucide-react';

const services = [
  { icon: <Heart size={28} className="text-red-500" />, title: 'Blood Donation', desc: 'Register and donate blood to help save lives in your area.' },
  { icon: <UserPlus size={28} className="text-blue-500" />, title: 'Donor Management', desc: 'View, update, and track your donation history.' },
  { icon: <ShieldCheck size={28} className="text-green-500" />, title: 'Request Tracking', desc: 'Patients can request blood and monitor the status.' },
  { icon: <Hospital size={28} className="text-purple-500" />, title: 'Hospital Collaboration', desc: 'Connect with hospitals for availability and inventory.' }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-white py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-red-600 mb-10">Our Services</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition-all">
              <div className="mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
