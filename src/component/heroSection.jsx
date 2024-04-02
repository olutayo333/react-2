    import React from 'react';
    import bgImg from '../asset/heroimg.PNG';
    

const HeroSection = () => {
  return (
    <div className='bg-no-repeat lg:bg-center bg-cover lg:flex h-[70vh] justify-center items-center ' style={{backgroundImage:`url(${bgImg})`, }} >
        
        <div className='lg:ms-[60vw] ms-[40vw] w-[66%] mt-10 lg:me-12 ' style={{float:`inline-end`}}>
          <p>You'll Sleep Like a Baby Abroad</p>
          <div className='lg:text-[60px] text-[40px] my-5 font-bold'>New Z2 Auto Travel CPAP</div>
          <p>With a new motor 29% quieter than the Z1, the Z2 is designed to minimize the pitch of the motor for optimal comfort.</p>
          <button className='mt-10 rounded-3xl bg-[#F0592A] lg:w-[200px] w-[150px] lg:h-[50px] h-[40px] text-white'> Buy Now </button>
        </div>
    </div>

  )
}//grid w-[400px] h-auto lg:relative lg:right-[150px]

export default HeroSection
