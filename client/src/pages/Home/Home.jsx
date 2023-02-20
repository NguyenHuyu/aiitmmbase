import React from 'react';
import { Banner, CardEvents, CardFacebook, MainText } from '../../components/index';
import donvi1 from "../../assets/CHE.png"
import donvi2 from "../../assets/CEL.png"
import donvi3 from "../../assets/CEBC.png"
import './_Home.scss'
import './_Responsive.scss'

const Home = () => {
  return (  
    <div >
      <div>
          <Banner/>
          <div className=' bg-gray-300'>
                              <section className=''>
                                  <h1 className='text-center font-bold pt-[10px] text-gray-700 '>CÁC ĐƠN VỊ TRỰC THUỘC</h1>
                                  <div className='flex flex-col items-center mt-[10px] md:flex-row md:justify-center md:gap-[15px] '>
                                    <img src={donvi1} alt="" className='w-[70%] mt-[10px] md:w-[30%] max-w-[350px] '/>
                                    <img src={donvi2} alt="" className='w-[70%] mt-[10px] md:w-[30%] max-w-[350px]'/>
                                    <img src={donvi3} alt="" className='w-[70%] mt-[10px] md:w-[30%] max-w-[350px]'/>
                                  </div>
                              </section>

                              <section className='flex flex-col mt-[30px]  
                                                  md:flex-row md:justify-center md:gap-[24px] md:h-[80vh]
                                                 '>
                                  <div className=' md:w-[55%] md:max-w-[700px] '>
                                    <h1 className=' text-center font-semibold text-gray-700 md:text-left '>DIỄN BIẾN</h1>
                                    <div className='flex gap-[25px] px-[15px] mt-[15px] overflow-x-scroll snap-x 
                                                    md:flex-col md:overflow-y-scroll md:h-[calc(100%-45px)] md:px-0 md:overflow-x-hidden scrollbar_custom'>
                                      <CardEvents/>
                                    </div>
                                  </div>
                                  <div className='md:w-[35%] md:max-w-[300px] '>
                                    <h1 className=' text-center font-semibold mt-[35px] text-gray-700 md:mt-0 md:text-left'>SỰ KIỆN</h1>
                                    <div className='flex gap-[25px] px-[15px] mt-[15px] overflow-x-scroll snap-x 
                                                    md:flex-col md:overflow-y-scroll md:h-[calc(100%-45px)] md:px-0 md:overflow-x-hidden scrollbar_custom  '>
                                      <CardFacebook/>
                              
                                    </div>
                                  </div>
                              </section>
          </div>
      </div>
        <MainText/> 
    
    </div>
  );
}

export default Home;

