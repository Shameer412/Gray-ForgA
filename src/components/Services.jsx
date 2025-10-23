import React from 'react';
import { FaCog, FaUsers, FaGlobe, FaFolder, FaRobot, FaBuilding, FaArrowRight } from 'react-icons/fa';

const CoreServices = () => {
  const services = [
    {
      icon: <FaCog className="text-blue-600" size={32} />,
      title: "Custom CRMs & Canvassing Tools",
      description: "Tailored customer relationship management systems that adapt to your sales process and field operations.",
      color: "blue"
    },
    {
      icon: <FaUsers className="text-green-600" size={32} />,
      title: "HR & Employee Management Systems",
      description: "Complete HR solutions including payroll, attendance, performance tracking, and leave management.",
      color: "green"
    },
    {
      icon: <FaGlobe className="text-purple-600" size={32} />,
      title: "Websites & Mobile Apps",
      description: "Sleek, responsive websites and powerful mobile applications designed to perform and scale.",
      color: "purple"
    },
    {
      icon: <FaFolder className="text-orange-600" size={32} />,
      title: "Content Management & File Portals",
      description: "Secure portals for storing, managing, and sharing content with full collaboration features.",
      color: "orange"
    },
    {
      icon: <FaRobot className="text-cyan-600" size={32} />,
      title: "AI Agents & Automation",
      description: "Intelligent AI assistants that handle calls, emails, scheduling, and repetitive tasks automatically.",
      color: "cyan"
    },
    {
      icon: <FaBuilding className="text-indigo-600" size={32} />,
      title: "In-House Business Systems",
      description: "Custom internal tools and systems you own completely, eliminating recurring SaaS fees.",
      color: "indigo"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-50 border-blue-200 hover:border-blue-400",
      green: "bg-green-50 border-green-200 hover:border-green-400",
      purple: "bg-purple-50 border-purple-200 hover:border-purple-400",
      orange: "bg-orange-50 border-orange-200 hover:border-orange-400",
      cyan: "bg-cyan-50 border-cyan-200 hover:border-cyan-400",
      indigo: "bg-indigo-50 border-indigo-200 hover:border-indigo-400"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-200 mb-6">
            <FaCog className="text-blue-600 mr-2" size={16} />
            <span className="text-blue-700 font-medium text-sm">Core Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Solutions Built <span className="text-blue-600">For You</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every system we forge is designed around your unique workflow, saving you thousands 
            compared to generic platforms.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`${getColorClasses(service.color)} p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl group cursor-pointer`}
            >
              <div className="mb-6 p-4 bg-white rounded-xl w-fit group-hover:scale-110 transition-transform duration-300 shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
              <div className="flex items-center text-blue-600 font-semibold group-hover:gap-3 transition-all duration-300">
                <span>Learn More</span>
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={14} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="inline-flex items-center gap-3 bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
            <span>Explore All Services</span>
            <FaArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default CoreServices;