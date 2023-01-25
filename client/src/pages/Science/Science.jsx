import React from 'react';
import { SCard}  from '../../components/index';

import './_Science.scss'
const Science = () => {
  return (
    <div className=' bg-gray-400 py-8 h-100vh w-full'>
      <h1 className='flex justify-center sm:mb-6 text-xl'><strong>NGHIÊN CỨU KHOA HỌC</strong></h1>
      <div className='max-w-5xl mx-auto'>
        <SCard/>
      </div>
    </div>
  );
}

export default Science;
