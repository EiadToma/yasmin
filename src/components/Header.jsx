import React from 'react'

const Header = () => {
  return (
<div className="relative h-96 bg-[url('./edited.jpg')] bg-cover bg-center rounded">
  <div className="absolute inset-0  bg-opacity-40"></div>
  <div className="relative z-10 text-center text-white pt-26">
    <h1 className="text-4xl text-slate-300 font-bold">Yasmin Organization</h1>
    <p className="text-lg text-slate-100">A bridge connects developers with opportunities.</p>
  </div>
</div>

  )
}

export default Header