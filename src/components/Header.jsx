import React, { useState, useEffect } from 'react';

// Icons
import { FaCog } from 'react-icons/fa';
import { FiPhone, FiMail, FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  // Effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { 
      name: 'Home', 
      href: '/', // Route for Home
      animation: 'bounce'
    },
    { 
      name: 'About Us', 
      href: '/about',
      animation: 'pulse'
    },
    { 
      name: 'Services', 
      href: '/services',
      animation: 'shake'
    },
    { 
      name: 'Why Choose Us', 
      href: '/why-us',
      animation: 'tada'
    },
    { 
      name: 'Contact', 
      href: '/contact', // Route for Contact Us
      animation: 'heartbeat'
    },
  ];

  // Animation classes mapping
  const getAnimationClass = (animationType, isActive) => {
    if (!isActive) return '';
    
    const baseClasses = "inline-block";
    const animationClasses = {
      bounce: "animate-bounce",
      pulse: "animate-pulse",
      shake: "animate-shake",
      tada: "animate-tada",
      heartbeat: "animate-heartbeat"
    };
    
    return `${baseClasses} ${animationClasses[animationType] || ''}`;
  };

  return (
    <>
      {/* ===== Top Bar ===== */}
      <div className="hidden md:block bg-gray-50 border-b border-gray-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-2">
          <div className="flex items-center space-x-6 text-xs text-gray-600">
            <a href="tel:(123) 456-7890" className="flex items-center space-x-2 hover:text-blue-600 transition-colors duration-300"><FiPhone /><span>(123) 456-7890</span></a>
            <a href="mailto:support@grayforgedigital.com" className="flex items-center space-x-2 hover:text-blue-600 transition-colors duration-300"><FiMail /><span>support@grayforgedigital.com</span></a>
          </div>
          <Link to="/contact" className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 text-sm">Free Consultation</Link>
        </div>
      </div>

      {/* ===== Main Navigation Bar ===== */}
      <header className={`font-poppins w-full bg-white transition-all duration-300 ${isSticky ? 'sticky top-0 z-50 shadow-md' : 'relative'}`}>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <FaCog className="h-8 w-8 text-blue-600 group-hover:rotate-180 transition-transform duration-500" />
              <span className="text-2xl font-bold text-gray-800 tracking-wide group-hover:text-blue-600 transition-colors duration-300">Gray Forge <span className="font-light">Digital</span></span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <Link 
                  key={link.name} 
                  to={link.href}
                  className="relative text-gray-700 font-medium transition-all duration-300 hover:text-blue-600 group/nav-item"
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {/* Unique background animations for each item */}
                  <div className={`
                    absolute inset-0 rounded-lg -z-10 transition-all duration-300 opacity-0 group-hover/nav-item:opacity-100
                    ${index === 0 ? 'bg-gradient-to-r from-blue-100 to-purple-100 group-hover/nav-item:scale-110' : ''}
                    ${index === 1 ? 'bg-gradient-to-r from-green-100 to-blue-100 group-hover/nav-item:rotate-2' : ''}
                    ${index === 2 ? 'bg-gradient-to-r from-yellow-100 to-orange-100 group-hover/nav-item:skew-x-3' : ''}
                    ${index === 3 ? 'bg-gradient-to-r from-pink-100 to-red-100 group-hover/nav-item:scale-105' : ''}
                    ${index === 4 ? 'bg-gradient-to-r from-purple-100 to-pink-100 group-hover/nav-item:-rotate-1' : ''}
                  `}></div>
                  
                  {/* Text with unique animation */}
                  <span className={getAnimationClass(link.animation, activeIndex === index)}>
                    {link.name}
                  </span>
                  
                  {/* Unique underline animations */}
                  <div className={`
                    absolute bottom-[-4px] left-0 h-0.5 bg-blue-600 transition-all duration-500
                    ${index === 0 ? 'w-0 group-hover/nav-item:w-full group-hover/nav-item:bg-gradient-to-r from-blue-600 to-purple-600' : ''}
                    ${index === 1 ? 'w-0 group-hover/nav-item:w-full group-hover/nav-item:bg-gradient-to-r from-green-600 to-blue-600 group-hover/nav-item:left-2' : ''}
                    ${index === 2 ? 'w-0 group-hover/nav-item:w-full group-hover/nav-item:bg-gradient-to-r from-yellow-500 to-orange-600 group-hover/nav-item:scale-x-150' : ''}
                    ${index === 3 ? 'w-0 group-hover/nav-item:w-full group-hover/nav-item:bg-gradient-to-r from-pink-600 to-red-600 group-hover/nav-item:rounded-full' : ''}
                    ${index === 4 ? 'w-0 group-hover/nav-item:w-full group-hover/nav-item:bg-gradient-to-r from-purple-600 to-pink-600 group-hover/nav-item:animate-pulse' : ''}
                  `}></div>
                  
                  {/* Floating dots for some items */}
                  {(index === 1 || index === 3) && (
                    <div className="absolute -top-2 -right-2 flex space-x-1 opacity-0 group-hover/nav-item:opacity-100 transition-opacity duration-300">
                      <div className={`w-1 h-1 rounded-full ${index === 1 ? 'bg-green-500' : 'bg-pink-500'} animate-bounce`}></div>
                      <div className={`w-1 h-1 rounded-full ${index === 1 ? 'bg-green-500' : 'bg-pink-500'} animate-bounce`} style={{animationDelay: '0.1s'}}></div>
                      <div className={`w-1 h-1 rounded-full ${index === 1 ? 'bg-green-500' : 'bg-pink-500'} animate-bounce`} style={{animationDelay: '0.2s'}}></div>
                    </div>
                  )}
                </Link>
              ))}
            </nav>

            {/* Secondary Button */}
            <div className="hidden md:flex items-center">
              <Link to="/contact" className="font-semibold text-blue-600 border border-blue-600 px-5 py-2.5 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">Get a Quote</Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-gray-800 focus:outline-none transition-transform duration-300 hover:scale-110"
              >
                {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* ===== Full Screen Mobile Menu ===== */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full h-screen bg-white z-40 animate-slideIn">
            <nav className="flex flex-col items-center pt-12 space-y-8">
              {navLinks.map((link, index) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className="text-gray-800 text-2xl font-semibold transition-all duration-300 hover:text-blue-600 hover:scale-110"
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'slideInFromRight 0.5s ease-out forwards'
                  }}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="text-blue-600 text-2xl font-semibold hover:scale-110 transition-transform duration-300" 
                onClick={() => setIsMenuOpen(false)}
                style={{
                  animationDelay: '500ms',
                  animation: 'slideInFromRight 0.5s ease-out forwards'
                }}
              >
                Get a Quote
              </Link>
              <Link 
                to="/contact" 
                className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg text-lg mt-8 hover:scale-105 transition-transform duration-300" 
                onClick={() => setIsMenuOpen(false)}
                style={{
                  animationDelay: '600ms',
                  animation: 'slideInFromRight 0.5s ease-out forwards'
                }}
              >
                Free Consultation
              </Link>
              <div 
                className="border-t border-gray-200 w-3/4 pt-8 mt-4 flex flex-col items-center space-y-6 text-gray-600"
                style={{
                  animationDelay: '700ms',
                  animation: 'slideInFromRight 0.5s ease-out forwards'
                }}
              >
                <a href="tel:(123) 456-7890" className="flex items-center space-x-3 hover:text-blue-600 transition-colors duration-300"><FiPhone size={20} /><span>(123) 456-7890</span></a>
                <a href="mailto:support@grayforgedigital.com" className="flex items-center space-x-3 hover:text-blue-600 transition-colors duration-300"><FiMail size={20} /><span>support@grayforgedigital.com</span></a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Add custom animations to global CSS */}
      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-2px); }
          75% { transform: translateX(2px); }
        }
        @keyframes tada {
          0% { transform: scale(1); }
          10%, 20% { transform: scale(0.9) rotate(-3deg); }
          30%, 50%, 70%, 90% { transform: scale(1.1) rotate(3deg); }
          40%, 60%, 80% { transform: scale(1.1) rotate(-3deg); }
          100% { transform: scale(1) rotate(0); }
        }
        @keyframes heartbeat {
          0% { transform: scale(1); }
          25% { transform: scale(1.1); }
          50% { transform: scale(1); }
          75% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
        .animate-tada {
          animation: tada 0.8s ease-in-out;
        }
        .animate-heartbeat {
          animation: heartbeat 1s ease-in-out;
        }
        .animate-slideIn {
          animation: slideInFromRight 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Header;