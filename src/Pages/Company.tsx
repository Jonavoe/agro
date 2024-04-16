import React from 'react'

type Props = {}

export default function Company({ }: Props) {
    return (
        <div className='bg-[--background] w-full z-10 flex flex-col justify-center items-center text-[--principal] gap-5 py-20'>
            <div className='flex flex-col justify-center items-center gap-3'>
                <h2 className='uppercase text-4xl font-semibold'>la empresa</h2>
                <p className='font-semibold'>Servicios Agropecuarios. Asesoramiento Técnico Agrícola.</p>
            </div>

            <div className='flex flex-col lg:flex-row gap-5'>
                <div className='px-4 lg:w-[32rem]  flex flex-col gap-2'>
                    <h3 className='font-bold text-xl'>PROFESIONALES DEL AGRO</h3>
                    <div className='flex flex-col gap-2'>
                        <p>Somos una empresa dedicada a los Servicios Agropecuarios, enfocada en el desarrollo y cuidado del campo, desde la siembra hasta la cosecha, con especial atención en las aplicaciones necesarias.</p>
                        <p>Contamos con tecnología avanzada y un equipo profesional con sólida experiencia en el ámbito agrícola argentino, elementos clave para garantizar la eficiencia y rentabilidad en nuestras operaciones.</p>
                    </div>
                </div>
                <div className='px-4 lg:w-[32rem] flex flex-col gap-2'>
                    <h3 className='font-bold text-xl'>SOLUCIONES</h3>
                    <div className='flex flex-col gap-2'>
                        <p>Ofrecemos soluciones personalizadas y consultoría especializada en gestión agropecuaria, abarcando desde la fase de planificación hasta la ejecución de proyectos concretos.</p>
                        <p>Nos adaptamos con agilidad y flexibilidad a las distintas necesidades del sector agrícola actual, valorando el trabajo en equipo, la capacitación continua y el compromiso con nuestros clientes.</p>
                    </div>
                </div>

            </div>

        </div>
    )
}