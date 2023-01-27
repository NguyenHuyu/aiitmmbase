import React from 'react'
import {AiOutlineHome} from "react-icons/ai"
import { motion } from 'framer-motion'
import './_Navbar.scss'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='bg-slate-600'>
      <div className='headerContainer 
                      xl:max-w-5xl 
                      lg:max-w-2xl 
                      md:max-w-md
                      sm:max-w-full 
                      sm:h-8 mx-auto xl:h-14 flex items-center 
                      justify-center xl:gap-10 sm:gap-1 font-medium 
                      cursor-pointer text-white'
      >
        <Link to="/">
          <motion.div 
            whileTap={{scale: 0.7 }}>
              <AiOutlineHome className='xl:text-2xl'/>
          </motion.div>
        </Link>
        <ul className='flex xl:gap-4 sm:gap-2 sm:text-xs font-bold xl:text-xl'>
          <Link to="/gioi-thieu">
            <motion.li 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }} 
              whileTap={{ scale: 0.7 }} 
              className='hover:font-extrabold'
            >Giới Thiệu
            </motion.li>
          </Link>
          <li className='hover:font-extrabold' >
            <li className='items-chuck hover:font-extrabold'>
              <motion.div whileTap={{ scale: 0.7 }} >Đào Tạo </motion.div>
              <ul className='items flex bg-gray-600 font-bold text-base px-2 py-2 rounded-sm' >
                <Link to="/dao-tao/details">
                  <motion.li  
                    whileTap={{ scale: 0.7 }}  
                    className='hover:text-gray-900'
                    >ĐÀO TẠO 
                  </motion.li>
                </Link>
                <Link to="/dao-tao/khoa-hoc">
                  <motion.li  
                    whileTap={{ scale: 0.7 }}  
                    className='hover:text-gray-900'
                    >KHÓA HỌC
                  </motion.li>
                </Link>
              </ul>
            </li>
          </li>
          <Link to="/nghien-cuu-khoa-hoc">
            <motion.li 
              whileTap={{ scale: 0.7 }}  
              className='hover:font-extrabold'
            >Nghiên Cứu Khoa Học
            </motion.li>
          </Link>
          <Link to="/hop-tac">
            <motion.li 
              whileTap={{ scale: 0.7 }}  
              className='hover:font-extrabold'
            >Hợp Tác
            </motion.li>
          </Link>
          <Link to="/lien-he">
            <motion.li 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }} 
              whileTap={{ scale: 0.7 }} 
              className='hover:font-extrabold '
            >Liên Hệ
            </motion.li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
