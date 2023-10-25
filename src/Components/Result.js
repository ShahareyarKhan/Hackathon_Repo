import React from 'react'
import { Link } from 'react-router-dom'

const Result = () => {
    return (
        <div className='w-3/4 lg:w-4/5 mx-auto rounded-sm h-[100px] p-4'>
            <h1 className='text-center text-2xl font-semibold '>
                Your mental health
            </h1>
            <div className='text-center text-xl font-semibold my-1'>
                You're fine
            </div>
            <div className='text-xl font-semibold text-center my-3'>

                For more enquiry: <Link to="/services" className='underline text-indigo-500'>Services</Link>
            </div>
        </div>
    )
}

export default Result
