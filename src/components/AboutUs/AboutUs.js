import React from 'react'
import './AboutUs.scss';
import OrangeBtn from '../OrangeBtn/OrangeBtn';
import Image from '../../assets/us.jpg';
const AboutUs = () => {
  return (
    <section id="AboutUs"  data-aos="fade-up" data-aos-duration="2000" className='aboutUs__container animate__animated'>
      <div className="aboutUs__container__mini">

        <div className="aboutUs__container__content">
          <h2 className='aboutUs__container--title'>VENGA A PASAR LA TARDE CON NOSOTROS</h2>
          <h4 className='aboutUs__container--subtitle'>Nuestra casa es su casa</h4>
          <p className='aboutUs__container--p'>La oportunidad de servile es un gusto que aquí en La Aldea nos tomamos en serio. Nuestros platos hechos con cariño casero y nuestro servicio al cliente que dispone de atención confortante le otorgaran a usted y a sus queridos una experiencia única haciendo de nuestro restaurante su nuevo hogar.</p>

<div className="aboutUs__container--btn">

          <OrangeBtn content="Ordena" />
</div>

        </div>
        <div className="aboutUs__container__image">
          <img className="aboutUs__container--img" src={Image} alt="" />
        </div>
      </div>
    </section>
  )
}

export default AboutUs