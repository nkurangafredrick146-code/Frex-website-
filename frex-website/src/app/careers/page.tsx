'use client';

import { useState } from 'react';
import ApplicationModal from '@/components/ApplicationModal';

export default function Careers() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const openRoles = [
    {
      title: "Research Scientist, Quantum Algorithms",
      department: "Frex Labs",
      type: "Full-time",
      location: "Remote"
    },
    {
      title: "Software Engineer, AI Governance",
      department: "Frex Solutions",
      type: "Full-time", 
      location: "Remote"
    },
    {
      title: "Doctry Research Fellow",
      department: "Frex Labs",
      type: "Fellowship",
      location: "Remote"
    },
    {
      title: "Full-Stack Developer",
      department: "Frex Solutions",
      type: "Full-time",
      location: "Remote"
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-black text-white pt-20">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Build the Future
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Join us in defining the next century of computational technology and systems governance.
            </p>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20 border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Culture</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "⚡",
                  title: "Rigorous Creativity",
                  description: "Groundbreaking ideas backed by mathematical and scientific rigor."
                },
                {
                  icon: "🌉",
                  title: "Translational Thinking",
                  description: "Connecting deep theory with practical, world-changing applications."
                },
                {
                  icon: "🛡️",
                  title: "Ethical by Design",
                  description: "Building safety and ethics into every layer of research and development."
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Roles Section */}
        <section className="py-20 border-t border-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Open Roles</h2>
            <div className="space-y-6">
              {openRoles.map((role, index) => (
                <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{role.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <span>{role.department}</span>
                        <span>{role.type}</span>
                        <span>{role.location}</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => setSelectedRole(role.title)}
                      className="mt-4 md:mt-0 bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-2 px-6 rounded-lg transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Join Frex?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Competitive equity packages",
                "Unlimited PTO",
                "Full health benefits", 
                "Latest hardware & tools",
                "Research publication support",
                "Conference attendance",
                "Remote-first culture",
                "Annual research retreats"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Modal */}
      <ApplicationModal
        isOpen={!!selectedRole}
        onClose={() => setSelectedRole(null)}
        role={selectedRole || ''}
      />
    </>
  );
}