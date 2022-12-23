import React, {useState, useEffect} from 'react';
import { GiCoffeeCup } from 'react-icons/gi'
import { FaBars, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

  return (
    <div className='items-center z-20 absolute w-[90%] min-h-[50px] flex justify-between text-white mx-8 my-2 '>
        <div className='flex items-center  '>
            <GiCoffeeCup size={34}  className='mr-2'/>
            <h2>Coffeecine</h2>
        </div>
       
            <ul className='hidden sm:flex px-4 flex-row'>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#menu">Menu</a>
                </li>
                <li>
                    <a href="#blog">Blog</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
                <li>
                    <a href="#shop">Shop</a>
                </li>
            </ul>

        <div className='hidden sm:flex  items-center '>
            <FaShoppingCart className='mr-2'/>
            <button > Book A Table</button>
        </div>
        {/*  Hamburger icon */}
        <div onClick={handleNav} className='items-center sm:hidden z-10 cursor-pointer'>
            <FaBars size={20} className={ "text-white "  }/>
        </div>
        {/* mobile menu */}
        <div className={nav ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute top-0 left-0 w-full h-screen bg-black/90  flex flex-col text-white ' : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'}>
            <ul className='  text-center pt-12'>
            <li className='text-2xl py-8 '>
                    <a href="#home">Home</a>
                </li>
                <li className='text-2xl py-8 '>
                    <a href="#about">About</a>
                </li>
                <li className='text-2xl py-8 '>
                    <a href="#menu">Menu</a>
                </li>
                <li className='text-2xl py-8 '>
                    <a href="#blog">Blog</a>
                </li>
                <li className='text-2xl py-8 '>
                    <a href="#contact">Contact</a>
                </li>
                <li className='text-2xl py-8 '>
                    <a href="#shop">Shop</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar