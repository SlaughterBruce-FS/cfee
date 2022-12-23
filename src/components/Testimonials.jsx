import React from 'react'

const Testimonials = () => {
  return (
    <div  className='bg-[var(--secondary-dark)] grid grid-cols-1 py-[100px] px-16 text-white '>
        <div className='flex flex-col overflow-hidden items-center justify-center text-white mb-16'>
            <h4 className='text-[var(--primary)] capitalize'>Customer feedback</h4>
            <h1 className='text-4xl font-bold capitalize py-6'>what our clients say</h1>
        </div>
    </div>
  )
}

export default Testimonials