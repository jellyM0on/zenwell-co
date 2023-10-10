import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'

import NavBar from "./components/nav-bar"
import ContactForm from './components/contact-form'
import Footer from "./components/footer"

import Home from './pages/home'
import About from './pages/about'
import Service from './pages/service'
import ErrorPage from './pages/error'
import ScrollToTop from './components/scroll'
import TestPage from './pages/testpage'

const Layout = () => {

  return(
    <div id='content'>
      <NavBar/>
      <ScrollToTop/>
      <Outlet/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/about", 
        element: <About/>
      },
      {
        path: "/test",
        element: <TestPage />
      }, 
      {
        path: "/services/:servicesId", 
        element: <Service/>
      }
    ]
  }
 
  
]); 

function getServicesData(){
  fetch('./assets/service-info.json')
  .then(res => {
    return res.json(); 
  })
  .then(data => console.log(data)); 
}

function App() {
  
  return (
    <RouterProvider router={router}/>
  )
}

export default App
