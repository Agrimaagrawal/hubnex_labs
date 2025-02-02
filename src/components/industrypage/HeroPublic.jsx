import React from 'react'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
       <div className=' xl:h-[838px] h-screen bg-ind4 bg-cover bg-center w-full relative '>
        <Navbar />
        <div className=' h-screen w-full flex items-center justify-center'>
        <div className=' w-[80%] flex items-center'>
            <div className=' text-white flex flex-col justify-center items-center lg:items-start gap-10 w-90 max-[820px]:text-center'>
                <div className=' xl:text-[70px] text-5xl font-gilroy-bold lg:w-[700px]'>Empowering Your Financial Future</div>
                <p className=' text-[24px] font-gilroy-semi-bold lg:w-[600px]'>Banking, Financial Services, and Insurance Solutions for Every Stage of Life</p>
                <button className=' h-[44px] w-[140px] border-violet-700 border-[2px] lg:py-[10px] px-5 border-t-0 border-l-0 relative bg-transparent rounded-full'>
                    <Link className=' w-full h-full rounded-full flex justify-center items-center  font-gilroy-semi-bold text-[20px] absolute bg-white text-black -left-[2px] bottom-[2px] border-white border-2'>Let's talk</Link>
                  </button>
              </div>
          </div>
        </div>
    </div>
  </div>
  )
}

export default Hero