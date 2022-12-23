import React from 'react';
import { GiSlicedBread } from "react-icons/gi";
import { BiCoffeeTogo } from "react-icons/bi";

const Info = () => {
  return (
    <div className='py-[100px] px-8 md:px-[50px] lg:px-[200px] m-o overflow-hidden bg-[var(--primary-dark)] grid gap-10 lg:grid-cols-2 '>
        <div>
            <img className='h-full object-cover ' src="../../info.jpeg" alt="test" />
        </div>
        <div className='text-white '>
            <p className='text-[var(--primary)] capitalize text-xl pb-4 '>why choose Us</p>
            <h2 className='capitalize text-4xl font-bold pb-4 ' >coffeecine founded for extraordinary test</h2>
            <p className='text-sm pb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni et, officia, hic corporis corrupti quas sit quibusdam cumque quasi id facilis totam, consectetur maiores. Voluptatum, nesciunt quasi! Aspernatur, quo neque.</p>
            <div className='flex py-2'>
                <GiSlicedBread size={70} className='text-[var(--primary)] mr-4' />
                <div>
                    <h4 className='text-lg font-bold'>Natural Coffee Beans</h4>
                    <p className=' text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae numquam corrupti et placeat molestias eos?</p>
                </div>
            </div>
            <div className='flex py-2'>
                <BiCoffeeTogo size={70} className='text-[var(--primary)] mr-4' />
                <div>
                    <h4 className='text-lg text-bold'>Natural Coffee Beans</h4>
                    <p className=' text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae numquam corrupti et placeat molestias eos?</p>
                </div>
            </div>
            <button className='mt-8'>Explore More</button>
        </div>
        
    </div>
  )
}

export default Info