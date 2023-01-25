import React from 'react';
import { Banner, CardEvents, CardFacebook, MainText } from '../../components/index';
import donvi1 from "../../assets/CHE.png"
import donvi2 from "../../assets/CEL.png"
import donvi3 from "../../assets/CEBC.png"
import './_Home.scss'

const Home = () => {
  return (  
    <div >
      <div>
        <Banner/>
        <div className='bodyContainer bg-gray-300'>
          <div className='x l:h-52 sm:h-28 flex flex-col items-center py-6'>
              <h1 className='xl:flex items-center xl:text-2xl font-bold text-gray-700 xl:mb-10 sm:mb-1 sm:text-xs '>CÁC ĐƠN VỊ TRỰC THUỘC</h1>
              <div className='xl:flex justify-center gap-2 items-center xl:h-11 mb-10 xl:flex-grow sm:space-y-1'>
                <img src={donvi1} alt="" className='xl:w-80 sm:w-20 '/>
                <img src={donvi2} alt="" className='xl:w-80 sm:w-20'/>
                <img src={donvi3} alt="" className='xl:w-80 sm:w-20'/>
              </div>
          </div>
          <div className='componentscrooll xl:flex mdd:flex md:flex-col lg:flex-col xl:flex-row xl:max-w-5xl mdd:max-w-2xl mx-auto lg:max-w-5xl md:max-w-sm sm:max-w-full  gap-1 shadow-2xl sm:h-96 lg:h-96 md:h-96  mt-20'>
            <div className='xl:w-3/4 mdd:w-3/4 xl:flex-col sm:flex mdd:flex-col lg:w-[100%] md:w-[100%] sm:overflow-x-scroll lg:h-96 sm:h-96 xl:h-[100%] sm:w-96 sm:text-justify'>
              <div>
                <h2 className='text-3xl font-semibold p-2'>Diễn Biến</h2>
              </div>
              <div className='scrolls'>
                <CardEvents/>
              </div>
            </div>
            <div className='xl:w-1/4 mdd:w-1/4 xl:flex-col sm:flex  mdd:flex-col sm:h-96 xl:h-[100%] sm:overflow-x-scroll '>
              <div>
                <h2 className='text-3xl font-semibold p-2'>Sự Kiện</h2>
              </div>
              <div className='scrolls'>
                <CardFacebook/>
            </div>
            </div>
          </div>
        </div>
        <MainText/> 
      </div>
    </div>
  );
}

export default Home;

