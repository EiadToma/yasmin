import Header from '../components/header'
import { useEffect } from 'react'
import Introduction from '../components/introduction'
import Button from '../components/button'
import {useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  console.log(token)
  console.log(  token !='usertoken')


  useEffect(()=>{
  if(token !='usertoken')
    navigate('/login')

  },[])
  const logout = ()=>{
    localStorage.removeItem('token')
        navigate('/login')
  }
  return (
    <>
    
    <Header/>
    <Introduction/>
    <Button/>
    <div className="fixed bottom-4 right-4 z-50">
    <button onClick={logout} className="bg-red-200 hover:bg-red-600 text-white px-4 py-2 rounded-full shadow-lg">
      Logout
    </button>
    </div>
    </>
  )
}

export default Home