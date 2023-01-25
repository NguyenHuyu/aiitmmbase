import React from 'react'
import Not from "../../assets/Erroer.jpg"

import "./_NotFound.scss"
const NotFound = () => {
  return (
    <div className='flex items-center justify-center'>
        <img src={Not} className='w-[100%]' alt="" />
    </div>
  )
}

export default NotFound
