import React from 'react'
import './navbar.css'

function NavBar( {notifDotActive, toggleMenu} ) {
  // Importar variable de entorno para cambiar el base path de las imágenes según el modo de la app (dev o build)
  const imageBasePath = process.env.NODE_ENV === 'development' ? '/public/' : '/react-components/dist/'; 

  const LogoBirtPosi = `${imageBasePath}brand/Posi-Wordmark-Birt.svg`
  const MenuIcon = `${imageBasePath}brand/menu-hamb.svg`

  
  
  return (
    <nav className='nav-imgs-container'> 
          <img className='logo-birt' src={LogoBirtPosi} alt="logo de birtdei" />
          <button className='btn-toggle-menu' onClick={toggleMenu}>
            <img className='menu-icon' src={MenuIcon} />
              {notifDotActive && <div className='dot'></div>}
          </button>
    </nav>
  )
}

export default NavBar