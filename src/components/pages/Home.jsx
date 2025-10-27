import React from 'react'
import Navbar from '../Header';
import  HeroSection from '../Hero';
import WhyChooseUs from '../Why';
import Intro from '../Intro';
import ClosingBanner from '../ClosingBanner';
import CoreServices from '../Services';

import Footer from '../Footer';
const Home = () => {
  return (
    <>
    <Navbar />
    <HeroSection />
    <Intro />
    <CoreServices />
    <WhyChooseUs />
   <ClosingBanner />
    {/* <Footer /> */}
    </>
  )
}

export default Home