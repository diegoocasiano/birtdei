import './App.css'
import {useEffect, useState } from 'react'
import Card from './components/Card'
import Menu from './components/shared/Menu'
import NavBar from './components/shared/NavBar'
import dataRegalos from './data/dataRegalos'
import CardDetalles from './components/card-detalles/CardDetalles'

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
  const [names, setNames] = useState('');
  const [formDataStored, setFormDataStored] = useState(false);
    
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(document.getElementById('emailForm'));
    const emailFromForm = formData.get('email');
    const namesFromForm = formData.get('names');

    // Enviar el correo al servidor Flask
    try {
      const response = await fetch('/enviar-correo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailFromForm, names: namesFromForm } ),
      });

      if (response.ok) {
        console.log('form data sent successfully');
        setFormDataStored(true);
      } else {
        console.error('form data not sent');
      }
    } catch (error) {
      console.error('Error sending form data: ', error);
    } finally {
      setLoading(false);
    }
  }

  // Cambiar apariencia del botón cuando el email ya se haya enviado
  const [buttonText, setButtonText] = useState('Dejar mi correo');
  const [buttonClass, setButtonClass] = useState('btn-submit');

  const formDataSentSuccessfully = () => {
    if (formDataStored) {
      setButtonText('Listo!'); 
      setButtonClass('btn-submit sentEmail');
      setEmail(''); // Limpia el input cuando el email se haya enviado
      setNames(''); // Limpia el input cuando el email se haya enviado
    }
  }
  useEffect(() => {
    if (formDataStored) {
      formDataSentSuccessfully();
    }
  }, [formDataStored]);
  
  const handleInputClick = () => {
    setButtonText('Dejar mi nombre y mi correo');
    setButtonClass('btn-submit');
    setFormDataStored(false);
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

  const toggleDetalles = (nombreMarca, regaloFull, condicionesRegalo, colorMarca, logoMarca, linkInsta, id) => {
      setMarcaSeleccionada({nombreMarca, regaloFull, condicionesRegalo, colorMarca, logoMarca, linkInsta, id});
      setDetallesOpen(!detallesOpen);

      window.gtag('event', 'click_on_gifts', {
        'by_marca': nombreMarca
      });
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
          id={r.id}
          toggleDetalles={() =>
            toggleDetalles(r.nombreMarca, r.regaloFull, r.condicionesRegalo, r.colorMarca, r.logoMarca, r.linkInsta, r.id)
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
            id={marcaSeleccionada.id}
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

                        <input type="text" id="names" name="names" placeholder='Tu nombre y apellido' required
                          value={names} onChange={(e) => setNames(e.target.value)} onClick={handleInputClick}/>

                        <input type="email" id="email" name="email" placeholder='Tu correo' required
                          value={email} onChange={(e) => setEmail(e.target.value)} onClick={handleInputClick}/>

                        
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
