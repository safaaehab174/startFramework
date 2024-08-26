import React, { useEffect, useState } from 'react'
import style from './Contact.module.css'
import { useFormik } from 'formik'

export default function Contact() {
  useEffect(() => {
    document.title="Contact"
  }, [])
  function handelregister(values) {
    console.log(values)
  }
  let formik=useFormik({
    initialValues:{
      name:"",
      age:"",
      email:"",
      password:""
    },
    onSubmit:handelregister
  });
  return (
    <>
      <div className="lg:w-full w-3/4 mx-auto flex items-center justify-center py-20 text-cyan-900">
        <div className=' flex items-center flex-col w-full' >
          <h1 className='uppercase text-4xl font-bold py-4'>
            conatct section

          </h1>
          <p className='icon w-96 py-2 flex items-center justify-center after:bg-cyan-900 before:bg-cyan-900' >
            <i className="fa-solid fa-star relative mx-3"></i>
          </p>
          <div className="w-full">

            <form className="max-w-xl mx-auto" onSubmit={formik.handleSubmit}>
              <div className="relative z-0 w-full mb-10 group">
                <input type="text" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} id="userName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-500 dark:border-gray-600  focus:outline-none focus:ring-0 peer" placeholder=" " required />
                <label htmlFor="userName" className="peer-focus:font-medium peer-focus:border-gray-500 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">UseName</label>
              </div>

              <div className="relative z-0 w-full mb-10 group">
                <input type="text" name="age" value={formik.values.age} onChange={formik.handleChange} onBlur={formik.handleBlur} id="age" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-500 dark:border-gray-600  focus:outline-none focus:ring-0 peer" placeholder=" " required />
                <label htmlFor="age" className="peer-focus:font-medium peer-focus:border-gray-500 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">UseAge</label>
              </div>

              <div className="relative z-0 w-full mb-10 group">
                <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-500 dark:border-gray-600  focus:outline-none focus:ring-0 peer" placeholder=" " required />
                <label htmlFor="email" className="peer-focus:font-medium peer-focus:border-gray-500 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User-Email</label>
              </div>

              <div className="relative z-0 w-full mb-10 group">
                <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-500 dark:border-gray-600  focus:outline-none focus:ring-0 peer" placeholder=" "  />
                <label htmlFor="password" className="peer-focus:font-medium peer-focus:border-gray-500 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User-password</label>
              </div>
             
              <button type="submit" className="text-white  hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  dark:hover:bg-green-500 dark:focus:ring-green-600 Home">Submit</button>
            </form>

          </div>
        </div>
      </div>
    </>
  )
}
