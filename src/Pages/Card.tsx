import Mision from '@/Assets/Icons/Mision'
import Valores from '@/Assets/Icons/Valores'
import Vision from '@/Assets/Icons/Vision'
import React from 'react'

type Props = {}

export default function Card({ }: Props) {
    return (
        <div className='bg-[--background] flex-col lg:flex-row w-full z-10 flex  justify-center items-center text-[--principal] gap-5 py-20'>
            <div className='flex flex-col gap-5 w-64 items-center justify-center'>
                <div className='p-5 bg-[--principal] rounded-full'>
                    <Mision />
                </div>
                <h3 className='uppercase'>misión</h3>
                <p className='text-center'>Nuestra Misión es contribuir al éxito de las empresas y clientes que confían en nosotros, garantizando el desarrollo de las inversiones y proyectos.</p>
            </div>
            <div className='flex flex-col gap-5 w-64 items-center justify-center'>
                <div className='p-5 bg-[--principal] rounded-full'>
                    <Vision />
                </div>
                <h3 className='uppercase'>misión</h3>
                <p className='text-center'>Nuestra Visión es consolidarnos como una empresa líder en el mercado local y regional, construyendo vínculos duraderos con nuestros clientes.</p>
            </div>
            <div className='flex flex-col gap-5 w-64 items-center justify-center'>
                <div className='p-5 bg-[--principal] rounded-full'>
                    <Valores />
                </div>
                <h3 className='uppercase'>misión</h3>
                <p className='text-center'>Respeto, compromiso y transparencia son nuestros pilares para superar los desafíos. Nos apasiona esta profesión, y es nuestra forma de vida.

                </p>
            </div>
        </div>
    )
}