import React from 'react'
import './card.css'

function Card({toggleDetalles, logoMarca, colorMarca, regalo, nombreMarca, categoriaMarca}) {
  const imageBasePath = process.env.NODE_ENV === 'development' ? '/public/' : '/react-components/dist/'; 

  const ArrowRightIcon = `${imageBasePath}brand/arrow-right-card.svg`
  const GiftBrand = `${imageBasePath}brand/gift-card.svg`


  return (
    <div className="card-container" >
      <button className='btn card-logo-marca'
        onClick={toggleDetalles}
        style={{ backgroundColor: colorMarca }}>
          <img src={logoMarca.url} style={{ width: logoMarca.size }} />
      </button>
      <div className='card-content-container'>
        <h1 className='h1-regalo-marca'><img src={GiftBrand} />{regalo}</h1>
        <p className='nombre-marca'>{nombreMarca}</p>
        <p className='categoria-marca'>{categoriaMarca}</p>
        <button
          className='btn-detallesRegalo'
          onClick={toggleDetalles}
          >Más detalles
          <img src={ArrowRightIcon} className='arrow-icon'/>
        </button>
      </div>
    </div>
  )
}

export default Card