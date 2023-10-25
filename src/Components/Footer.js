import React from 'react'
import { BsArrowUp, } from 'react-icons/bs'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='flex w-full justify-between items-center h-[70px] bg-gray-200'>
            <div className='ml-8 flex  font-semibold'>
            Respond to the assessment questions to examine your mental health using ml model.
            </div>
            <div className='text-3xl cursor-pointer text-end mr-8 p-3 rounded-full text-black '>
                <Link to={'/'}>
                    
                <FaHome className='font-bold' />
                </Link>
            </div>
        </div>
    )
}

export default Footer
