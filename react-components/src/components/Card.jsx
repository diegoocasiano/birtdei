import React, { useRef, useEffect, useState } from 'react';

import './card.css'


function Card({toggleDetalles, logoMarca, colorMarca, regalo, nombreMarca, categoriaMarca}) {

  const imageBasePath = process.env.NODE_ENV === 'development' ? '/public/' : '/react-components/dist/'; 

  const arrowRightIcon = `${imageBasePath}brand/arrow-right-card.svg`
  const giftBrand = `${imageBasePath}brand/gift-card.svg`

  
  return (
    <div className="card-container" >
      <button className='btn card-logo-marca'
        onClick={toggleDetalles}
        style={{ backgroundColor: colorMarca }}>
          <img src={logoMarca.url} alt={`Logo de ${nombreMarca}`} style={{ width: logoMarca.size }} />
      </button>
      <div className='card-content-container'>
        <div className="regalo-marca">
          <img src={giftBrand}/>
          <h1 className='h1-regalo-marca'>{regalo}</h1>
        </div>
        <p className='nombre-marca'>{nombreMarca}</p>
        <p className='categoria-marca'>{categoriaMarca}</p>
        <button
          className='btn-detallesRegalo'
          onClick={toggleDetalles}
          >Más detalles
          <img src={arrowRightIcon} className='arrow-icon'/>
        </button>
      </div>
    </div>
  )
}

export default Card