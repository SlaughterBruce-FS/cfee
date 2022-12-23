import React from 'react'

const About = () => {
  return (
    <div id='about' className='bg-[var(--secondary-dark)] grid grid-cols-1 py-[100px] px-16 text-white md:grid-cols-2  '>
        <div className='flex flex-col justify-center align-center ml-8'>
            <p className='text-[var(--primary)] capitalize text-xl pb-4 '>About Us</p>
            <h2 className='capitalize text-4xl font-bold pb-4 ' >Organic & fresh coffee<br/> Provider Center</h2>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa maiores ullam rerum aperiam explicabo nemo fugiat, modi quia earum quod fuga, minima aspernatur corrupti in expedita repellendus necessitatibus, voluptatibus facere accusantium voluptatum maxime ut est repudiandae illum! Praesentium id, itaque est, veritatis laudantium provident corrupti, nulla iste voluptates magnam doloribus.</p>
        </div>
        <div className='justify-center hidden md:flex '>
            <img className='h-[400px] items-center'  src='../../coffebag.png' alt="coffee" />
        </div>
    </div>
  )
}

export default About