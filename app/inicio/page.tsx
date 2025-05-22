
import React from 'react'

//componentes
import Countdown from '@/components/countdown/CountDown';
import Header from '@/components/header/Header'
import CurvedTriptychSlider from '@/components/carrousel/CurvedTriptychSlider'
import CardItem from '@/components/cards/Card';

//                      imagenes
import iglesia from '@/public/img/iglesiaIcon.gif'
import copas from '@/public/img/copas.gif'
import vestimenta from '@/public/img/vestimenta.gif'
import BigCardItem from '@/components/cards/bigCard';


//code
export default function page() {
  const targetDate = '2025-08-23T13:30:00';
  return (
    <div className='landscape'>
      <Header />
      <Countdown date={targetDate} />
      <div className="cardsContainer">
        <CardItem
          icon={iglesia}
          title="Ceremonia"
          text="Parroquia la agonía, Alajuela "
          link="#iglesia"
          buttonText="Cómo llegar"
        />
        <CardItem
          icon={copas}
          title="Recepción"
          text="Sala de evento San Angel, Grecia"
          link="#recepcion"
          buttonText="Cómo llegar"
        />
      </div>

      <CurvedTriptychSlider />

      <BigCardItem
        label='Vestimenta'
        icon={vestimenta}
        text='Queremos que luzcas increíble en nuestra boda, así que elige tu mejor look formal, pero por favor, evita el blanco o colores similares para que la novia brille aún más.'
      />





    </div>
  )
}
