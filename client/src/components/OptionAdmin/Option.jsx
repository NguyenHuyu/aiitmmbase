import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../hooks/apiAuth';

import './_Option.scss'
const Option = () => {
    const user = useSelector(state=>state.user.login.currentUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const access_token = user?.access_token

    const handleLogout = () =>{
        logoutUser(dispatch,navigate,access_token)
    }   
  return (
    <div className='option__container gap-6 bg-gray-600'>
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
            <Link to="/admin/science-list"><button className='border border-red-600 bg-transparent p-3 h-20'>Dữ Liệu Trang Khoa Học</button></Link>
        </div>
        <div className='w-full h-32 flex items-center justify-center'>
            <Link to="/admin/contact-list"><button className='border border-red-600 bg-transparent p-3 h-20'>Liên Hệ</button></Link>
        </div>
        {
            user && 
            <>
                <div className='w-full h-32 flex items-center justify-center'>
                    <Link to="/"><button className='border border-red-600 bg-transparent p-3 h-20' onClick={handleLogout}>Logout</button></Link>
                </div>
            </>
        }
        
    </div>
  );
}

export default Option;
