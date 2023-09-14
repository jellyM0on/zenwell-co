import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Home from './pages/home'
import ErrorPage from './pages/error'

import TestPage from './pages/testpage'

const router = createBrowserRouter([
  {
    path: '/', 
    element: <Home/>,
    errorElement: <ErrorPage/>,
    children: [
      
    ]
  }, 
  {
    path: 'test/', 
    element: <TestPage/>
  }
  
]); 

function App() {
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
