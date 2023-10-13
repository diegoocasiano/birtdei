import React from 'react'
import './navbar.css'

function NavBar( {toggleMenu} ) {
  const LogoBirtPosi = "/public/Posi-Wordmark-Birt.svg"
  const MenuIcon = "/public/menu-hamb.svg"
  
  
  return (
    <nav className='nav-imgs-container'> 
          <img className='logo-birt' src={LogoBirtPosi} alt="logo de birtdei" />
          <button className='btn-toggle-menu' onClick={toggleMenu} ><img className='menu-icon' src={MenuIcon} /></button>
    </nav>
  )
}

export default NavBar