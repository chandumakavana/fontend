import React from 'react'
import Navbar from '../componets/Navbar'
import Hero from '../componets/Hero'
import Aboutme from '../componets/Aboutme'
import Contactme from '../componets/Contactme'

function Home() {
  return (
    <>
      <Navbar />


      <Hero />
      <Aboutme />
      <section className='w-full h-[100vh]  flex items-center justify-center px-15 max-md:px-5' id='project'>
        <div className='w-full h-full flex items-center justify-center border rounded-2xl '>
          <h1 className='text-5xl font-bold max-md:text-2xl max-md:text-center px-5'>Projects Section Coming Soon</h1>
        </div>
      </section>
      <Contactme />
    </>
  )
}

export default Home
