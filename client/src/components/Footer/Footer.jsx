import React from 'react'
import {FaYoutube, FaTiktok,FaTwitter, FaInstagram} from "react-icons/fa"
import {motion} from "framer-motion"

import './_Footer.scss'
const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-bgHFto via-gray-300 to-gbHFfrom'>
      <div className='headerContainer 
                      xl:max-w-7xl 
                      lg:max-w-5xl 
                      md:max-w-5xl
                      sm:max-w-full 
                      sm:px-2
                      xl:h-40 sm:h-32 mx-auto flex justify-between items-center'>
        <div className='text-white'>
          <h1 className=' xl:font-extrabold xl:text-xl sm:text-xs'>VIỆN CÔNG NGHỆ & SÁNG TẠO CHÂU Á</h1>
          <ul className='xl:font-semibold xl:text-base sm:text-xs sm:w-[80%]'>
            <li>16 Tống Hữu Định, Phường Thảo Điền, TP Thủ Đức.</li>
            <li>Email: aiit@siu.edu.vn</li>
            <li>Điện thoại: (84 28)36203932</li>
          </ul>
        </div>
        <div className='flex gap-4'>
          <motion.div whileTap={{ scale: 0.2 }}><FaTwitter className='xl:text-2xl text-blue-500'/></motion.div>
          <motion.div whileTap={{ scale: 0.2 }}> <FaTiktok className='xl:text-2xl text-red-900'/></motion.div>
          <motion.div whileTap={{ scale: 0.2 }}><FaInstagram className='xl:text-2xl text-red-400'/></motion.div>
          <motion.div whileTap={{ scale: 0.2 }}><FaYoutube className='xl:text-2xl text-red-600'/></motion.div>
        </div>
      </div>
    </div>
  )
}

export default Footer
