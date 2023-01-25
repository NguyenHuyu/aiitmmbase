import React from 'react'
import { Link } from 'react-router-dom'
import {format} from "timeago.js"
import useFetch from '../../hooks/Fetch'
import { Oval} from "react-loader-spinner"

import './_CardEvents.scss'
const CardEvents = () => {
  const {data, loading} = useFetch("http://localhost:5000/api/events/getevent")
  const newData = [...data].reverse()
  return (
    <>
      { loading ? 
      ( <div className='flex items-center justify-center'>
          <Oval
            height={200} width={200}
            color="#545474 "
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#545474 "
            strokeWidth={5}
            strokeWidthSecondary={5}
            />
        </div>) 
      :
        (newData.map((item, index)=>(
          <>
            <div key={index}>
            <div className=" flex items-center sm:text-left xl:-ml-0 xl:h-auto sm:h-auto md:h-auto lg:h-auto lg:mx-auto  md:max-w-5xl xl:w-full mdd:w-full lg:w-full sm:w-96 mdd:h-48 md:w-96  justify-center bg-white text-gray-900 rounded shadow-xl   w-full  my-2">
              <div className="flex flex-wrap items-center w-full">
                <div className="w-1/4 hidden md:block">
                  <img src={item.image.url} alt="" className="xl:pl-2 w-full    object-cover transition duration-500 transform hover:scale-105  "/>
               </div>
               <div className=" md:w-2/4 xl:w-3/4 text-left">
                <div className="p-5 xl:px-4 sm:px-1 md:py-2 xl:w-full lg:w-[100%] md:w-full  mdd:w-full">
                    <h5 className="text-sm">{format(item.updatedAt)}</h5>
                    <h1 className="text-base mb-3 sm:w-56 mdd:w-96 md:w-80 lg:w-[100%] md:w-[100% ]  sm:text-sm xl:w-full">{item.title}</h1>
                    <p className="text-sm text-justify sm:w-56 mdd:w-96 lg:w-[100%] w-full xl:w-full">{item.desc}</p>
                    <Link to={`/su-kien/${item._id}`}>
                      <button className="mt-2 xl:ml-20 w-[30%] py-2 px-4 rounded text-black font-normal bg-gray-200  hover:bg-gray-300 focus:outline-none transition duration-150 ease-in-out">
                        Xem Thêm
                      </button >
                    </Link>
              </div>
            </div>
          </div>
      </div>
    </div>
          </>
        )))
      }
    </>
  )
}

export default CardEvents
