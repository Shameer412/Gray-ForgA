import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaComments } from 'react-icons/fa';

// --- Animation Variants ---
// (Variants waise hi hain)
const containerVariant = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};
const springTransition = {
  type: 'spring',
  damping: 15,
  stiffness: 100,
};
const badgeVariant = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springTransition
  },
};
const headlineVariant = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { ...springTransition, duration: 0.7 }
  },
};
const paragraphVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springTransition
  },
};
const buttonGroupVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springTransition
  },
};
const highlightVariant = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    backgroundSize: '0% 100%'
  },
  visible: {
    opacity: 1,
    scale: 1,
    backgroundSize: '100% 100%',
    transition: {
      ...springTransition,
      backgroundSize: {
        duration: 1.2,
        ease: "easeInOut"
      }
    }
  }
};
const buttonVariant = {
  hover: {
    scale: 1.05,
    y: -3,
    boxShadow: '0 10px 20px rgba(59, 130, 246, 0.3)',
    transition: { type: 'spring', stiffness: 300 }
  },
  tap: {
    scale: 0.98,
    y: 0,
  }
}

const HeroSection = () => {
  return (
    <section className="relative bg-gray-50 pt-20 lg:pt-28 pb-32 lg:pb-40 overflow-hidden">

      {/* --- 1. BARAY BLURRY ORBS (z-0) --- */}
      <div
        className="absolute -top-40 -left-40 w-96 h-96 lg:w-[32rem] lg:h-[32rem] bg-cyan-300 rounded-full opacity-40 filter blur-[150px] z-0"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-60 -right-40 w-96 h-96 lg:w-[32rem] lg:h-[32rem] bg-pink-300 rounded-full opacity-40 filter blur-[150px] z-0"
        aria-hidden="true"
      />
      <div
        className="absolute top-20 right-1/2 translate-x-1/2 w-96 h-96 lg:w-[28rem] lg:h-[28rem] bg-purple-300 rounded-full opacity-30 filter blur-[150px] z-0"
        aria-hidden="true"
      />
      
      {/* --- 2A. 300px FLOATING CIRCLES (z-5) --- */}
      <motion.div 
        className="absolute top-10 left-40 w-[300px] h-[300px] bg-blue-500 rounded-full opacity-40 filter blur-[100px] z-5"
        aria-hidden="true"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />
      <motion.div 
        className="absolute bottom-10 right-40 w-[300px] h-[300px] bg-yellow-400 rounded-full opacity-40 filter blur-[100px] z-5"
        aria-hidden="true"
        animate={{ y: [0, 15, 0], x: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />
      <motion.div 
        className="absolute top-40 right-1/3 w-[300px] h-[300px] bg-green-400 rounded-full opacity-40 filter blur-[100px] z-5"
        aria-hidden="true"
        animate={{ y: [0, -10, 0], x: [0, 20, 0] }}
        transition={{ duration: 9, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />

      {/* --- 2B. NAYI ANIMATION: Twinkling Stars (z-15) --- 
          MODIFIED: Rang 'bg-white' se 'bg-blue-400' / 'bg-pink-400' kar diya
          MODIFIED: Size thora barha diya (w-2/h-2 aur w-3/h-3)
          MODIFIED: 'scale' animation add ki hai behtar twinkle effect ke liye
      */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full shadow-lg z-15"
        animate={{ opacity: [0, 1, 0], scale: [1, 1.2, 1] }} 
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      />
      <motion.div
        className="absolute top-1/2 left-3/4 w-2 h-2 bg-pink-400 rounded-full shadow-lg z-15"
        animate={{ opacity: [0, 1, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 3.0, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="absolute top-2/3 left-1/3 w-2 h-2 bg-blue-300 rounded-full shadow-lg z-15"
        animate={{ opacity: [0, 1, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 2.0, repeat: Infinity, ease: "easeInOut", delay: 1.0 }}
      />
      <motion.div
        className="absolute top-1/3 left-3/4 w-3 h-3 bg-pink-300 rounded-full shadow-lg z-15"
        animate={{ opacity: [0, 1, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      />
      <motion.div
        className="absolute top-3/4 left-2/3 w-2 h-2 bg-blue-400 rounded-full shadow-lg z-15"
        animate={{ opacity: [0, 1, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
      />


      {/* --- 3. TEXT CONTENT (z-20) --- */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          variants={containerVariant}
          initial="hidden"
          animate="visible"
        >
          
          {/* Motto Badge */}
          <motion.div variants={badgeVariant}>
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-200 mb-8">
              <span className="text-blue-700 font-medium text-sm">Forging Technology That Fits You</span>
            </div>
          </motion.div>
          
          {/* Main Headline */}
          <motion.h1
            variants={headlineVariant}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            We Listen. We Build. <br />
            <span className="text-blue-600">We Save You Costs.</span>
          </motion.h1>
          
          {/* Sub-Headline */}
          <motion.p
            variants={paragraphVariant}
            className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto"
          >
            Gray Forge Digital delivers{' '}
            <motion.span
              variants={highlightVariant}
              className="inline-block bg-gradient-to-r from-blue-50 to-indigo-50 bg-no-repeat bg-[length:0%_100%] px-1 rounded-md border border-blue-100"
              style={{
                backgroundImage: 'linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(129, 140, 248, 0.1))'
              }}
            >
              custom-built CRMs, portals, websites, apps, and AI solutions
            </motion.span>{' '}
            designed around{' '}
            <motion.span
              variants={highlightVariant}
              className="inline-block bg-gradient-to-r from-amber-50 to-orange-50 bg-no-repeat bg-[length:0%_100%] px-1 rounded-md border border-amber-100"
              style={{
                backgroundImage: 'linear-gradient(to right, rgba(245, 158, 11, 0.1), rgba(251, 191, 36, 0.1))'
              }}
            >
              your
            </motion.span>{' '}
            business needs. Stop wasting money on cookie-cutter tools. Let's forge something that actually works for you.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            variants={buttonGroupVariant}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              className="w-full sm:w-auto bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg flex items-center justify-center gap-3"
              variants={buttonVariant}
              whileHover="hover"
              whileTap="tap"
            >
              <FaCalendar size={20} />
              Schedule a Free Consultation
            </motion.button>
            
            <motion.button
              className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 font-semibold px-8 py-4 rounded-xl flex items-center justify-center gap-3"
              variants={buttonVariant}
              whileHover="hover"
              whileTap="tap"
              style={{ boxShadow: 'none' }}
            >
              <FaComments size={20} />
              Talk to Our Experts
            </motion.button>
          </motion.div>

        </motion.div>
      </div>

      {/* --- 4. SVG WAVE (z-10) --- */}
      <div className="absolute bottom-0 left-0 w-full" style={{ zIndex: 10, marginBottom: '-1px' }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="rgb(249 250 251)"
            fillOpacity="1"
            d="M0,160L48,181.3C96,203,192,245,288,245.3C384,245,480,203,576,170.7C672,139,768,117,864,133.3C960,149,1056,203,1152,218.7C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;