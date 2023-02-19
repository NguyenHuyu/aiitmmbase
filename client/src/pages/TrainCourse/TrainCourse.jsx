import React from 'react';
import landmark from './landmark.jfif'
import { FaHandPeace } from "react-icons/fa";
import CardKhoaHoc from '../../components/CardKhoaHoc/CardKhoaHoc';
import './_TrainCourse.scss'
const TrainCourse = () => {
  return (
    <div className='pt-[10px] px-[3%] md:px-[6%]'>
      <h1 className='text-center text-red-600 font-[700] text-[16px]'>Tiếng Anh - Định vị bản thân trong kỷ nguyên hội nhập</h1>
      <div className='flex flex-col lg:flex-row lg:gap-[20px] xl:justify-center'>
        <img src={landmark} className='mx-[auto] mt-[10px] w-full h-[180px] object-cover md:w-[50%] md:mt-[20px] lg:h-[auto] lg:flex-[3] xl:max-w-[500px] xl:mx-[0]'/>
        <p className='leading-5 mt-[10px] text-[13px] text-justify md:mt-[20px] lg:flex-[4] xl:max-w-[600px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        <br/>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      <button className=' bg-red-600 rounded-full w-[150px] h-[35px] text-white text-[14px] block mx-[auto] mt-[15px] font-[600] md:mt-[25px]'>ĐĂNG KÝ NGAY</button>
      <div className=' flex items-center justify-center mt-[15px] gap-[5px]'><FaHandPeace className='text-red-600'/><h1 className=' text-red-600 font-[700]'>ĐỂ CLIT ĐỒNG HÀNH CÙNG BẠN</h1></div>
      
      <h1 className=' text-red-600 font-[700] mt-[20px]'>1. KHÓA HỌC ĐA DẠNG</h1>
      <p className='leading-5 text-[13px] text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      <br/>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>

      <h1 className=' text-red-600 font-[700] mt-[15px]'>2. ĐỘI NGŨ GIẢNG VIÊN CHUYÊN MÔN CAO, NHIỆT TÌNH</h1>
      <p className='leading-5 text-[13px] text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      <br/>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>

      <h1 className=' text-red-600 font-[700] mt-[15px]'>3. MÔI TRƯỜNG HỌC TẬP TIỆN NGHI</h1>
      <p className='leading-5 text-[13px] text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      <br/>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>

      <h1 className=' text-red-600 font-[700] mt-[15px] p-[3px] text-center border-[2px] border-dashed'>CÁC KHÓA HỌC TIẾNG ANH TẠI TRUNG TÂM NGOẠI NGỮ - CNTT</h1>

      <div>
          <h1 className='text-red-600 font-[700] mt-[15px] border-b-[2px]'>ENGLISH SKILLS</h1>
          <div className='grid grid-cols-[repeat(2,minmax(150px,300px))] gap-[10px] pb-[20px] justify-center
                          md:grid-cols-[repeat(auto-fit,minmax(150px,280px))] xl:gap-[25px]'>
              <CardKhoaHoc/>
              <CardKhoaHoc/>
              <CardKhoaHoc/>
          </div>
      </div>
    </div>
  );
  
}

export default TrainCourse;
