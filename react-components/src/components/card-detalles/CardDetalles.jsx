import React, { useEffect, useRef, useState} from 'react';
import './card-detalles.css'

function CardDetalles() {
    const GiftBrand = '/public/gift-card.svg'
    const ImportantIcon = '/public/important-icon.svg'

    const [numeroCondiciones, setNumeroCondiciones] = useState(0);
    const [numeroSaltosDeLinea, setNumeroSaltosDeLinea] = useState(0);
    const paragraphRef = useRef(null);

     // Aumentar el height de detallesVentana cuando aumenta el numero de condiciones
    useEffect(() => {
        const condiciones = document.querySelectorAll('.condicion');
        setNumeroCondiciones(condiciones.length);

    }, [numeroCondiciones]); // Ejecutar cuando el número de condiciones cambie - Cuando se abra el menu (ahi numeroCondiciones tendrá un valor)

    useEffect(() => {
        const paragraph = paragraphRef.current;
        if (paragraph) {
          const lines = paragraph.clientHeight / 18;
          setNumeroSaltosDeLinea(Math.round(lines) - numeroCondiciones ); // Math.ceil es para redondear para arriba el valor de (lines)
        }
      }, [numeroCondiciones]); // Ejecutar cuando el número de condiciones cambie - Cuando se abra el menu (ahi numeroCondiciones tendrá un valor)

      const calcularAltoSection = (numeroCondiciones, numeroSaltosDeLinea) => {
        return 280 + (numeroCondiciones * 20) + (numeroSaltosDeLinea * 18) + 'px';
      };


  return (
    <>
        <section className="card-detalles-container" style={{ height: calcularAltoSection(numeroCondiciones, numeroSaltosDeLinea) }}>
            <div className="marca-info">
                <div className="logo-container">
                    <img src="" />
                </div>
                <h1>McDonald's</h1>
                {/* <h1>N° saltosLineas: {numeroSaltosDeLinea}</h1>
                <p> N° condiciones: {numeroCondiciones}</p> */}
            </div>

            <hr className="line-top" />

            <div className="regalo-detalles-container">
                <div className="regalo-container">
                    <p>Te regala</p>
                    <h1 className='h1-regalo-marca'><img src={GiftBrand} />1 Helado</h1>
                </div>
                <div className="condiciones-main-container" >
                    <h2>Condiciones</h2>
                    <div className="condiciones-container" ref={paragraphRef} >
                        <div className="condicion">
                            <div className="bullet"></div>
                            <p className='line-txt'>Presentar DNI</p>
                        </div>
                        <div className="condicion">
                            <div className="bullet"></div>
                            <p className='line-txt'>Presentar DNI</p>
                        </div>
                       
                                  
                    </div>
                </div>
                <div className="msj-important">
                    <img src={ImportantIcon} />
                    <p>Regalo válido solo en Perú y sujeto a cambios.</p>
                </div>
            </div>
            <div className="btn-close-container">
                <button className="close-detalles">
                    Todo claro
                </button>
            </div>
        </section>
        
    </>
  )
}

export default CardDetalles