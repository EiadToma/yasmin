import { useState } from 'react'
import './App.css'
import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import { Routes,Route,Navigate} from 'react-router-dom'
function App() {

  return (
    <div className=' h-fit  w-10/12 m-auto overflow-hidden '>
      <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />

      </Routes>
    </div>
  )
}

export default App
