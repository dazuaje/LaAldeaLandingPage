import React from 'react'
import { AiFillStar } from "react-icons/ai";  
import './Testimonial.scss';
import img from '../../assets/burguer.png'
import {ImQuotesLeft, ImQuotesRight} from 'react-icons/im';

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/navigation";


// import required modules
import { Autoplay, Navigation } from "swiper";

const Testimonial = () => {


  return (
    <section className='testimonial__container'  data-aos="fade-up" data-aos-duration="2000">
      <h1 className="testimonial__container--title">Testimonios</h1>
      <p className='testimonial__container--subtitle'>Nuestros clientes satisfechos</p>

      <Swiper
        navigation={true}
        /*
        */
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,Navigation]}
        className="mySwiper">
        <SwiperSlide className='slide'>

        <div className="cloud__container">
              <div className="cloud__container__mini">
                <p className="cloud__container--p">
               <ImQuotesLeft/><br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor te velit esse cillum
                  dolore eu fugiat nulla pariatur. <ImQuotesRight/>
                </p>
                <div className="cloud__container__starContainer">
                  <AiFillStar className="cloud__container--iconStar" />
                  <AiFillStar className="cloud__container--iconStar" />
                  <AiFillStar className="cloud__container--iconStar" />
                  <AiFillStar className="cloud__container--iconStar" />
                  <AiFillStar className="cloud__container--iconStar" />
                </div>
                <div className="cloud__container__profileContainer">
                  <img className="cloud__container--img" src={img} alt="" />
                  <div className="cloud__container__infoProfileContainer">
                    <h2 className="cloud__container--name">Mark Moore, onco</h2>
                    <p className="cloud__container--position">Founder & ceo</p>
                  </div>
                </div>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>

                <div className="cloud__container">
              <div className="cloud__container__mini">
                <p className="cloud__container--p">
               <ImQuotesLeft/><br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor te velit esse cillum
                  dolore eu fugiat nulla pariatur. <ImQuotesRight/>
                </p>
                <div className="cloud__container__starContainer">
                  <AiFillStar className="cloud__container--iconStar" />
                  <AiFillStar className="cloud__container--iconStar" />
                  <AiFillStar className="cloud__container--iconStar" />
                  <AiFillStar className="cloud__container--iconStar" />
                  <AiFillStar className="cloud__container--iconStar" />
                </div>
                <div className="cloud__container__profileContainer">
                  <img className="cloud__container--img" src={img} alt="" />
                  <div className="cloud__container__infoProfileContainer">
                    <h2 className="cloud__container--name">Mark Moore, onco</h2>
                    <p className="cloud__container--position">Founder & ceo</p>
                  </div>
                </div>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>

                <div className="cloud__container">
              <div className="cloud__container__mini">
                <p className="cloud__container--p">
               <ImQuotesLeft/><br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor te velit esse cillum
                  dolore eu fugiat nulla pariatur. <ImQuotesRight/>
                </p>
                <div className="cloud__container__starContainer">
                  <AiFillStar className="cloud__container--iconStar" />
                  <AiFillStar className="cloud__container--iconStar" />
                  <AiFillStar className="cloud__container--iconStar" />
                  <AiFillStar className="cloud__container--iconStar" />
                  <AiFillStar className="cloud__container--iconStar" />
                </div>
                <div className="cloud__container__profileContainer">
                  <img className="cloud__container--img" src={img} alt="" />
                  <div className="cloud__container__infoProfileContainer">
                    <h2 className="cloud__container--name">Mark Moore, onco</h2>
                    <p className="cloud__container--position">Founder & ceo</p>
                  </div>
                </div>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>

                <div className="cloud__container">
              <div className="cloud__container__mini">
                <p className="cloud__container--p">
               <ImQuotesLeft/><br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor te velit esse cillum
                  dolore eu fugiat nulla pariatur. <ImQuotesRight/>
                </p>
                <div className="cloud__container__starContainer">
                  <AiFillStar className="cloud__container--iconStar" />
                  <AiFillStar className="cloud__container--iconStar" />
                  <AiFillStar className="cloud__container--iconStar" />
                  <AiFillStar className="cloud__container--iconStar" />
                  <AiFillStar className="cloud__container--iconStar" />
                </div>
                <div className="cloud__container__profileContainer">
                  <img className="cloud__container--img" src={img} alt="" />
                  <div className="cloud__container__infoProfileContainer">
                    <h2 className="cloud__container--name">Mark Moore, onco</h2>
                    <p className="cloud__container--position">Founder & ceo</p>
                  </div>
                </div>
              </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonial





/*
            <div className="cloud__container">
              <div className="cloud__container__mini">
                <p className="cloud__container--p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <div className="cloud__container__starContainer">
                  <AiFillStar className="cloud__container--iconStar" />
                  <AiFillStar className="cloud__container--iconStar" />
                  <AiFillStar className="cloud__container--iconStar" />
                  <AiFillStar className="cloud__container--iconStar" />
                  <AiFillStar className="cloud__container--iconStar" />
                </div>
                <div className="cloud__container__profileContainer">
                  <img className="cloud__container--img" src={img} alt="" />
                  <div className="cloud__container__infoProfileContainer">
                    <h2 className="cloud__container--name">Mark Moore, onco</h2>
                    <p className="cloud__container--position">Founder & ceo</p>
                  </div>
                </div>
              </div>
            </div>
*/