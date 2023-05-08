import React from 'react'
import './OrangeBtn.scss';
import { Link } from 'react-scroll';
const OrangeBtn = ({ content }) => {
  return (
    <Link to="contactUs" spy={true} smooth={true} offset={0} duration={800}>
      <button className='orangeBtn__container'>
        {content}
      </button>
    </Link>
  )
}

export default OrangeBtn