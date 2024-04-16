import React from 'react'

type Props = {}

export default function Info({ }: Props) {
    return (
        <div className='bg-[--background] w-full z-10 flex flex-col justify-center items-center text-[--text] py-20'>

            <div className='flex flex-col lg:flex-row gap-2'>
                <div className='px-4 w-auto flex flex-col gap-2'>
                    <h3 className='font-bold text-xl'>RECURSOS E INFRAESTRUCTURA</h3>
                    <div className='flex flex-col gap-2'>
                        <p>• Red de logística.</p>
                        <p>• Red de proveedores de insumos.</p>
                        <p>• Recursos humanos. Capacitación.</p>
                        <p>• Parque de maquinaria.</p>
                        <p>• Red con agentes comerciales.</p>
                    </div>
                </div>
                <div className='px-4 lg:w-auto flex flex-col gap-2'>
                    <h3 className='font-bold text-xl'>PRODUCCIÓN</h3>
                    <div className='flex flex-col gap-2'>
                        <p>• Producción de granos.</p>
                        <p>• Modalidad alquiler, aparcería y asociaciones.</p>
                        <p>• Manejo sustentable del campo.</p>
                        <p>• Siembra, cosecha, pulverización, embolsado y extracciones.</p>
                    </div>
                </div>
                <div className='px-4 w-auto flex flex-col gap-2'>
                    <h3 className='font-bold text-xl'>NUESTROS CLIENTES</h3>
                    <div className='flex flex-col gap-2'>
                        <p>• Propietarios de campos.</p>
                        <p>• Inversores. Pool de siembra.</p>
                        <p>• Acopios.</p>
                        <p>• Pequeños, medianos y grandes productores.</p>
                    </div>
                </div>

            </div>

        </div>
    )
}