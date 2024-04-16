import React from 'react'

type Props = {}

export default function Maps({ }: Props) {
    return (
        <div className='bg-[--background] w-full z-10 flex flex-col justify-center items-center text-[--text] gap-5 py-20'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3365.915876141562!2d-58.48378868850789!3d-32.474941773681955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b02fee2cea1d79%3A0x861b1a79b5802a6a!2sLaguna%20de%20los%20Teros!5e0!3m2!1ses!2sar!4v1713235805645!5m2!1ses!2sar" className="w-3/4" height="450" style={{ border: '0' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        </div>
    )
}
