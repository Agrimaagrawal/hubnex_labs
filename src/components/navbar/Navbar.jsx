import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search_icon.png'
import Search from '../searchbar/Search'
import MobileNavbar from './MobileNavbar'

import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import menu from '@assets/menuUp.png'
import close from '@assets/Xmark.png'
import search from '@assets/search_icon.png'


const Navbar = () => {

  const [searchToggle, setSearchToggle] = useState(false);

  const [dropIndustries,setDropIndustries]=useState(false);
  const [dropServices, setDropServices] = useState(false);

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);


  const handleSearch = () =>{
    setSearchToggle((prev)=> !prev)
  }
  const handleOpen = ()=>{
    setOpen((prev)=>!prev)
  }

  const changeBg = ()=>{

  }

  const handleIndustries = ()=>{
    setDropIndustries((prev)=> !prev);
  }
  const handleServices = ()=>{
    setDropServices((prev)=> !prev);
  }


  return (

    <div className=' w-full h-20 lg:h-[110px] fixed bg-black bg-opacity-50 lg:bg-none lg:bg-opacity-0 lg:relative z-40'>
      {searchToggle && <Search toggler={searchToggle}/>}
      <div className=' h-full xl:max-w-[95%] xl:min-w-[90%] w-[90%] m-auto items-center flex justify-between'>
        <div className='cursor-pointer z-50'>
          <Link to='/' className=' flex gap-2 items-center'>
            <img src={logo} alt='Logo' width={25} height={30}/>
            <span className=' text-white font-gilroy-bold text-[30px] lg:text-[36px]'>hubnex labs</span>
          </Link>
        </div>
        <div className=' text-[18px] hidden xl:flex xl:gap-16 items-center font-gilroy-semi-bold text-white z-10'>
          <NavLink to='/about' className={({ isActive }) => isActive ? 'decoration-white underline decoration-2 underline-offset-4' : ''}>About Us</NavLink>
          <div className=' flex items-center relative'>
            <NavLink to='/service' className={({ isActive }) => isActive ? ` ${setActive(true)} decoration-white underline decoration-2 underline-offset-4 `: ''}>Services</NavLink>
            <span className=' cursor-pointer' onClick={handleServices}>{dropServices ?<KeyboardArrowUpIcon/>:<KeyboardArrowDown/>}</span>
            {
            dropServices && 
            <div className="flex flex-col  bg-white/40 backdrop-blur-2xl w-[150px] absolute top-10 right-0 rounded-lg">
             <Link to='/service/ai-ml'><div className='text-white p-4 text-center'>service 1</div></Link> 
             <Link to='/service/cloud-services'><div className='text-white p-4 text-center'>service 2</div></Link> 
             <Link to='/service/digital-marketing'><div className='text-white p-4 text-center'>service 3</div></Link> 
             <Link to='/service/iot'><div className='text-white p-4 text-center'>service 4</div></Link> 
             <Link to='/service/software-testing'><div className='text-white p-4 text-center'>service 5</div></Link> 
            </div>
          }
          </div>
          <div className=' flex items-center relative justify-center'>
            <NavLink to='/industries' className={({ isActive }) => isActive ? 'decoration-white underline decoration-2 underline-offset-8  ' : ''}>Industries</NavLink>
            <span className=' cursor-pointer' onClick={handleIndustries}>{dropIndustries ?<KeyboardArrowUpIcon/>:<KeyboardArrowDown/>}</span>
            {
            dropIndustries && 
            <div className="flex flex-col  bg-white/40 backdrop-blur-2xl w-[150px] absolute top-10 left-0 rounded-lg">
             <Link to='/industries/Communication'><div className='text-white p-4 text-center'>industries 1</div></Link> 
             <Link to='/industries/hospitality'><div className='text-white p-4 text-center'>industries 2</div></Link> 
             <Link to='/industries/logistics'><div className='text-white p-4 text-center'>industries 3</div></Link> 
             <Link to='/industries/public-sector'><div className='text-white p-4 text-center'>industries 4</div></Link> 
             <Link to='/industries/retail'><div className='text-white p-4 text-center'>industries 5</div></Link> 
             <Link to='/industries/travel'><div className='text-white p-4 text-center'>industries 6</div></Link> 
            </div>
          }
          </div>
          <NavLink to='/contact' className={({ isActive }) => isActive ? 'decoration-white underline decoration-2 underline-offset-4' : ''}>Contact</NavLink>
          <img onClick={handleSearch} src={searchIcon} alt="search icon" width={25} height={25} className='cursor-pointer z-50'/>
          <Link to='/startup-program' className= {` border-white ${active ? 'bg-white text-black' : 'bg-transparent text-white'}  border-2 py-[8px] px-[20px] rounded-full text-[20px] font-gilroy-semi-bold`}>Startup Program</Link>
        </div>
        <div className=' flex xl:hidden z-50'>
          <img onClick={handleSearch} src={search} className=' z-50 absolute top-[30px] right-24 w-6' />
          {!open ?
              <img onClick={handleOpen} src={menu} width={30} className=" cursor-pointer right-8 top-6 absolute"/>
              :
              <img onClick={handleOpen} src={close} width={25} className=" z-[100] cursor-pointer right-8 top-6 absolute"/>
          }
        </div>
        <MobileNavbar open={open}/>
      </div>
      
    </div>
  )
}

export default Navbar