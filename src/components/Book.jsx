import React from 'react'

const Book = () => {
  return (
    <div id='book' className='py-[50px] px-8 md:px-[50px] lg:px-[200px] m-o overflow-hidden bg-[var(--primary-dark)] '>
        <div className='flex justify-between items-center '>
            <div>
                <p className='text-[var(--primary)] capitalize text-xl pb-2 '>About Us</p>
                <h2 className='capitalize text-4xl font-bold pb-4 text-white' >Reserve a table  </h2>
            </div>
            <button className='h-[100%]'>Book Table</button>
        </div>
        
    </div>
  )
}

export default Book