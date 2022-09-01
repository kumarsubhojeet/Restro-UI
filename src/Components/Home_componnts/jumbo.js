import React from 'react'
import { ImFacebook, ImTwitter, ImGithub } from "react-icons/im";
import jumbo_img from '../../img/jumbo_img.webp'
import { BiRightArrow } from "react-icons/bi";

export default function
  () {
  return (
    <>
      <div className="jumbo_main flex justify-between items-center w-[90%] sm:w-full mx-auto ">
        <div>
          <div className="junbo_left flex items-center sm:flex-col ">
            <div className="social_media flex justify-center flex-col sm:hidden">
              <ImFacebook className=' my-5 ml-5 text-xl' />
              <ImTwitter className=' my-5 ml-5 text-xl' />
              <ImGithub className=' my-5 ml-5 text-xl' />
            </div>

            <div className=' pl-10'>
              <h1 className=' text-6xl font-bold leading-snug	 text-gray-800 w-[72%] '> <span className=' text-red-700 font-bold'>F</span>oods the most precious things</h1>
            </div>


          </div>

          <div className=' flex justify-around items-center '>
            <div className=' w-[30%] sm:w-[50%] mx-auto '>
              <h1 className='bg-red-600 text-center hover:bg-red-700 cursor-pointer rounded-full text-base text-white py-2 px-7'>Book Now</h1>
            </div>

            <div className=' w-[30%] mx-auto sm:w-[50%] '>
              <h1 className=' flex justify-around items-center hover:text-blue-700 cursor-pointer text-center rounded-full text-base py-2 px-7'> <span><BiRightArrow /></span> Watch Video</h1>
            </div>
          </div>
        </div>



        <div className="jumbo_right sm:hidden ">
          <img className=' w-[90%] mx-auto Jumbo_img object-cover rounded-2xl ' src={jumbo_img} alt="img-Error" />
        </div>
      </div>
    </>
  )
}
