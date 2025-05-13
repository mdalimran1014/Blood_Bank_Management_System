// client>src>component>Stats.jsx
import React from "react";
import { HeartPulse, Users, Droplets } from "lucide-react";

const stats = [
  {
    icon: <HeartPulse className="h-10 w-10 text-red-600" />,
    label: "Lives Saved",
    value: 1280,
  },
  {
    icon: <Droplets className="h-10 w-10 text-red-600" />,
    label: "Units Donated",
    value: 5300,
  },
  {
    icon: <Users className="h-10 w-10 text-red-600" />,
    label: "Registered Donors",
    value: 890,
  },
];

const Stats = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-red-700">Our Impact</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
              <div className="mb-4">{stat.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800">{stat.value}</h3>
              <p className="text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
