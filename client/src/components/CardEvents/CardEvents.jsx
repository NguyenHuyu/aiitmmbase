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
          <div key={index} className='DienBienCard_Wrapper'>
      <img className='img' src={item.image.url}></img>
      <div className='divContent'>
          <span className='divContent_time'>{format(item.updatedAt)}</span>
          <span className='divContent_title'>{item.title} </span>
          <span className='divContent_description'>{item.desc}</span>
          <Link to={`/su-kien/${item._id}`}>
          <button className='divContent_button_xemthem'>
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
