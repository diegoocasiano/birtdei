import React from 'react'
import './card.css'

function Card({tamañoLogo, logoMarca, colorMarca, regalo, nombreMarca, categoriaMarca}) {
  const ArrowRightIcon = '/public/arrow-right-card.svg'
  const GiftBrand = '/public/gift-card.svg'

  return (
    <div className="card-container">
      <div className='card-logo-marca' style={{ backgroundColor: colorMarca }} ><img src={logoMarca.url} style={{ width: logoMarca.size }} /></div>
      <div className='card-content-container'>
        <h1 className='h1-regalo-marca'><img src={GiftBrand} />{regalo}</h1>
        <p className='nombre-marca'>{nombreMarca}</p>
        <p className='categoria-marca'>{categoriaMarca}</p>
        <button className='btn-detalles-regalo'>Más detalles <img src={ArrowRightIcon} className='arrow-icon'/> </button>
      </div>
    </div>
  )
}

export default Card