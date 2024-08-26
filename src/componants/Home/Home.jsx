import React, { useEffect, useState } from 'react'
import style from '../Home/Home.module.css'
import img from '../../../public/img/avataaars.svg'

export default function Home() {

  useEffect(() => {
    document.title="Home"
  }, [])
  
    
  return (
    <>
    <div className="w-full flex items-center justify-center Home p-10 text-white ">
     <div className='text-center flex items-center flex-col p-10' >
     <img src={img} alt="Avatar" width={250} height={250}/>
      <h1 className='uppercase text-4xl font-bold py-4'>
      start Framework
      </h1>
      <p className='icon w-96 py-2 flex items-center justify-center'>
      <i className="fa-solid fa-star relative mx-3"></i>
      </p>
      <p>
      Graphic Artist - Web Designer - Illustrator
      </p>
     </div>
    </div>
    </>
  )
}
