'use client'

import CountDown from '@/components/countdown/CountDown'
import React from 'react'

export default function page() {
  return (
    <div>
        <div className="myBackground absolute w-full h-1/4"> </div>
        <div className="mylogo relative"></div>
        <CountDown />
    </div>
  )
}
