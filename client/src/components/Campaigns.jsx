// client>src>component>Campaigns.jsx

import React from "react";

const campaigns = [
    {
    title: "City Blood Drive",
    date: "June 15, 2025",
    location: "Community Hall, Downtown",
    description: "Join us in saving lives through our monthly city-wide blood drive.",
    image: "https://via.placeholder.com/400x200?text=City+Blood+Drive",
  },
  {
    title: "University Donation Camp",
    date: "July 5, 2025",
    location: "GSTU Campus",
    description: "Organized by the student council to support local hospitals.",
    image: "https://via.placeholder.com/400x200?text=University+Camp",
  },
  {
    title: "Winter Warmth Blood Camp",
    date: "December 10, 2024",
    location: "Red Cross Center",
    description: "A special winter drive supporting emergency surgery patients.",
    image: "https://via.placeholder.com/400x200?text=Winter+Blood+Camp",
  },
  {
    title: "Youth Blood Drive",
    date: "October 20, 2024",
    location: "City Youth Club",
    description: "Young volunteers step up to donate and raise awareness.",
    image: "https://via.placeholder.com/400x200?text=Youth+Drive",
  },
];

const Campaigns = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-red-700">Upcoming Campaigns</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {campaigns.map((camp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-red-600">{camp.title}</h3>
              <p className="text-gray-600 mt-1">{camp.date} - {camp.location}</p>
              <p className="mt-4 text-gray-800">{camp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Campaigns;
