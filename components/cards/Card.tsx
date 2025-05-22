// components/CardItem.tsx
'use client'

import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

interface CardItemProps {
  icon: StaticImageData
  title: string
  text:string
  link: string
  buttonText: string
}

export default function CardItem({ icon, title, link, buttonText, text }: CardItemProps) {
  return (
    <div className="card">
      <Image className="icon" src={icon} alt={title} />
      <p className=''>{title}</p>
      <div className='site'>{text}</div>
      <Link href={link} className="btn">{buttonText}</Link>
    </div>
  )
}
