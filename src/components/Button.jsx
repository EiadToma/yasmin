import React from 'react'

const Button = () => {
  const handelJoin = ()=>{
    alert('redirection..')
  }
  return (
    <div onClick={()=>handelJoin()}  className='w-64  my-20 text-center mx-auto bg-green-700 text-white px-4 py-2 rounded transition'>Join us</div>
  )
}

export default Button