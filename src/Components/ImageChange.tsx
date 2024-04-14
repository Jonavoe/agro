import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Image1 from '@/Assets/Img/01.jpg';
import Image3 from '@/Assets/Img/03.jpg';
import Image4 from '@/Assets/Img/04.jpg';

const ImageChange = () => {
    const [currentImage, setCurrentImage] = useState<number>(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(prevImage => {
                if (prevImage === 1) return 3;
                if (prevImage === 3) return 4;
                if (prevImage === 4) return 1;
                return 1;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='fixed z-0 w-screen'>
            <Image
                className={`absolute w-screen h-screen object-cover transition-opacity duration-1000 ${currentImage === 1 ? 'opacity-100' : 'opacity-0'}`}
                src={Image1}
                alt='Image1'
            />
            <Image
                className={`absolute w-screen h-screen object-cover transition-opacity duration-1000 ${currentImage === 3 ? 'opacity-100' : 'opacity-0'}`}
                src={Image3}
                alt='Image3'
            />
            <Image
                className={`absolute w-screen h-screen object-cover transition-opacity duration-1000 ${currentImage === 4 ? 'opacity-100' : 'opacity-0'}`}
                src={Image4}
                alt='Image4'
            />
        </div>
    );

};

export default ImageChange;
