import { Button, Drawer } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { FcMenu } from "react-icons/fc";


export default function Navbar() {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    return (
        <>
            <div className="navbar_main">
                <div className="nav_pc sm:hidden lg:block">
                    <div className=" nav_main pt-3">

                        <div className=' px-5 py-1 w-[80%] mx-auto items-center flex justify-between '>
                            <div className="logo font-bold text-3xl " >
                                <Link to='/' className=' text-gray-700 hover:text-gray-700 ' ><span className=' text-red-700 font-bold'>Sn</span>eaky</Link>
                            </div>

                            <div className="links ">
                                <ul className=' flex justify-evenly'>
                                    <Link to="/" className=' text-gray-400 font-thin hover:text-red-500 ' > <li className=' mx-5 font-semibold'>Home</li></Link>
                                    <Link to="/" className=' text-gray-400 font-thin hover:text-red-500 ' > <li className=' mx-5 font-semibold'>About</li></Link>
                                    <Link to="/" className=' text-gray-400 font-thin hover:text-red-500 ' > <li className=' mx-5 font-semibold'>Menus</li></Link>
                                    <Link to="/" className=' text-gray-400 font-thin hover:text-red-500 ' > <li className=' mx-5 font-semibold'>Contact</li></Link>
                                    <Link to="/login" className=' text-gray-400 font-thin hover:text-red-500 ' > <li className=' mx-5 font-semibold'>Login</li></Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="nav_mobile lg:hidden sm:block">
                    <div className=' w-[90%] mx-auto my-5 flex justify-between items-center'>
                        <div className="logo font-bold text-3xl " >
                            <Link to='/' className=' text-gray-700 hover:text-gray-700 ' ><span className=' text-red-700 font-bold'>Sn</span>eaky</Link>
                        </div>
                        <div>
                            <FcMenu className=' text-3xl cursor-pointer ' onClick={showDrawer} />

                            <Drawer className=' text-right text-red-600 ' width='240px' title="CLOSE" placement="right" onClose={onClose} visible={visible}>
                                <ul className=' '>
                                    <Link to="/" className=' text-gray-400 font-thin hover:text-red-500 ' > <li className=' text-right my-12 font-semibold'>Home</li></Link>
                                    <Link to="/" className=' text-gray-400 font-thin hover:text-red-500 ' > <li className=' text-right my-12 font-semibold'>About</li></Link>
                                    <Link to="/" className=' text-gray-400 font-thin hover:text-red-500 ' > <li className=' text-right my-12 font-semibold'>Menus</li></Link>
                                    <Link to="/" className=' text-gray-400 font-thin hover:text-red-500 ' > <li className=' text-right my-12 font-semibold'>Contact</li></Link>
                                    <Link to="/login" className=' text-gray-400 font-thin hover:text-red-500 ' > <li className=' text-right my-12 font-semibold'>Login</li></Link>

                                </ul>
                            </Drawer>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
