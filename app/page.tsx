import React from 'react'

export default function Home() {
  return (
    <div className="myBG">
      <div className='login flex flex-col items-center shadow-2xl justify-evenly mt-70 rounded-xl border-2 h-80 w-full relative '>
        <h1 className='tittle w-5/6 text-center text-2xl'>¡Nos encantaría que seas parte de este dia tan especial!</h1>
        <input type="text" name="" className='bg-emerald-50 w-3/5 ' id="familyCode" placeholder='Ingresa Codigo de familia' />
        <button type='submit'>Ingresar</button>
      </div>
    </div>
  )
}
