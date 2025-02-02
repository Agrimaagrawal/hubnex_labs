import React from 'react'

import  Footer from '../components/footer/Footer'
import  About from '../components/homepage/About'
import  Brand from '../components/homepage/Brand'
import  Hero from '../components/homepage/Hero'
import  Services from '../components/homepage/Services'
import  Testimonial from '../components/homepage/Testimonial'
import  LeftNavbar from '../components/navbar/LeftNavbar'
import MobileNavbar from '../components/navbar/MobileNavbar'
import Navbar from '../components/navbar/Navbar'





const Home = () => {


  return (

    <>
    <div className=' h-screen w-full relative'>

        <div className=' hidden lg:inline-block absolute left-10 z-50'>
              <LeftNavbar/>
          </div>

          <div className=' h-full w-full '>

              <section id='section-1' className='lg:h-[982px] md:h-[750px] h-full w-full bg-landerImg md:bg-cover bg-no-repeat bg-[80%] md:bg-center'>
                  <Navbar/>
                  <Hero />
              </section>
              
              <section id='section-2' className='h-full lg:h-[982px] w-full '>
                <Brand/>
              </section>
              
              <section  id='section-3' className='h-full lg:h-[982px] w-full bg-vector relative bg-cover bg-no-repeat bg-center'>
                <Services/>
              </section>
              
              <section id='section-4' className='h-[982px] w-full md:bg-balloon bg-balloonMob bg-blue-200 relative bg-center bg-[length:100%_100%] bg-no-repeat '>
                <Testimonial/>
              </section>
              
              <section id='section-5' className='h-full w-full '>
                <About/>
              </section>
              
              <section id='section-6' className=' h-auto w-full' >
                <Footer/>
              </section>
          </div>
    </div>
    </>
  )
}

export default Home


