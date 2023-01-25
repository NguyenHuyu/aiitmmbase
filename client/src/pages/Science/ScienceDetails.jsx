import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

import './_ScienceDetails.scss'
const ScienceDetails = () => {
  const location = useLocation()
    const id = location.pathname.split("/")[2] 
    useEffect(() => {
        axios.get(`http://localhost:5000/api/sciences/getscience/find/${id}`)
            .then((res)=>{
                setData(res.data)
        })
    }, [id]);
    const [data, setData] = useState({})
  return (
    <div className=' mx-auto max-w-4xl h-100vh md:h-screen'>
        <br />
          <h1 className='text-2xl'>{data.title}</h1> 
        <br />
          <p className='text-justify'>{data.desc}</p>
         <br />
        <div><img src={data.image?.url} alt="" className='w-[60%] object-cover mb-10'/> </div>

        
    </div>
  )
}

export default ScienceDetails
