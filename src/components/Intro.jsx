import React from 'react';
import { FaTools, FaRocket, FaDollarSign, FaClock } from 'react-icons/fa';

const QuickIntro = () => {
  const benefits = [
    {
      icon: <FaTools className="text-blue-600" size={24} />,
      title: "Custom Solutions",
      description: "Crafted for your workflow"
    },
    {
      icon: <FaRocket className="text-green-600" size={24} />,
      title: "Scale Faster",
      description: "Grow without limits"
    },
    {
      icon: <FaDollarSign className="text-purple-600" size={24} />,
      title: "Cut Costs",
      description: "Save thousands annually"
    },
    {
      icon: <FaClock className="text-orange-600" size={24} />,
      title: "Save Time",
      description: "Automate busywork"
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            We're Not Another Software Vendor
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're your <span className="font-bold text-blue-600">digital forge</span> — crafting solutions that are as 
            unique as your business. From <span className="font-semibold text-gray-900">custom CRMs</span> to{' '}
            <span className="font-semibold text-gray-900">AI-powered assistants</span>, we help you save time, 
            cut costs, and scale faster.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center group"
            >
              <div className="inline-flex p-4 bg-white rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                {benefit.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Because your business deserves solutions crafted with{' '}
            <span className="font-bold text-blue-600">precision</span>, not off-the-shelf compromises.
          </p>
        </div>

      </div>
    </section>
  );
};

export default QuickIntro;