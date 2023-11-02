//Configuración del confetti
var confettiSettings = {
    target: 'confetti',
    size: '0.7',
    animate: true,
    clock: 35,
    props: ['circle','square'],
    colors: [[248,79,57],[255,220,64],[0,148,255],[164,48,255],[255,117,17]]
};
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();


//Detectar el tamaño del viewport width del usuario y guardar el valor
//Su objetivo es ayudar al servidor a decidir si mostrar desktop.html o no
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
if (viewportWidth > 500) {
window.location.href = '/?width=' + viewportWidth;
}

//Desaparecer start-screen luego de 2.8s
const body = document.getElementById("body")
const startScreen = document.getElementById("start-screen")

setTimeout(function() {
    body.classList.remove("hidden");
    startScreen.classList.add("hidden");
}, 2800);


