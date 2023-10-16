import React from 'react'
import './navbar.css'

function NavBar( {notifDotActive, toggleMenu} ) {
  const LogoBirtPosi = "/public/Posi-Wordmark-Birt.svg"
  const MenuIcon = "/public/menu-hamb.svg"
  
  
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