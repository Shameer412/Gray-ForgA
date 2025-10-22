import React from 'react';

const WhoWeAreSection = () => {
  return (
    <section className="relative bg-white py-24 px-4 overflow-hidden">
      {/* Creative Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs - Symmetrically Placed */}
        <div className="absolute top-20 left-20 w-80 h-80 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob-smooth"></div>
        <div className="absolute top-20 right-20 w-80 h-80 bg-purple-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob-smooth animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-pink-400/8 rounded-full mix-blend-multiply filter blur-3xl animate-blob-smooth animation-delay-4000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(59,130,246,0.04)_1px,transparent_0)] bg-[size:50px_50px]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header - Centered */}
        <div className="text-center mb-20 animate-fade-in-down">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 shadow-lg mb-6">
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping-smooth absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
            </div>
            <span className="text-blue-600 text-sm font-bold tracking-wide">ABOUT US</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-4">
            Who We{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                Are
              </span>
              <svg className="absolute -bottom-3 left-0 w-full" height="12" viewBox="0 0 200 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 6 Q 50 0, 100 6 T 200 6" stroke="url(#grad-underline)" strokeWidth="3" fill="none" className="animate-draw-line"/>
                <defs>
                  <linearGradient id="grad-underline" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: 'rgb(37, 99, 235)'}} />
                    <stop offset="100%" style={{stopColor: 'rgb(236, 72, 153)'}} />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A passionate team dedicated to transforming businesses through innovative digital solutions
          </p>
        </div>

        {/* Main Content - Two Equal Columns */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left Column - Story Content */}
          <div className="space-y-6 animate-slide-in-left">
            {/* Story Card 1 */}
            <div className="group bg-gradient-to-br from-white to-blue-50/30 p-8 rounded-3xl border border-blue-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 h-full">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Gray Forge Digital</h3>
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Est. 2014</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                At our core, we are a collective of{' '}
                <span className="font-bold text-blue-600">thinkers, problem-solvers, and digital craftsmen</span> united by a shared passion for building things the right way.
              </p>
            </div>

            {/* Story Card 2 */}
            <div className="group bg-gradient-to-br from-white to-purple-50/30 p-8 rounded-3xl border border-purple-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 h-full">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">Our Journey</h3>
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">The Beginning</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                Our story didn't begin in a boardroom with a plan to sell software; it began{' '}
                <span className="font-bold text-purple-600">over a decade ago, in the trenches</span>, working with businesses just like yours.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-slide-in-right h-full">
            {/* Main Image Container - Same Height as Left Cards */}
            <div className="relative group h-full min-h-[500px]">
              {/* Decorative Background Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-3xl blur-2xl animate-float-slow"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-400/30 to-cyan-400/30 rounded-3xl blur-2xl animate-float-slow animation-delay-1000"></div>
              
              {/* Image Wrapper */}
              <div className="relative overflow-hidden rounded-3xl h-full">
                {/* Main Image */}
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=700&fit=crop" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
                
                {/* Bottom Info Card */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-white/95 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/20">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 mb-1">Trusted Partner</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">Building digital excellence together</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Corner Accents - Symmetrical */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-4 border-blue-600 rounded-2xl transform rotate-12 opacity-30 group-hover:rotate-45 group-hover:opacity-50 transition-all duration-500"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 border-4 border-purple-600 rounded-2xl transform -rotate-12 opacity-30 group-hover:-rotate-45 group-hover:opacity-50 transition-all duration-500"></div>
            </div>
          </div>
        </div>

        {/* Stats Grid - Perfectly Symmetrical 2x2 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 animate-fade-in-smooth animation-delay-500">
          {/* Stat 1 */}
          <div className="group relative bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 text-center">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-5xl font-black text-white mb-2">10+</p>
              <p className="text-blue-100 font-semibold text-sm uppercase tracking-wide">Years</p>
              <div className="mt-4 h-1 w-0 bg-white/30 rounded-full mx-auto group-hover:w-full transition-all duration-500"></div>
            </div>
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full"></div>
          </div>

          {/* Stat 2 */}
          <div className="group relative bg-gradient-to-br from-purple-500 to-purple-600 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 text-center">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-5xl font-black text-white mb-2">150+</p>
              <p className="text-purple-100 font-semibold text-sm uppercase tracking-wide">Clients</p>
              <div className="mt-4 h-1 w-0 bg-white/30 rounded-full mx-auto group-hover:w-full transition-all duration-500"></div>
            </div>
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full"></div>
          </div>

          {/* Stat 3 */}
          <div className="group relative bg-gradient-to-br from-pink-500 to-pink-600 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 text-center">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <p className="text-5xl font-black text-white mb-2">500+</p>
              <p className="text-pink-100 font-semibold text-sm uppercase tracking-wide">Projects</p>
              <div className="mt-4 h-1 w-0 bg-white/30 rounded-full mx-auto group-hover:w-full transition-all duration-500"></div>
            </div>
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full"></div>
          </div>

          {/* Stat 4 */}
          <div className="group relative bg-gradient-to-br from-cyan-500 to-cyan-600 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 text-center">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="text-5xl font-black text-white mb-2">98%</p>
              <p className="text-cyan-100 font-semibold text-sm uppercase tracking-wide">Satisfaction</p>
              <div className="mt-4 h-1 w-0 bg-white/30 rounded-full mx-auto group-hover:w-full transition-all duration-500"></div>
            </div>
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full"></div>
          </div>
        </div>

        {/* Bottom Value Props - Perfectly Symmetrical 3 Columns */}
        <div className="grid md:grid-cols-3 gap-8 animate-fade-in-smooth animation-delay-700">
          {/* Value 1 */}
          <div className="group relative bg-gradient-to-br from-white to-blue-50/50 p-8 rounded-3xl border border-blue-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full"></div>
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-xl mb-6 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">Innovation First</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Cutting-edge solutions to traditional business challenges</p>
              <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all duration-300">
                <span className="text-sm">Learn More</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Value 2 */}
          <div className="group relative bg-gradient-to-br from-white to-purple-50/50 p-8 rounded-3xl border border-purple-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full"></div>
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl mb-6 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">Client Focused</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Building lasting partnerships based on trust and transparency</p>
              <div className="flex items-center justify-center gap-2 text-purple-600 font-semibold group-hover:gap-3 transition-all duration-300">
                <span className="text-sm">Learn More</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Value 3 */}
          <div className="group relative bg-gradient-to-br from-white to-pink-50/50 p-8 rounded-3xl border border-pink-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500/10 to-transparent rounded-bl-full"></div>
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl mb-6 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors duration-300">Quality Driven</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Every line of code crafted with precision and care</p>
              <div className="flex items-center justify-center gap-2 text-pink-600 font-semibold group-hover:gap-3 transition-all duration-300">
                <span className="text-sm">Learn More</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob-smooth {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -40px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes ping-smooth {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }

        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fade-in-smooth {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes draw-line {
          from { stroke-dasharray: 200; stroke-dashoffset: 200; }
          to { stroke-dashoffset: 0; }
        }

        .animate-blob-smooth { animation: blob-smooth 10s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-ping-smooth { animation: ping-smooth 2s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-fade-in-down { animation: fade-in-down 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-slide-in-left { animation: slide-in-left 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-slide-in-right { animation: slide-in-right 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in-smooth { animation: fade-in-smooth 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-draw-line { animation: draw-line 2s ease-out forwards; }

        .animation-delay-500 { animation-delay: 0.5s; opacity: 0; }
        .animation-delay-700 { animation-delay: 0.7s; opacity: 0; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
};

export default WhoWeAreSection;