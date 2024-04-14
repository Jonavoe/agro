import Image from 'next/image'
import React from 'react'
import LogoImage from "@/Assets/Img/Logo.png"

type Props = {}

export default function Logo({ }: Props) {
    return (
        <div className='flex flex-col gap-2 z-10 h-screen items-center mt-36 '>
            <div className='w-72'>

                <Image src={LogoImage} alt='Logo' className=' animate-image' />
            </div>
            <div className='w-auto h-auto flex flex-col items-center justify-center'>
                <span className='w-full h-1 bg-[--white] animate-span'></span>
                <h1 className='px-2 uppercase text-5xl font-semibold text-[--principal]'>Belloni</h1>
                <span className='w-full h-1 bg-[--white] animate-span'></span>
            </div>
            <p className='uppercase text-[--white] font-semibold drop-shadow-lg'>Profesionales del agro</p>

            <div className='bg-[--white] hover:bg-[--hover-white] rounded-md px-6 py-2'>
                <p className='uppercase text-[--principal] font-semibold drop-shadow-lg'>
                    Bienvenido
                </p>
            </div>
        </div>
    )
}
