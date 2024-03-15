import React, { useState, useEffect } from 'react'
import './modalSelectCategory.css'

export default function ModalSelectCategory({ setShowModal, setDataSent}) {
  // Importar variable de entorno para cambiar el base path de las imágenes según el modo de la app (dev o build)
  const imageBasePath = process.env.NODE_ENV === 'development' ? '/public/' : '/react-components/dist/';   

  const emoji1_active = `${imageBasePath}brand/emoji1-active.png`
  const emoji2_active = `${imageBasePath}brand/emoji2-active.png`
  const emoji3_active = `${imageBasePath}brand/emoji3-active.png`
  const emoji4_active = `${imageBasePath}brand/emoji4-active.png`

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionClick = (option) => {
    if (selectedOptions.length === 2 && !selectedOptions.includes(option)) {
      setSelectedOptions((prevSelectedOptions) => {
        const updatedOptions = prevSelectedOptions.slice(1); // Eliminar la primera opción seleccionada
        return [...updatedOptions, option]; // Agregar la nueva opción seleccionada
      });
    } else {
      setSelectedOptions((prevSelectedOptions) => {
        if (prevSelectedOptions.includes(option)) {
          return prevSelectedOptions.filter((selectedOption) => selectedOption !== option);
        } else {
          return [...prevSelectedOptions, option];
        }
      });
    }
    
  };

  const handleSendData = () => {
    setLoading(true);
    // Simular el envío de datos (aquí puedes realizar la lógica real para enviar los datos)
    setTimeout(() => {
      selectedOptions.forEach((option) => {
        window.gtag('event', 'Category_request', {
          category: option,
        });
      });
      setLoading(false);
      setSent(true);
      setTimeout(() => {
        setFadeIn(false);
        
      }, 700);
      setTimeout(() => {
        setShowModal(false);
        setDataSent(true);
      },1200)
    }, 800); // Simulamos un segundo de tiempo de carga
  };

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 500);
  }, []);

  return (
    <>
        <div className={`modal-overlay ${fadeIn ? 'fade-in' : ''}`}></div>
        <section className={`modal ${fadeIn ? 'fade-in' : ''}`}>
          <section className="modal-titles">
            <h1 className="title">
              ¡Ayúdanos a encontrar <br /> <span>los mejores regalos para ti!</span>
            </h1>
            <p className="sub-title">
              Selecciona tus <span>2 categorías favoritas</span>
            </p>
          </section>

          <section className="options-container">

          <div 
            className={`option first ${selectedOptions.includes('Alimentos y bebidas') ? 'selected' : ''}`}
            onClick={() => handleOptionClick('Alimentos y bebidas')}>

            <div className="option-content_left first">
              <img src={emoji1_active} alt="emoji de hamburguesa" />
              <p>Alimentos y bebidas</p>
            </div>
            <span className="option-circle"></span>

          </div>

          <div 
            className={`option second ${selectedOptions.includes('Moda') ? 'selected' : ''}`}
            onClick={() => handleOptionClick('Moda')}>

            <div className="option-content_left second">
              <img src={emoji2_active} alt="emoji de una blusa" />
              <p>Moda</p>
            </div>
            <span className="option-circle"></span>

          </div>

          <div 
            className={`option third ${selectedOptions.includes('Tecnologia') ? 'selected' : ''}`}
            onClick={() => handleOptionClick('Tecnologia')}>

            <div className="option-content_left third">
              <img src={emoji3_active} alt="emoji de un celular" />
              <p>Tecnología</p>
            </div>
            <span className="option-circle"></span>

          </div>
 
          <div 
            className={`option fourth ${selectedOptions.includes('Entretenimiento') ? 'selected' : ''}`}
            onClick={() => handleOptionClick('Entretenimiento')}>

            <div className="option-content_left fourth">
              <img src={emoji4_active} alt="emoji de mascaras de teatro" />
              <p>Entretenimiento</p>
            </div>
            <span className="option-circle"></span>

          </div>

          <button 
            className={`submit-button ${selectedOptions.length === 2 ? 'active' : ''} ${sent ? 'sent' : ''}`}
            onClick={handleSendData}>
               {loading ? <div className="loader"></div> : sent ? 'Listo!' : 'Enviar'}
          </button>

          </section>
          
        </section>
      
    </>
  )
}
