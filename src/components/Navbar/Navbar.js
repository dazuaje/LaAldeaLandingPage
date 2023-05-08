import React, { useState } from 'react'
import { Link } from "react-scroll";
import { FaBars, FaTimes } from 'react-icons/fa'
import ArrowBtn from '../ArrowBtn/ArrowBtn';
import './Navbar.scss';
import logoHeader from '../../assets/logoHeader.png'
//import OrangeBtn from '../OrangeBtn/OrangeBtn';
import Image from '../../assets/MASCOT.png';


//Animation of scroll
/*
const sectionBenefitsContainer = document.querySelector(".section-benefits");

const sectionRatingTitle = document.querySelector(".section-rating-title");
const sectionRatingContainer = document.querySelector(".section-rating");

const sectionStepsMascot14 = document.querySelector(".mascot14");
const sectionStepsTitle = document.querySelector(".steps-title");
const sectionStepsCardsSharpMark = document.querySelectorAll(".steps-cards .box-card .sharpMark");
console.log(sectionBenefitsContainer);

const sectionWilliamMeetWilliam = document.querySelector(".meetWilliam");
const sectionWilliamMascot19 = document.querySelector(".mascot19");

const iconBenefits = document.querySelectorAll(".icon-benefits");

const sectionMission = document.querySelector(".section-mission");

const sectionFooter = document.querySelector(".footer");


setTimeout(() => {
    
  //  loader.classList.add("loader--hidden"); animate__slideInLeft
    //document.querySelector(".header__nav").classList.add("animate__slideInDown");
    document.querySelector(".home__container").classList.add("animate__fadeIn");

}, 2000)

*/
document.addEventListener("scroll", () => {
    let scroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    let scrolled = parseInt((scroll / height) * 100);
    //console.log(scrolled);
    if (scrolled >= 5) {

   // document.querySelector(".aboutUs__container").classList.add("animate__fadeIn");

    }
/*
if (scrolled >= 18) {
    document.querySelector(".features__container").classList.add("animate__slideInLeft");
    
}
*/


    if (scrolled >= 21) {
      //  document.querySelector(".menu__container").classList.add("animate__fadeIn");
    
        }

    if (scrolled >= 43) {
      //  document.querySelector(".offer__container").classList.add("animate__fadeIn");
    
        }
    
    //offer__container


    /*
    
    






















<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="shortcut icon" href="./logoAiudaaRounded.ico" type="image/x-icon">
    <title>Aiudaa</title>
</head>

<body>

<div class="loader"></div>
    <div class="container">
        <div class="container__image">
            <img src="https://aiudaa.com/images/MASCOT14%20(1).png" alt="img">
        </div>

        <div class="container__text">
            <p class="title"><b>Comming soon!</b></p>
            <p class="p">Our website is under construction</p>
        </div>
    </div>


    <style>
        body {
            display: flex;
            height: 100vh;
            justify-content: center;
            overflow-y: hidden;
            background-color: #144496;
        }


        body::before {
            background-size: 90%;
            opacity: .4;
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            stroke: transparent;
            stroke-width: 0px;
            z-index: -1;
            left: 0;
            bottom: 1px;
            background-image: url("./AI+UDA-1.svg");
        }

        .container {
            width: 100%;
            margin: auto;
        }


        .container__image {
            display: flex;
            justify-content: center;
        }

        .container__image img {
            width: 200px;
        }

        .container__text {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            flex-direction: column;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

        .container__text .title {
            font-size: 2em;
        }

        .container__text .p {
            font-size: 1.5em;
        }

        @media  (max-width: 434px) {

            
        .container__text .title {
            font-size: 1.5em;
        }

        .container__text .p {
            font-size: 1em;
        }
        
        
.loader {
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: 4000000000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  transition: opacity 0.75s, visibility 0.75s;
}



.loader--hidden {
  opacity: 0;
  visibility: hidden;
}

.loader::after {
  content: "";
  width: 75px;
  height: 75px;
  border: 15px solid #dddddd;
  border-top-color: #164496;
  border-radius: 50%;
  animation: loading 0.75s ease infinite;
}

@keyframes loading {
  from {
    transform: rotate(0turn);
  }

  to {
    transform: rotate(1turn);
  }
}
        }
    </style>
    
    
    <script>
        
    const loader = document.querySelector(".loader");
    setTimeout(() => {
        loader.classList.add("loader--hidden");
    }, 5000)
        window.addEventListener("DOMContentLoaded", () => {


});
    </script>
</body>

</html>










































    if (scrolled >= 9) {
        sectionStepsMascot14.classList.add("animate__slideInLeft");
    }
    if (scrolled >= 26) {
        sectionWilliamMeetWilliam.classList.add("animate__fadeInTopLeft");
        sectionWilliamMascot19.classList.add("animate__zoomIn");

    }
    if (scrolled >= 40) {
        sectionBenefitsContainer.classList.add("animate__fadeInUp");
        /*
        iconBenefits.forEach((element) => {
            
            element.classList.add("animate__tada");
        })
        
    }
    if (scrolled >= 55) {
        sectionRatingContainer.classList.add("animate__fadeInUp");
        
        /* sectionRatingTitle.classList.add("animate__lightSpeedInRight");
    }
    if (scrolled >= 66) {
        sectionMission.classList.add('animate__fadeInUp');
    }
    if (scrolled >= 81) {
        sectionFooter.classList.add("animate__fadeInUp");
    }

    */
});



const Navbar = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show);
    }

    return (



        <header className='header__nav animate__animated'  data-aos="fade-right" data-aos-duration="2000">
            <img className="header__logo"src={logoHeader} alt="" />
            <nav className={`${show ? 'responsive_nav' : ""}`}>
                <Link to='AboutUS' onClick={handleShow}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className="nav__item--anchor">Nosotros</Link>
                <Link to="Menu" onClick={handleShow}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className="nav__item--anchor">Menu</Link>
                <Link to="Menu" onClick={handleShow}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className="nav__item--anchor">Servicios</Link>

<ArrowBtn background='transparent' color="white" border="#E65F30"content="Ordena Ahora!"/>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={handleShow}>
                    <FaTimes className="icon--x" />
                </button>
            </nav>
            <button
                className="nav-btn"
                onClick={handleShow}>
                <FaBars className="icon--bar"/>
            </button>
        </header>

    )
}

export default Navbar










{/*

        <div className="header">
            <img className="logo" src={Image} alt="" width={50} />
        <h2 className="logo">BLACKBOX SOFTWARE</h2>
        <input type="checkbox" id="chk" />
        <label htmlFor="chk" className="show-menu-btn">
                <i className="fas fa-bars" />
            </label>

            <ul className="menu">
                <Link className="menu--a" to="AboutUs" spy={true} smooth={true} offset={0} duration={800} >Nosotros</Link>
                <Link className="menu--a" to="Menu" spy={true} smooth={true} offset={0} duration={800} >Menu</Link>
                <Link className="menu--a" to="Menu" spy={true} smooth={true} offset={0} duration={800} >Servicios</Link>
               {/*
                <a className="menu--a" href="/">Works</a>
                
                <a className="menu--a" href="/"><ArrowBtn background='transparent' color="white" border="#E65F30"content="Ordena Ahora!"/></a>
                <label htmlFor="chk" className="hide-menu-btn">
                    <i className="fas fa-times" style={{color: '#E65F30'}} />
                </label>
            </ul>
        </div>
    
        /*
        <nav className='nav__container'>
        <ul className='nav__container__ul'>
        <img className="nav__container--logo"src={Image} alt="" width={50} />

                <div className="nav__container__links">
                    <li className='nav__container__li'><Link className='nav__container--a' to="AboutUs" spy={true} smooth={true} offset={0} duration={800} >Nosotros </Link></li>
                    <li className='nav__container__li'><Link className='nav__container--a' to="Menu" spy={true} smooth={true} offset={0} duration={800} >Menu </Link></li>
                    <li className='nav__container__li'><Link className='nav__container--a' to="Services" spy={true} smooth={true} offset={0} duration={800} >Servicios </Link></li>
                    <li className='nav__container__li logo' style={{marginLeft: '20px'}}><Link> <ArrowBtn background='transparent' color="white" border="#E65F30"content="Ordena Ahora!"/></Link></li>
                    </div>
                    </ul>
             </nav>




*/}