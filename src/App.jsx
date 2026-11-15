import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home'
import Login from './Login'
import Contact from './Contact'
import Services from './Services';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (<> <Navbar />
        <Home />
      </>
      )
    },
    {
      path: "/login",
      element: (<><Navbar/><Login /></>)
    },
    {
      path: "/contact",
      element: (<><Navbar /><Contact /></>)
    },
    {
      path: "/services",
      element: (<><Navbar /><Services /></>)
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
