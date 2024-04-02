import React from 'react'

const Herosection2 = () => {
  return (
    <div className='bg-[#f3f4f8] h-[40vh] w-[100vw] flex' style={{backgroundColor:`#F3F4F8` }}>
       
        <div className=' w-[50%] mx-16 my-auto '>
            <b className='text-black text-3xl'> CPAP Machine for sleep Apnea </b>
            <p className='text-xl my-5'>Search for all available medicine types as well as machine access and replacement parts below.</p>      
        </div>

        <div className=' w-[50%] mx-5 my-auto'  >
            <img className=' w-72' src={require('../asset2/Frame9.png')} alt=''></img>
        </div>

    </div>
  )
}

export default Herosection2
