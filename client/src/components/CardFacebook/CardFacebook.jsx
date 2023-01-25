import React from 'react'
import useFetch from '../../hooks/Fetch'
import anh from "../../assets/Ellipse20.png"

import './_CardFacebook.scss'
const CardFacebook = () => {
  const {data} = useFetch("http://localhost:5000/api/facebooks/getface")
  const dataReverse = [...data].reverse()
  return (
    <>
     {
      dataReverse.map((item)=>(
        <div>
      <div className=" bg-gray-100 flex items-center justify-center mt-2 lg:w-full">
        <div className="w-80 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-500 transform cursor-pointer">
          <div className="flex items-center mb-2 space-x-4">
            <img className="w-10 rounded-full ml-2 transition duration-500 transform hover:scale-105" src={anh} alt="David" />
          <div>
            <h1 className="mb-1 text-xl font-bold text-gray-700">{item.title}</h1>
            <p className="text-sm font-normal text-gray-600 mr-14 hover:underline">#Publicado hace 2 horas</p>
          </div>
          </div>
            <p className='text-justify text-xs p-4'>{item.desc}</p>
            <img src={item.image.url} alt="" classNameName='transition duration-500 transform hover:scale-105' />
            <div className="flex justify-between px-10 py-6 ">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
      ))
     }
  </>
  )
}

export default CardFacebook
