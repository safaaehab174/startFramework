import React, { useEffect, useState } from 'react'
import style from './Footer.module.css'

export default function Footer() {
    
  return (
    <>
    

<footer className="bg-cyan-900 dark:bg-cyan-900">
    <div className="mx-auto w-full max-w-screen-xl lg:py-10">
      <div className="grid grid-cols-1 gap-10 px-5 py-20 lg:py-14 md:grid-cols-3 text-center">
        <div>
            <h2 className="mb-6 text-2xl font-semibold text-gray-900 uppercase dark:text-white">LOCATION</h2>
            <ul className="text-white dark:text-white font-medium">
                <li className="mb-4 text-sm">
                2215 John Daniel Drive
                </li>
                <li className="mb-4 text-sm">
                Clark, MO 65243
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-2xl font-semibold text-gray-900 uppercase dark:text-white">AROUND THE WEB</h2>
            <ul className="text-white font-medium flex items-center justify-center gap-5">
                <li className="mb-4 text-center rounded-full p-1 px-2 border-2 text-md">
                <i className="fa-brands fa-facebook"></i>
                </li>
                <li className="mb-4 text-center rounded-full p-1 px-2 border-2 text-md">
                <i className="fa-brands fa-linkedin"></i>
                </li>
                <li className="mb-4 text-center rounded-full p-1 px-2 border-2 text-md">
                <i className="fa-brands fa-twitter"></i>
                </li>
                <li className="mb-4 text-center rounded-full p-1 px-2 border-2 text-md">
                <i className="fa-solid fa-globe"></i>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-2xl font-semibold text-gray-900 uppercase dark:text-white">ABOUT FREELANCER</h2>
            <p className='text-white px-5 lg:p-0'>
            Freelance is a free to use, licensed Tailwind theme created by Safaa Ehab
            </p>
        </div>
    </div>
    </div>
    <div className="w-full py-5 text-center bg-gray-100 dark:bg-cyan-950">
        <span className="text-lg  text-white dark:text-white sm:text-center">Copyright © Your Website 2024</span>
      </div>
</footer>

    </>
  )
}
