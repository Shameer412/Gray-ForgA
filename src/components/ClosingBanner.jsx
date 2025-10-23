import React from 'react';
import { FaCalendar, FaTools, FaArrowRight } from 'react-icons/fa';

const ClosingBanner = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Icon */}
          <div className="inline-flex p-6 bg-blue-600/20 rounded-full mb-8 backdrop-blur-sm border border-blue-500/30">
            <FaTools className="text-blue-400" size={40} />
          </div>
          
          {/* Main Message */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Stop Paying for Tools That <br />
            <span className="text-blue-400">Don't Fit Your Business</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
            Let's forge a system designed around <span className="font-semibold text-white">you</span>.
          </p>
          
          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto bg-blue-600 text-white font-semibold px-10 py-5 rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl flex items-center justify-center gap-3 text-lg">
              <FaCalendar size={22} />
              Book a Free Consultation
            </button>
            <button className="w-full sm:w-auto border-2 border-gray-400 text-gray-300 font-semibold px-10 py-5 rounded-xl hover:bg-gray-800 hover:border-gray-300 transition-all duration-300 flex items-center justify-center gap-3 text-lg">
              <span>Explore Services</span>
              <FaArrowRight size={18} />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Custom Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Own Your System</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Save Thousands</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ClosingBanner;