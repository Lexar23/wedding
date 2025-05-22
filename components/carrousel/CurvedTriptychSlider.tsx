'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const images = [
  '/img/slider/photo1.jpg',
  '/img/slider/photo2.jpg',
  '/img/slider/photo3.jpg',
  '/img/slider/photo4.jpg',
]

export default function CurvedTriptychSlider() {
  const [index, setIndex] = useState(0)

  // Cambio automático cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])
  const getImage = (offset: number) => {
    const newIndex = (index + offset + images.length) % images.length
    return images[newIndex]
  }

  const offsets = [-1, 0, 1] // izquierda, centro, derecha

  return (
    <div className="flex flex-col items-center realtive h-1/2">
      <div className="flex justify-center items-center gap-4 p-4 relative h-100">
        {offsets.map((offset) => {
          const imageSrc = getImage(offset)
          const isCenter = offset === 0
          const width = isCenter ? 200 : 100
          const height = 200
          const borderRadius = isCenter ? 'rounded-[20px]' : 'rounded-[10px]'
          const rotation = offset === -1 ? '-rotate-6' : offset === 1 ? 'rotate-6' : ''
          const panelClass = `w-[${width}px] h-[${height}px] bg-black ${borderRadius} border border-white shadow-lg overflow-hidden transform ${rotation}`

          return (
            <div key={offset} className={panelClass}>
              <Image
                src={imageSrc}
                alt={`Panel ${offset}`}
                width={width}
                height={height}
                className="w-full h-full object-cover"
              />
            </div>
          )
        })}
      </div>
        <Link className='btn mb-20' href={''}>Más fotos</Link>   
    </div>
  )
}
