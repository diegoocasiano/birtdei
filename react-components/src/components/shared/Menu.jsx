import React from 'react'
import './menu.css'
function Menu() {
    const ArrowRightUp = '/public/arrow-right-up.svg'
    const ArrowRightUpWh = '/public/arrow-right-up-wh.svg'

  return (
    <>
    <div className="drop-down-menu-container">
        <hr className='handle-dd-menu'/>
        <div className="btns-container">
            <button className='btn-top'>Creado por Diego C. <img src={ArrowRightUp} /></button>
            <button className='btn-bot'>Escribir sugerencias <img src={ArrowRightUpWh} /></button>
        </div>
    </div>
    </>
  )
}

export default Menu