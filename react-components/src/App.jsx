import './App.css'
import {useEffect, useState } from 'react'
import Card from './components/Card'
import Menu from './components/shared/Menu'
import NavBar from './components/shared/NavBar'
import dataRegalos from './data/dataRegalos'
import CardDetalles from './components/card-detalles/CardDetalles'
import ReactGA from "react-ga4";

ReactGA.initialize("G-E6NL8DX650");

function App() {
  const imageBasePath = process.env.NODE_ENV === 'development' ? '/public/' : '/react-components/dist/'; 

  const emojiGift = `${imageBasePath}brand/emoji-gift.png`
  const emojiConfetti = `${imageBasePath}brand/emoji-confetti.png`
  const arrowDownSpecial = `${imageBasePath}brand/arrow-down-especial.svg`
  const arrowDownLargeSpecial = `${imageBasePath}brand/arrow-down-large.svg`

  // Preload de imágenes
  // Colocar todas las imágenes que quieras que se descarguen al entrar a home.html
  const arrowRightUp = `${imageBasePath}brand/arrow-right-up.svg`
  const arrowRightWh = `${imageBasePath}brand/arrow-right-wh.svg`
  const iconInfo = `${imageBasePath}brand/icon-info.svg`
  const iconCheck = `${imageBasePath}brand/icon-check.svg`
  const iconInsta = `${imageBasePath}brand/icon-instagram.svg`

  useEffect(() => {
    const preloadImages = [arrowRightUp, iconInfo, iconCheck, iconInsta, arrowRightWh];

    preloadImages.forEach((imageSrc) => {
      const img = new Image();
      img.src = imageSrc;
    });
  }, [arrowRightUp, arrowRightWh , iconInfo, iconCheck, iconInsta])

  
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

      ReactGA.event({
        category: 'Card',
        action: 'Click en Card',
        label: nombreMarca,
      })
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
                  <img className='emojiRegalo' src={emojiGift} alt="Emoji de regalo"/>
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
                      <a className="btn-sendEmail" href="/feedback">Dar mi opinión <img src={arrowRightWh}/></a>
                    </div>
                    <img className='arrow2' src={arrowDownLargeSpecial}/>

                    <hr className="divider" />

                    <div className="subsct3">
                      <img className='emojiConfetti' src={emojiConfetti} alt="Emoji de confetti"/>
                      <h2><span>¡Destaca tu marca</span> en Birtdei!</h2>
                      <p>Atrae nuevos clientes regalándoles<br/> algo especial en su cumpleaños</p>
                      <a className='btn-marcasContactar' href="https://us.frms.link/t3ipetb/" target='blank'>Contactar <img src={arrowRightWh}/> </a>
                    </div>
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
