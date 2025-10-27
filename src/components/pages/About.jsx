import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';


// Icons for Mission Cards
const EarIcon = () => (
  <svg className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-blue-600 group-hover:text-cyan-600 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h1.392c.72 0 1.392.21 1.968.629C7.576 11.47 8 12.69 8 14c0 1.31-.424 2.53-1.64 3.371A3.39 3.39 0 014.392 18H3m0-8a2.5 2.5 0 115 0c0 1.31-.424 2.53-1.64 3.371A3.39 3.39 0 014.392 18H3" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m4-14v12a2 2 0 002 2h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2z" />
  </svg>
);

const HammerIcon = () => (
  <svg className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-blue-600 group-hover:text-cyan-600 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5-7.5-7.5 7.5-7.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.5L4.5 17.25M11.25 4.5v15" />
  </svg>
);

const SeedIcon = () => (
  <svg className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-blue-600 group-hover:text-cyan-600 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75a6 6 0 006-6v-1.75l-6-3.75-6 3.75v1.75a6 6 0 006 6z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75V12m0 0l-6-3.75M12 12l6-3.75" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v4.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75l2.25 1.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.75l-2.25 1.5" />
  </svg>
);

// Icons for Foundation Cards
const ArchitectIcon = () => (
  <svg className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-blue-600 group-hover:text-cyan-600 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75l-5.25 5.25-5.25-5.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18" />
  </svg>
);

const ArtisanIcon = () => (
  <svg className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-blue-600 group-hover:text-cyan-600 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
  </svg>
);

const ConsultantIcon = () => (
  <svg className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-blue-600 group-hover:text-cyan-600 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h15.75c.621 0 1.125.504 1.125 1.125v6.75C21 20.496 20.496 21 19.875 21H4.125A1.125 1.125 0 013 19.875v-6.75z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v10.125" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 6.375L12 3.375l2.25 3" />
  </svg>
);

// Icons for Process Timeline
const ListenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h1.392c.72 0 1.392.21 1.968.629C7.576 11.47 8 12.69 8 14c0 1.31-.424 2.53-1.64 3.371A3.39 3.39 0 014.392 18H3m0-8a2.5 2.5 0 115 0c0 1.31-.424 2.53-1.64 3.371A3.39 3.39 0 014.392 18H3m13-13l-4 4m0 0l4 4m-4-4v12" />
  </svg>
);

const BlueprintIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const ForgeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

// Sparkle Icon for decorative purposes
const SparkleIcon = ({ className = "" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0l1.5 6.5L20 8l-6.5 1.5L12 16l-1.5-6.5L4 8l6.5-1.5L12 0z" />
  </svg>
);

const AboutPage = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Stats animation data
  const stats = [
    { value: "10+", label: "Years", delay: "0ms" },
    { value: "500+", label: "Projects", delay: "200ms" },
    { value: "98%", label: "Satisfaction", delay: "400ms" }
  ];

  return (
    <>
    <Header/>
    <div className="bg-white text-gray-700 font-sans overflow-x-hidden">
      {/* Enhanced Background Elements with Parallax - Responsive */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-1/4 -left-5 sm:-left-10 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-blue-100 rounded-full blur-3xl opacity-40"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div 
          className="absolute bottom-1/4 -right-5 sm:-right-10 w-64 h-64 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] bg-cyan-100 rounded-full blur-3xl opacity-40"
          style={{ transform: `translateY(${scrollY * -0.15}px)` }}
        ></div>
        <div 
          className="absolute top-2/3 left-1/3 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-purple-100 rounded-full blur-3xl opacity-30"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        ></div>
        
        {/* Floating particles - Hidden on mobile for performance */}
        <div className="hidden sm:block absolute top-20 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
        <div className="hidden sm:block absolute top-40 right-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse opacity-50"></div>
        <div className="hidden sm:block absolute bottom-40 left-1/2 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-40"></div>
      </div>

      {/* HERO SECTION: THE PARADOX - Fully Responsive */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-[85vh] flex items-center justify-center text-center py-16 sm:py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Premium Badge with sparkles - Responsive */}
          <div className="inline-flex items-center px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl sm:rounded-3xl border border-blue-200 sm:border-2 mb-6 sm:mb-8 md:mb-10 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <SparkleIcon className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 mr-2 animate-spin" style={{ animationDuration: '3s' }} />
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-pulse mr-2 sm:mr-3"></div>
            <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider sm:tracking-widest">WHO WE ARE</span>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-pulse ml-2 sm:ml-3"></div>
            <SparkleIcon className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 ml-2 animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }} />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-tight mb-6 sm:mb-8 px-2">
            The best software is{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 text-transparent bg-clip-text">
                invisible
              </span>
              <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-2 sm:h-3 bg-cyan-300/40 -z-0 rounded"></span>
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-10 md:mb-14 font-light px-4">
            Most companies build software and expect you to adapt. We do the opposite. We listen to how{' '}
            <span className="font-bold text-blue-600">you</span> work, understand your processes, and forge a solution that fits{' '}
            <span className="font-bold text-cyan-600 italic">your</span> business—not the other way around.
          </p>

          {/* Stats Grid - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto mb-10 sm:mb-12 md:mb-16">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-white to-blue-50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: stat.delay }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 text-transparent bg-clip-text mb-2 sm:mb-3">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-gray-600 font-semibold uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button - Responsive */}
          <a 
            href="#/contact" 
            className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-black px-8 sm:px-10 md:px-14 py-3.5 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-500 shadow-2xl hover:shadow-3xl hover:scale-105 text-base sm:text-lg"
          >
            <span>Discover Our Process</span>
            <svg className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>

      {/* MISSION SECTION - Fully Responsive */}
      <section className="relative bg-gradient-to-b from-white via-blue-50/30 to-white py-16 sm:py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header - Responsive */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full border border-blue-300 mb-4 sm:mb-6 shadow-md">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full animate-pulse mr-2 sm:mr-3"></div>
              <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider">OUR MISSION</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-4 sm:mb-6 px-2">
              More than a{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 text-transparent bg-clip-text">
                  software shop
                </span>
                <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-2 sm:h-3 bg-blue-200/50 -z-0 rounded"></span>
              </span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              We believe that technology should work <span className="font-bold text-blue-600">for</span> you, not against you.
            </p>
          </div>

          {/* Mission Cards Grid - Responsive */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1 */}
            <div className="group bg-gradient-to-br from-white to-blue-50 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border-2 border-blue-200 shadow-xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-5 sm:mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <EarIcon />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors duration-300">
                We Listen First
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Before a single line of code is written, we immerse ourselves in your workflow, understanding the nuances of how you and your team operate.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-gradient-to-br from-white to-cyan-50 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border-2 border-cyan-200 shadow-xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-5 sm:mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <HammerIcon />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-3 sm:mb-4 group-hover:text-cyan-600 transition-colors duration-300">
                We Forge Solutions
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Our developers are master craftsmen, combining clean code, elegant design, and intuitive UX into a solution that feels natural from day one.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-gradient-to-br from-white to-purple-50 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border-2 border-purple-200 shadow-xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 md:col-span-1 sm:col-span-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-5 sm:mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <SeedIcon />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-3 sm:mb-4 group-hover:text-purple-600 transition-colors duration-300">
                We Plant Seeds
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Our solutions grow with your business. Scalable, maintainable, and built for the long term—not just today's needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDATION SECTION - Fully Responsive */}
      <section className="relative bg-white py-16 sm:py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header - Responsive */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full border border-purple-300 mb-4 sm:mb-6 shadow-md">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-600 rounded-full animate-pulse mr-2 sm:mr-3"></div>
              <span className="text-purple-600 font-bold text-xs sm:text-sm tracking-wider">THREE PILLARS</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-4 sm:mb-6 px-2">
              Built on a{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-transparent bg-clip-text">
                  strong foundation
                </span>
                <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-2 sm:h-3 bg-purple-200/50 -z-0 rounded"></span>
              </span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Three key philosophies guide everything we do at Gray Forge Digital
            </p>
          </div>

          {/* Foundation Cards Grid - Responsive */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1 */}
            <div className="group relative bg-gradient-to-br from-white to-blue-50 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border-2 border-blue-200 shadow-xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-400/20 to-transparent rounded-bl-full"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-5 sm:mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <ArchitectIcon />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  The Architect's Mindset
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  Every project begins with a blueprint. We map out your entire system, anticipate challenges, and plan for scalability before the first line of code.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-gradient-to-br from-white to-cyan-50 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border-2 border-cyan-200 shadow-xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-bl-full"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-5 sm:mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <ArtisanIcon />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-3 sm:mb-4 group-hover:text-cyan-600 transition-colors duration-300">
                  The Artisan's Touch
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  Code quality matters. We write clean, maintainable code with meticulous attention to detail, ensuring your software isn't just functional—it's elegant.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-gradient-to-br from-white to-purple-50 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border-2 border-purple-200 shadow-xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 overflow-hidden md:col-span-1">
              <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-purple-400/20 to-transparent rounded-bl-full"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-5 sm:mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <ConsultantIcon />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-3 sm:mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  The Consultant's Wisdom
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  We don't just execute; we advise. With a decade of experience, we guide you toward the best decisions for your unique situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE SECTION - Fully Responsive */}
      <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-16 sm:py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header - Responsive */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-300 mb-4 sm:mb-6 shadow-md">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full animate-pulse mr-2 sm:mr-3"></div>
              <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider">HOW WE WORK</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-4 sm:mb-6 px-2">
              Our{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                  proven process
                </span>
                <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-2 sm:h-3 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 -z-0 rounded"></span>
              </span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Three simple steps to transform your business with custom software
            </p>
          </div>

          {/* Timeline - Mobile: Vertical, Desktop: Horizontal with connections */}
          <div className="relative">
            {/* Desktop Timeline Line - Hidden on mobile */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-300 via-cyan-300 to-purple-300 -translate-y-1/2 z-0"></div>
            
            {/* Mobile: Vertical Stack, Desktop: Horizontal Grid */}
            <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
              {/* Step 1 - Listen */}
              <div className="relative">
                {/* Mobile vertical line connector */}
                <div className="lg:hidden absolute left-10 top-20 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 to-cyan-300"></div>
                
                <div className="flex lg:flex-col items-start lg:items-center">
                  {/* Icon Circle */}
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white font-bold ring-4 sm:ring-8 ring-white shadow-2xl hover:scale-110 transition-transform duration-500 z-20 mb-0 lg:mb-6">
                    <ListenIcon />
                  </div>
                  
                  {/* Content Card */}
                  <div className="ml-6 lg:ml-0 flex-1 lg:w-full">
                    <div className="group bg-gradient-to-br from-white to-blue-50 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border-2 border-blue-300 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 text-left lg:text-center">
                      <div className="inline-flex items-center px-4 sm:px-5 py-1.5 sm:py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 shadow-lg">
                        <span className="mr-2">01</span>
                        <span>DISCOVER</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-3 sm:mb-4">The Listening Session</h3>
                      <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                        We start by deeply understanding your business. What are your pain points? What slows you down? Through detailed discovery sessions, we learn how you operate—not how we think you should.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 - Blueprint */}
              <div className="relative">
                {/* Mobile vertical line connector */}
                <div className="lg:hidden absolute left-10 top-20 bottom-0 w-0.5 bg-gradient-to-b from-cyan-300 to-purple-300"></div>
                
                <div className="flex lg:flex-col items-start lg:items-center">
                  {/* Icon Circle */}
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center text-white font-bold ring-4 sm:ring-8 ring-white shadow-2xl hover:scale-110 transition-transform duration-500 z-20 mb-0 lg:mb-6">
                    <BlueprintIcon />
                  </div>
                  
                  {/* Content Card */}
                  <div className="ml-6 lg:ml-0 flex-1 lg:w-full">
                    <div className="group bg-gradient-to-br from-white to-cyan-50 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border-2 border-cyan-300 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 text-left lg:text-center">
                      <div className="inline-flex items-center px-4 sm:px-5 py-1.5 sm:py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 shadow-lg">
                        <span className="mr-2">02</span>
                        <span>UNDERSTAND</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-3 sm:mb-4">The Blueprint</h3>
                      <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                        After listening, we immerse ourselves in your world. We analyze your challenges and design a detailed strategic plan. This blueprint is our shared vision, outlining exactly how a custom-forged solution will integrate seamlessly into your workflow and drive tangible results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 3 - Forge */}
              <div className="relative">
                <div className="flex lg:flex-col items-start lg:items-center">
                  {/* Icon Circle */}
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold ring-4 sm:ring-8 ring-white shadow-2xl hover:scale-110 transition-transform duration-500 z-20 mb-0 lg:mb-6">
                    <ForgeIcon />
                  </div>
                  
                  {/* Content Card */}
                  <div className="ml-6 lg:ml-0 flex-1 lg:w-full">
                    <div className="group bg-gradient-to-br from-white to-purple-50 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border-2 border-purple-300 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 text-left lg:text-center">
                      <div className="inline-flex items-center px-4 sm:px-5 py-1.5 sm:py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 shadow-lg">
                        <span className="mr-2">03</span>
                        <span>CREATE</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-3 sm:mb-4">The Forging</h3>
                      <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                        With a clear blueprint approved by you, our master craftsmen get to work. Leveraging our decade of experience, we build your custom website or software with meticulous attention to detail, clean code, and intuitive design, ensuring the final product is powerful, reliable, and easy for your entire team to embrace.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING BANNER - ULTRA PREMIUM CTA - Fully Responsive */}
      <section className="relative bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-[length:200%_auto] animate-gradient py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 text-center overflow-hidden">
        {/* Animated Background Elements - Responsive */}
        <div className="absolute inset-0">
          <div className="absolute top-5 left-5 sm:top-10 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-5 right-5 sm:bottom-10 sm:right-10 w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="hidden sm:block absolute top-1/2 left-1/4 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-white/5 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '3s' }}></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-white/20 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-white/30 sm:border-2 mb-6 sm:mb-8 md:mb-10 shadow-2xl">
            <SparkleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white mr-2 sm:mr-3 animate-spin" style={{ animationDuration: '3s' }} />
            <span className="text-white font-bold tracking-wider sm:tracking-widest text-xs sm:text-sm">READY TO GET STARTED?</span>
            <SparkleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white ml-2 sm:ml-3 animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }} />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 sm:mb-8 leading-tight px-2">
            Technology that gets{' '}
            <span className="relative inline-block">
              <span className="relative z-10">out of your way</span>
              <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-2 sm:h-3 bg-white/30 -z-0 rounded"></span>
            </span>
            .
          </h2>
          
          <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 leading-relaxed max-w-3xl mx-auto font-light px-4">
            If you're tired of forcing your business to fit the software, let's have a conversation about building software that fits your business. Contact us today to start your blueprint.
          </p>
          
          {/* CTA Buttons - Responsive Stack */}
          <div className="mt-10 sm:mt-12 md:mt-14 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
            <a 
              href="#/contact" 
              className="group inline-flex items-center justify-center bg-white text-blue-600 font-black px-8 sm:px-10 md:px-12 py-3.5 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl hover:bg-gray-100 transition-all duration-500 shadow-2xl hover:shadow-3xl hover:scale-105 sm:hover:scale-110 text-base sm:text-lg"
            >
              <span>Start Your Blueprint</span>
              <svg className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            
            <a 
              href="#/about" 
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-md text-white font-bold px-8 sm:px-10 md:px-12 py-3.5 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl border border-white/30 sm:border-2 hover:bg-white/20 hover:border-white/50 transition-all duration-500 shadow-xl text-base sm:text-lg"
            >
              Learn More About Us
            </a>
          </div>

          {/* Trust indicators - Responsive */}
          <div className="mt-12 sm:mt-14 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 text-white/80 px-4">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-semibold text-sm sm:text-base">500+ Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold text-sm sm:text-base">98% Satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold text-sm sm:text-base">24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 8s ease infinite;
        }
      `}</style>
    </div>
    <Footer/>
    </>
  );
};

export default AboutPage;