import React, {useRef} from 'react'
import './ContactUs.scss';
const ContactUs = () => {
  
  const nameRef = useRef();
  const emailRef = useRef();
  const descriptionRef = useRef();


  const handleSubmit = (event) => {
    event.preventDefault();

    const nombre = nameRef.current.value;
    const correo = emailRef.current.value;
    const description = descriptionRef.current.value;
    const ramdonNumber = Math.floor(1000 + Math.random() * 9000);

    const messsgeTemplate = `https://api.whatsapp.com/send/?phone=541171535651&text=*Bienvenido%20a+La%20Aldea*%0A%0A*Nombre*:%20${nombre}%0A*Mi%20Correo*:%20${correo}%0A*Descripcion*:%20${description}%0A%0AOrder+Number%${ramdonNumber}%23&type=phone_number&app_absent=0  `;
    window.open(messsgeTemplate);

    nombre.reset();
    //alert(email + ' ' + password);
  };

/*
*/
return (

    <section className='contact__container' id="contactUs"  data-aos="fade-up" data-aos-duration="2000">
      <div className="contact__container__mini">
        <div className="contact__container__content">
          <h2 className="contact__container__content--title">Reserva tu estadia en la aldea</h2>
          <h4 className="contact__container__content--subtitle">Tendremos un sitio especial esperándolo</h4>
          <div className="contact__container__content__info">z
            <div className="contact__container__content--info"><i style={{ marginRight: "10px" }} className='fa fa-envelope e'></i>wrwc@gmail.com</div>
            <div className="contact__container__content--info"><i style={{ marginRight: "10px" }} className='fa fa-phone p'></i>+93 243535</div>
            <div className="contact__container__content--info"><i style={{ marginRight: "10px" }} className='fa fa-map-marker u'></i>St Louis</div>
          </div>
        </div>



        <div className="contact__container__form">
          <h2 className="contact__container--formTitle">Asegurese de indicar la informacion solicitada para que todo este en orden</h2>
       <div className="contact__container__formContainer">

        <form onSubmit={handleSubmit} className='contact__container--formTag' action="#">
          <label className="contact__container--label" htmlFor="Name">Nombre:</label>
          <input ref={nameRef} className='contact__container--input' type="text" name='name' />

          <label className="contact__container--label" htmlFor="Email">Correo:</label>
          <input ref={emailRef} className='contact__container--input' type="email" name='email' />

          <label className="contact__container--label" htmlFor="Message">Mensaje:</label>
          <textarea rows="6" ref={descriptionRef} className='contact__container--textarea' name='mensaje' />

          <button className="send" type="submit">Enviar</button>
        </form>
       </div>
        
        </div>
      </div>
    </section>
  )
}

export default ContactUs