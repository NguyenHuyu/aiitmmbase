import React from 'react'

import bgvien from "../../assets/Untitled-1-Recovered.jpg"
import './_Banner.scss'
const Banner = () => {
  return (
    <div className='bannerContainer bg-gray-700'>
      <div className='flex  relative w-full'>
          <img src={bgvien} alt=""  className='w-[100%] relative'/>
          
      </div>
    </div>
  )
}

export default Banner 
