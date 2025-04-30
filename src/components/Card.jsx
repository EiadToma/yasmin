import React from 'react'

const Card = ({title,description,icone}) => {
  return (
    <div className='bg-slate-200 md:w-1/4  hover:scale-105 transition p-2 m-2 rounded border border-green-400 '>
        <div className='text-center'>
        <span className='block '>{title}
        {icone}
        <p className="text-base text-[#2e5c43]	 leading-relaxed my-4">{description}</p>

     </span>        
      </div>
    </div>
  )
}

export default Card