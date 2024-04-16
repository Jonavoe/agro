import React from 'react'

type Props = {}

export default function Service({ }: Props) {
    return (
        <div className='bg-[--red] w-full z-10 flex flex-col justify-center items-center text-[--white] gap-5 py-20'>
            <div className='flex flex-col justify-center items-center gap-3'>
                <h2 className='uppercase text-4xl'>SERVICIOS</h2>
                <p className=''>Tecnología, compromiso y profesionalismo.</p>
            </div>

            <div className='flex flex-col lg:flex-row gap-5'>
                <div className='px-4 lg:w-[32rem]  flex flex-col gap-2'>
                    <h3 className='font-bold text-xl'>SERVICIOS AGROPECUARIOS</h3>
                    <div className='flex flex-col gap-2'>
                        <p>• Siembra Directa. Con monitores de siembra y piloto automático.</p>
                        <p>• Cosecha. Mapeo, piloto automático y balanza en carros.</p>
                        <p>• Pulverización. Nivelaciones. Descompactado.</p>
                        <p>• Arrendamiento y Aparcería. Siembras en asociaciones.</p>
                    </div>
                </div>
                <div className='px-4 lg:w-[32rem] flex flex-col gap-2'>
                    <h3 className='font-bold text-xl'>ASESORAMIENTO TÉCNICO AGRÍCOLA</h3>
                    <div className='flex flex-col gap-2'>
                        <p>• Asesoramiento técnico y empresario.</p>
                        <p>• Administración de empresas agropecuarias.</p>
                        <p>• Dirección técnica y ejecutiva.</p>
                    </div>
                </div>

            </div>

        </div>
    )
}