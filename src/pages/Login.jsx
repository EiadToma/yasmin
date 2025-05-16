import {useState} from 'react'
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Register = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const navigate = useNavigate();

  const handelLogin =async(e)=>{
    e.preventDefault()
    if(!email || !password){
        showToastMessage('fill')
        return
    }
    const response =await axios.get(`http://localhost:3001/users?email=${email}&password=${password}`)
    console.log(response.data)
    if(response.data[0] ){
    localStorage.setItem('token','usertoken')
    showToastMessage('success')
    }
    else {
          showToastMessage('error')
    }
  }

  const showToastMessage = (status) => {
    console.log(status)
    if(status==='error'){
      toast.error("wrong email or credintials",{position:'top-center',hideProgressBar:true})
    }
    else if(status==='success'){
    toast.success('logging in ',{position:'top-center',autoClose:1000,hideProgressBar:true});
    navigate('/home')
  }
  else {
        toast.warning('fill the form please',{position:'top-center',autoClose:1000,hideProgressBar:true});
  }
  }

  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h2 className='text-3xl font-bold text-center text-green-700 mb-6'>Login</h2>

        <form className='space-y-4' onSubmit={(e)=>handelLogin(e)}>
          <div>
            <label className='block text-gray-700'>Email</label>
            <input
              type='email'
              onChange={(e)=>setEmail(e.target.value)}
              placeholder='Your email'
              className='w-full mt-1 p-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500'
            />
          </div>

          <div>
            <label className='block text-gray-700'>Password</label>
            <input
              onChange={(e)=>setPassword(e.target.value)}
              type='password'
              placeholder='********'
              className='w-full mt-1 p-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500'
            />
          </div>

          <span className='block'>don't have an account? <Link to={'/register'} className='text-blue-500'>Register</Link></span>
          <button
            type='submit'
            className='w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-200'
          >
            Login
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Register
