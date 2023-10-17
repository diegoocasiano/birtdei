import './App.css'
import {useState } from 'react'
import Card from './components/Card'
import Menu from './components/shared/Menu'
import NavBar from './components/shared/NavBar'
import dataRegalos from './data/dataRegalos'
import CardDetalles from './components/card-detalles/CardDetalles'


function App() {

  const [detallesOpen, setDetallesOpen] = useState(false)
  const [marcaSeleccionada, setMarcaSeleccionada] = useState(null);

  const toggleDetalles = (nombreMarca, regaloFull, condicionesRegalo, colorMarca, logoMarca) => {
      setMarcaSeleccionada({nombreMarca, regaloFull, condicionesRegalo, colorMarca, logoMarca});
      setDetallesOpen(!detallesOpen);
    };

  const dataRegalosList = dataRegalos.map((r, index) => {
    return <Card 
              key={index}
              regalo={r.regalo}
              regaloFull={r.regaloFull}
              nombreMarca={r.nombreMarca}
              categoriaMarca={r.categoriaMarca}
              colorMarca={r.colorMarca}
              logoMarca={r.logoMarca}
              condicionesRegalo={r.condicionesRegalo}

              toggleDetalles={() => toggleDetalles(r.nombreMarca, r.regaloFull, r.condicionesRegalo, r.colorMarca, r.logoMarca)} />
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
          <div className="main-cards-container">
            {dataRegalosList}
          </div>
          { detallesOpen && <CardDetalles
            nombreMarca={marcaSeleccionada.nombreMarca}
            regaloFull={marcaSeleccionada.regaloFull}
            condicionesRegalo={marcaSeleccionada.condicionesRegalo}
            colorMarca={marcaSeleccionada.colorMarca}
            logoMarca={marcaSeleccionada.logoMarca}
            toggleDetalles={toggleDetalles}/>
          }
          { menuOpen && <Menu
            setMenuOpen={setMenuOpen}/>
          }
          
      </main>
    </>
    
  )
};

export default App
