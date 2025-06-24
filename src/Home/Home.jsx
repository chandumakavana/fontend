import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Aboutme from '../components/Aboutme'
import Projects from '../components/Projects'
import Contactme from '../components/Contactme'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Aboutme />
      <Projects />
      <Contactme />
    </>
  )
}

export default Home