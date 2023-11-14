import React, { useEffect, useRef, useState} from 'react';

import './card-detalles.css'

function CardDetalles({ toggleDetalles, nombreMarca, regaloFull, condicionesRegalo, colorMarca, logoMarca}) {
    // Importar variable de entorno para cambiar el base path de las imágenes según el modo de la app (dev o build)
    const imageBasePath = process.env.NODE_ENV === 'development' ? '/public/' : '/react-components/dist/';  
    const GiftBrand = `${imageBasePath}brand/gift-card.svg`
    const iconInfo = `${imageBasePath}brand/icon-info.svg`
    const iconCheck = `${imageBasePath}brand/icon-check.svg`

    // Código para cerrar cardDetalles haciendo swipe down
    const [bgOpacity, setBgOpacity] = useState(1);

    const [startY, setStartY] = useState(null)
    const [currentY, setCurrentY] = useState(null)
    const [originalY, setOriginalY] = useState(null)
    const [isTouching, setIsTouching] = useState(null)


    //Calcular el alto del contenedor de cardDetalles
        

    const handleTouchStart = (e) => {
        setStartY(e.touches[0].clientY)
        setOriginalY(parseInt(e.currentTarget.style.transform.replace('translateY(', '').replace('px)', '')) || 0);
        e.currentTarget.style.transition = 'none';
        setIsTouching(true)
    };

    const handleTouchMove = (e) => {
        if (!isTouching) {
            return;
        }
        setCurrentY(e.touches[0].clientY);
        const translateY = Math.max(0, currentY - startY + originalY);
        e.currentTarget.style.transform = `translateY(${translateY}px)`;

        //animación de la opacidad del bg del cardDetalles según movimiento del menu en translateY
        const windowDetallesHeight = windowDetallesRef.current.clientHeight;
        const percentage = (translateY / windowDetallesHeight) * 100;
        const newOpacity = Math.max(0, 1 - percentage / 100);
        setBgOpacity(newOpacity);
    }
    
    const handleTouchEnd = (e) => {
        // e.currentTarget... ayuda a que la transition suave del cierre al presionar el button close, funcione.
        // Al agregar esta linea cualquier cambio subsiguiente en la propiedad 'transform' se animará durante un período de 0.3s
        e.currentTarget.style.transition = 'transform 0.6s ease';

        // Si desliza más de 100 pixeles
        if (currentY - startY > 0) {
            e.currentTarget.style.transition = 'transform 0.4s ease';
            e.currentTarget.style.transform = 'translateY(100%)';
            setBgOpacity(0);
            setTimeout(() => {
                setDetallesWindowActive(false);
            }, 400);
            
            setTimeout(() => {
                toggleDetalles();
            }, 500);
        } 

        // No hagas nada si el desplazamiento es menor o igual a 0px (si hace swipe up).
        else if (currentY - startY <= 0) {
            
        } 

        else {
            // Si se hace cualquier otra cosa, el menú no se cerrará.
            e.currentTarget.style.transform = `translateY(0)`;
            setDetallesWindowActive(true)
        }
        
        setIsTouching(false);
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
            
            // const scrollPosition = window.scrollY;
            // document.querySelector('main').style.marginTop = `-${scrollPosition}px`;

            // document.body.classList.add('noScroll')

           }
           else {

            // document.body.classList.remove('noScroll')

            // const scrollPosition = parseInt(document.querySelector('main').style.marginTop || 0, 10);
            // document.querySelector('main').style.marginTop = '';
            // window.scrollTo(0, -scrollPosition);
            //    document.body.style.overflow = 'auto';
           }
         }, [detallesWindowActive]);


        
      // Logica para que se cierre la ventanita cuando se toque fuera de la ventanita
      const windowDetallesRef = useRef(null);

      // Función que cerrará el menu cuando se haga click fuera del menu
      const closeDetallesWindowAnimation = () => {
        const windowDetallesElement = windowDetallesRef.current;
        if (windowDetallesElement) {
            windowDetallesElement.style.transition = 'transform 0.4s ease';
            windowDetallesElement.style.transform = 'translateY(100%)';      
        }
      };

      // Logica
      const handleOutsideClick = (event) => {
        if (windowDetallesRef.current && !windowDetallesRef.current.contains(event.target)) {
            closeDetallesWindowAnimation(); // Función que cierra el menu

            setBgOpacity(0);
            setTimeout(() => {
                setDetallesWindowActive(false);
            }, 390);
           
            setTimeout(() => {
                toggleDetalles();
            }, 400);
            
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


    // Función que se realizará al hacer click en el button close
    const handleCloseButtonClick = () => {

        closeDetallesWindowAnimation();

        setBgOpacity(0);

        setTimeout(() => {
            setDetallesWindowActive(false);
        }, 390);
           
        setTimeout(() => {
            toggleDetalles();
        }, 400);
      };



    // Logica para saber cuantos bullets (condiciones) nuevos hay (por defecto hay 2)
    const [numeroCondiciones, setNumeroCondiciones] = useState(0);
    const [numeroSaltosDeLineaCondicion, setNumeroSaltosDeLineaCondicion] = useState(0);
    const condicionRef = useRef(null)

    useEffect(() => {
        const condiciones = document.querySelectorAll('.condicion');
        const nuevoNumeroCondiciones = condiciones.length - 2;
        setNumeroCondiciones(nuevoNumeroCondiciones);

        console.log('Número de condiciones:', nuevoNumeroCondiciones);

    }, [setNumeroCondiciones]);

    // Logica para saber el total de saltos de lineas (lines) que hay en las condiciones
    useEffect(() => {
        const condiciones = document.querySelectorAll('.condicion');
        let totalSaltosDeLinea = 0
        condiciones.forEach((condicion) => {
            const lines = condicion.clientHeight / 20;
            totalSaltosDeLinea += Math.round(lines) - 1;
        });

        console.log('Saltos de linea en las Condiciones:', totalSaltosDeLinea);

        setNumeroSaltosDeLineaCondicion(totalSaltosDeLinea)
    }, [numeroCondiciones]);

    // Aquí veo cuantos saltos de linea hay en el h2 (sin contar la primera linea, por eso el -1)
    const [numeroSaltosLineaH2, setNumeroSaltosLineaH2] = useState(0)
    const h2Ref = useRef(null)
    useEffect(() => {
        const h2 = h2Ref.current;
        if (h2) {
            const lines = h2.clientHeight / 18;
            setNumeroSaltosLineaH2(Math.round(lines) - 1);  

            console.log('Número de líneas:', Math.round(lines) - 1);
        }
      });

    // Se configura el alto del contenedor de CardDetalles. 470 es el alto mínimo que tiene el overlay (cardDetalles) en un vw 360px
    const newHeightCardDetalles = (numeroSaltosLineaH2) => {

        // Calcula el tamaño del viewport
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

        const minHeight = 470 + (vw - 360) * (502 - 470) / (414 - 360);

        const multXSaltoLineaH2 = 18 + (vw - 360) * (20 - 18) / (414 - 360);

        const multXNuevaCondicion = 26 + (vw - 360) * (30 - 26) / (414 - 360);
        const multXSaltoLineaCondicion = 18 + (vw - 360) * (22 - 18) / (414 - 360);

        // console.log('N° Nuevas Condiciones:', numeroCondiciones,  multXNuevaCondicion, numeroSaltosDeLineaCondicion)
        
        return minHeight + (numeroSaltosLineaH2 * multXSaltoLineaH2) + (numeroCondiciones * multXNuevaCondicion) + (numeroSaltosDeLineaCondicion * multXSaltoLineaCondicion) + 'px';
        
    };

    
  return (
    <>  
        <div className={`bg-detallesWindow ${detallesWindowActive ? 'active' : ''} ${isTouching ? 'touchMove' : '' } `}
            style={{ opacity: bgOpacity }}>
        </div>

        <section 
            ref={windowDetallesRef} 
            className={`card-detalles-container ${detallesWindowActive ? 'active' : ''}`}
            style={{ height: newHeightCardDetalles(numeroSaltosLineaH2)}}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}>

            <div className='header-marca'>
                <div className="container-logoMarca" style={{ backgroundColor: colorMarca }}>
                    <img className='logoMarca' src={logoMarca.url}
                            style={{width: logoMarca.sizeLittle}}/>
                </div>
                <h1 className="nameMarca">{nombreMarca}</h1>
            </div>

            <div className="mainContent">

                <div className="sct1-regaloMarca">
                    <p>Te regala</p>
                    <div className="regaloMarca">
                        <img className="iconGift" src={GiftBrand} />
                        <h2 ref={h2Ref}>{regaloFull}</h2>
                    </div>
                </div>

                <hr className="divider-N1" />

                <div className="sct2-condicionesRegalo">
                    <h3 className='title'>Condiciones</h3>
                    <div className="condicionesRegalo-container">
                    {condicionesRegalo.map((condicion, index) => (
                        <div className="condicion" key={index}>
                            <div className="bullet"></div>
                            <p ref={condicionRef}>{condicion}</p>
                        </div>
                        ))}
                    </div>
                </div>

                

            </div>

            <div className="footer">

                <hr className="divider-N2" />

                <div className="sct1-disclaimer">
                    <div className="disclaimer N1">
                        <img src={iconCheck}/>
                        <p>Válido solo en Lima (Perú)</p>
                    </div>
                    <div className="disclaimer N2">
                        <img src={iconInfo}/>
                        <p>Regalo sujeto a cambios</p>
                    </div>
                </div>
                <div className="sct2-btnClose">
                    <button className="btnClose" 
                        onClick={handleCloseButtonClick}>Todo claro
                    </button>
                </div>
                
            </div>

        </section>
    </>
  )
}
export default CardDetalles