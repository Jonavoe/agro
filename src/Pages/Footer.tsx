import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '@/Assets/Img/Logo.png'
import Email from '@/Assets/Icons/Email'
import Link from 'next/link'

type Props = {}

export default function Footer({ }: Props) {

    const [color, setColor] = useState("")

    const mouseIn = () => {
        setColor("#5fb852")
    }

    const mouseOut = () => {
        setColor("#367c2b")
    }
    return (
        <div className='bg-[--white] w-full z-10 flex flex-col justify-center items-center text-[--text] gap-5 py-20'>

            <Image src={Logo} alt='logo' className='w-32 rounded-md' />
            <p className='text-sm'>© 2017 Belloni.</p>
            <p className='text-sm'>Diseño <b>Voeffray Jonathan</b></p>
            <div onMouseEnter={() => mouseIn()} onMouseLeave={() => mouseOut()}>
                <Link href={"mailto:voeffray.jonathan@gmail.com"} target='_blank'>
                    <Email color={color} />
                </Link>
            </div>
        </div>
    )
}