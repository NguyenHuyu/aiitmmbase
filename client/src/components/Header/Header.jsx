import React from 'react'
import LogoSIU from "../../assets/Logo Đại Học Quốc Tế Sài Gòn - SIU.png"
import LogoAIIT from "../../assets/logo.png"
import VN from "../../assets/vi.png"
import EN from "../../assets/en.png"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

import {FaTwitter,FaFacebook,FaMailBulk,FaInstagram} from "react-icons/fa"
import './_Header.scss'
const Header = () => {
  return (  
    <div className='bg-gradient-to-r from-bgHFto via-gray-300 to-gbHFfrom'>
      <div className='headerContainer 
                      xl:max-w-5xl 
                      lg:max-w-2xl 
                      md:max-w-2xl
                      sm:max-w-full 
                      sm:px-2
                      xl:h-40 sm:h-32 mx-auto flex justify-between items-center'>
        <div className='flex items-center'>
              <div className=''>
                <Link to="/"><img 
                    src={LogoSIU} 
                    alt="" 
                    className='xl:w-32 sm:w-24'/>
                </Link>
              </div>
              <div>
                <Link to="/"><img 
                  src={LogoAIIT} 
                  alt="" 
                  className='xl:w-36 sm:w-16'/>
                </Link>
              </div>
        </div>
        <div className='space-y-10 flex flex-col items-center'>
          <div 
            className=' flex gap-4 text-yellow-100'>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }} 
              whileTap={{ scale: 0.2 }}>
              <FaTwitter className='xl:text-2xl text-blue-500'/>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }} 
              whileTap={{ scale: 0.2 }}>
              <FaFacebook className='xl:text-2xl text-blue-600'/>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }} 
              whileTap={{ scale: 0.2 }}>
              <FaMailBulk className='xl:text-2xl text-green-500 '/>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }} 
              whileTap={{ scale: 0.2 }}>
              <FaInstagram className='xl:text-2xl text-red-400'/>
            </motion.div>
          </div>
          <div className='flex gap-4'>
              <img src={VN} alt="" className='w-6 ' />
              <img src={EN} alt="" className='w-6'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
