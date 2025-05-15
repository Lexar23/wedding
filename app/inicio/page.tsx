
import React from 'react'

import CountDown from '@/components/countdown/CountDown'
import Navigation from '@/components/cards/Navigation'
import Header from '@/components/header/header'

export default function page() {
  return (
    <div>
        <Header />
        <CountDown />
        <Navigation />
    </div>
  )
}
