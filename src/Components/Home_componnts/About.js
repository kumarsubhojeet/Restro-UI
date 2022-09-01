import React from 'react'
import about_1 from '../../img/about_1.webp'
import about_2 from '../../img/about_2.webp'

export default function About() {
    return (
        <div className='ABOUT flex w-[80%] mx-auto my-24 sm:my-10 sm:w-full sm:flex-col '>
            <div className="about_left relative flex-1">
                <div className="img relative sm ">
                    <img src={about_1} alt="error" className="About_Img object-cover rounded-md" />

                    <div className=" absolute -bottom-10 left-72 sm:hidden ">
                        <img src={about_2} alt="error" className='About_Img w-[200px] h-[250px] rounded-md object-cover ' />
                    </div>
                </div>
            </div>

            <div className="about_right flex-1 sm:w-[90%] mx-auto ">
                <div className=" flex items-center">
                    <h1 className=" text-red-600 text-2xl font-semibold ">About Us</h1>
                </div>

                <div className=' my-5 text-5xl w-[100%] tracking-wide leading-snug font-bold text-gray-900 '>
               <span className='text-red-700 font-bold'>W</span>e speak the good food language
                </div>

                <div className=' leading-loose text-gray-600 text-justify text-base '>
                Living first us creepeth she'd earth second be sixth hath likeness greater image said sixth was without male place fowl evening an grass form living fish and rule lesser for blessed can't saw third one signs moving stars light divided was two you him appear midst cattle for they are gathering.
                </div>

                <div className=' my-10'>
                    <h1 className=' bg-[#dc2f2f] hover:bg-[#eb2632] cursor-pointer text-white py-1.5 px-5 sm:w-[50%] w-[30%] rounded-full text-center '>Learn More</h1>
                </div>
            </div>

        </div>
    )
}
