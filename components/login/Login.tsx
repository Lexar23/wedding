'use client'
import React, { useState } from 'react'
import { Family } from '@/constants/Family'
import { FamilyInfo } from '@/constants/Family'
import Link from 'next/link'

export default function Login() {
  const [code, setCode] = useState('')
  const [validCode, setValidCode] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = () => {
    if (Family[code]) {
      setValidCode(true)
      setError('')
    } else {
      setError('Código inválido. Intenta de nuevo.')
      setValidCode(false)
    }
  }

  const data: FamilyInfo | undefined = validCode ? Family[code] : undefined

  return (
    <div className="myBG min-h-screen flex flex-col items-center justify-center gap-8">
      {!validCode && (
        <div className='login flex flex-col items-center shadow-2xl justify-evenly p-8 rounded-xl border-2 w-full max-w-md bg-white'>
          <h1 className='text-center text-2xl font-bold mb-4'>
            ¡Nos encantaría que seas parte de este día tan especial!
          </h1>
          <input
            type="text"
            className='bg-emerald-50 w-full p-2 rounded border'
            id="familyCode"
            placeholder='Ingresa código de invitación'
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <button
            onClick={handleSubmit}
            className='mt-4 bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600 transition'
          >
            Ingresar
          </button>
        </div>
      )}

      {validCode && data && (
        <div className="invitation login flex flex-col items-center shadow-2xl justify-evenly p-8 rounded-xl border-2 w-full max-w-md bg-white">
          <h1 className="text-xl font-semibold text-center mb-4">
            Esta invitación es válida para <span className="font-bold text-emerald-700">{data.cantidad}</span>.
          </h1>
          <ul className="list-disc list-inside text-left w-full">
            {Object.entries(data)
              .filter(([key, value]) => key.startsWith('persona') && value)
              .map(([key, value]) => (
                <li key={key} className="text-gray-700 capitalize">
                  {value}
                </li>
              ))}
          </ul>
          <Link href={'/inicio'}>Continuar</Link>
        </div>
      )}
    </div>
  )
}
