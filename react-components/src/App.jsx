import './App.css'
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

  return (
    <>
      <header>
        <NavBar/>
      </header>

      <main>
          <div className="main-cards-container">
            {regalosList}
          </div>
          <Menu/>
      </main>
    </>
    
  )
}

export default App
