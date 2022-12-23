import React from 'react';

const Hero = () => {
  return (
    <div className='relative z-1 h-[90vh] '>
        <img className='absolute w-full h-full object-cover' src='../../hero.jpeg' alt="hero img" />
        <div className=' ' >
            <div className='absolute z-2 top-[40%] w-full md:-[50%] max-w-[700px] flex flex-col text-white p-4 '>
            <h4 className='text-[var(--primary)] capitalize text-xl '>Welcome the Kalfien</h4>
            <h1 className='uppercase text-7xl font-bold  '>the london <br/> Caffe House</h1>
            <div className='mt-4'>
                <button className='mr-4 bg-[var(--primary-light)] text-[var(--primary)] border-[var(--primary)]'>Get Delivery</button>
                <button>Discover More</button>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Hero