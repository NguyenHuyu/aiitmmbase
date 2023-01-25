import React from 'react'
import { Link } from 'react-router-dom'
import { Oval } from 'react-loader-spinner'
import useFetch from '../../hooks/Fetch'

import './_SCard.scss'
const SCard = () => {

  const {data, loading} = useFetch("http://localhost:5000/api/sciences/getscience")
  return (
    <div className='cards'>
      {
        loading ? 
        <><div className='flex items-center justify-center'>
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
        </div></> 
      : 
      <>
      {
        data.map((item) => (
          <Link to={`/nghien-cuu-khoa-hoc/${item._id}`}>
            <div className='scard__container'>
              <div>
                <img src={item.image?.url} alt="" className='duration-200 transform hover:scale-y-105'/>
              </div>
              <span>{item.title}</span>
              <div className='decogate'> </div>
            </div>
          </Link>
        ))
      }
      </>
      }
    </div>
  )
}

export default SCard
