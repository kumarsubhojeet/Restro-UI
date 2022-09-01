import { Input } from 'antd';
import React from 'react';
import { RiYoutubeFill, RiTwitterFill, RiRedditLine, RiSkypeFill } from "react-icons/ri";
import { BackTop } from 'antd';
import { FiArrowUp } from "react-icons/fi";




export default function Footer() {
    return (
        <>
            <div className="footer_main my-10 bg-[#FFF8F7] ">
                <div className="footer_inside flex justify-evenly items-center py-16 sm:flex-col sm:items-start sm:ml-5 ">
                    <div className="TOPMENU">
                        <h1 className="Footer_heading text-gray-800 font-bold  text-2xl ">Top Products</h1>
                        <ul>
                            <li className=' my-3 text-gray-500 ' >Managed Website</li>
                            <li className=' my-3 text-gray-500 ' >Managed Website</li>
                            <li className=' my-3 text-gray-500 ' >Managed Website</li>
                            <li className=' my-3 text-gray-500 ' >Managed Website</li>
                        </ul>
                    </div>

                    <div>
                        <h1 className='Footer_heading text-gray-800 font-bold text-2xl' >Quick Links</h1>
                        <ul>
                            <li className=' my-3 text-gray-500 ' >Job</li>
                            <li className=' my-3 text-gray-500 ' >Brand Assist</li>
                            <li className=' my-3 text-gray-500 ' >Investor Relations</li>
                            <li className=' my-3 text-gray-500 ' >Terms of Service</li>
                        </ul>
                    </div>

                    <div>
                        <h1 className='Footer_heading text-gray-800 font-bold  text-2xl'>Features</h1>
                        <ul>
                            <li className=' my-3 text-gray-500 ' >Managed Website</li>
                            <li className=' my-3 text-gray-500 ' >Managed Website</li>
                            <li className=' my-3 text-gray-500 ' >Managed Website</li>
                            <li className=' my-3 text-gray-500 ' >Managed Website</li>
                        </ul>
                    </div>

                    <div>
                        <h1 className='Footer_heading text-gray-800 font-bold text-2xlsm:text-left ' >Newsletter</h1>
                        <p>You can trust us. we only send promo offers,</p>

                        <div className='my-6'>
                            <Input placeholder="Basic usage" />
                        </div>
                    </div>
                </div>

                <div className=' w-[80%] mx-auto flex justify-between items-center sm:w-[90%] sm:flex-col '>
                    <h1 className='Footer_heading   text-sm text-gray-500 sm:text-center '>Copyright ©2022 All rights reserved | This template is made with  by Subhojit</h1>

                    <div className="social_icons">
                        <ul className=' flex justify-around items-center'>
                            <li className=' bg-gray-700 hover:bg-red-500 hover:rounded-full cursor-pointer mx-3 p-2 ' ><RiYoutubeFill className=' text-xl text-white ' /></li>
                            <li className=' bg-gray-700 hover:bg-red-500 hover:rounded-full cursor-pointer mx-3 p-2 ' ><RiTwitterFill className=' text-xl text-white ' /></li>
                            <li className=' bg-gray-700 hover:bg-red-500 hover:rounded-full cursor-pointer mx-3 p-2 ' ><RiRedditLine className=' text-xl text-white ' /></li>
                            <li className=' bg-gray-700 hover:bg-red-500 hover:rounded-full cursor-pointer mx-3 p-2 ' ><RiSkypeFill className=' text-xl text-white ' /></li>
                        </ul>
                    </div>
                    <BackTop>
                        <div>
                            <FiArrowUp className=' cursor-pointer bg-[#B91C1C] hover:bg-[#ad3838de] p-1 text-3xl rounded-full text-gray-100 ' />
                        </div>
                    </BackTop>
                </div>
            </div>
        </>
    )
}
