function initConfetti() {
    var confettiSettings = {
        target: 'confetti',
        max: '140',
        size: '1',
        animate: true,
        clock: 30,
        props: ['circle','square'],
        colors: [[248,79,57],[255,220,64],[0,148,255],[164,48,255],[255,117,17]]
    };
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
}
window.addEventListener('DOMContentLoaded', initConfetti);
window.addEventListener('resize', initConfetti);



// Poner hora actual del dispositivo del usuario en el mockup de iph14 pro
function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    document.getElementById('currentTime').textContent = hours + ':' + minutes;
}
updateTime();
setInterval(updateTime, 1000);

// Script para que el bottom de card2 aumente y suba cuando el viewport height sea pequeño
function adjustCard2Bottom() {
    const viewportHeight = window.innerHeight;
    const baseViewportHeight = 900;
    const initialBottom = 20;
    let bottomIncrement = Math.max(0, (viewportHeight - baseViewportHeight) / 2);

    if (viewportHeight < baseViewportHeight) {
        bottomIncrement = baseViewportHeight - viewportHeight;
    } else {
        bottomIncrement = 0;
    }

    document.querySelector('.cards-info .card2').style.bottom = (initialBottom + bottomIncrement) + 'px';
}

window.addEventListener('DOMContentLoaded', adjustCard2Bottom);
window.addEventListener('resize', adjustCard2Bottom);


// Script para que las cards-info mantengan una distancia apropiada del iph14 pro cuando el viewport crezca
function adjustCardsInfoPadding() {
    const viewportWidth = window.innerWidth;
    const baseViewportWidth = 1440;
    const initialPadding = 110;
    const paddingIncrement = Math.max(0, (viewportWidth - baseViewportWidth) / 2);

    document.querySelector('.cards-info').style.paddingLeft = (initialPadding + paddingIncrement) + 'px';
    document.querySelector('.cards-info').style.paddingRight = (initialPadding + paddingIncrement) + 'px';
}

window.addEventListener('DOMContentLoaded', adjustCardsInfoPadding);
window.addEventListener('resize', adjustCardsInfoPadding);

// Script para cortar las marcas en la sección de marcas cuando el viewport es menor a 1440px
function adjustBrandsPosition() {
    const viewportWidth = window.innerWidth;
    const baseViewportWidth = 1440;
    const shift = baseViewportWidth - viewportWidth;

    if (viewportWidth < baseViewportWidth) {
        document.querySelector('.brands-container .brandsContainer-left').style.left = -shift/2 + 'px';
        document.querySelector('.brands-container .brandsContainer-right').style.right = -shift/2 + 'px';
    } else {
        document.querySelector('.brands-container .brandsContainer-left').style.left = '0rem';
        document.querySelector('.brands-container .brandsContainer-right').style.right = '0rem';
    }
}

// Llamar a la función cuando se carga la página y cuando se redimensiona la ventana
window.addEventListener('DOMContentLoaded', adjustBrandsPosition);
window.addEventListener('resize', adjustBrandsPosition);


// brandsContainer-Left: Función para animar los cuadrados de las marcas al hacer scroll
function animateBrandsLeft() {
    const brands = document.querySelectorAll('.brandsContainer-left div');
    brands.forEach((brand, index) => {
        // Calcular las nuevas posiciones top y left
        const scrollTop = window.scrollY || window.pageYOffset;
        let top, left;
        switch (index) {
            case 0: // brand1
                top = Math.min(scrollTop * 2, 690); // Limitar el valor de top a 800 como máximo
                left = Math.min(11 + scrollTop / 0.4, 690); // Calcular el valor de left en función del scroll
                break;
            case 1: // brand2
                top = Math.min(128 + scrollTop * 2, 690);
                left = Math.min(175 + scrollTop / 0.4, 690);
                break;
            case 2: // brand3
                top = Math.min(229 + scrollTop * 2, 690);
                left = Math.min(scrollTop / 0.4, 690);
                break;
            case 3: // brand4
                top = Math.min(332 + scrollTop * 2, 690);
                left = Math.min(237 + scrollTop / 0.4, 690);
                break;
            case 4: // brand5
                top = Math.min(425 + scrollTop * 2, 690);
                left = Math.min(44 + scrollTop / 0.4, 690);
                break;
        }

        
        // Aplicar las nuevas posiciones al elemento brand
        brand.style.top = top + 'px';
        brand.style.left = left + 'px';
    });
}

// Escuchar el evento de scroll y llamar a la función de animación
window.addEventListener('scroll', animateBrandsLeft);

// brandsContainer-Right: Función para animar los cuadrados de las marcas al hacer scroll
function animateBrandsRight() {
    const brands = document.querySelectorAll('.brandsContainer-right div');
    brands.forEach((brand, index) => {
        const scrollTop = window.scrollY || window.pageYOffset;
        let top, right;
        switch (index) {
            case 0: // brand1
                top = Math.min(scrollTop * 2, 690); // Limitar el valor de top a 800 como máximo
                right = Math.min(11 + scrollTop / 0.4, 690); // Calcular el valor de right en función del scroll
                break;
            case 1: // brand2
                top = Math.min(128 + scrollTop * 2, 690);
                right = Math.min(175 + scrollTop / 0.4, 690);
                break;
            case 2: // brand3
                top = Math.min(229 + scrollTop * 2, 690);
                right = Math.min(scrollTop / 0.4, 690);
                break;
            case 3: // brand4
                top = Math.min(332 + scrollTop * 2, 690);
                right = Math.min(237 + scrollTop / 0.4, 690);
                break;
            case 4: // brand5
                top = Math.min(425 + scrollTop * 2, 690);
                right = Math.min(44 + scrollTop / 0.4, 690);
                break;
        }

        brand.style.top = top + 'px';
        brand.style.right = right + 'px'; // Aplicar el valor de right en lugar de left

        // if (right >= 700 && top >= 700) {
        //     brandsContainerRight.style.opacity = '0';
        // } else {
        //     brandsContainerRight.style.opacity = '1';
        // }
    });
}

window.addEventListener('scroll', animateBrandsRight);

// Funciones con scroll para el Iphone 14 Pro

let iph14proHeight;
let isScrolled = false;
let secondAttempt = false;
let firstScroll = false;
let firstScrollDown = false;
let hasScrolledDown = false;
let showCards = false;

// Ajustar la escala del Iphone 14 Pro según el viewport 
function adjustIph14ProScale() {

    const iph14proContainer = document.querySelector('.iph14pro-container'); // Obtenemos el contenedor del iphone 14 pro

    const viewportHeight = window.innerHeight; // Obtenemos la altura del viewport

    iph14proHeight = iph14proContainer.offsetHeight; console.log('1 - Altura:', iph14proHeight); // Obtenemos la altura inicial del iph14proContainer
    
    const scrollPercentage = (window.scrollY / 300); // inicialmente en 200, pero tmb puede ser 400

    const limitedScrollPercentage = Math.min(Math.max(scrollPercentage, 0), 1);

    const scale = viewportHeight < iph14proHeight ? 1 - limitedScrollPercentage * (1 - viewportHeight / iph14proHeight) : 1;

    iph14proContainer.style.transform = `scale(${scale})`;
}

window.addEventListener('scroll', adjustIph14ProScale);
window.addEventListener('resize', adjustIph14ProScale);

// Hacer scroll hasta el Iphone 14 Pro
function scrollToIph14Pro() {

    const iph14proContainer = document.querySelector('.iph14pro-container'); // Obtenemos el contenedor del iphone 14 pro
    console.log('1 - iph14proContainer:', iph14proContainer); // Obtenemos la altura inicial del iph14proContainer

    const viewportHeight = window.innerHeight; // Obtenemos la altura del viewport
    console.log('2 - Viewport Height:', viewportHeight);

    // Esperar para que se actualice el valor de la nueva altura del iph14proContainer
    setTimeout(() => {
        iph14proHeight = iph14proContainer.getBoundingClientRect().height; console.log('2 - Iph14proHeight:', iph14proHeight) // Obtenemos la altura actualizada del iph14proContainer

        const scrollTo = iph14proContainer.offsetTop + iph14proHeight - viewportHeight; console.log('3 - Scroll to:', scrollTo);

        window.scrollTo({
            top: scrollTo,
            behavior: 'smooth'
        });

       
        
    }, 600);
    showMainContent();
    
    if (!showCards) {
        showCardsInfo();
    }

}   

window.addEventListener('scroll', function() {

    if (window.scrollY >= 300 && !isScrolled) {

        scrollToIph14Pro();
        isScrolled = true;

    //Si el scroll es hacia arriba, se restaura todo
    } else if (window.scrollY < 300 && isScrolled) { console.log('Restaurando todo');
        
        isScrolled = false;
        secondAttempt = false;
        firstScroll = false;
        firstScrollDown = false;
        isScrolling = false;
        hasScrolledDown = false;
    } 
    
    if (window.scrollY > 600 && isScrolled) {
        if (!hasScrolledDown) {
            hasScrolledDown = true;
            firstScrollDown = true;
            scrollToIph14Pro();
        } else {
            hasScrolledDown = false;
        }
    }
});

function showMainContent(){
    var mainContent = document.querySelector('.mainContent')
    mainContent.classList.add('active');
}

// Función al hacer click en playButton
function showIframe() {
    var mainContent = document.querySelector('.mainContent')
    var iframeContainer = document.querySelector('.iframe-container');
    var statusBar = document.querySelector('.statusBar');
    iframeContainer.classList.add('active');
    setTimeout(() => {
        mainContent.style.display = 'none';
    }, 1600);
    statusBar.classList.add('active');
    // resizeIframe()
}

// Mostrar card1 y card2 luego de que se haga scroll hasta el iphone
function showCardsInfo() {
    const card1 = document.querySelector('.card1')
    const card2 = document.querySelector('.card2')

    setTimeout(() => {
        card1.classList.add('active');
    },8000)
    setTimeout(() => {
        card2.classList.add('active');
    },11000)

    showCards = true;
}

function closeCard1() {
    const card1 = document.querySelector('.card1')
    card1.classList.remove('active');
}
function closeCard2() {
    const card2 = document.querySelector('.card2')
    card2.classList.remove('active');
}