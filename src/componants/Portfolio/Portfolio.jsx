import React, { useEffect, useState } from 'react'
import style from './Portfolio.module.css'

import img1 from '../../../public/img/poert1.png'
import img2 from '../../../public/img/port2.png'
import img3 from '../../../public/img/port3.png'

export default function Portfolio() {
  useEffect(() => {
    document.title="Portfolio"
  }, [])


  return (
    <>
      <div className="w-full flex items-center justify-center p-5 text-cyan-900">
        <div className='text-center flex items-center flex-col p-14 pt-5' >
          <h1 className='uppercase lg:text-4xl text-3xl font-bold py-4'>
            portfolio component
          </h1>
          <p className='icon w-96 py-2 flex items-center justify-center after:bg-cyan-900 before:bg-cyan-900' >
            <i className="fa-solid fa-star relative mx-3"></i>
          </p>
          <div className='container lg:flex'>
            <div className="lg:w-1/3 w-full hove  lg:p-5 p-3 relative ">
              <img src={img1} alt="modal 1" className='rounded-lg' />
              <div className="blur Port  h-69 w-69 rounded-lg absolute top-2 left-2 flex items-center justify-center ">
              <i class="fa-solid fa-plus text-9xl text-white"></i> 
              </div>
            </div>

            <div className="lg:w-1/3 w-full hove lg:p-5 p-3 relative">
              <img src={img2} alt="modal 2" className='rounded-lg' />
               <div className="blur Port  h-69 w-69 rounded-lg absolute top-2 left-2 flex items-center justify-center ">
              <i class="fa-solid fa-plus text-9xl text-white"></i> 
              </div>
            </div>

            <div className="lg:w-1/3 w-full hove lg:p-5 p-3 relative">
              <img src={img3} alt="modal 3" className='rounded-lg' />
               <div className="blur Port  h-69 w-69 rounded-lg absolute top-2 left-2 flex items-center justify-center ">
              <i class="fa-solid fa-plus text-9xl text-white"></i> 
              </div>
            </div>

          </div>

          <div className='container lg:flex'>
            <div className="lg:w-1/3 w-full hove lg:p-5 p-3 relative">
              <img src={img1} alt="modal 1" className='rounded-lg' />
               <div className="blur Port  h-69 w-69 rounded-lg absolute top-2 left-2 flex items-center justify-center ">
              <i class="fa-solid fa-plus text-9xl text-white"></i> 
              </div>
            </div>

            <div className="lg:w-1/3 w-full hove lg:p-5 p-3 relative">
              <img src={img2} alt="modal 2" className='rounded-lg' />
               <div className="blur Port  h-69 w-69 rounded-lg absolute top-2 left-2 flex items-center justify-center ">
              <i class="fa-solid fa-plus text-9xl text-white"></i> 
              </div>
            </div>

            <div className="lg:w-1/3 w-full hove lg:p-5 p-3 relative">
              <img src={img3} alt="modal 3" className='rounded-lg' />
               <div className="blur Port  h-69 w-69 rounded-lg absolute top-2 left-2 flex items-center justify-center ">
              <i class="fa-solid fa-plus text-9xl text-white"></i> 
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
