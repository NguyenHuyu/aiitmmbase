import React from 'react';
import { Link } from 'react-router-dom';

const Option = () => {
  return (
    <div className='flex'>
        <div className='w-full h-32 bg-gray-600 flex items-center justify-center'>
            <Link to="/"><button className='border border-red-600 bg-transparent p-3 '>Home</button></Link>
        </div>
        <div className='w-full h-32 bg-gray-600 flex items-center justify-center'>
            <Link to="/admin/dienbien-list"><button className='border border-red-600 bg-transparent p-3 '>Diễn Biến Mới</button></Link>
        </div>
        <div className='w-full h-32 bg-gray-600 flex items-center justify-center'>
            <Link to="/admin/facebook-list"><button className='border border-red-600 bg-transparent p-3 '>Diễn Biến Facebook</button></Link>
        </div>
        <div className='w-full h-32 bg-gray-600 flex items-center justify-center'>
            <Link to="/admin/contact-list"><button className='border border-red-600 bg-transparent p-3 '>Liên Hệ</button></Link>
        </div>
        
    </div>
  );
}

export default Option;
