import Header from '../components/header'
import { useEffect } from 'react'
import Introduction from '../components/introduction'
import Button from '../components/button'
import {useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  useEffect(()=>{
  if(token !='usertoken')
    navigate('/login')

  },[])
  console.log(token)
  return (
    <>
    <Header/>
    <Introduction/>
    <Button/>
    </>
  )
}

export default Home