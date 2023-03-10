import React, {useState} from 'react';
import axios from "axios"
import {ToastContainer, toast} from "react-toastify"
import anhmap from "../../assets/Anhmaps.png"
import {FiSend} from "react-icons/fi"

import './_Contact.scss'
const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [contents, setContents] = useState("")

  const handleSubmit = () =>{
    axios.post("http://localhost:5000/api/contacts/postform", {
      name:name,
      email:email,
      phone:phone,
      contents:contents
    })
  }
  const notify = () =>{
    if(name && email && phone && contents){
      toast("Đã gửi!")
    }
  }
  return (
    <>
      <div className='containerContact bg-gray-600 overflow-hidden'>
      <div className='wrapperContact'>
        <div className="h-screen flex">
          <div className="hidden lg:flex w-full lg:w-1/2 login_img_section
                          justify-around items-center">
            <div className="bg-black opacity-20 inset-0 z-0"></div>
            <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
              <h1 className="text-white font-bold text-4xl font-sans">Địa Điểm</h1>
              <p className="text-white mt-1">Nằm trong khuôn viên Trường Y khoa Yong Loo Lin ở NUS, CSI nằm trên 3 tầng tại Trung tâm Y học Dịch thuật. Nó có vị trí lý tưởng đối diện với Bệnh viện Đại học Quốc gia 1.000 giường và gần các viện nghiên cứu quan trọng khác như A*Star tại Biopolis, Trường Y khoa Cao học Duke-NUS và Bệnh viện Đa khoa Singapore. Có thể dễ dàng đến các địa điểm này thông qua ga xe lửa Kent Ridge chỉ cách CSI một quãng đi bộ ngắn và tạo điều kiện thuận lợi cho việc trao đổi kiến ​​thức</p>
              <img src={anhmap} alt="" className='rounded-sm' />
            </div>
          </div>
          <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
            <div className="w-full px-8 md:px-32 lg:px-24">
            <form 
              className="rounded-md shadow-2xl p-5 " 
              onSubmit={handleSubmit}>
              <h1 className="text-gray-800 font-bold text-2xl mb-1">Vui lòng nhập thông tin liên hệ, cảm ơn!</h1>
              <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" 
                     className="h-5 w-5 text-gray-400" 
                     fill="none" 
                     viewBox="0 0 24 24" 
                     stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <input 
                  className=" pl-2 w-full outline-none border-none" 
                  type="text" 
                  placeholder="Họ và tên" 
                  required={true}
                  onChange={e=>setName(e.target.value)}/>
              </div>
              <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                <svg xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-gray-400" 
                    viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <input 
                  className="pl-2 w-full outline-none border-none" 
                  type="email" 
                  required={true}
                  placeholder="Email" 
                  onChange={(e) => {setEmail(e.target.value)}}/>
              </div>
              <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                <svg xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-gray-400" 
                    viewBox="0 0 20 20" 
                    fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <input 
                  className="pl-2 w-full outline-none border-none" 
                  type="number"  
                  min={0}
                  required={true}
                  placeholder="Số điện thoại" 
                  onChange={(e) => {setPhone(e.target.value)}}/>
              </div>
              <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                <svg xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-gray-400" 
                    viewBox="0 0 20 20" 
                    fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <input 
                  className="pl-2 w-full outline-none border-none" 
                  type="text"
                  placeholder="Nội dung" 
                  required={true}
                  onChange={(e) => {setContents(e.target.value)}}/>
              </div>
              <button 
                type="submit" 
                onClick={notify} 
                className="btn ">
                <div className='btn__wrapper'>
                  <FiSend className='i'/>
                </div>
                <span>Gửi</span>
              </button> 
            </form>
            <ToastContainer className="absolute"/>
            </div>
          </div>
      </div>          
      </div>
    </div>  
    </>
  );
}

export default Contact;
