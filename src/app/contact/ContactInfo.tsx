
import React from 'react'
import { FaEnvelope, FaMap, FaPhone } from 'react-icons/fa'

const ContactInfo = () => {
    return (
        <div>
            <div className='flex items-center space-x-8 shadow-lg'>
                <div className='text-white w-10 h-10 md:w-16 md:h-16 rounded-full  flex flex-col items-center justify-center hover:scale-125 duration-200 ease-linear'>
                    <FaPhone className='w-4 h-4 md:w-7 md:h-7 text-blue-400' />
                </div>
                <div className=''>
                    <h1 className='font-bold text-lg sm:text-xl md text-gray-600'>Phone</h1>
                    <h1 className='text-base sm:text-[16px]  font-semibold  text-[#342929cc] text-opacity-70'>+12345678910</h1>
                </div>

            </div>

            <div className='flex items-center space-x-8 mt-8 mb-8 shadow-lg'>
                <div className='text-gray-900 w-10 h-10 md:w-16 md:h-16 rounded-full  flex flex-col items-center justify-center hover:scale-125 duration-200 ease-linear'>
                    <FaEnvelope className='w-4 h-4 md:w-7 md:h-7 text-orange-500' />
                </div>
                <div>
                    <h1 className='font-bold text-lg sm:text-xl md text-gray-600'>Email</h1>
                    <h1 className='text-base sm:text-[16px]  font-semibold  text-[#342929cc] text-opacity-70'>example@gmail.com</h1>
                </div>

            </div>

            <div className='flex items-center space-x-8 shadow-lg'>
                <div className='text-white w-10 h-10 md:w-16 md:h-16 rounded-full  flex flex-col items-center justify-center hover:scale-125 duration-200 ease-linear'>
                    <FaMap className='w-4 h-4 md:w-7 md:h-7 text-gray-600' />
                </div>
                <div>
                    <h1 className='font-bold text-lg sm:text-xl md text-gray-600'>Address</h1>
                    <h1 className='text-base sm:text-[16px]  font-semibold  text-[#342929cc] text-opacity-70'>Karachi, Sindh</h1>
                </div>

            </div>
        </div>
    )
}

export default ContactInfo