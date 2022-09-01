import React from 'react'
import Pizza_2 from '../../img/pizza_2.webp'

export default function Pizza() {
  return (
    <div className="Pizza_main w-[80%] my-10 mx-auto ">
      <div className=" relative ">
        <img src={Pizza_2} className='Pizza_border object-cover' alt="Error" />

        <div className='sm:hidden absolute -bottom-10 left-[28rem]'>
          <div className='Pizza_sec bg-[#E22104] text-white w-[550px] h-[300px] flex justify-center items-center py-5 px-4 '>
            <div>
            <h1 className=' text-white text-4xl w-[60%] mx-auto text-center '>Italian Pizza Offer
              50% OFF</h1>
              <button className=' hover:bg-red-600 cursor-pointer mt-10 mx-auto border-[1px] flex justify-center rounded-full py-2 px-9 border-white '>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
