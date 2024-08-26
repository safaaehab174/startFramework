import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './componants/Layout/Layout'
import Home from './componants/Home/Home'
import Contact from './componants/Contact/Contact'
import About from './componants/About/About'
import Portfolio from './componants/Portfolio/Portfolio'
let rout= createBrowserRouter([
  {path:"",element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:"contact",element:<Contact/>},
    {path:"about",element:<About/>},
    {path:"portfolio",element:<Portfolio/>},
  ]}
])

function App() {

  return (
    <>
     {
      <RouterProvider router={rout}></RouterProvider>
     }
    </>
  )
}

export default App
