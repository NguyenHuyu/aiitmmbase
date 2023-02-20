import React from 'react'


const CardKhoaHoc = () => {
  const courses= [
    {
      title:'ENGLISH SKILL',
      level:1,
     
    },
    {
      title:'ENGLISH SKILL',
      level:2,
    },
    {
      title:'ENGLISH SKILL',
      level:3,
    },
    {
      title:'ENGLISH SKILL',
      level:4,
    },

  ]

return (
    (courses.map((course,index)=>{
      return  (<>
      <div className='mt-[20px] '>
          <div className=' bg-gradient-to-r from-sky-500 to-indigo-500 h-[100px] rounded-[15px] flex justify-center items-center shadow-md gap-[5px] text-white lg:h-[150px]'>
              <span className='font-[600]'>{course.title}</span>
              <span className=' font-[600]'>{course.level}</span>
          </div>
          <h3 className='text-center text-[13px] opacity-[0.8] mt-[5px]'>{course.title + ' ' + course.level}</h3>
      </div>
      </>)
    }))
   
    )
}
export default CardKhoaHoc