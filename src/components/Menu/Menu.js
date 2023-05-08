import React, { useState, useEffect } from 'react'
import './Menu.scss';
import OrangeBtn from '../OrangeBtn/OrangeBtn';
//import dataMenu from '../../dataMenu';
import CardMenu from '../CardMenu/CardMenu';
import Features from '../Features/Features';


//Data menu previps

/*
  const allCategories = ['Todas', ...new Set(dataMenu.map((item) => item.category))];
  
  const handleFetch = async () => {
    
    const response = await fetch("/data.json");
    const data = await response.json();
    console.log(data);
  }
  useEffect(() => {
    handleFetch();

  }, [])


  const [menuItems, setMenuItems] = useState(dataMenu);
  const [categories, setCategories] = useState(allCategories);
  const [activeItem, setActiveItem] = useState(0);
  // console.log(allCategories);

  const filterItems = (category) => {
    if (category === 'Todas') {
      setMenuItems(dataMenu);
      return;
    }
    const newItems = dataMenu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
*/



//Nuestros platos
const Menu = () => {
  
  
  const handleFetch = async () => {
    
    const response = await fetch("/data.json");
    const data = await response.json();
    console.log(data);
    setMenuItems(data);
    const allCategories = ['Todas', ...new Set(data.map((item) => item.category))];
setCategories(allCategories);
setFilteredItems(data);
  }
  useEffect(() => {
    handleFetch();

  }, [])


  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeItem, setActiveItem] = useState(0);
  const [filteredItems, setFilteredItems] = useState([]);
  // console.log(allCategories);

  const filterItems = (category) => {
    if (category === 'Todas') {
      setFilteredItems(menuItems);
    } else{

      const newItems = menuItems.filter((item) => item.category === category);
      setFilteredItems(newItems);
    }
    setActiveItem(category)
  };
  return (
    <section className='menu__container' id='Menu'>

      <div className="menu__container__header">
        <h1 className="menu__container--title">HE AQUI NUESTROS PLATOS</h1>
        <div className="menu__container--btn">

          <OrangeBtn content="Ordernar" />
        </div>
        {/*
        <button className="menu__container--title">Total: $00.00</button>
         */}
      </div>
      <div className="menu__container__menuContainer">
        <div className="menu__container__leftColumn">
          {/*Tipos de comida */}
          {categories.map((item, index) => {
            //   console.log(item);
            //   console.log(index);
            const funcion = () => {
              filterItems(item);
              setActiveItem(item)

            }
            return (
              <div
                key={index}
                onClick={funcion}
                //onClick={setActiveItem(item)}
                //${activeItem === item  ? 'activeItem' : ''}
                className={`menu__container__item ${activeItem === item ? 'activeItem' : ''} `}
              // className={`menu__container__item`}
              //${activeItem === item  ? 'activeItem' : ''}
              //activeItem

              >
                <div className="menu__container__item--circle"></div>
                {item}
                <div className="menu__container__item--line"></div>
              </div>
            );
          })}
        </div>
        <div className="menu__container__rightColumn">
          {/*Menu de comida */}
          {filteredItems.map((menu) => {
            // console.log(item);
            const { title, img, price, desc } = menu;
            return (
              <CardMenu key={title} title={title} img={img} price={price} desc={desc} />
            )
          })}

        </div>
      </div>
    </section>
  )
}

export default Menu