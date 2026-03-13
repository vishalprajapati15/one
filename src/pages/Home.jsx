import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import OurServices from '../components/OurServices'
import WebDesignNetworkSolution from '../components/WebDesignNetworkSolution'
import RecentProjects from '../components/RecentProjects'
import Templets from '../components/Templets'
import One from '../components/One'
import WebDandNetSol from '../components/WebDandNetSol'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonoals from '../components/Testimonoals'
import TechStack from '../components/TechStack'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="bg-slate-900 pt-16">
        <Navbar/>
        <Hero/>
        <OurServices/>
        <WebDesignNetworkSolution/>
        <RecentProjects/>
        <Templets/>
        <One/>
        <WebDandNetSol/>
        <WhyChooseUs/>
        <Testimonoals/>
        <TechStack/>
        <Footer/>
    </div>
  )
}

export default Home