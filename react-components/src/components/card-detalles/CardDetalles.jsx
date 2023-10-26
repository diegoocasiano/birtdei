import React, { useEffect, useRef, useState} from 'react';
import './card-detalles.css'

function CardDetalles({ toggleDetalles, nombreMarca, regaloFull, condicionesRegalo, colorMarca, logoMarca}) {
    // Importar variable de entorno para cambiar el base path de las imágenes según el modo de la app (dev o build)
    const imageBasePath = process.env.NODE_ENV === 'development' ? '/public/' : '/react-components/dist/';  
    const GiftBrand = `${imageBasePath}brand/gift-card.svg`
    const ImportantIcon = `${imageBasePath}brand/important-icon.svg`

    const [numeroSaltosLineaRegalo, setNumeroSaltosLineaRegalo] = useState(0)
    const [numeroCondiciones, setNumeroCondiciones] = useState(0);
    const [numeroSaltosDeLinea, setNumeroSaltosDeLinea] = useState(0);
    const paragraphRef = useRef(null);
    const h1Ref = useRef(null)

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

    useEffect(() => {
        const h1 = h1Ref.current;
        if (h1) {
            const lines = h1.clientHeight / 18;
            setNumeroSaltosLineaRegalo(Math.round(lines) - 1);
        }
      });

    const calcularAltoSection = (numeroCondiciones, numeroSaltosDeLinea, numeroSaltosLineaRegalo) => {
        return 280 + (numeroCondiciones * 20) + (numeroSaltosDeLinea * 18) + (numeroSaltosLineaRegalo * 19)+ 'px';
    };


      // Creamos un estado para saber cuando esta activo la ventana de detalles
      const [detallesWindowActive, setDetallesWindowActive] = useState(false)
      useEffect(() => {
        const timeout = setTimeout(() => {
          setDetallesWindowActive(true);
        }, 0);
        return () => {
          clearTimeout(timeout);
          };
        },
      []);

      //Esto hace que no se pueda hacer scroll cuando la ventanita de detalles  esté activa
      useEffect(() => {
        if (detallesWindowActive) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'auto';
        }
      }, [detallesWindowActive]);

      // Logica para que se cierre la ventanita cuando se toque fuera de la ventanita
      const detallesRef = useRef(null);

      const handleOutsideClick = (event) => {
        if (detallesRef.current && !detallesRef.current.contains(event.target)) {
            setDetallesWindowActive(false);
            setTimeout(() => {
                toggleDetalles();
            }, 300);
        }
      };

      useEffect(() => {
        if (detallesWindowActive) {
            document.addEventListener('click', handleOutsideClick);
        }
        //si la ventanita ya se cerró, se detiene el escuchador de click
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [detallesWindowActive]);


  return (
    <>  
        <div className={`bg-detallesWindow ${detallesWindowActive ? 'active' : ''}`}></div>

        <section ref={detallesRef} className={`card-detalles-container ${detallesWindowActive ? 'active' : ''}`}
                style={{ height: calcularAltoSection(numeroCondiciones, numeroSaltosDeLinea, numeroSaltosLineaRegalo) }}>
            <div className="marca-info">
                <div className="logo-container" style={{ backgroundColor: colorMarca }}>
                    <img src={logoMarca.url} style={{width: logoMarca.sizeLittle}} />
                </div>
                <h1>{nombreMarca}</h1>                 
            </div>

            <hr className="line-top" />

            <div className="regalo-detalles-container">
                <div className="regalo-container">
                    <p>Te regala</p>
                    <div ref={h1Ref} className="txt-regalo">
                        <div className="icon"></div>
                        <h1 className='h1-regalo-marca'>{regaloFull}</h1>
                    </div>
                </div>
                <div className="condiciones-main-container" >
                    <h2>Condiciones</h2>
                    <div className="condiciones-container" ref={paragraphRef} >
                    {condicionesRegalo.map((condicion, index) => (
                        <div className="condicion" key={index}>
                            <div className="bullet"></div>
                            <p className='line-txt'>{condicion}</p>
                        </div>
                        ))}                       
                    </div>

                </div>
                <div className="msj-important">
                    <img src={ImportantIcon} />
                    <p>Disponible solo en Lima (Perú). Sujeto a cambios.</p>
                </div>
            </div>
            <div className="btn-close-container">
                <button className="close-detalles" onClick={() => {
                        setDetallesWindowActive(false);
                        setTimeout(() => {
                            toggleDetalles();
                        }, 300);
                    }} >
                    Todo claro
                </button>
            </div>
        </section>
        
    </>
  )
}
export default CardDetalles