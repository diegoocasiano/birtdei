import React from 'react'
import './navbar.css'

function NavBar() {
  const LogoBirtPosi = "/public/Posi-Wordmark-Birt.svg"
  const MenuIcon = "/public/menu-hamb.svg"
  return (
    <nav className='nav-imgs-container'> 
          <img className='logo-birt' src={LogoBirtPosi} alt="logo de birtdei" />
          <img className='menu-icon' src={MenuIcon} alt="" />
    </nav>
  )
}

export default NavBar