
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
//import img1 from "../asset/"

const Navbar = () => {
  // for hamburger
  const [isMenuOpen, setIsMenuOpen] = useState(false)  
  const toggleMenu = ()=>{ setIsMenuOpen(!isMenuOpen); };

  return (
    <nav className='lg:w-10/12 w-[100vw] lg:mx-auto mx-auto py-4 flex lg:items-center lg:justify-between justify-between '>
      
      <div> <Link to="/"> <img className='lg:w-36 w-[30vw] me-0' src={require("../asset/navBarImg.png")} /> </Link> </div>
      <div> <input type='text' className='rounded-full border-2 placeholder:pl-2 lg:w-[400px] w-40 ms-2 me-20' placeholder='Search'></input> </div>
      <div className='flex-col items-center lg:gap mx-1 lg:flex md:flex hidden '> 
          <p className='text-black-500 text-sm'> Talk to an expert! </p>
          <p className='text-blue-400 text-sm lg:text-md lg:font-semibold -mt-1'>(123)456-7899</p>
      </div>

        <div className='lg:flex md:flex hidden lg:gap-6 gap-2  '>
          <div className='flex items-center lg:gap-1'>
            <img className='w-4' src={require('../asset/Frame 38.png')} alt=''></img>
            <p className='text-sm text-slate-700 font-semibold'>Blog</p>
          </div>
          <div className='flex items-center lg:gap-1'>
            <img className='w-4' src={require('../asset/Frame 37.png')} alt=''></img>
            <p className='text-sm text-slate-700 font-semibold'>Account</p>
          </div>
          <div className='flex items-center lg:gap-1'>
            <img className='w-4' src={require('../asset/Frame 36.png')} alt=''></img>
            <p className='text-sm text-slate-700 font-semibold'>Cart</p>
          </div>
      </div>

      {/* HAMBURGER FOR THE NAVBAR */}
      <div className='grid items-center gap-5 lg:hidden md:hidden'>
        <div className='cursor-pointer' onClick={toggleMenu}> 
          <GiHamburgerMenu size={25}/>
        </div>
        {
          isMenuOpen && (
            <div className='grid absolute top-0 right-0'>
                <div className='grid absolute top-0 right-0 w-24' >
                    
                      <div className='flex'>
                      <img className='w-3' src={require('../asset/Frame 38.png')} alt=''></img>
                      <small className='text-sm text-slate-700 font-semibold'>Blog</small>
                      </div>
                      <div className='flex'>
                      <img className='w-3' src={require('../asset/Frame 37.png')} alt=''></img>
                      <p className='text-sm text-slate-700 font-semibold'>Account</p>
                      </div>
                      <div className='flex'>
                      <img className='w-3' src={require('../asset/Frame 36.png')} alt=''></img>
                      <p className='text-sm text-slate-700 font-semibold'>Cart</p>
                      </div>

                </div>
            </div>
          )
        }
      </div>

    </nav>

  )
}

export default Navbar

//rafc