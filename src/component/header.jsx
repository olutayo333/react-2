import React from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className='text-sm text-slate-700 lg:font-semibold font-semi-bold text-white w-[100vw] lg:w-[100%] mx-auto flex lg:px-auto  py-[10px] lg:py-3 justify-center ' style={{backgroundColor:'#615C99',}}>
    
          < Link to="/cpap_Machine" className='lg:mx-10 mx-1' >MACHINE</Link> 
          <Link className='lg:mx-10 mx-1' >MASKS</Link> 
          <Link className='lg:mx-10 mx-1' >CPAP SUPPLIES</Link> 
          <Link className='lg:mx-10 mx-1' >HUMIDIFIERS</Link> 
          <Link className='lg:mx-10 mx-1' >MORE..</Link>
     
    </div>
  )
}

export default Header

