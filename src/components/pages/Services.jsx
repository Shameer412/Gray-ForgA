import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
// Sleek minimal icons
const WebDevIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const SoftwareIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18" />
  </svg>
);

const AIIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const StrategyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const serviceItems = [
  {
    icon: <WebDevIcon />,
    title: 'Custom Website Development',
    description: 'We build more than websites; we forge your digital headquarters. From lightning-fast marketing sites and professional portfolios to robust e-commerce platforms, we create a secure, scalable, and beautiful online presence that you own completely. No templates, no restrictive platforms—just pure, custom-coded excellence tailored to your brand.',
    points: ['Bespoke design and UX', 'E-commerce and payment integration', 'Search Engine Optimization (SEO)', 'Full content management control'],
    color: 'blue'
  },
  {
    icon: <SoftwareIcon />,
    title: 'Custom Business Software',
    description: 'Stop forcing your workflow into off-the-shelf software. We design and build intuitive, powerful applications around your unique processes. Whether it\'s a custom CRM, a project management dashboard, an inventory system, or a point-of-sale solution, we eliminate the friction and build the tool your team has always needed to be their most productive.',
    points: ['Custom CRM/ERP solutions', 'Workflow and process automation', 'Internal dashboards and tools', 'Third-party API integrations'],
    color: 'cyan'
  },
  {
    icon: <AIIcon />,
    title: 'AI & Automation Solutions',
    description: 'Put your growth on autopilot. We harness the power of artificial intelligence to build your 24/7 digital workforce. From intelligent customer service chatbots that delight users to automated data entry and analysis that frees up your team, we identify and automate repetitive tasks, allowing you to focus on strategy and innovation.',
    points: ['AI-powered chatbots', 'Automated data processing', 'Predictive analytics', 'Repetitive task automation'],
    color: 'purple'
  },
  {
    icon: <StrategyIcon />,
    title: 'Digital Strategy & Prototyping',
    description: 'A great tool begins with a master blueprint. Our process starts with a deep-dive consultation to understand your goals and challenges. We then translate that strategy into a tangible, interactive prototype. This allows you to see, feel, and refine the solution before a single line of code is written, ensuring the final product is a perfect fit.',
    points: ['In-depth discovery sessions', 'Interactive prototyping', 'Technical architecture planning', 'Scalability and growth roadmapping'],
    color: 'indigo'
  }
];

const ServicesPage = () => {
  return (
   <>
   <Header />
    <div className="bg-white text-gray-900 font-sans">
      {/* Hero Section - Modern Minimal */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Small badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-semibold mb-6">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
            Our Services
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Services Forged for{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Your Needs
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We don't offer a menu of one-size-fits-all solutions. We offer our craftsmanship, expertise, and a partnership to build the precise digital tools your business needs to thrive.
          </p>
        </div>
      </section>

      {/* Services Section - Clean Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceItems.map((item, index) => (
              <div 
                key={index} 
                className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon and Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`flex-shrink-0 p-3 rounded-xl ${
                    item.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                    item.color === 'cyan' ? 'bg-cyan-50 text-cyan-600' :
                    item.color === 'purple' ? 'bg-purple-50 text-purple-600' :
                    'bg-indigo-50 text-indigo-600'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {item.description}
                </p>
                
                {/* Features - Compact */}
                <ul className="space-y-2">
                  {item.points.map((point, pIndex) => (
                    <li key={pIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className={`w-4 h-4 flex-shrink-0 ${
                        item.color === 'blue' ? 'text-blue-500' :
                        item.color === 'cyan' ? 'text-cyan-500' :
                        item.color === 'purple' ? 'text-purple-500' :
                        'text-indigo-500'
                      }`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl ${
                  item.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                  item.color === 'cyan' ? 'bg-gradient-to-r from-cyan-500 to-blue-500' :
                  item.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-pink-500' :
                  'bg-gradient-to-r from-indigo-500 to-blue-500'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Minimal Timeline */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-semibold mb-6">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              Our Process
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              From Blueprint to{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Digital Asset
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our collaborative process ensures we build exactly what you need, with no surprises.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-xl font-bold text-lg mb-6">
                  01
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Discover & Design
                </h3>
                <p className="text-sm text-blue-600 font-semibold mb-4">
                  The Blueprint Session
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We start with a deep dive into your business. We listen, learn, and then architect a strategic plan and interactive prototype. You see the vision before the build begins.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-cyan-300 hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 text-white rounded-xl font-bold text-lg mb-6">
                  02
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Forge & Refine
                </h3>
                <p className="text-sm text-cyan-600 font-semibold mb-4">
                  The Forging Process
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our craftsmen get to work, building your solution with clean code and intuitive design. We provide regular updates and incorporate your feedback, refining the tool as it comes to life.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg mb-6">
                  03
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Deliver & Support
                </h3>
                <p className="text-sm text-purple-600 font-semibold mb-4">
                  Lifetime Partnership
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We hand over the keys—you own it, forever. Our commitment continues with a 30-day refinement period and lifetime support, ensuring your digital asset serves you for years to come.
                </p>
              </div>
            </div>
          </div>

          {/* Simple connection line */}
          <div className="hidden md:flex justify-center items-center gap-4 mt-8">
            <div className="w-24 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
            <div className="w-24 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
            <div className="w-24 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></div>
          </div>
        </div>
      </section>

      {/* CTA Section - Clean & Modern */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-600 to-cyan-600 overflow-hidden">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to build something that truly fits?
          </h2>
          
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's move beyond the limitations of off-the-shelf software. Schedule your free consultation to discuss how a custom-forged solution can transform your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl group"
            >
              <span>Schedule Your Blueprint Session</span>
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <Link 
              to="/about" 
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl border border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              Learn About Our Process
            </Link>
          </div>

          {/* Simple trust badges */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Custom-Built</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
              </svg>
              <span>You Own It</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>Lifetime Support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
   <Footer />
   </>
  );
};

export default ServicesPage;