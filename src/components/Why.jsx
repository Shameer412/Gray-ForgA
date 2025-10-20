import React from 'react';
import { FaCheck, FaAward, FaUsers, FaClock, FaHeadset, FaChartLine } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaAward className="text-blue-600" size={28} />,
      title: "Award-Winning Quality",
      description: "Recognized for excellence in software development and innovation across multiple industries.",
      stats: "15+ Industry Awards"
    },
    {
      icon: <FaUsers className="text-green-600" size={28} />,
      title: "Expert Team",
      description: "150+ seasoned developers, designers, and strategists with 5+ years average experience.",
      stats: "150+ Professionals"
    },
    {
      icon: <FaClock className="text-purple-600" size={28} />,
      title: "On-Time Delivery",
      description: "98% of projects delivered on or before deadline with agile development methodology.",
      stats: "98% On Time"
    },
    {
      icon: <FaHeadset className="text-orange-600" size={28} />,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance with 30-minute response guarantee.",
      stats: "24/7 Available"
    }
  ];

  const reasons = [
    {
      title: "Proven Track Record",
      description: "Successfully delivered 500+ projects across 50+ industries with 98% client satisfaction rate.",
      highlights: ["500+ Projects", "50+ Industries", "98% Satisfaction"]
    },
    {
      title: "Cutting-Edge Technology",
      description: "Stay ahead with latest technologies including AI/ML, blockchain, cloud-native solutions and more.",
      highlights: ["AI/ML Integration", "Cloud Native", "Blockchain"]
    },
    {
      title: "Customized Approach",
      description: "Every solution is tailored to your specific business needs, goals, and workflow requirements.",
      highlights: ["Tailored Solutions", "Business-First", "Scalable Design"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Deep dive into your business requirements and create detailed project roadmap"
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Create intuitive UI/UX designs and interactive prototypes for validation"
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Agile development with continuous testing and quality assurance"
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Smooth deployment and ongoing maintenance with performance monitoring"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-200 mb-6">
            <FaCheck className="text-blue-600 mr-2" size={16} />
            <span className="text-blue-700 font-medium text-sm">Why We're Different</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-blue-600">Our Solutions</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We don't just build software - we build partnerships. Our commitment to excellence 
            and client success sets us apart in the competitive technology landscape.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="mb-6 p-4 bg-blue-50 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
              <div className="text-2xl font-bold text-blue-600">{feature.stats}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          
          {/* Left Content - Reasons */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">What Makes Us Stand Out</h3>
            
            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-6 group cursor-pointer">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                      <FaCheck className="text-blue-600 group-hover:text-white transition-colors duration-300" size={18} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">{reason.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {reason.highlights.map((highlight, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Process */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Our Process</h3>
            
            <div className="space-y-6">
              {process.map((step, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
              <div className="flex items-center gap-4">
                <FaChartLine className="text-blue-600" size={24} />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Ready to Get Started?</h4>
                  <p className="text-gray-600 text-sm">Let's discuss your project requirements</p>
                </div>
              </div>
              <button className="w-full mt-4 bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Join 500+ Successful Companies
          </h3>
          <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
            Let's build something amazing together. Your success is our priority.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Start Your Project
            </button>
            <button className="border border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors">
              View Case Studies
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;