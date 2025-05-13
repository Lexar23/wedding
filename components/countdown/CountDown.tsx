"use client"
import Countdown from 'react-countdown'

const targetDate = new Date('2025-08-23T13:30:00')

export default function CountDown() {
  return (
    <div className="text-center text-3xl font-bold">
      <Countdown date={targetDate} />
    </div>
  )
}
