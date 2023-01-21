import React from 'react'
import { Link } from 'react-router-dom'
import {format} from "timeago.js"
import useFetch from '../../hooks/Fetch'

import './_CardEvents.scss'
const CardEvents = () => {
  const {data} = useFetch("http://localhost:5000/api/events/getevent")
  const newData = [...data].reverse()
  return (
    <>
      { 
        newData.map((item, index)=>(
          <>
            <div key={index}>
            <div class=" flex items-center sm:text-left xl:-ml-0 xl:h-52 sm:h-auto md:h-auto lg:h-auto lg:mx-auto  md:max-w-5xl xl:w-full mdd:w-full lg:w-full sm:w-96 mdd:h-48 md:w-96  justify-center bg-white text-gray-900 rounded shadow-xl   w-full transition duration-500 transform hover:scale-105 my-2">
              <div class="flex flex-wrap items-center w-full">
            <div class="w-1/4 hidden md:block">
                  <img src={item.image.url} alt="" className="xl:pl-2 w-full h-full object-cover"/>
            </div>
            <div class=" md:w-2/4 xl:w-3/4 text-left">
                <div class="p-5 xl:px-4 sm:px-1 md:py-2 xl:w-full lg:w-[100%] md:w-full  mdd:w-full">
                    <h3 class="text-sm">{format(item.updatedAt)}</h3>
                    <h5 class="text-base mb-3 sm:w-56 mdd:w-96 md:w-80 lg:w-[100%] md:w-[100% ]  sm:text-sm xl:w-full">{item.title}</h5>
                    <p class="text-sm text-justify sm:w-56 mdd:w-96 lg:w-[100%] w-full xl:w-full">{item.desc}</p>
                    <Link to={`/su-kien/${item._id}`}>
                      <button class="ml-20 w-[50%] py-2 px-4 rounded text-black font-normal  hover:bg-gray-300 focus:outline-none transition duration-150 ease-in-out">
                        Xem Thêm
                      </button >
                    </Link>
              </div>
            </div>
          </div>
      </div>
    </div>
          </>
        ))
      }
    </>
  )
}

export default CardEvents
