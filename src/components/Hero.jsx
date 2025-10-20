import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaRocket, FaChartLine, FaUsers, FaShieldAlt, FaLock, FaStar, FaPlay, FaPause } from 'react-icons/fa';
import { MdDashboardCustomize, MdManageAccounts, MdWeb, MdFolderShared, MdOutlineAutoAwesome, MdBusiness, MdStore, MdSecurity } from 'react-icons/md';

const InnovationSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const exclusiveApps = [
    { 
      icon: <MdDashboardCustomize size={24} />, 
      title: 'Custom CRM',
      description: 'Sales & lead management',
      color: 'blue',
      features: ['Lead Tracking', 'Sales Pipeline', 'Customer Insights']
    },
    { 
      icon: <MdBusiness size={24} />, 
      title: 'Enterprise ERP',
      description: 'Business process integration',
      color: 'green',
      features: ['Finance Management', 'Supply Chain', 'HR Integration']
    },
    { 
      icon: <MdManageAccounts size={24} />, 
      title: 'HRMS Portal',
      description: 'Employee management system',
      color: 'purple',
      features: ['Payroll System', 'Attendance Tracking', 'Performance Mgmt']
    },
    { 
      icon: <MdStore size={24} />, 
      title: 'Inventory System',
      description: 'Stock & supply chain',
      color: 'orange',
      features: ['Real-time Tracking', 'Order Management', 'Supplier Portal']
    },
    { 
      icon: <MdWeb size={24} />, 
      title: 'Client Portal',
      description: 'Customer self-service',
      color: 'cyan',
      features: ['Ticket System', 'Knowledge Base', 'Live Chat']
    },
    { 
      icon: <MdFolderShared size={24} />, 
      title: 'File Management',
      description: 'Secure document sharing',
      color: 'red',
      features: ['Version Control', 'Access Permissions', 'Cloud Storage']
    },
    { 
      icon: <MdOutlineAutoAwesome size={24} />, 
      title: 'AI Assistant',
      description: 'Automated processes',
      color: 'indigo',
      features: ['Chatbot Integration', 'Process Automation', 'Data Analysis']
    },
    { 
      icon: <MdSecurity size={24} />, 
      title: 'Security Portal',
      description: 'Access control',
      color: 'amber',
      features: ['Multi-factor Auth', 'Audit Logs', 'Security Monitoring']
    },
  ];

  const features = [
    {
      icon: <FaRocket className="text-white" size={20} />,
      title: "Fast Development",
      description: "Rapid prototyping and deployment with agile methodologies",
      metric: "2-4 Weeks"
    },
    {
      icon: <FaLock className="text-white" size={20} />,
      title: "Enterprise Security",
      description: "Bank-level security protocols and data protection",
      metric: "99.9% Uptime"
    },
    {
      icon: <FaChartLine className="text-white" size={20} />,
      title: "Scalable Architecture",
      description: "Grow your software as your business expands",
      metric: "Unlimited Scaling"
    },
    {
      icon: <FaUsers className="text-white" size={20} />,
      title: "Dedicated Support",
      description: "24/7 technical support and maintenance",
      metric: "15 Min Response"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechGrowth Inc",
      text: "The custom CRM transformed our sales process. We saw a 40% increase in lead conversion within the first month!",
      avatar: "SJ"
    },
    {
      name: "Mike Chen",
      company: "Global Logistics",
      text: "Their inventory management system streamlined our entire supply chain. Highly recommended for enterprise solutions.",
      avatar: "MC"
    },
    {
      name: "Emily Davis",
      company: "FinTech Solutions",
      text: "Outstanding security implementation and 24/7 support. They truly understand enterprise needs.",
      avatar: "ED"
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, testimonials.length]);

  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-blue-50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-purple-50 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Enhanced Hero Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-blue-50 rounded-2xl border border-blue-100 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping mr-2"></div>
            <FaRocket className="text-blue-600 mr-2" size={18} />
            <span className="text-blue-700 font-medium text-sm">Innovate • Transform • Succeed</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your Business
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent block">
              With Custom Software
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            We create bespoke software solutions that drive growth, streamline operations, 
            and give you a competitive edge in today's digital landscape.
          </p>

          {/* Enhanced Stats with Progress Bars */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
            {[
              { value: "500+", label: "Projects", color: "from-blue-500 to-cyan-500", percent: 95 },
              { value: "98%", label: "Satisfaction", color: "from-green-500 to-emerald-500", percent: 98 },
              { value: "50+", label: "Industries", color: "from-purple-500 to-pink-500", percent: 90 },
              { value: "24/7", label: "Support", color: "from-orange-500 to-red-500", percent: 100 }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative inline-block mb-3">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="w-20 h-1 bg-gray-200 rounded-full overflow-hidden mx-auto">
                    <div 
                      className={`h-full bg-gradient-to-r ${stat.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${stat.percent}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold px-10 py-5 rounded-2xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3 shadow-xl hover:shadow-2xl">
              <span>Start Your Project</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group bg-white text-gray-700 font-semibold px-10 py-5 rounded-2xl border border-gray-300 hover:border-blue-400 hover:shadow-lg transition-all duration-300 flex items-center gap-3">
              <span>View Case Studies</span>
            </button>
          </div>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-white p-8 rounded-3xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 mb-6 group-hover:scale-110 transition-transform duration-500">
                  {feature.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  {feature.metric}
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-xl">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-start mb-20">
          
          {/* Left Content */}
          <div className="lg:w-1/2">
            <div className="mb-8">
              <div className="inline-flex items-center px-5 py-2.5 bg-blue-50 rounded-2xl border border-blue-200 mb-6">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse mr-2"></div>
                <span className="text-blue-700 font-medium">Your Technology Partner</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Solutions for <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Your Business</span> Needs
              </h2>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                We build software that fits your workflow perfectly. No compromises, no unnecessary features - 
                just exactly what your business needs to grow and succeed.
              </p>

              <div className="space-y-4 mb-8">
                {['End-to-end development', 'Agile methodology', 'Continuous deployment', 'Quality assurance'].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold px-8 py-4 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-3 group shadow-lg hover:shadow-xl">
                <span>Get Started Today</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 text-gray-700 font-semibold border border-gray-300 rounded-xl hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                Schedule a Demo
              </button>
            </div>
          </div>

          {/* Enhanced Right Content */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Comprehensive Solutions</h3>
                <p className="text-gray-600">Tailored applications designed to solve your specific business challenges</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {exclusiveApps.map((app, index) => (
                  <div
                    key={index}
                    className="group relative p-5 bg-gray-50 rounded-2xl border border-gray-200 hover:border-blue-300 hover:bg-white hover:shadow-lg transition-all duration-500 cursor-pointer overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-3">
                        <div className={`p-3 rounded-xl group-hover:scale-110 transition-transform duration-500 ${
                          app.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                          app.color === 'green' ? 'bg-green-100 text-green-600' :
                          app.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                          app.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                          app.color === 'cyan' ? 'bg-cyan-100 text-cyan-600' :
                          app.color === 'red' ? 'bg-red-100 text-red-600' :
                          app.color === 'indigo' ? 'bg-indigo-100 text-indigo-600' :
                          'bg-amber-100 text-amber-600'
                        }`}>
                          {app.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 text-base mb-1">{app.title}</h4>
                          <p className="text-gray-600 text-sm">{app.description}</p>
                        </div>
                        <FaArrowRight className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" size={16} />
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {app.features.map((feature, featureIndex) => (
                          <span 
                            key={featureIndex}
                            className="px-2 py-1 bg-white rounded-lg text-xs text-gray-600 border border-gray-200"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-600 text-sm text-center">
                  Can't find what you're looking for?{' '}
                  <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
                    Let's build it together
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="bg-white rounded-3xl p-12 border border-gray-200 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about their experience.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-6">
                        {testimonial.avatar}
                      </div>
                      <p className="text-gray-700 text-lg italic mb-6 leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <div className="text-gray-900 font-semibold">{testimonial.name}</div>
                      <div className="text-blue-600 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center items-center gap-4 mt-8">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial 
                      ? 'bg-blue-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;