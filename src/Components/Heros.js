import React, { useState, useEffect } from 'react';


const Heros = () => {
    const images = [
        'https://images.unsplash.com/photo-1604480132736-44c188fe4d20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1890&q=80',
       
        'https://quotefancy.com/media/wallpaper/3840x2160/2050926-David-Satcher-Quote-There-is-no-health-without-mental-health.jpg',
        'https://images.unsplash.com/photo-1564121211835-e88c852648ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVudGFsJTIwaGVhbHRofGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
        'https://images.unsplash.com/photo-1620389701363-b1d7a601e0c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
        'https://images.pexels.com/photos/3767411/pexels-photo-3767411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(nextImage, 4000);
        return () => {
            clearInterval(interval);
        };
    }, [currentImageIndex]);

    return (
        <>
            <div className='bg-white'>
                <div className='bg-red-600 w-full h-[250px] lg:w-3/4 lg:h-[300px] mx-auto'>
                    <img
                        src={images[currentImageIndex]}
                        alt={`Image ${currentImageIndex + 1}`}
                        className='w-full h-full object-cover'
                    />
                </div>
            </div>
            <div className='flex justify-center items-center my-2 w-[200px] mx-auto'>
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-[15px] h-[6px] bg-gray-400 mx-1 rounded-full cursor-pointer ${index === currentImageIndex && 'bg-gray-900'
                            }`}
                        onClick={() => setCurrentImageIndex(index)}
                    ></div>
                ))}
            </div>
        </>
    );
};

export default Heros;
