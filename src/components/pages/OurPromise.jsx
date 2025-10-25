import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

// Enhanced Icons with better styling
const QualityIcon = () => (
  <div className="relative">
    <div className="absolute inset-0 bg-blue-500 rounded-xl blur-md opacity-20"></div>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  </div>
);

const SupportIcon = () => (
  <div className="relative">
    <div className="absolute inset-0 bg-cyan-500 rounded-xl blur-md opacity-20"></div>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-cyan-600 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  </div>
);

const OwnershipIcon = () => (
  <div className="relative">
    <div className="absolute inset-0 bg-purple-500 rounded-xl blur-md opacity-20"></div>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-purple-600 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  </div>
);

const PartnershipIcon = () => (
  <div className="relative">
    <div className="absolute inset-0 bg-indigo-500 rounded-xl blur-md opacity-20"></div>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-indigo-600 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  </div>
);

const promiseItems = [
  {
    icon: <QualityIcon />,
    title: 'Craftsmanship Quality',
    description: 'Every line of code is written with precision and care. We deliver solutions that are not just functional, but exceptional—built to perform flawlessly and stand the test of time.',
    features: ['Pixel-perfect implementation', 'Clean, maintainable code', 'Rigorous testing protocols', 'Performance optimization'],
    gradient: 'from-blue-500 to-cyan-500',
    color: 'blue'
  },
  {
    icon: <SupportIcon />,
    title: 'Lifetime Support',
    description: 'Our relationship doesn\'t end at delivery. We provide ongoing support and maintenance to ensure your digital assets continue to perform optimally as your business evolves.',
    features: ['30-day refinement period', 'Lifetime technical support', 'Regular security updates', 'Performance monitoring'],
    gradient: 'from-cyan-500 to-blue-500',
    color: 'cyan'
  },
  {
    icon: <OwnershipIcon />,
    title: 'Complete Ownership',
    description: 'You own 100% of your digital assets—code, design, and everything in between. No licensing fees, no platform restrictions, just complete control over your digital future.',
    features: ['Full source code access', 'No recurring platform fees', 'Complete data ownership', 'Unlimited customization'],
    gradient: 'from-purple-500 to-pink-500',
    color: 'purple'
  },
  {
    icon: <PartnershipIcon />,
    title: 'True Partnership',
    description: 'We become an extension of your team, invested in your success. We take the time to understand your business deeply and provide strategic guidance beyond just technical implementation.',
    features: ['Dedicated project team', 'Strategic business guidance', 'Transparent communication', 'Flexible collaboration'],
    gradient: 'from-indigo-500 to-blue-500',
    color: 'indigo'
  }
];

const OurPromisePage = () => {
  return (
    <>
      <Header />
      <div className="bg-white text-gray-900 font-sans overflow-hidden">
        
        {/* Enhanced Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 py-20">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-32 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white/90 text-sm font-semibold mb-8">
              <div className="w-2 h-2 bg-cyan-300 rounded-full animate-pulse"></div>
              Our Unwavering Commitment
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Our Promise to{' '}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                You
              </span>
            </h1>
            
            <div className="w-32 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8 rounded-full"></div>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12">
              We don't just build software—we build lasting partnerships. Our commitment to excellence, transparency, and your success is the foundation of everything we create together.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-white/80">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span>100% Client Satisfaction</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                <span>Lifetime Support</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <span>Complete Ownership</span>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
            </div>
          </div>
        </section>

        {/* Enhanced Promises Grid Section */}
        <section className="py-24 sm:py-32 bg-gradient-to-b from-white to-gray-50/30 relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, #3b82f6 2px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-semibold mb-6">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                Our Core Promises
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Built on a Foundation of{' '}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Trust & Excellence
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                These aren't just promises—they're the principles that guide every decision we make and every line of code we write.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {promiseItems.map((item, index) => (
                <div 
                  key={index} 
                  className="group relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent"
                  style={{
                    background: 'linear-gradient(135deg, white 0%, #f8fafc 100%)'
                  }}
                >
                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Animated Corner Accents */}
                  <div className={`absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-3xl`}>
                    <div className={`absolute top-0 right-0 w-6 h-6 bg-gradient-to-bl ${item.gradient} rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200`}></div>
                  </div>

                  <div className="flex items-start gap-6 mb-8">
                    <div className="flex-shrink-0 transform group-hover:scale-110 transition-transform duration-500">
                      {item.icon}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Enhanced Features List */}
                  <ul className="space-y-4">
                    {item.features.map((feature, fIndex) => (
                      <li 
                        key={fIndex} 
                        className="flex items-center gap-4 p-3 rounded-xl bg-gray-50/50 group-hover:bg-white group-hover:shadow-sm transition-all duration-300"
                      >
                        <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-r ${item.gradient} flex items-center justify-center`}>
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom Gradient Line */}
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r ${item.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-8`}></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Commitment Process Section */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 rounded-full text-cyan-600 text-sm font-semibold mb-6">
                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                Our Process
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                How We Deliver on{' '}
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Every Promise
                </span>
              </h2>
            </div>

            {/* Enhanced Timeline */}
            <div className="relative">
              {/* Connection Line */}
              <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-full"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {[
                  {
                    step: "01",
                    title: "Deep Understanding",
                    subtitle: "Discovery Phase",
                    description: "We immerse ourselves in your business, goals, and challenges to build solutions that truly fit your needs.",
                    gradient: "from-blue-500 to-cyan-500",
                    icon: "🔍"
                  },
                  {
                    step: "02",
                    title: "Craft & Build",
                    subtitle: "Development Phase", 
                    description: "Our experts craft your solution with precision, using cutting-edge technologies and best practices.",
                    gradient: "from-cyan-500 to-purple-500",
                    icon: "⚡"
                  },
                  {
                    step: "03", 
                    title: "Lifetime Partnership",
                    subtitle: "Support Phase",
                    description: "We stand by our work forever with ongoing support, updates, and enhancements as you grow.",
                    gradient: "from-purple-500 to-indigo-500",
                    icon: "🤝"
                  }
                ].map((step, index) => (
                  <div key={index} className="relative group">
                    <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-3xl p-8 border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500">
                      {/* Step Number */}
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${step.gradient} text-white rounded-2xl font-bold text-xl mb-6 group-hover:scale-110 transition-transform duration-500`}>
                        {step.step}
                      </div>
                      
                      {/* Icon */}
                      <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm font-semibold bg-gradient-to-r bg-clip-text text-transparent mb-4" style={{
                        backgroundImage: `linear-gradient(135deg, ${step.gradient.replace('from-', '').replace('to-', '').replace('500', '600').split(' ').join(', ')})`
                      }}>
                        {step.subtitle}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 text-white relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-400 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { number: "100%", label: "Client Satisfaction", suffix: "Guaranteed" },
                { number: "24/7", label: "Support", suffix: "Always Available" },
                { number: "0", label: "Hidden Costs", suffix: "Total Transparency" },
                { number: "∞", label: "Partnership", suffix: "Lifetime Commitment" }
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105">
                    <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-2 group-hover:from-cyan-200 group-hover:to-blue-200 transition-all duration-500">
                      {stat.number}
                    </div>
                    <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
                    <div className="text-sm text-cyan-200/80">{stat.suffix}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-200/20 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-blue-600 text-sm font-semibold mb-6 border border-blue-100">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              Ready to Get Started?
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Build Something{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Extraordinary
              </span>{' '}
              Together
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join the growing number of businesses that have transformed their digital presence with our unwavering commitment to quality and partnership.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/contact" 
                className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold px-12 py-4 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10 flex items-center gap-3">
                  Start Your Project
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              
              <Link 
                to="/portfolio" 
                className="group bg-white text-gray-700 font-semibold px-8 py-4 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-3">
                  View Our Work
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-8 mt-16 text-gray-500 text-sm">
              {['No Contracts Required', '30-Day Money Back', 'Free Consultation', 'Flexible Payment Plans'].map((badge, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default OurPromisePage;