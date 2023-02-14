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
      dataReverse.map((item)=>(
        <div className='Wrapper_SuKienCard'>
      <div className='SuKienCard_Divtitle'>
          <img src={anh} className='SuKienCard_Divtitle_avt'></img>
          <div className='SuKienCard_Divtitle_content'>
              <p className='SuKienCard_Divtitle_content_title'>{item.title}</p>
              <p className='SuKienCard_Divtitle_content_tag'> #tag #tag</p>
          </div>
      </div>
      <p className='SuKienCard_description'>{item.desc}</p>
      <img src={item.image.url} className='SuKienCard_img'></img>
      <div className='SuKienCard_Divlike'>
        <button className='SuKienCard_Divlike_iconLike'><AiTwotoneLike style={{fontSize:'18px'}} /></button>
        <button className='SuKienCard_Divlike_iconShare'><FaShare style={{fontSize:'18px'}}/></button>
      </div>
    </div>
      ))
     }
  </>
  )
}

export default CardFacebook
