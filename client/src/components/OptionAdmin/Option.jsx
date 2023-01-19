import React from 'react';
import { Link } from 'react-router-dom';

const Option = () => {
  return (
    <div className='flex gap-6 bg-gray-600'>
        <div className='w-full h-32  flex items-center justify-center'>
            <Link to="/"><button className='border border-red-600 bg-transparent p-3 h-20'>Home</button></Link>
        </div>
        <div className='w-full h-32  flex items-center justify-center'>
            <Link to="/admin/dienbien-list"><button className='border border-red-600 bg-transparent p-3 h-20'>Diễn Biến Mới</button></Link>
        </div>
        <div className='w-full h-32  flex items-center justify-center'>
            <Link to="/admin/facebook-list"><button className='border border-red-600 bg-transparent p-3 h-20'>Diễn Biến Facebook</button></Link>
        </div>
        <div className='w-full h-32  flex items-center justify-center'>
            <Link to="/admin/daotao-list"><button className='border border-red-600 bg-transparent p-3 h-20'>Dữ liệu Trang Đào Tạo</button></Link>
        </div>
        <div className='w-full h-32  flex items-center justify-center'>
            <Link to="/admin/khoahoc-list"><button className='border border-red-600 bg-transparent p-3 h-20'>Dữ liệu Trang Khóa Học</button></Link>
        </div>
        <div className='w-full h-32 flex items-center justify-center'>
            <Link to="/admin/contact-list"><button className='border border-red-600 bg-transparent p-3 h-20'>Liên Hệ</button></Link>
        </div>
        
    </div>
  );
}

export default Option;
