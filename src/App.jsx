import { useState } from 'react'
import Header from './components/header'
import Introduction from './components/introduction.jsx'
import Button from './components/button.jsx'
import './App.css'

function App() {

  return (
    <div className=' bg-slate-200 h-fit p-1 w-10/12 m-auto'>
    <Header/>
    <Introduction/>
    <Button/>
    </div>
  )
}

export default App
