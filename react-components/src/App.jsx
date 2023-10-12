import './App.css'
import Card from './components/Card'
import NavBar from './components/shared/NavBar'
function App() {
  return (
    <>
      <header>
        <NavBar/>
      </header>

      <main>
          <div className="main-cards-container">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
      </main>
    </>
    
  )
}

export default App
