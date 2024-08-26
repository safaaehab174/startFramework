import React, { useEffect, useState } from 'react'
import style from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

export default function Navbar() {

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-cyan-900 py-4">

        <div className="max-w-screen-xl flex flex-wrap items-center lg:justify-between justify-around mx-auto p-4">
          
          <NavLink to="" className="flex items-center space-x-3 rtl:space-x-reverse" id='logo'>
            <span className="self-center lg:text-4xl text-2xl font-bold whitespace-nowrap dark:text-white uppercase">Start Framework</span>
          </NavLink>

          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

          <div className="hidden w-4/5 md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-1 border-0  bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-cyan-900 md:dark:bg-cyan-900">
              <li>
                <NavLink to={"about"} className="block uppercase text-sm lg:text-lg font-medium p-2 bg-transparent text-white rounded-lg md:bg-transparent dark:text-white " aria-current="page">About</NavLink>
              </li>
              <li>
                <NavLink to={"portfolio"} className="block uppercase text-sm lg:text-lg font-medium p-2 bg-transparent text-gray-900 rounded-lg md:border-0 dark:text-white">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to={"contact"} className="block uppercase text-sm lg:text-lg font-medium p-2 bg-transparent text-gray-900 rounded-lg md:border-0 dark:text-white">Contact</NavLink>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </>
  )
}
