import React from 'react'
import Card from './Card'
const Introduction = () => {
  return (
    <div className=' p-4'>
        <h3 className='text-green-600 text-2xl font-bold m-2 text-center'>Yasmin provides Three learning paths</h3>
        <div className='flex flex-wrap justify-center gap-8'>
        <Card title={'1- Front End Development.'}
        description={'You will learn how to build well structred front end applications in industry standard , you will also learn the best tricks thats makes ur UI reach heighest levels of performance,animations and much more'}
        icone={<svg class="w-6 h-6 inline-block m-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>
        }
        />
        <Card title={'2- Back End Development.'}
        description={'In the Backend path you will learn how to build functioal REST apis using django , you will also learn how to implement chatGpt apis in ur application and Deliver optimized backend '}
        icone={
          <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 m-2 text-blue-600 inline-block' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="3" width="20" height="6" rx="2" ry="2" />
          <rect x="2" y="9" width="20" height="6" rx="2" ry="2" />
          <rect x="2" y="15" width="20" height="6" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6" y2="6" />
          <line x1="6" y1="12" x2="6" y2="12" />
          <line x1="6" y1="18" x2="6" y2="18" />
          </svg>
        }
        />
        <Card title={'3-  Data Set Analysis.'}
        description={'you will preprocess , manage , and train models on real world data sets and extract the best feature with the help of top tier teachers and expirst in the field'}
        icone={<svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8 inline-block mb-2 ' viewBox="0 0 64 64" fill="none" stroke="blue" stroke-width="2">
          <g>
         <rect x="8" y="30" width="6" height="26" fill="none"/>
         <rect x="18" y="24" width="6" height="32" fill="none"/>
         <rect x="28" y="18" width="6" height="38" fill="none"/>
         <rect x="38" y="12" width="6" height="44" fill="none"/>
         
         <circle cx="48" cy="20" r="8" fill="none"/>
         <line x1="53" y1="25" x2="60" y2="32"/>
         <circle cx="48" cy="20" r="2" fill="black"/>
         <path d="M48 16 v-2 M48 24 v2 M44 20 h-2 M52 20 h2 M45.5 16.5 l-1.5-1.5 M50.5 23.5 l1.5 1.5 M45.5 23.5 l-1.5 1.5 M50.5 16.5 l1.5-1.5" stroke-width="1"/>
           </g>
       </svg>}
        />
        </div>
    </div>

  )
}

export default Introduction