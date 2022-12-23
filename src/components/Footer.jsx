import React from 'react'

const Footer = () => {
  return (
    <div className='py-2 m-o overflow-hidden bg-[var(--primary-dark)] w-full'>
        <div className='w-full flex justify-center items-center  '>
                <p className='text-[var(--primary)] capitalize text-sm pb-2 '> &copy; {new Date().getFullYear()} Flawless Jae </p>
        </div>
    </div>
  )
}

export default Footer