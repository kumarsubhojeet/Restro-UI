import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import { Link } from 'react-router-dom'


export default function Login() {
  return (
    <>
      <div className="Login_main my-10 ">
        <div className='  rounded-full w-[60%] mx-auto mt-[10vh] flex justify-center text-center items-center '>
          <div className=' py-4 '>
            <div className=" my-10 logo font-bold text-3xl " >
              <span className=' text-red-700 font-bold'>Sn</span>eaky
            </div>

            <div>
              <form>
                <div className=' my-5 w-[30vw] sm:w-[70vw] ' >
                  <div className=' flex items-center'>
                    <AiOutlineMail className=' text-xl mr-5 text-gray-900 ' />
                    <Input className='  ' placeholder="Enter Email" />
                  </div>
                </div>

                <div className=' my-5 w-[30vw] sm:w-[70vw] ' >
                  <div className=' flex items-center'>
                    <AiFillLock className=' text-xl mr-5 text-gray-900 ' />
                    <Input className='  ' placeholder="Enter Password" type="password" />
                  </div>
                </div>

                <div>
                  <button className='LoginChild bg-slate-500  text-white py-1 p-12 rounded-full hover:bg-red-600 hover:text-white cursor-pointer '>
                    Login
                  </button>
                  <Link to='/register'><p className=' my-4 text-gray-600 '>Create New Account</p></Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
