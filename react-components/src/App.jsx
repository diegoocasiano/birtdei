import './App.css'
import {useState } from 'react'
import Card from './components/Card'
import Menu from './components/shared/Menu'
import NavBar from './components/shared/NavBar'
import regalos from './data/regalos'
import CardDetalles from './components/card-detalles/CardDetalles'


function App() {
  const [detallesOpen, setDetallesOpen] = useState(false)
  const toggleDetalles = () => {
      setDetallesOpen(!detallesOpen)
    }
  const regalosList = regalos.map((r, index) => {
    return <Card 
              key={index}
              regalo={r.regalo}
              nombreMarca={r.nombreMarca}
              categoriaMarca={r.categoriaMarca}
              colorMarca={r.colorMarca}
              logoMarca={r.logoMarca}

              toggleDetalles={toggleDetalles}/>
  });

  const [notifDotActive, setNotifDotActive] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setNotifDotActive(false)
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <header>
        <NavBar toggleMenu={toggleMenu} notifDotActive={notifDotActive} />
      </header>

      <main>
          <div className="main-cards-container">
            {regalosList}
          </div>
          { detallesOpen && <CardDetalles/>}
          { menuOpen && <Menu setMenuOpen={setMenuOpen}/>}
          
      </main>
    </>
    
  )
}

export default App
