import React from 'react'
import './Home.scss';
import {IoIosArrowDown} from 'react-icons/io';
import ArrowBtn from '../ArrowBtn/ArrowBtn';

const Home = () => {
  return (
    <section className='home__container animate__animated'  data-aos="fade-right" data-aos-duration="2000" >
        <h1 className='home__container--title'>COMIDA DE CALIDAD HECHA CON AMOR</h1>
        <p className='home__container--p'>Disfrute comiendo como la realeza con nuestros platos lujosos llenos del sabor latino que le encanta</p>
        <ArrowBtn content="Ordena Ya!" background="#E65F30" color="white" border="transparent" arrowColor="white"/>
        <IoIosArrowDown className='home__container--down'/>
    </section>
  )
}

export default Home