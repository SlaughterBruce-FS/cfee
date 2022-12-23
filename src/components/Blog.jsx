import React from 'react'

const Blog = () => {
  return (
    <div id='blog' className='bg-[var(--secondary-dark)] grid grid-cols-1 py-[100px] px-16 text-white '>
    <div className='flex flex-col overflow-hidden items-center justify-center text-white mb-16'>
        <h4 className='text-[var(--primary)] capitalize'>coffeecine updates</h4>
        <h1 className='text-4xl font-bold capitalize py-6'>latest updates & news</h1>
    </div>
    <div className=' w-[vw] flex flex-col items-center justify-center md:flex-row md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-2 lg:mx-[200px] overflow-hiddenn '>
        <div className='m-4'>
        <div className='relative  overflow-hidden w-full h-[320px] '>
            <img className='object-cover   w-[100%] h-full  '  src="../../rest.jpeg" alt="img" />
        </div>
        <div className='bg-[var(--primary-dark)] p-4'>
            <h4 className='text-[var(--primary)] capitalize text-lg'>Lorem ipsum</h4>
            <p className='text-sm py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae id labore corrupti nesciunt debitis, illum tempora et libero nisi ea?</p>
            <button>Read more</button>
        </div>
        </div>
        <div className='m-4'>
        <div className='relative  overflow-hidden w-full h-[320px] '>
            <img className='object-cover   w-[100%] h-full  '  src="../../rest.jpeg" alt="img" />
        </div>
        <div className='bg-[var(--primary-dark)] p-4'>
            <h4 className='text-[var(--primary)] capitalize text-lg'>Lorem ipsum</h4>
            <p className='text-sm py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae id labore corrupti nesciunt debitis, illum tempora et libero nisi ea?</p>
            <button>Read more</button>
        </div>
        </div>
        <div className='m-4'>
        <div className='relative  overflow-hidden w-full h-[320px] '>
            <img className='object-cover   w-[100%] h-full  '  src="../../rest.jpeg" alt="img" />
        </div>
        <div className='bg-[var(--primary-dark)] p-4'>
            <h4 className='text-[var(--primary)] capitalize text-lg'>Lorem ipsum</h4>
            <p className='text-sm py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae id labore corrupti nesciunt debitis, illum tempora et libero nisi ea?</p>
            <button>Read more</button> 
        </div>
        </div>
    </div>
    </div>
  )
}

export default Blog