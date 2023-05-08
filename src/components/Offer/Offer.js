import React from 'react'
import './Offer.scss'
import OrangeBtn from '../OrangeBtn/OrangeBtn';
import img from '../../assets/aboutUsMeat.jpg';
const Offer = () => {
  return (
    <section className='offer__container animate__animated'  data-aos="fade-right" data-aos-duration="2000">
      {/*
      <img src={img} className="offer__container--img"alt="" />
       */}
      <div className="offer__container__mini">

        <div className="offer__container__content">
          <h2 className='offer__container--title'>EL PLATO DEL DIA!</h2>
          <p className='offer__container--p'>Disfrute de nuestro plato mas reciente</p>
          <OrangeBtn content="Ordenar"/>
      </div>
        <div className="offer__container__image">
          {/*
          <img className="offer__container--img" src={img} alt="" />
        */}
        </div>
      </div>
    </section>
  )
}

export default Offer