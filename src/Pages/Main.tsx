import React from 'react'
import ImageChange from '@/Components/ImageChange'
import Logo from '@/Components/Logo'
import Company from './Company'
import Tech from './Tech'
import Card from './Card'
import Service from './Service'
import Planification from './Planification'
import Jobs from './Jobs'
import Info from './Info'
import Contact from './Contact'
import Consult from './Consult'
import Maps from './Maps'
import Footer from './Footer'

type Props = {}

export default function Main({ }: Props) {
    return (
        <div className='flex flex-col animate-main'>
            <ImageChange />
            <Logo />
            <Company />
            <Tech />
            <Card />
            <Service />
            <Planification />
            <Jobs />
            <Info />
            <Contact />
            <Consult />
            <Maps />
            <Footer />
        </div>
    )
}