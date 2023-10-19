import React, {useState, useEffect, useRef } from 'react'
import './menu.css'

function Menu({setMenuOpen}) {
  // Importar variable de entorno para cambiar el base path de las imágenes según el modo de la app (dev o build)
  const imageBasePath = process.env.NODE_ENV === 'development' ? '/public/' : '/react-components/dist/';   

  const ArrowRightUp = `${imageBasePath}brand/arrow-right-up.svg`
  const ArrowRightUpWh = `${imageBasePath}brand/arrow-right-up-wh.svg`
  

    {/* bgMenuActive activa un fondo con transparencia y bloquea el body */}
    const [bgMenuActive, setBgMenuActive] = useState(false)
    // menuActive inicia en false para que le una pausa y el menu no salga defrente si no que cargue la animación
    useEffect(() => {
      const timeout = setTimeout(() => {
        setBgMenuActive(true);
      }, 0);
      return () => {
        clearTimeout(timeout);
        };
      },
    []);

    const [bgMenuOpacity, setBgMenuOpacity] = useState(1); 

    const [startY, setStartY] = useState(null)
    const [currentY, setCurrentY] = useState(null)
    const [originalY, setOriginalY] = useState(null)
    const [isTouching, setIsTouching] = useState(null)


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

        //animación de la opacidad del bg del menu según movimiento del menu en translateY
        const newBgMenuOpacity = 1 - translateY / 160;
        setBgMenuOpacity(newBgMenuOpacity);
    };

    const handleTouchEnd = (e) => {
        if (currentY - startY > 60) {
          e.currentTarget.style.transition = 'transform 0.3s ease';
          e.currentTarget.style.transform = 'translateY(0px)';
          setBgMenuActive(true);
          setBgMenuOpacity(1);
          
        } else if (currentY - startY <= 0) {
          // No hagas nada si el desplazamiento es menor o igual a 0px (swipe up).

        } else if (currentY - startY <= 60) {
          e.currentTarget.style.transition = 'transform 0.3s ease';
          e.currentTarget.style.transform = 'translateY(160px)'; // 160px == altura del elemento (menú)
          setBgMenuOpacity(0)
          setTimeout(() => {
            setBgMenuActive(false)
          }, 250)

          setTimeout(() => {
            setMenuOpen(false)
          },300)
          
          setIsTouching(false)

        } else {
          // Si se hace cualquier otra cosa, el menú no se cerrará.
          e.currentTarget.style.transform = `translateY(0px)`;
          setBgMenuActive(true)
        }

        setIsTouching(false);
      };
      
      //Esto hace que no se pueda hacer scroll cuando el menu está activo
      useEffect(() => {
        
        if (bgMenuActive) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'auto';
        };
      }, [bgMenuActive]);

      // Inicio - Logica para que se cierre la ventanita cuando se toque fuera de la ventanita
      const menuRef = useRef(null);

      // Función que cerrará el menu cuando se haga click fuera del menu
      const closeMenuAnimation = () => {
        const menuElement = menuRef.current;
        if (menuElement) {
          menuElement.style.transition = 'transform 0.3s ease';
          menuElement.style.transform = 'translateY(160px)';      
        }
      };
      // Logica
      const handleOutsideClick = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          closeMenuAnimation(); // Función que cierra el menu
          setBgMenuOpacity(0)
          setTimeout(() => {
            setMenuOpen(false)
          },300)
          setTimeout(() => {
            setBgMenuActive(false)
          },290)
        }
      };
      
      useEffect(() => {
        if (bgMenuActive) {
            document.addEventListener('click', handleOutsideClick);
        }
        //si el menu ya se cerró, se detiene el escuchador de click
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [bgMenuActive]);


  return (
    <>
    <div className={`bg-dd-menu ${bgMenuActive ? 'active' : ''} ${isTouching ? 'touchMove' : '' } `} style={{ opacity: bgMenuOpacity }} ></div>

    <div ref={menuRef} className={`drop-down-menu-container ${bgMenuActive ? 'active' : ''}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}>

        <hr className='handle-dd-menu'/>
        <div className="btns-container">
          <a className='btn-top' href="https://linktr.ee/diegocasiano" target='blank'>Creado por Diego C. <img src={ArrowRightUp} ></img></a>
          <a className='btn-bot' href="#">Escribir sugerencias <img src={ArrowRightUpWh} ></img></a>
        </div>
    </div>
    
    </>
  )
}

export default Menu