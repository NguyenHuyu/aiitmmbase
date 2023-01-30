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
        <div className='bodyContainer bg-gray-300'>
          <div className='x l:h-52 sm:h-28 flex flex-col items-center py-6'>
              <h1 className='cacdonvitructhuoc xl:flex items-center xl:text-2xl font-bold text-gray-700 xl:mb-10 sm:mb-1 sm:text-xs '>CÁC ĐƠN VỊ TRỰC THUỘC</h1>
              <div className='divimgcacdonvitructhuoc xl:flex justify-center gap-2 items-center xl:h-11 mb-10 xl:flex-grow sm:space-y-1'>
                <img src={donvi1} alt="" className='xl:w-80 sm:w-20 '/>
                <img src={donvi2} alt="" className='xl:w-80 sm:w-20'/>
                <img src={donvi3} alt="" className='xl:w-80 sm:w-20'/>
              </div>
          </div>


          <div className='wrapper'>
      <div className='wrapper_dienbien'>
        <div className='dienbien_title'>Diễn Biến</div>
        <div className='dienbien_wrappercontent'>
        <CardEvents/>
        </div>

      </div>
       <div className='wrapper_sukien'>
       <div className='sukien_title'>Sự Kiện</div>
        <div className='sukien_wrappercontent'>
            <CardFacebook/>
          
           
        </div>
       </div>
    </div>
          </div>
        </div>
        <MainText/> 
    
    </div>
  );
}

export default Home;

