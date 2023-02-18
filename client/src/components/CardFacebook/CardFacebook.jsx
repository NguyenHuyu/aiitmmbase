import React from 'react'
import useFetch from '../../hooks/Fetch'
import anh from "../../assets/Ellipse20.png"
import {AiTwotoneLike} from 'react-icons/ai'
import {FaShare} from 'react-icons/fa'
import './_CardFacebook.scss'
const CardFacebook = () => {
  const {data} = useFetch("http://localhost:5000/api/facebooks/getface")
  const dataReverse = [...data].reverse()
  return (
    <>
     {
      dataReverse.map((item,index)=>(
        <>
        <div key={index} className='flex flex-col min-w-[250px] max-w-[250px] shadow-2xl p-[10px] mb-[15px] snap-center bg-white md:mb-0 md:min-w-full md:max-w-[auto] md:shadow-none'>
            <div className='flex'>
                <img src={anh} className=' rounded-full w-[40px] h-[40px]'/>
                <div className='ml-[10px]'>
                    <p className='truncate font-semibold text-[14px]'>{item.title}</p>
                    <p className='text-[12px] opacity-[0.8]'> #tag #tag</p>
                </div>
            </div>
            <p className='truncate-3 text-[13px] mt-[10px]'>{item.desc}</p>
            <img src={item.image.url} className=' mt-[10px] h-[130px] w-full object-cover'></img>
            <div className='flex justify-center gap-[50px] mt-[10px]'>
              <button className='flex justify-center items-center w-[50px] h-[35px] text-[11px] mt-[5px] bg-white font-[600] border-b-[2px] border-[1px] rounded-[5px] '><AiTwotoneLike style={{fontSize:'18px'}} /></button>
              <button className='flex justify-center items-center w-[50px] h-[35px] text-[11px] mt-[5px] bg-white font-[600] border-b-[2px] border-[1px] rounded-[5px] '><FaShare style={{fontSize:'18px'}}/></button>
            </div>
        </div>
        </>
      ))
     }
  </>
  )
}

export default CardFacebook
