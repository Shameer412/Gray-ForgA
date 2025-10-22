import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
// Icons for Mission Cards
const EarIcon = () => (
  <svg className="h-12 w-12 text-blue-600 group-hover:text-cyan-600 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h1.392c.72 0 1.392.21 1.968.629C7.576 11.47 8 12.69 8 14c0 1.31-.424 2.53-1.64 3.371A3.39 3.39 0 014.392 18H3m0-8a2.5 2.5 0 115 0c0 1.31-.424 2.53-1.64 3.371A3.39 3.39 0 014.392 18H3" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m4-14v12a2 2 0 002 2h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2z" />
  </svg>
);

const HammerIcon = () => (
  <svg className="h-12 w-12 text-blue-600 group-hover:text-cyan-600 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5-7.5-7.5 7.5-7.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.5L4.5 17.25M11.25 4.5v15" />
  </svg>
);

const SeedIcon = () => (
  <svg className="h-12 w-12 text-blue-600 group-hover:text-cyan-600 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75a6 6 0 006-6v-1.75l-6-3.75-6 3.75v1.75a6 6 0 006 6z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75V12m0 0l-6-3.75M12 12l6-3.75" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v4.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75l2.25 1.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.75l-2.25 1.5" />
  </svg>
);

// Icons for Foundation Cards
const ArchitectIcon = () => (
  <svg className="h-12 w-12 text-blue-600 group-hover:text-cyan-600 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75l-5.25 5.25-5.25-5.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18" />
  </svg>
);

const ArtisanIcon = () => (
  <svg className="h-12 w-12 text-blue-600 group-hover:text-cyan-600 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
  </svg>
);

const ConsultantIcon = () => (
  <svg className="h-12 w-12 text-blue-600 group-hover:text-cyan-600 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h15.75c.621 0 1.125.504 1.125 1.125v6.75C21 20.496 20.496 21 19.875 21H4.125A1.125 1.125 0 013 19.875v-6.75z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v10.125" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 6.375L12 3.375l2.25 3" />
  </svg>
);

// Icons for Process Timeline
const ListenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h1.392c.72 0 1.392.21 1.968.629C7.576 11.47 8 12.69 8 14c0 1.31-.424 2.53-1.64 3.371A3.39 3.39 0 014.392 18H3m0-8a2.5 2.5 0 115 0c0 1.31-.424 2.53-1.64 3.371A3.39 3.39 0 014.392 18H3m13-13l-4 4m0 0l4 4m-4-4v12" />
  </svg>
);

const BlueprintIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const ForgeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
      {/* Enhanced Background Elements with Parallax */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-1/4 -left-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div 
          className="absolute bottom-1/4 -right-10 w-[500px] h-[500px] bg-cyan-100 rounded-full blur-3xl opacity-40"
          style={{ transform: `translateY(${scrollY * -0.15}px)` }}
        ></div>
        <div 
          className="absolute top-2/3 left-1/3 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-30"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        ></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-40 right-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-40 left-1/2 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-40"></div>
      </div>

      {/* HERO SECTION: THE PARADOX */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-center py-28 px-4">
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Premium Badge with sparkles */}
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl border-2 border-blue-200 mb-10 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <SparkleIcon className="w-4 h-4 text-blue-500 mr-2 animate-spin" style={{ animationDuration: '3s' }} />
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse mr-3"></div>
            <span className="text-blue-700 font-bold text-sm tracking-wide">ABOUT GRAY FORGE DIGITAL</span>
            <SparkleIcon className="w-4 h-4 text-cyan-500 ml-2 animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }} />
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-10 leading-tight">
            Your Business is{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Unique</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-blue-200 -z-0"></span>
            </span>
            .
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent block mt-4 animate-gradient bg-[length:200%_auto]">
              Your Technology Should Be, Too.
            </span>
          </h1>
          
          <p className="mt-10 text-xl md:text-2xl leading-relaxed text-gray-600 max-w-4xl mx-auto font-light">
            The modern business world presents a frustrating paradox. You're told that technology is the key to efficiency and growth, yet the available options often feel like <span className="font-semibold text-gray-800">traps</span>. You're forced to choose between overly complicated, enterprise-level systems that drain your budget, or generic, 'one-size-fits-all' apps that force you to contort your unique workflow to fit their rigid limitations.
          </p>

          <div className="mt-8 inline-block px-8 py-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl border border-blue-200">
            <p className="text-lg text-gray-700 italic font-medium">
              This constant compromise forces your vision into a generic box.{' '}
              <span className="font-bold text-blue-700">We believe this is fundamentally wrong.</span>
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 border-2 border-blue-400 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* "WHO WE ARE" SECTION: PART 1 - OUR IDENTITY */}
      <section className="relative bg-gradient-to-b from-white to-gray-50 py-28 md:py-36 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-200 mb-8 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse mr-3"></div>
              <span className="text-blue-700 font-bold tracking-wide text-sm">OUR STORY</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              Who We{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Are
              </span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="text-2xl font-light">
                We are{' '}
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  Gray Forge Digital
                </span>
                . At our core, we are a collective of thinkers, problem-solvers, and digital craftsmen united by a shared passion for building things the right way.
              </p>
              <p className="text-xl">
                Our story didn't begin in a boardroom with a plan to sell software; it began over a decade ago, in the trenches, working with businesses just like yours.
              </p>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="group relative text-center p-6 bg-gradient-to-br from-white to-blue-50 rounded-2xl border-2 border-blue-100 hover:border-blue-300 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                  style={{ animationDelay: stat.delay }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                  <SparkleIcon className="absolute top-2 right-2 w-4 h-4 text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative z-10">
            <div className="relative group">
              {/* Multiple gradient layers for depth */}
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl blur-xl opacity-40"></div>
              
              <div className="relative overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/teamwork/800/600" 
                  alt="A collaborative team working in a modern office" 
                  className="relative w-full h-[550px] object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="font-bold text-2xl">10+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* "WHO WE ARE" SECTION: PART 2 - THE CATALYST */}
      <section className="relative bg-white py-28 md:py-36 px-4 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
            The Experience That Became Our{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Catalyst
              </span>
              <svg className="absolute -top-4 -right-4 w-8 h-8 text-cyan-400 opacity-50" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </span>
          </h2>
          
          <div className="space-y-8 text-left mt-16">
            <div className="group relative bg-gradient-to-br from-white to-gray-50 p-10 rounded-3xl border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="absolute top-6 left-6 w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                <span className="text-3xl">😔</span>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed pl-24">
                Time and again, we watched as brilliant, hardworking people were let down by technology. We saw their elegant processes get broken by clunky software and their potential get capped by tools that couldn't grow with them.
              </p>
            </div>
            
            <div className="group relative bg-gradient-to-br from-white to-gray-50 p-10 rounded-3xl border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="absolute top-6 left-6 w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                <span className="text-3xl">💸</span>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed pl-24">
                They were paying for features they never used while missing the one simple function that would save them hours. It became clear to us that the tech industry wasn't listening.
              </p>
            </div>
            
            <div className="group relative bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 p-12 rounded-3xl border-2 border-blue-300 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute top-6 left-6 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                <span className="text-3xl">💡</span>
              </div>
              <div className="pl-24">
                <p className="font-black text-2xl text-gray-900 mb-4">
                  That experience led us to found Gray Forge Digital with a clear purpose:
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  To be the antidote to impersonal, inflexible technology. We are not just a development shop that takes orders;{' '}
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                    we are your strategic partners
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* "THE FOUNDATION" - THREE PILLARS */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-28 md:py-36 px-4">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl border-2 border-blue-200 mb-8 shadow-lg">
              <span className="text-blue-700 font-bold tracking-wide text-sm">OUR FOUNDATION</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              Built on Three{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Pillars
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-light">
              We are builders, partners, and visionaries who bring your ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: <ArchitectIcon />, title: "The Architects", desc: "We are the architects who transform complex challenges into elegant, scalable solutions.", gradient: "from-blue-500 to-cyan-500" },
              { icon: <ArtisanIcon />, title: "The Artisans", desc: "We are the artisans who craft each line of code with precision, care, and a deep respect for quality.", gradient: "from-cyan-500 to-blue-500" },
              { icon: <ConsultantIcon />, title: "The Consultants", desc: "We are the consultants who measure our success by your long-term success.", gradient: "from-purple-500 to-pink-500" }
            ].map((pillar, index) => (
              <div 
                key={index}
                className="group relative bg-white p-12 rounded-3xl border-2 border-gray-200 hover:border-transparent shadow-xl hover:shadow-3xl transform hover:-translate-y-3 transition-all duration-700 overflow-hidden"
              >
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                
                <div className="relative z-10">
                  <div className="mb-8 inline-block p-5 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    {pillar.icon}
                  </div>
                  
                  <h3 className="text-3xl font-black text-gray-900 mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-500">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {pillar.desc}
                  </p>
                </div>

                {/* Corner accent */}
                <SparkleIcon className="absolute top-4 right-4 w-6 h-6 text-blue-300 opacity-0 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* "OUR MISSION" SECTION (PREMIUM CARDS) */}
      <section className="relative bg-gradient-to-b from-white to-gray-50 py-28 md:py-36 px-4">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl border-2 border-blue-200 mb-8 shadow-lg">
            <span className="text-blue-700 font-bold tracking-wide text-sm">WHAT DRIVES US</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
            Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Mission
            </span>
          </h2>
          
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-20 leading-relaxed font-light">
            Our mission is to democratize custom technology, making it an accessible and empowering force for every business, regardless of its size. We are driven by three core principles:
          </p>
          
          <div className="grid md:grid-cols-3 gap-10 text-left">
            {[
              { icon: <EarIcon />, title: "To Listen with Intent", desc: "We go beyond the surface-level requirements to truly understand the heart of your business. Our first job is always to learn your reality so that our solutions are practical, effective, and meaningful.", color: "blue", emoji: "👂" },
              { icon: <HammerIcon />, title: "To Forge with Purpose", desc: "We wholeheartedly reject the 'one-size-fits-all' model. We instead commit to crafting tailor-fit digital solutions that feel like a natural, intuitive extension of your team and your brand.", color: "cyan", emoji: "🔨" },
              { icon: <SeedIcon />, title: "To Deliver Enduring Value", desc: "We build tools that not only solve today's challenges but also provide a robust, scalable foundation for your future ambitions. We aim to turn a necessary expense into a powerful, permanent asset for your company.", color: "purple", emoji: "🌱" }
            ].map((mission, index) => (
              <div 
                key={index}
                className="group relative bg-white p-12 rounded-3xl border-2 border-gray-200 hover:border-transparent shadow-2xl hover:shadow-3xl transform hover:-translate-y-4 transition-all duration-700 overflow-hidden"
              >
                {/* Dynamic gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  mission.color === 'blue' ? 'from-blue-500/10 via-blue-500/5' : 
                  mission.color === 'cyan' ? 'from-cyan-500/10 via-cyan-500/5' : 
                  'from-purple-500/10 via-purple-500/5'
                } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                
                <div className="relative z-10">
                  {/* Icon container with emoji */}
                  <div className="relative mb-8 inline-block">
                    <div className={`p-6 ${
                      mission.color === 'blue' ? 'bg-gradient-to-br from-blue-100 to-cyan-100' :
                      mission.color === 'cyan' ? 'bg-gradient-to-br from-cyan-100 to-blue-100' :
                      'bg-gradient-to-br from-purple-100 to-pink-100'
                    } rounded-3xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                      {mission.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-xl group-hover:scale-125 transition-transform duration-500">
                      {mission.emoji}
                    </div>
                  </div>
                  
                  <h3 className={`text-3xl font-black text-gray-900 mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${
                    mission.color === 'blue' ? 'group-hover:from-blue-600 group-hover:to-cyan-600' :
                    mission.color === 'cyan' ? 'group-hover:from-cyan-600 group-hover:to-blue-600' :
                    'group-hover:from-purple-600 group-hover:to-pink-600'
                  } transition-all duration-500`}>
                    {mission.title}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {mission.desc}
                  </p>
                </div>

                {/* Decorative corner */}
                <div className={`absolute bottom-4 right-4 w-20 h-20 rounded-full ${
                  mission.color === 'blue' ? 'bg-blue-100' :
                  mission.color === 'cyan' ? 'bg-cyan-100' :
                  'bg-purple-100'
                } opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-700`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* "OUR PROCESS" SECTION (ANIMATED TIMELINE) */}
      <section className="relative bg-white py-28 md:py-36 px-4">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl border-2 border-blue-200 mb-8 shadow-lg">
              <span className="text-blue-700 font-bold tracking-wide text-sm">HOW WE WORK</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              Our Process: The Art of the{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Forge
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Our name reflects our method. A forge is a place of deliberate creation, where raw potential is transformed into a specific, purpose-built tool. Our process follows the same timeless principles:
            </p>
          </div>
          
          <div className="relative">
            {/* Enhanced Timeline Line with glowing effect */}
            <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-300 via-cyan-300 to-purple-300 -translate-x-1/2 rounded-full shadow-lg"></div>
            <div className="absolute left-1/2 top-0 h-full w-2 bg-gradient-to-b from-blue-200/50 via-cyan-200/50 to-purple-200/50 -translate-x-1/2 rounded-full blur-sm"></div>
            
            {/* Step 1 - Listen */}
            <div className="relative mb-24 flex justify-start items-center w-full">
              <div className="w-1/2 pr-16 text-right">
                <div className="group bg-gradient-to-br from-white to-blue-50 p-10 rounded-3xl border-2 border-blue-300 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                  <div className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-bold mb-6 shadow-lg">
                    <span className="mr-2">01</span>
                    <span>LISTEN</span>
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-4">The Consultation</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    It all begins with a conversation. We don't come with a sales pitch; we come with open ears and insightful questions. We want to learn about your vision, your daily operations, your team, and the specific roadblocks that are holding you back.
                  </p>
                </div>
              </div>
              
              <div className="absolute left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white font-bold ring-8 ring-white shadow-2xl hover:scale-125 transition-transform duration-500 z-20">
                <ListenIcon />
              </div>
              <div className="w-1/2"></div>
            </div>
            
            {/* Step 2 - Blueprint */}
            <div className="relative mb-24 flex justify-end items-center w-full">
              <div className="w-1/2"></div>
              <div className="absolute left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center text-white font-bold ring-8 ring-white shadow-2xl hover:scale-125 transition-transform duration-500 z-20">
                <BlueprintIcon />
              </div>
              <div className="w-1/2 pl-16 text-left">
                <div className="group bg-gradient-to-br from-white to-cyan-50 p-10 rounded-3xl border-2 border-cyan-300 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                  <div className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-sm font-bold mb-6 shadow-lg">
                    <span className="mr-2">02</span>
                    <span>UNDERSTAND</span>
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-4">The Blueprint</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    After listening, we immerse ourselves in your world. We analyze your challenges and design a detailed strategic plan. This blueprint is our shared vision, outlining exactly how a custom-forged solution will integrate seamlessly into your workflow and drive tangible results.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Step 3 - Forge */}
            <div className="relative flex justify-start items-center w-full">
              <div className="w-1/2 pr-16 text-right">
                <div className="group bg-gradient-to-br from-white to-purple-50 p-10 rounded-3xl border-2 border-purple-300 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                  <div className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-bold mb-6 shadow-lg">
                    <span className="mr-2">03</span>
                    <span>CREATE</span>
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-4">The Forging</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    With a clear blueprint approved by you, our master craftsmen get to work. Leveraging our decade of experience, we build your custom website or software with meticulous attention to detail, clean code, and intuitive design, ensuring the final product is powerful, reliable, and easy for your entire team to embrace.
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold ring-8 ring-white shadow-2xl hover:scale-125 transition-transform duration-500 z-20">
                <ForgeIcon />
              </div>
              <div className="w-1/2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING BANNER - ULTRA PREMIUM CTA */}
      <section className="relative bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-[length:200%_auto] animate-gradient py-32 px-4 text-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-52 h-52 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '3s' }}></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-md rounded-3xl border-2 border-white/30 mb-10 shadow-2xl">
            <SparkleIcon className="w-5 h-5 text-white mr-3 animate-spin" style={{ animationDuration: '3s' }} />
            <span className="text-white font-bold tracking-widest text-sm">READY TO GET STARTED?</span>
            <SparkleIcon className="w-5 h-5 text-white ml-3 animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }} />
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
            Technology that gets{' '}
            <span className="relative inline-block">
              <span className="relative z-10">out of your way</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-white/30 -z-0 rounded"></span>
            </span>
            .
          </h2>
          
          <p className="mt-8 text-2xl text-white/95 leading-relaxed max-w-3xl mx-auto font-light">
            If you're tired of forcing your business to fit the software, let's have a conversation about building software that fits your business. Contact us today to start your blueprint.
          </p>
          
          <div className="mt-14 flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="#/contact" 
              className="group inline-flex items-center justify-center bg-white text-blue-600 font-black px-12 py-5 rounded-2xl hover:bg-gray-100 transition-all duration-500 shadow-2xl hover:shadow-3xl hover:scale-110 text-lg"
            >
              <span>Start Your Blueprint</span>
              <svg className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            
            <a 
              href="#/about" 
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-md text-white font-bold px-12 py-5 rounded-2xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-500 shadow-xl text-lg"
            >
              Learn More About Us
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex items-center justify-center gap-12 text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-semibold">500+ Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">98% Satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">24/7 Support</span>
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