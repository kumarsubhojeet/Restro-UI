import React from 'react'
import foodplate1 from '../../img/foodplate1.webp'

export default function TodayMenu() {
    const MENU =[
        {
            name:"Roasted Marrow ",
            img:foodplate1,
            desc:"Whales and darkness moving form cattle",
            price:32,
        },
        {
            name:"Roasted Marrow ",
            img:foodplate1,
            desc:"Whales and darkness moving form cattle",
            price:32,
        },
        {
            name:"Roasted Marrow ",
            img:foodplate1,
            desc:"Whales and darkness moving form cattle",
            price:32,
        },
        {
            name:"Roasted Marrow ",
            img:foodplate1,
            desc:"Whales and darkness moving form cattle",
            price:32,
        },
        {
            name:"Roasted Marrow ",
            img:foodplate1,
            desc:"Whales and darkness moving form cattle",
            price:32,
        },
        {
            name:"Roasted Marrow ",
            img:foodplate1,
            desc:"Whales and darkness moving form cattle",
            price:32,
        },
    ]
    return (
        <div className=" w-[80%] mx-auto ">
            <div className="heading ">
                <h1 className=' text-red-600 text-2xl font-semibold '>Food Menu</h1>
                <h1 className=' text-5xl my-5 font-bold text-gray-700 '><span className='text-red-700 font-bold'>D</span>elicious food</h1>
            </div>

            <div className="Menu_card my-10 grid grid-rows-3 grid-flow-col gap-6 sm:grid-rows-12 sm:gap-6 ">
               {
                MENU.map(menu =>(
                    <div className="card bg-[#FFF8F7] py-4 px-3 hover:bg-white hover:drop-shadow-xl hover:rounded-xl ">
                    <div className=' flex justify-around'>
                        <div>
                            <img src={menu.img} className=" object-cover " alt="img-error" />
                        </div>
                        <dir>
                            <h1 className=' font-bold text-lg ' >{menu.name}  <span className=" text-[#E22104]" >${menu.price}.</span></h1>
                            <p>{menu.desc}</p>
                        </dir>
                    </div>
                </div>
                ))
               }
            </div>
        </div>
    )
}
