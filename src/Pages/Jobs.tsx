import Image from 'next/image'
import React, { useState } from 'react'
import Img13 from '@/Assets/Img/13.jpg'
import Img55 from '@/Assets/Img/55.jpg'
import Img59 from '@/Assets/Img/59.jpg'
import Img70 from '@/Assets/Img/70.jpg'
import Img72 from '@/Assets/Img/72.jpg'
import Img75 from '@/Assets/Img/75.jpg'
import Img81 from '@/Assets/Img/81.jpg'
import Img94 from '@/Assets/Img/94.jpg'
import Img95 from '@/Assets/Img/95.jpg'

type Props = {}

export default function Jobs({ }: Props) {

    const [hoveredId, setHoveredId] = useState<number | null>(null);

    const OnMouseIn = (id: number) => {
        setHoveredId(id);
    }
    const OnMouseOut = () => {
        setHoveredId(null)
    }

    const images = [
        { src: Img13, id: 1, title: "COSECHA", description: "Mapeo y piloto automático." },
        { src: Img81, id: 2, title: "COSECHA", description: "Mapeo y piloto automático." },
        { src: Img70, id: 3, title: "COSECHA", description: "Mapeo y piloto automático." },
        { src: Img55, id: 4, title: "SIEMBRA DIRECTA", description: "Monitores de siembra y piloto automático." },
        { src: Img95, id: 5, title: "SIEMBRA DIRECTA", description: "Monitores de siembra y piloto automático." },
        { src: Img94, id: 6, title: "SIEMBRA DIRECTA", description: "Monitores de siembra y piloto automático." },
        { src: Img59, id: 7, title: "PULVERIZACIÓN", description: "PULVERIZACIÓN" },
        { src: Img72, id: 8, title: "TRANSPORTE", description: "Balanza en carros y control de equipos." },
        { src: Img75, id: 9, title: "SILO BOLSA", description: "Optimización de cosecha." },
    ];

    return (
        <div className='bg-[--background] w-full z-10 flex flex-col justify-center items-center text-[--principal] gap-5 py-20'>
            <div className='flex flex-col justify-center items-center gap-3'>
                <h2 className='uppercase text-4xl font-semibold'>NUESTRO TRABAJO</h2>
                <p className='font-semibold text-lg'>Siembra, cosecha, aplicaciones, administración y asesoramiento.</p>
            </div>

            <div className='w-full gap-1 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-2'>

                {images.map((img) => (
                    <div className='relative rounded-lg' key={img.id}>
                        <Image className=' rounded-md' src={img.src} alt='cosecha' onMouseEnter={() => OnMouseIn(img.id)} onMouseLeave={() => OnMouseOut()} />
                        <div className={`${hoveredId === img.id && "scale-95"} z-10 absolute top-0 left-0 w-full h-full bg-[--background] transform scale-0 hover:scale-95  transition-all duration-500 rounded-md`}>
                            <div className='w-full h-full flex flex-col justify-center items-center'>
                                <h3 className='font-bold text-2xl'>{img.title}</h3>
                                <p className='font-semibold text-lg'>{img.description}</p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}