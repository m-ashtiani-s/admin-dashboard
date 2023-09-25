import { useState } from 'react'
import Login from './features/identity/login/login'
import '../public/css/styles.css'
import Register from './features/identity/register/register'
import {RouterProvider} from 'react-router-dom'
import router from './routs/routs'

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
