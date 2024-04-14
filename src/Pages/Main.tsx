import React from 'react'
import ImageChange from '@/Components/ImageChange'
import Otro from '@/Components/Otro'
import Logo from '@/Components/Logo'

type Props = {}

export default function Main({ }: Props) {
    return (
        <div className='flex flex-col font-cinzel animate-main'>
            <ImageChange />
            <Logo />
            <Otro />
        </div>
    )
}