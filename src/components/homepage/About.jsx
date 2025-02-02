import about from '@assets/shakehand.png'
import MobileNavbar from '../navbar/MobileNavbar'
import Navbar from '../navbar/Navbar'

const About = () => {

  return (

    <>
        <div className=" h-screen relative bg-rose-500 flex w-full  justify-center items-center md:overflow-hidden ">
            <div className='flex flex-col h-full lg:ml-36 xl:ml-20 md:translate-x-0 w-[80%] md:w-3/5  gap-5 lg:gap-0 justify-center items-center md:overflow-hidden md:max-[1000px]:w-[50%] '>
                <div className='md:text-left text-center text-white md:max-w-[450px] w-full  md:max-[1000px]:text-center'>
                    <span className=' text-4xl md:text-[70px] leading-[50px] font-gilroy-bold'>we are believers,</span>
                    <h2 className=' text-3xl md:text-[40px] pt-2 font-gilroy-bold'>of the human <span className='font-thin italic'>touch</span>.</h2>
                </div>
                <div className=" lg:hidden">
                    <img src={about} width={700}/>
                </div>
                <div className=' md:max-w-[450px] max-h-[261px] text-white text-lg md:text-[22px] md:mt-10 '>
                    <p className='leading-tight text-[18px] lg:text-[20px] xl:text-[24px] font-gilroy-semi-bold' >
                    That’s why, we at hubnex create solutions that matters. We are not the beasts hungry for every bit of market, but we value time, efforts and emotions as well. We create with the intention of sustaining the product in the market for longer than imagined. We are believers. We believe in you and your potential to break the trend. 
                    </p>
                </div>
            </div>
            
        
           <div className='w-[1079px]  h-full hidden lg:flex'>
                <img src={about} alt="about" className='h-full lg:ml-10 xl:ml-20 w-full' />
            </div>
        
        </div>
    </>
  )
}

export default About