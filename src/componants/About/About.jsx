import React, { useEffect, useState } from 'react'
import style from './About.module.css'

export default function About() {
  useEffect(() => {
    document.title="About"
  }, [])
  return (
    <>
      <div className="w-full flex items-center justify-center Home p-20 text-white ">
        <div className='text-center flex items-center flex-col p-14' >
          <h1 className='uppercase text-4xl font-bold py-4'>
            about component
          </h1>
          <p className='icon w-96 py-2 flex items-center justify-center'>
            <i className="fa-solid fa-star relative mx-3"></i>
          </p>
          <div className="right flex w-4/5 lg:text-start flex-col text-center  lg:flex-row text-md gap-x-4 p-10">
            <p className='mb-5 lg:mb-0'>
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
            <p>
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
