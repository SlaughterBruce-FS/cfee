import React from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'slidesec',
    arrows: false
  };

  return (
    <div id='testimonial' className='bg-[var(--secondary-dark)] grid grid-cols-1 py-[100px] px-16 text-white '>
        <div className='flex flex-col overflow-hidden items-center justify-center text-white '>
            <h4 className='text-[var(--primary)] capitalize'>Customer feedback</h4>
            <h1 className='text-4xl font-bold capitalize py-6'>what our clients say</h1>
        </div>
        <div>
        <div
          id="slider-container"
          class="max-w-lg mx-auto 
      mt-12"
        >
          <Slider {...settings} className='grid grid-cols-3 gap-8'>
          <div className='test bg-[var(--primary-dark)] p-10'>
            <div className='flex '>
              <div className='mr-4 '>
              <img className='w-[550px] rounded-full  ' src="https://randomuser.me/api/portraits/men/16.jpg" alt="face" />
            <h1 className='pt-2 text-[var(--primary)]'>Ryan Smith</h1>
              </div>
         
            <div>
              <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam alias debitis earum aperiam, maxime aspernatur atque mollitia rerum itaque dolor temporibus ipsa repellendus nihil suscipit saepe quis a. Neque, accusamus? </p>
            </div>
            </div>
          </div>

          <div className='bg-[var(--primary-dark)] p-10'>
            <div className='flex '>
              <div className='mr-4 '>
              <img className='w-[550px] rounded-full  ' src="https://randomuser.me/api/portraits/women/95.jpg" alt="face" />
            <h1 className='pt-2 text-[var(--primary)]'>Ashley Jones</h1>
              </div>
         
            <div>
              <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam alias debitis earum aperiam, maxime aspernatur atque mollitia rerum itaque dolor temporibus ipsa repellendus nihil suscipit saepe quis a. Neque, accusamus? </p>
            </div>
            </div>
          </div>
          </Slider>
        </div>
        </div>
    </div>
  )
}

export default Testimonials