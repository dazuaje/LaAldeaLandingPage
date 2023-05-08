import React from 'react'
import './CardMenu.scss';
import burguer from '../../assets/burguer.png';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
const CardMenu = ({title,img, price, desc}) => {
    return (
        <div className='cardMenu__container'>
            <div className="cardMenu__container__image">
                <img src={img} className="cardMenu__container--img" />

            </div>
            <div className="cardMenu__container__content">

                <h5 className='cardMenu__container--product'>{title}</h5>
                <p className='cardMenu__container--price'>${price}</p>
                <p className='cardMenu__container--description'>{desc}</p>

{/*
                <div className="cardMenu__container__action">
                    <div className="cardMenu__container__plusBtn">
                        <AiOutlinePlus className="cardMenu__container--plus" />
                    </div>
                    <div className="cardMenu__container--number">1</div>
                    <div className="cardMenu__container__lessBtn">

                    <AiOutlineMinus className="cardMenu__container--less" />
                    </div>
                </div>
                    */}
            </div>

        </div>
    )
}

export default CardMenu