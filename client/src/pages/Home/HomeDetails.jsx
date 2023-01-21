import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import './_HomeDetails.scss'
const HomeDetails = () => {
    const location = useLocation()
    const id = location.pathname.split("/")[2] 
    useEffect(() => {
        axios.get(`http://localhost:5000/api/events/getevent/find/${id}`)
            .then((res)=>{
                setData(res.data)
        })
    }, []);
    const [data, setData] = useState({})
  return (
    <div className='flex-col mx-auto max-w-4xl'>
        <br />
        {data.title} <br />
        {data.desc} <br />
        <div> <img src={data.image?.url} alt="" className='w-[100%]'/> </div>

        
    </div>
  )}

export default HomeDetails
