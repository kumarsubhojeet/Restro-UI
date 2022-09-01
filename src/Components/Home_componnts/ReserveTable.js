import React from 'react'
import burger_1 from '../../img/burger_1.jpg'

export default function ReserveTable() {
  return (
    <>
      <div className=" relative ">
        <img src={burger_1} className=" brightness-50 object-cover w-full h-[60vh] " alt="" />

        <div className=" absolute bottom-14 left-56 sm:left-0">
          <h1 className=" text-white text-4xl mx-auto w-[50%] sm:w-[100%] sm:text-lg text-center  "> <span className=" text-xl">Some Trendy And Popular Courses Offerd</span>  Under replenish give saying thing</h1>
        <button className="BUTTON hover:bg-red-600  bg-[#E22104] text-white rounded-full text-base py-2 px-9 my-10 flex justify-center items-center mx-auto ">Reservation</button>
        </div>
      </div>
    </>
  )
}
