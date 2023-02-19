import React from 'react'


const CardKhoaHoc = () => {
  const courses= [
    {
      title:'ENGLISH SKILL',
      level:1,
      des:'English Skills 1'
    },
    {
      title:'ENGLISH SKILL',
      level:2,
      des:'English Skills 2'
    },
    {
      title:'ENGLISH SKILL',
      level:3,
      des:'English Skills 3'
    }
  ]

return (
    (courses.map((course,index)=>{
      return  (<>
      <div className='mt-[20px] '>
          <div className=' [background:rgb(55,180,153)] [background:linear-gradient(90deg,rgba(55,180,153,1)_0%,rgba(28,163,190,1)_100%)] h-[100px] rounded-[15px] flex justify-center items-center shadow-md gap-[5px] text-white lg:h-[150px]'>
              <span className='font-[600]'>{course.title}</span>
              <span className=' font-[600]'>{course.level}</span>
          </div>
          <h3 className='text-center text-[13px] opacity-[0.8] mt-[5px]'>{course.des + course.level}</h3>
      </div>
      </>)
    }))
   
    )
}
export default CardKhoaHoc