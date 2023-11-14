import './App.css'
import {useEffect, useState } from 'react'
import Card from './components/Card'
import Menu from './components/shared/Menu'
import NavBar from './components/shared/NavBar'
import dataRegalos from './data/DataRegalos'
import CardDetalles from './components/card-detalles/CardDetalles'

function App() {

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
        cardsContainer.scrollHeight - cardsContainer.scrollTop <= cardsContainer.clientHeight + 300
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

  const toggleDetalles = (nombreMarca, regaloFull, condicionesRegalo, colorMarca, logoMarca) => {
      setMarcaSeleccionada({nombreMarca, regaloFull, condicionesRegalo, colorMarca, logoMarca});
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
          toggleDetalles={() =>
            toggleDetalles(r.nombreMarca, r.regaloFull, r.condicionesRegalo, r.colorMarca, r.logoMarca)
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
            toggleDetalles={toggleDetalles} />
          }
          <div className="main-cards-container">
            {dataRegalosList}
          </div>
          { menuOpen && <Menu
            setMenuOpen={setMenuOpen}/>
          }
          
      </main>
    </>
    
  )
};

export default App
