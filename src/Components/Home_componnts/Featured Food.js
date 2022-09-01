import { Carousel } from 'antd';
import React from 'react';
import ff_1 from '../../img/ff_1.webp'
import ff_2 from '../../img/ff_2.webp'
import ff_3 from '../../img/ff_3.webp'

import { GoStar } from "react-icons/go";

const contentStyle = {
    height: 'auto',
    width: '100%',
    objectfit: 'cover'
};

export default function Featured_Food() {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };

    const Food = [
        {
            img: ff_1,
            name: 'Pizza',
            description: 'The Pizza is a fruit.',
            price: 23
        },
        {
            img: ff_2,
            name: 'Pizza',
            description: 'The Pizza is a fruit.',
            price: 23
        },
        {
            img: ff_3,
            name: 'Pizza',
            description: 'The Pizza is a fruit.',
            price: 23
        },
        {
            img: ff_2,
            name: 'Pizza',
            description: 'The Pizza is a fruit.',
            price: 23
        },
        {
            img: ff_1,
            name: 'Pizza',
            description: 'The Pizza is a fruit.',
            price: 23
        },
    ]

    return (
        <>
            <div className="FF_main w-[80%] mx-auto my-24 sm:my-4 sm:w-[100%] ">
                <div className="head sm:w-[90%] mx-auto my-10">
                    <h1 className=" text-red-600 text-2xl font-semibold ">
                        Featured Food
                    </h1>
                    <h1 className=' my-5 text-5xl w-[70%] sm:w-[90%] tracking-wide leading-snug font-bold text-gray-800'><span className='text-red-700 font-bold'>F</span>resh taste and great price</h1>
                </div>

                <div className=' carasole flex flex-nowrap sm:flex-col '>
                    {
                        Food.map(items => (
                            <>
                                <div className="Featured_Food_card card p-3 rounded-xl mx-6 bg-[#f9f9f9] sm:my-7 ">
                                    <img src={items.img} className='LoginChild rounded-2xl w-[620px] ' alt="Error" />
                                    <h1 className=' text-base mt-1 '>{items.name}</h1>
                                    <p className=' text-base  '>{items.description}</p>

                                    <div className=' flex justify-between items-center '>
                                        <div className="star">
                                            <GoStar />
                                        </div>

                                        <div className="price text-base text-rose-700 ">
                                            $ {items.price}
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
