import React from 'react'
import ImageChange from '@/Components/ImageChange'
import Logo from '@/Components/Logo'
import Company from './Company'
import Tech from './Tech'
import Card from './Card'
import Service from './Service'
import Planification from './Planification'
import Jobs from './Jobs'

type Props = {}

export default function Main({ }: Props) {
    return (
        <div className='flex flex-col font-cinzel animate-main'>
            <ImageChange />
            <Logo />
            <Company />
            <Tech />
            <Card />
            <Service />
            <Planification />
            <Jobs />
        </div>
    )
}