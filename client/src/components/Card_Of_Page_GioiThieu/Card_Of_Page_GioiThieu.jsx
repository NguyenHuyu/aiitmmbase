import React from 'react'
import imgtrans from './dog-down.png'
export const Card_Of_Page_GioiThieu = ({title,description}) => {
  return (
    <div className=' bg-[#364153] shadow-2xl p-[18px] mt-[40px] 
    md:mt-[0] snap-center '>
        <h2 className=' text-[#f8e164] text-lg font-semibold'>{title}</h2>
        <text className=' text-[#829eae] text-[13px] mt-[10px]'>
        {description}
        </text>
        <img src={imgtrans} className=' w-[185px] h-[130px] mt-[14px]'/>
    </div>
  )
}
export default Card_Of_Page_GioiThieu
