import React from 'react'

const Heros = () => {
    return (
        <>
            <div className='bg-blue-400'>
                <div className='bg-red-600 w-full h-[250px] lg:w-3/4 lg:h-[300px] mx-auto'>
                </div>
            </div>
            <div className=' flex justify-center my-2 w-[400px] mx-auto'>
                <div className='w-[10px] h-[10px] bg-black mx-2 rounded-full cursor-pointer'></div>
                <div className='w-[10px] h-[10px] bg-black mx-2 rounded-full cursor-pointer'></div>
                <div className='w-[10px] h-[10px] bg-black mx-2 rounded-full cursor-pointer'></div>
            </div>
        </>

    )
}

export default Heros
