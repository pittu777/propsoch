import React from 'react'
import NavBar from './Navbar';
import Hero from './Hero';
import Stats from './Stats';
import Testimonials from './Testimonials';
import JourneyWithTestimonials from './Journey';
import Comparison from './Comparison';
import SmartSave from './SmartSave';
import PlatformAccordion from './PlatformAccordion';
import FinalCTA from './FinalCTA';
import AnimatedCTA from './AnimatedCTA';
import BlogMarquee from './BlogMarquee';
import CommunityFAQ from './CommunityFAQ';
import Footer from './Footer';


const HomePage = () => {
  return (
    <>
   <p className="font-medium text-white bg-black fixed top-0 w-full z-50 h-6 flex items-center justify-center">
  Check any property's
</p>

    <NavBar/>
    <Hero/>
    <Stats/>
    <Testimonials/>
    <JourneyWithTestimonials/>
    <Comparison/>
    <SmartSave/>
    <PlatformAccordion/>
    <FinalCTA/>
    <AnimatedCTA/>
    <BlogMarquee/>
    <CommunityFAQ/>
    <Footer/>
    </>
  )
}

export default HomePage;