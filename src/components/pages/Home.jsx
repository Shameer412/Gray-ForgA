import React from 'react'
import Navbar from '../Header';
import  HeroSection from '../Hero';
import WhyChooseUs from '../Why';
import About from '../About';
import Footer from '../Footer';
const Home = () => {
  return (
    <>
    <Navbar />
    <HeroSection />
    <WhyChooseUs />
    <About />
    <Footer />
    </>
  )
}

export default Home