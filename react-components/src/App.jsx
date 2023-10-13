import './App.css'
import {useState } from 'react'
import Card from './components/Card'
import Menu from './components/shared/Menu'
import NavBar from './components/shared/NavBar'
import regalos from './data/regalos'


function App() {
  const regalosList = regalos.map((r, index) => {
    return <Card 
              key={index}
              regalo={r.regalo}
              nombreMarca={r.nombreMarca}
              categoriaMarca={r.categoriaMarca}
              colorMarca={r.colorMarca}
              logoMarca={r.logoMarca}/>
  });

  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  

  return (
    <>
      <header>
        <NavBar toggleMenu={toggleMenu} />
      </header>

      <main>
          <div className="main-cards-container">
            {regalosList}
          </div>
          { menuOpen && <Menu setMenuOpen={setMenuOpen}/>}
      </main>
    </>
    
  )
}

export default App
