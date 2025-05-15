'use client'

import Countdown from 'react-countdown'

const targetDate = new Date('2025-08-23T13:30:00')

export default function CountDown() {
  return (
    <div className="text-center text-3xl font-bold flex flex-col mb-10">
      <h2 className='m-auto w-3/4 text-2xl mb-4'>Cordialmente te esperamos el dia sábado 23 de agosto del 2025</h2>
      <h2>Faltan</h2>
      <label className='text-lg' htmlFor="">Dias Hr Min sec</label>
      <Countdown date={targetDate} />
    </div>
  )
}
