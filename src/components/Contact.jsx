import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='py-[100px] m-o overflow-hidden bg-[var(--primary-dark)] px-8 lg:px-20 '>
    <div className='flex flex-col overflow-hidden items-center justify-center text-white'>
         <h4 className='text-[var(--primary)] capitalize'>Get in touch</h4>
        <h1 className='text-4xl font-bold capitalize py-6'>Contact</h1>
    </div>
        <div className='grid md:grid-cols-2 gap-8 '>
            <div>
                <img src="../../contact.jpeg" alt="contact img" />
            </div>
            <div className=' my-auto '>
               <div className='grid grid-cols-2 gap-4 mb-4 '>
               <div>
                <label for="name" className="leading-7 text-md text-[var(--primary)]">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div>
                <label for="name" className="leading-7 text-md text-[var(--primary)]">
                    Email
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
               </div>
               <div className='mb-8'>
               <label
                    for="message"
                    className="leading-7 text-md text-[var(--primary)]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
               </div>
               <button>Send</button>
            </div>
            
        </div>
    </div>
  )
}

export default Contact

