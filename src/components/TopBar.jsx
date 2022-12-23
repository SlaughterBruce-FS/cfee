import React from 'react';
import {FaFacebookF, FaInstagram, FaPhone,FaRegClock, FaTwitter, FaMailBulk} from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

const TopBar = () => {
  return (
    <div className='flex justify-between items-center px-8 py-2 hidden md:flex bg-[var(--primary-dark)] text-white' >
        <div className='flex items-center'>
            <FaRegClock className='text-white mr-2'  />
            <p>9:00AM - 9:00pm</p>
        </div>
        <div className='flex items-center hidden md:flex '>
            <a href='/' className='mr-4 bg-[var(--primary)] p-1.5 text-white rounded-full'> <FaFacebookF /> </a>
            <a href='/' className='mr-4 bg-[var(--primary)] p-1.5 text-white rounded-full'> <FaTwitter /> </a>
            <a href='/' className='mr-4 bg-[var(--primary)] p-1.5 text-white rounded-full'> <FaInstagram /> </a>
        </div>
        <div className='flex items-center hidden md:flex px-6'>
            <FiMail className="mr-4" />
            <p className="mr-4">contact@coffeshop.com</p>
            <FaPhone className="mr-4" />
            <p className="mr-4">513-555-2322</p>
            
        </div>
    </div>
  )
}

export default TopBar