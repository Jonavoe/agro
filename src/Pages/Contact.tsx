import React from 'react'

type Props = {}

export default function Contact({ }: Props) {
    return (
        <div className='bg-[--white] w-full z-10 flex flex-col justify-center items-center text-[--text] gap-5 py-20'>
            <div className='flex flex-col justify-center items-center gap-3'>
                <h2 className='uppercase text-4xl'>CONTACTO</h2>
                <p className=''>Conozca más sobre nuestra empresa.</p>
            </div>

            <div className='flex flex-col lg:flex-row gap-5 lg:w-3/4'>
                <div className='px-4 w-full flex flex-col gap-2'>
                    <h3 className='font-bold text-xl uppercase'>Belloni</h3>
                    <div className='flex w-auto flex-col gap-3'>
                        <div className='flex flex-col gap-2'>
                            <p><b>Oficina</b> Rivadavia 610, Concepcion del Uruguay, Entre Rios.</p>
                            <p><b>Establecimiento</b> Colonia Caceros, Entre Rios.</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p><b>Teléfono</b> (3442) 229328</p>
                            <p><b>Email</b> voeffray.jonathan@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className='px-4 w-full flex flex-col gap-2'>
                    <h3 className='font-bold text-xl uppercase'>EQUIPO</h3>
                    <div className='flex w-auto flex-col gap-3'>
                        <div className='flex flex-col gap-2'>
                            <p><b>Jonathan Voeffray</b> / Agrónomo General.</p>
                            <p><b>Teléfono </b> (3442) 229328</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p><b>Maria Belén Ocampo</b> (3442) 229328</p>
                            <p><b>Email</b> mariabelenocampo@gmail.com</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}