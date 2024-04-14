import React from 'react'
import ImageChange from '@/components/ImageChange'
import Otro from '@/components/Otro'
import Logo from '@/components/Logo'

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