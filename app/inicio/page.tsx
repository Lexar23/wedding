
import React from 'react'

import CountDown from '@/components/countdown/CountDown'
import Navigation from '@/components/cards/Navigation'
import Header from '@/components/header/Header'
import CurvedTriptychSlider from '@/components/carrousel/CurvedTriptychSlider'

export default function page() {
  return (
    <div className='landscape'>
        <Header />
        <CountDown />
        <Navigation />
        <CurvedTriptychSlider />
    </div>
  )
}
