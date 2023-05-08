import React from 'react'
import './Features.scss';
import {ImUserTie} from 'react-icons/im';
import {MdDeliveryDining,MdSanitizer} from 'react-icons/md';
const Features = () => {
  return (
    <section className="features__container animate__animated">
        <div className="features__container__card">
        <MdSanitizer className='features__container--img'/>
            <div className="features__container--content">Local Higienico</div>
        </div>

        <div className="features__container__card">
        <ImUserTie className='features__container--img'/>
   
            <div className="features__container--content">Personal Profesional</div>
        </div>


        <div className="features__container__card">
        <MdDeliveryDining className='features__container--img'/>
        
            <div className="features__container--content">Contamos con delivery</div>
        </div>
    </section>
  )
}

export default Features