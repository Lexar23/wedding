'use client'

import Image from 'next/image'
import React from 'react'
import iglesia from '@/public/img/iglesiaIcon.gif'
import copas from '@/public/img/copas.gif'
import Link from 'next/link'


export default function Navigation() {
    return (
        <div className='cards'>
            <div className="card">
                <Image className='icon' src={iglesia} alt={''} />
                <h3>jajaja por ahora </h3>
                <Link href={'#'} className='waze'>como llegar</Link>
            </div>
            <div className="card">
                <Image className='icon' src={copas} alt={''} />
                <h3>jajaja por ahora </h3>
                <Link href={'#'} className='waze'>como llegar</Link>
            </div>
        </div>
    )
}
