import React, { useState} from 'react';
import { loginUser } from '../../hooks/apiAuth';
import {useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom"

import './_Login.scss'
const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPasword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = (e) =>{
    e.preventDefault()
    const newUser = {
      username:username,
      password:password
    }
    loginUser(newUser, dispatch, navigate)
  }

  return (
    <div className="login__container h-90vh font-sans login bg-cover">
      <div className="container mx-auto h-full flex flex-1 justify-center items-center">
        <div className="w-full max-w-lg">
          <div className="leading-loose">
            <form className="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl" 
              onSubmit={handleSubmit}>
              <p className="text-white text-center text-lg font-bold">LOGIN</p>
              <div className="">
                <label className="block text-sm text-white" for="email">E-mail</label>
                <input 
                      className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white" 
                      type="text"  
                      placeholder="Username" 
                      aria-label="email" 
                      required 
                      onChange={(e)=>{setUsername(e.target.value)}}/>
              </div>
              <div className="mt-2">
                <label className="block  text-sm text-white">Password</label>
                 <input 
                      className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                      type="password" id="password" 
                      placeholder="Password" 
                      arial-label="password" 
                      required 
                      onChange={(e)=>{setPasword(e.target.value)}}/>
              </div>
              <div className="mt-4 items-center flex justify-between">
                <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                  type="submit">Đăng Nhập Admin</button>
              </div>
              <div className="text-center">
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
