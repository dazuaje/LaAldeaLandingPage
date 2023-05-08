import './App.scss';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Menu from './components/Menu/Menu';
import ContactUs from './components/ContactUs/ContactUs';
import Offer from './components/Offer/Offer';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import CardMenu from './components/CardMenu/CardMenu';
import Spinner from './components/Spinner/Spinner';
import Testimonial from './components/Testimonial/Testimonial';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  const [loading, setLoading] = useState(false);

  useEffect( () => {
    
    AOS.init({
      duration: 200
    });
    AOS.refresh();
  }, [])
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [])


  return (
    <div className="App">
      {
        loading ?
          <Spinner />
          :
          <>
            <div className="backgrounds">
              <Navbar />
              <Home />
            </div>
            <div className="features">
            </div>
            <AboutUs />
            <Features />
            <Menu />
            <Offer />
            <Testimonial />
            <ContactUs />
            <Footer />
          </>
      }

    </div>
  );
}

export default App;
