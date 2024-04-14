import React from 'react'
import logo from "@/Assets/Img/Logo.png"
import Image from 'next/image'

type Props = {}

export default function Main({ }: Props) {
    return (
        <div>
            <Image src={logo} alt='logo' />
        </div>
    )
}