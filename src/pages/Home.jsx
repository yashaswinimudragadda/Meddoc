import React from 'react'
import Logoheader from '../components/Logoheader'
import Topheader from '../components/Topheader'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import AboutUs from '../components/Aboutus'
import JournalGrid from '../components/JournalGrid'
import EbookCarousel from '../components/EbookCarousel'
import Conferences from '../components/Conferences'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import Divider from '../components/divider'
import PartneredNetworks from '../components/PartneredNetworks'


const Home = () => {
  return (
    <>
     <Topheader />
      <Logoheader />
      <NavBar />
      <main>
      <HeroSection />
      <AboutUs />
      <JournalGrid/>
      <EbookCarousel />
      <Conferences />
      <ContactSection/>
      <Footer />
      <Divider />
      <PartneredNetworks />
      </main>
    </>
  )
}

export default Home