import React from 'react'
import './card.css'

function Card() {
  const ArrowRightIcon = '/public/arrow-right-card.svg'
  const GiftBrand = '/public/gift-card.svg'

  return (
    <div className="card-container">
      <div className='card-logo-marca'></div>
      <div className='card-content-container'>
        <h1 className='h1-regalo-marca'> <img src={GiftBrand} />1 Helado</h1>
        <p className='nombre-marca'>McDonald's</p>
        <p className='categoria-marca'>Fast Food</p>
        <button className='btn-detalles-regalo'>Más detalles <img src={ArrowRightIcon} className='arrow-icon'/> </button>
      </div>
    </div>
  )
}

export default Card