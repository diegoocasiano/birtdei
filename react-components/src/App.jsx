import './App.css'
import {useEffect, useState } from 'react'
import Card from './components/Card'
import Menu from './components/shared/Menu'
import NavBar from './components/shared/NavBar'
import dataRegalos from './data/DataRegalos'
import CardDetalles from './components/card-detalles/CardDetalles'

import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {

  const imageBasePath = process.env.NODE_ENV === 'development' ? '/public/' : '/react-components/dist/'; 

  const truckEmoji = `${imageBasePath}brand/truck-emoji.png`
  const arrowRight = `${imageBasePath}brand/arrow-right.svg`
  const arrowDownSpecial = `${imageBasePath}brand/arrow-down-especial.svg`
  const arrowDownLargeSpecial = `${imageBasePath}brand/arrow-down-large.svg`

  // Preload de imágenes
  // Colocar todas las imágenes que quieras que se descarguen al entrar a home.html
  const arrowRightUp = `${imageBasePath}brand/arrow-right-up.svg`
  const arrowRightUpWh = `${imageBasePath}brand/arrow-right-up-wh.svg`
  const iconInfo = `${imageBasePath}brand/icon-info.svg`
  const iconCheck = `${imageBasePath}brand/icon-check.svg`
  const iconInsta = `${imageBasePath}brand/icon-instagram.svg`

  useEffect(() => {
    const preloadImages = [arrowRightUp, arrowRightUpWh, iconInfo, iconCheck, iconInsta];

    preloadImages.forEach((imageSrc) => {
      const img = new Image();
      img.src = imageSrc;
    });
  }, [arrowRightUp, arrowRightUpWh, iconInfo, iconCheck, iconInsta])

  
  // Lógica para enviar email
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [emailStored, setEmailStored] = useState(false);
    
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(document.getElementById('emailForm'));
    const emailFromForm = formData.get('email');

    // Enviar el correo al servidor Flask
    try {
      const response = await fetch('/enviar-correo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailFromForm }),
      });

      if (response.ok) {
        console.log('email sent successfully');
        setEmailStored(true);
      } else {
        console.error('email not sent');
      }
    } catch (error) {
      console.error('Error sending email: ', error);
    } finally {
      setLoading(false);
    }
  }

  // Cambiar apariencia del botón cuando el email ya se haya enviado
  const [buttonText, setButtonText] = useState('Dejar mi correo');
  const [buttonClass, setButtonClass] = useState('btn-submit');

  const emailSentSuccessfully = () => {
    if (emailStored) {
      setButtonText('Listo!'); 
      setButtonClass('btn-submit sentEmail');
      setEmail(''); // Limpia el input cuando el email se haya enviado
    }
  }
  useEffect(() => {
    if (emailStored) {
      emailSentSuccessfully();
    }
  }, [emailStored]);
  
  const handleEmailClick = () => {
    setButtonText('Dejar mi correo');
    setButtonClass('btn-submit');
    setEmailStored(false);
  };


  // Lógica para solo cargar 10 cards cuando se ingrese a la web por primera vez
  // Luego se deberá hacer scroll (casi hasta el final) para volver a cargar otras 10 cards
  // Esto produce la ilusión de scroll infinito
  const[paginaActual, setPaginaActual] = useState(1);
  const tarjetasPorPagina = 10;
  const dataRegalosTotal = dataRegalos.length;

  const loadNextPage = () => {
    if (paginaActual * tarjetasPorPagina < dataRegalosTotal) {
      setPaginaActual(paginaActual + 1);
    }
  };

  // Logica para capturar el scroll del contenedor de las cards y cargar el siguiente grupo de cards
  useEffect(() => {
    const cardsContainer = document.querySelector('.main-cards-container');

    const handleScroll = () => {
      if (
        cardsContainer.scrollHeight - cardsContainer.scrollTop <= cardsContainer.clientHeight + 1400
      ) {
        loadNextPage();
      }
    };
  
    cardsContainer.addEventListener('scroll', handleScroll);
  
    return () => {
      cardsContainer.removeEventListener('scroll', handleScroll);
    };
  }, [paginaActual]);



  const [detallesOpen, setDetallesOpen] = useState(false)
  const [marcaSeleccionada, setMarcaSeleccionada] = useState(null);

  const toggleDetalles = (nombreMarca, regaloFull, condicionesRegalo, colorMarca, logoMarca, linkInsta) => {
      setMarcaSeleccionada({nombreMarca, regaloFull, condicionesRegalo, colorMarca, logoMarca, linkInsta});
      setDetallesOpen(!detallesOpen);
    };

  const dataRegalosList = dataRegalos
    .slice(0, paginaActual * tarjetasPorPagina) // Filtra las tarjetas de acuerdo a la página actual
    .map((r, index) => {
      return (
        <Card
          key={index}
          regalo={r.regalo}
          regaloFull={r.regaloFull}
          nombreMarca={r.nombreMarca}
          categoriaMarca={r.categoriaMarca}
          colorMarca={r.colorMarca}
          logoMarca={r.logoMarca}
          condicionesRegalo={r.condicionesRegalo}
          linkInsta={r.linkInsta}
          toggleDetalles={() =>
            toggleDetalles(r.nombreMarca, r.regaloFull, r.condicionesRegalo, r.colorMarca, r.logoMarca, r.linkInsta)
          }
        />
      );
  });

  const [notifDotActive, setNotifDotActive] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  
  const toggleMenu = () => {
    setNotifDotActive(false)
    setMenuOpen(!menuOpen)
  };


  return (
    <>
      <header>
        <NavBar toggleMenu={toggleMenu} notifDotActive={notifDotActive} />
      </header>

      <main>
          { detallesOpen && <CardDetalles
            nombreMarca={marcaSeleccionada.nombreMarca}
            regaloFull={marcaSeleccionada.regaloFull}
            condicionesRegalo={marcaSeleccionada.condicionesRegalo}
            colorMarca={marcaSeleccionada.colorMarca}
            logoMarca={marcaSeleccionada.logoMarca}
            linkInsta={marcaSeleccionada.linkInsta}
            toggleDetalles={toggleDetalles} />
          }
          { menuOpen && <Menu
            setMenuOpen={setMenuOpen}/>
          }
  
          <div className="main-cards-container">
            {dataRegalosList}
              <div className="finalHome-container">
                <div className="sct1-container">
                  {/* <img src={truckEmoji} alt="Emoji de camión"/> */}
                  <h2>¡No termina aquí, <span>hay más <br/> regalos en camino!</span></h2>
                  <p>Estamos conversando con más marcas <br/> increíbles para que formen parte de Birtdei</p>
                </div>
                <hr className="divider" />
                <div className="sct2-container">
                  <p>Mientras tanto...</p>
                  <img className='arrow1' src={arrowDownSpecial}/>
                  <div className="subSections-container">
                    <div className="subsct1">
                      <div className="content1">
                        <h3><span>Déjanos tu correo</span> para avisarte<br/>cuando añadamos más regalos</h3>
                        <p>(Prometemos no enviar spam)</p>
                      </div>
                      <form className='content2' id='emailForm' onSubmit={handleSubmit}>
                        <input type="email" id="email" name="email" placeholder='Tu correo' required
                          value={email} onChange={(e) => setEmail(e.target.value)} onClick={handleEmailClick}/>
                        <button type='submit' className={buttonClass}>
                          {loading && <div className="loader"></div>}
                          {!loading && buttonText}
                        </button>
                      </form>
                      
                    </div>
                    <div className="subsct2">
                      <h3><span>Danos tu opinión</span> para mejorar<br/>tu experiencia en Birtdei</h3>
                      <a className="btn-sendEmail" href="/feedback">Dar mi opinión <img src={arrowRight}/></a>
                    </div>
                    <img className='arrow2' src={arrowDownLargeSpecial}/>
                  </div>
                </div>
                <div className="footerContainer">
                  <p>Diseñado por <a href="https://linktr.ee/diegocasiano">Diego Casiano</a></p>
                </div>
              </div>
          </div>
          
      </main>

    </>
    
  )
};

export default App
