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
          <div key={index} className='bg-white flex flex-col shadow-2xl w-[250px] mb-[15px] snap-center md:mb-0 md:w-full md:shadow-none
                                      lg:flex-row lg:h-[180px] '>
            <img className='h-[150px] w-full object-cover lg:h-full lg:w-[200px] lg:p-[10px] lg:pr-0 ' src={item.image.url}></img>
            <div className='flex flex-col p-[10px] lg:w-full '>
                  <span className='truncate font-medium text-[12px] lg:whitespace-normal lg:truncate-1'>{format(item.updatedAt)}</span>
                  <span className='truncate font-semibold text-[14px] lg:whitespace-normal lg:truncate-1'>{item.title} </span>
                  <span className='truncate-3 text-[13px]'>{item.desc}</span>
                  <Link to={`/su-kien/${item._id}`}>
                  <button className='w-[90px] h-[35px] text-[11px] mt-[5px] bg-white font-[600] border-b-[2px] border-[1px] rounded-[5px] '>
                    Xem Thêm
                  </button>
                  </Link>
            </div>
          </div>
          </>
        )))
      }
    </>
  )
}

export default CardEvents
