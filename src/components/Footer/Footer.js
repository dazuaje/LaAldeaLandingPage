import React from 'react'
import './Footer.scss';
import Image from '../../assets/logoFooter.png'

import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai';
const Footer = () => {
    return (
        <footer className="padding_4x">
            <div className="flex">
                <section className="flex-content padding_1x">
                    <img src={Image} width="100px" alt="" style={{ marginLeft: '40px' }} />
                    <a className="a" href="#"><i style={{color: 'transparent'}}className="fa fa-facebook"></i></a>
                    <AiFillFacebook  className='icons'/>
                    <AiFillInstagram  className='icons'/>
                    <AiFillTwitterSquare className='icons'/>
                </section>

                <section class="flex-content padding_1x">
                    <h3>Mapa del sitio</h3>
                    <a className="a" href="#">Nosotros</a>
                    <a className="a" href="#">Menu</a>
                    <a className="a" href="#">Servicios</a>
                    {/*
                     */}
                    <a className="a" href="#">Contactanos</a>
                </section>

                <section className="flex-content padding_1x">
                    <h3>Contactanos</h3>
                    <a className="a" href="#"><i style={{ marginRight: "10px" }} className='fa fa-envelope'></i>name@gmail.com</a>
                    <a className="a" href="#"><i style={{ marginRight: "10px" }} className='fa fa-phone'></i>+1 (305) 345 290</a>
                    <a className="a" href="#"><i style={{ marginRight: "10px" }} className='fa fa-map-marker'></i>Florida, St 123</a>
                    {/*
      <a href="#">Agencies</a>
       */}
                </section>
                <section className="flex-content padding_1x">
                    <h3>Newsletter</h3>
                    <p style={{ marginBottom: '10px' }}>Puedes confiar en nosotros, solo enviamos promociones y ofertas</p>
                    <fieldset className="fixed_flex">
                        <input type="email" name="newsletter" placeholder="Correo" />
                        <button className="btn btn_2"><i className="fa fa-arrow-right" style={{ color: "#E65F30" }}></i></button>

                    </fieldset>
                </section>
            </div>
            <hr />
            <div className="copyright">
                <p>Copyright ©2023 All rights reserved || La Aldea Restaurant</p>
                {/*
                <section class="flex-content padding_1x"> </section>
                */}
            </div>
        </footer>

    )
}

export default Footer