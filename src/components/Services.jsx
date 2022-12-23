import React from 'react';
import { GiKnifeFork } from 'react-icons/gi';
import { MdCoffeeMaker, MdEmojiFoodBeverage } from "react-icons/md";

const Services = () => {
  return (
    <>
    <div className='py-[100px] m-o overflow-hidden bg-[var(--primary-dark)] '>
    <div className='flex flex-col overflow-hidden items-center justify-center text-white'>
         <h4 className='text-[var(--primary)] capitalize'>What we serve</h4>
        <h1 className='text-4xl font-bold capitalize py-6'>Our services</h1>
    </div>
    <div className=' w-[vw] flex flex-col items-center justify-center md:flex-row md:grid lg:grid-cols-3 lg:gap-8 lg:mx-[200px] overflow-hiddenn '>
        <div className='relative m-4 overflow-hidden w-full h-[320px] '>
        <div className=' bg-neutral-900/90 absolute z-3 w-full h-full '></div>
            <div className='absolute z-10 flex flex-col justify-center items-center text-white w-full h-full text-2xl font-bold '>
            <GiKnifeFork size={50} />
            <h3 >Restaurant Menu</h3>
            </div>
            <img className='object-cover   w-[100%] h-full  '  src="../../rest.jpeg" alt="img" />
        </div>
        <div className='relative m-4 w-[100%] h-[320px] overflow-hidden'>
        <div className=' bg-neutral-900/90 absolute z-3 w-full h-full '></div>
        <div className='absolute z-10 flex flex-col justify-center items-center text-white w-full h-full text-2xl font-bold '>
            <MdCoffeeMaker size={50} />
            <h3 >Coffee Menu</h3>
        </div>
            <img className='object-cover w-full h-full '  src="../../coffee.jpeg" alt="img" />
        </div>
        <div className='relative m-4 overflow-hidden w-full h-[320px]'>
        <div className=' bg-neutral-900/90 absolute z-3 w-full h-full '></div>
        <div className='absolute z-10 flex flex-col justify-center items-center text-white w-full h-full text-2xl font-bold '>
           
            <MdEmojiFoodBeverage size={50} />
            <h3 >Food Service</h3>
        </div>
            <img className='object-cover w-[100%] h-full  ' src="../../food.jpeg" alt="img" />
        </div>
    </div>
    </div>
    </>
  )
}

export default Services