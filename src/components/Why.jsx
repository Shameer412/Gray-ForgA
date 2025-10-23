import React from 'react';
import { FaCheck, FaDollarSign, FaUsers, FaHeadset, FaRocket } from 'react-icons/fa';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaCheck className="text-blue-600" size={24} />,
      title: "Tailored to Your Needs",
      description: "Not one-size-fits-all. Every solution is custom-built around your specific business requirements and workflow.",
      color: "blue"
    },
    {
      icon: <FaDollarSign className="text-green-600" size={24} />,
      title: "Cost-Saving",
      description: "Own your system and save thousands annually. No recurring subscription fees or hidden costs.",
      color: "green"
    },
    {
      icon: <FaUsers className="text-purple-600" size={24} />,
      title: "Dedicated Team",
      description: "We listen first, then build. Your project is handled by experienced developers who care about your success.",
      color: "purple"
    },
    {
      icon: <FaHeadset className="text-orange-600" size={24} />,
      title: "24/7 Client Portal",
      description: "Your support hub, always on. Get help whenever you need it through our dedicated client management portal.",
      color: "orange"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full border border-green-200 mb-6">
            <FaCheck className="text-green-600 mr-2" size={16} />
            <span className="text-green-700 font-medium text-sm">Why Choose Us</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-blue-600">Gray Forge Digital?</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We don't just deliver software. We deliver peace of mind with solutions that are 
            built for your business, not the other way around.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="flex gap-6 p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-white rounded-xl border-2 border-gray-200 flex items-center justify-center group-hover:border-blue-400 group-hover:scale-110 transition-all duration-300 shadow-sm">
                  {reason.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-6">
              <FaRocket size={32} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-blue-100 text-lg mb-8">
              Let's forge a solution that actually fits your business. No compromises, no cookie-cutter tools.
            </p>
            <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
              Start Your Project Today
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;