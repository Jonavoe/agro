import Image from 'next/image'
import React from 'react'
import Logo from '@/Assets/Img/Logo.png'
import Email from '@/Assets/Icons/Email'

type Props = {}

export default function Footer({ }: Props) {

    const mouse = () => {

    }
    return (
        <div className='bg-[--white] w-full z-10 flex flex-col justify-center items-center text-[--text] gap-5 py-20'>

            <Image src={Logo} alt='logo' className='w-32 rounded-md' />
            <p className='text-sm'>© 2017 Belloni.</p>
            <p className='text-sm'>Fotografía y Diseño <b>Voeffray Jonathan</b></p>
            <div onMouseEnter={() => mouse()}>
                <Email />
            </div>
        </div>
    )
}