import React from 'react'

const Profile = () => {
    const jsonString = localStorage.getItem('token'); 
    const jsonData = JSON.parse(jsonString);
    const userData = jsonData.data;

    return (
        <div className='h-[87vh] bg-[#d9b077] flex items-center justify-center flex-col'>
            <h1 className='text-4xl leading-8  font-semibold py-3'>Profile</h1>
            <div className='w-2/3 lg:w-1/3 bg-[#d6d6c8] text-[#3c3c3c] mentbtn rounded-md text-xl font-mono font-bold'  style={{border:"1px solid black"}}>
                <div className='my-6 mx-9'><span className='text-black'>Name: </span> {userData.name}</div>
                <div className='my-6 mx-9'><span className='text-black'>Email:</span>  {userData.email}</div>
                <div className='my-6 mx-9'><span className='text-black'>Date of Birth: </span>  {userData.dob.split("T")[0]}</div>
                <div className='my-6 mx-9'><span className='text-black'>Gender: </span> {userData.gender}</div>
            </div>
        </div>
    )
}

export default Profile
