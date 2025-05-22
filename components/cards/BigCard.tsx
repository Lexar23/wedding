// components/CardItem.tsx
'use client'

import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface BigCardItemProps {
  icon: StaticImageData
  label: string
  text:string
}

export default function BigCardItem({ icon, label, text }: BigCardItemProps) {
  return (
    <div className="bigCard">
      <Image className="icon" src={icon} alt={label} />
      <p className='cursiveFont'>{label}</p>
      <label className='site cursiveFont'>{text}</label>
    </div>
  )
}
