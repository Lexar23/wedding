import React from 'react'
import Image from 'next/image'
// import flores from '@/public/img/marco.webp'
import logo from '@/public/img/logo.webp'

export default function Header() {
    return (
        <div>
            {/* <Image src={flores} alt={''} className='headerImage' /> */}
            <div className="myBackground "> 
            <Image className="mylogo" src={logo} alt={''} />
            </div>
            <div className="frases w-7/8 mb-10 m-auto text-3xl text-center cursiveFont ">
                <label htmlFor="" >
                    A veces lo que se empieza como una locura, se convierte en lo mejor de tu vida
                </label>
            </div>
        </div>
    )
}
