import React from 'react';
import { FaCalendar, FaComments } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-5xl mx-auto">
          
          {/* Motto Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-200 mb-8">
            <span className="text-blue-700 font-medium text-sm">Forging Technology That Fits You</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            We Listen. We Build. <br />
            <span className="text-blue-600">We Save You Costs.</span>
          </h1>
          
          {/* Sub-Headline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
            Gray Forge Digital delivers <span className="font-semibold text-gray-900">custom-built CRMs, portals, websites, apps, 
            and AI solutions</span> designed around <span className="font-semibold text-gray-900">your</span> business needs. 
            Stop wasting money on cookie-cutter tools. Let's forge something that actually works for you.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="w-full sm:w-auto bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-3">
              <FaCalendar size={20} />
              Schedule a Free Consultation
            </button>
            <button className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-3">
              <FaComments size={20} />
              Talk to Our Experts
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>No Off-The-Shelf Compromises</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Custom Solutions Only</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>24/7 Support Portal</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;