import React from 'react'

const Menu = () => {
  return (
    <div  className='bg-[var(--secondary-dark)] grid grid-cols-1 py-[100px] px-16 text-white '>
        <div className='flex flex-col overflow-hidden items-center justify-center text-white mb-16'>
            <h4 className='text-[var(--primary)] capitalize'>Coffeecine best coffee</h4>
            <h1 className='text-4xl font-bold capitalize py-6'>Popular Coffee menu</h1>
        </div>
        <div className='grid gap-8 md:grid-cols-2 md:mx-[100px] '  >
            <div className='flex justify-between items-center ' >
                <img className='h-[150px] mr-[10px]' src="../../1.jpeg" alt="coffee" />
                <div>
                    <h5>Vanilla Sweet Cream Cold Brew</h5>
                    <p>110calories</p>
                </div>
                <div>
                    <h6>$8</h6>
                </div>
            </div>
            <div className='flex justify-between items-center ' >
                <img className='h-[150px] mr-[10px]' src="../../1.jpeg" alt="coffee" />
                <div>
                    <h5>Vanilla Sweet Cream Cold Brew</h5>
                    <p>110calories</p>
                </div>
                <div>
                    <h6>$8</h6>
                </div>
            </div>
            <div className='flex justify-between items-center ' >
                <img className='h-[150px] mr-[10px]' src="../../1.jpeg" alt="coffee" />
                <div>
                    <h5>Vanilla Sweet Cream Cold Brew</h5>
                    <p>110calories</p>
                </div>
                <div>
                    <h6>$8</h6>
                </div>
            </div>
            <div className='flex justify-between items-center ' >
                <img className='h-[150px] mr-[10px]' src="../../1.jpeg" alt="coffee" />
                <div>
                    <h5>Vanilla Sweet Cream Cold Brew</h5>
                    <p>110calories</p>
                </div>
                <div>
                    <h6>$8</h6>
                </div>
            </div>
            <div className='flex justify-between items-center ' >
                <img className='h-[150px] mr-[10px]' src="../../1.jpeg" alt="coffee" />
                <div>
                    <h5>Vanilla Sweet Cream Cold Brew</h5>
                    <p>110calories</p>
                </div>
                <div>
                    <h6>$8</h6>
                </div>
            </div>
            <div className='flex justify-between items-center ' >
                <img className='h-[150px] mr-[10px]' src="../../1.jpeg" alt="coffee" />
                <div>
                    <h5>Vanilla Sweet Cream Cold Brew</h5>
                    <p>110calories</p>
                </div>
                <div>
                    <h6>$8</h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Menu