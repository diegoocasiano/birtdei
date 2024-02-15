import React, {useState, useEffect, useRef } from 'react'
import './menu.css'

function Menu({setMenuOpen}) {
  // Importar variable de entorno para cambiar el base path de las imágenes según el modo de la app (dev o build)
  const imageBasePath = process.env.NODE_ENV === 'development' ? '/public/' : '/react-components/dist/';   

  const arrowRightUp = `${imageBasePath}brand/arrow-right-up.svg`
  const arrowRightUpWh = `${imageBasePath}brand/arrow-right-up-wh.svg`


  const [buttonClicked, setButtonClicked] = useState(null);

  const handleClick = (buttonName) => {
    setButtonClicked(buttonName);
  };

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
        if (currentY - startY > 0) {
          e.currentTarget.style.transition = 'transform 0.3s ease';
          e.currentTarget.style.transform = 'translateY(184px)';
          setBgMenuOpacity(0)
          setTimeout(() => {
            setBgMenuActive(false)
          }, 250)

          setTimeout(() => {
            handleCloseMenu(); // En lugar de poner solo setMenuOpen(false), se llama a esta función que además de cerrar el menu, envía un evento a Google Analytics 4
          },300)
          
          setIsTouching(false)
          
        } 
        else if (currentY - startY <= 0) {
          // No hagas nada si el desplazamiento es menor o igual a 0px (swipe up).
        } 
        else {
          // Si se hace cualquier otra cosa, el menú no se cerrará.
          e.currentTarget.style.transform = `translateY(0px)`;
          setBgMenuActive(true)
        }

        setIsTouching(false);
      };
    
    // Envío del evento a Google Analytics 4
    const handleCloseMenu = () => {
      const buttonName = buttonClicked || 'menu_closed';
      window.gtag('event', 'click_on_menu', {
        'debug_mode': true,
        'menu_button_clicked': buttonName,
      });
    
      // Cerrar el menú
      setMenuOpen(false);
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
          menuElement.style.transform = 'translateY(184px)';      
        }
      };
      // Logica
      const handleOutsideClick = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          closeMenuAnimation(); // Función que cierra el menu
          setBgMenuOpacity(0)
          setTimeout(() => {
            handleCloseMenu();
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
          <a className='btn-top' href="/feedback" target='_blank' onClick={() => handleClick('btn-top')}>Danos tu opinión<img src={arrowRightUpWh} ></img></a>
          <a className='btn-bot' href="https://us.frms.link/t3ipetb/" target='_blank' onClick={() => handleClick('btn-bot')}>Tu marca en Birtdei <img src={arrowRightUpWh}></img></a>
        </div>
    </div>
    
    </>
  )
}

export default Menu