import {useState} from 'react'
import { toast,ToastContainer } from "react-toastify";
import { Link } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

const Register = () => {
  const [email,setEmail] = useState('')
  const [name,setName]= useState('')
  const [password,setPassword]= useState('')
  const [vlaidate,setValidate]= useState('')
  // const [error,setError]=useState(false)
  // const [errormessage,setMessage]=useState('')

  const handelRegister =async (e)=>{
    e.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const valid = emailRegex.test(email);
    console.log(valid);

    if (!valid) {
      console.error("Invalid email format.");
      return false;
    }
    
    if (password === vlaidate){
    const data ={
      username:name,
      email:email,
      password:password,
    }

    await axios.post(`http://localhost:3001/users`,data)
    
    showToastMessage()
  }
  else{
      toast.error("password and validat does't match",{position:'top-center',hideProgressBar:true})
  } }

  const showToastMessage = (status) => {
    toast.success('registering',{position:'top-center',autoClose:1000,hideProgressBar:true});
  }

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className=' bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h2 className='text-3xl font-bold text-center text-green-700 mb-6'>Register</h2>

        <form className='space-y-4' onSubmit={(e)=>handelRegister(e)}>
          <div>
            <label className='block text-gray-700'>Name</label>
            <input
              onChange={(e)=>setName(e.target.value)}
              type='text'
              placeholder='Your name'
              className='w-full mt-1 p-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500'
            />
          </div>

          <div>
            <label className='block text-gray-700'>Email</label>
            <input
              onChange={(e)=>setEmail(e.target.value)}
              type='email'
              placeholder='you@example.com'
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

          <div>
            <label className='block text-gray-700'>Confirm Password</label>
            <input
              onChange={(e)=>setValidate(e.target.value)}
              type='password'
              placeholder='********'
              className='w-full mt-1 p-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500'
            />
          </div>
          <span className='block'>already have an account? <Link to={'/login'} className='text-blue-500'>Login</Link></span>
          <button
            disabled={password.length<8}
            type='submit'
            className='w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-200'
          >
            Register
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Register
