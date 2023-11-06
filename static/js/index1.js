//Redirigir a la página desktop.html si el viewport es mayor a 500
function redirectionToDesktop() {
    if (window.innerWidth > 500) {
        window.location.href = '/error'
    }
}
window.addEventListener('load', redirectionToDesktop);
window.addEventListener('resize', redirectionToDesktop);

//Configuración del confetti
var confettiSettings = {
    target: 'confetti',
    max: '60',
    size: '1',
    animate: true,
    clock: 30,
    props: ['circle','square'],
    colors: [[248,79,57],[255,220,64],[0,148,255],[164,48,255],[255,117,17]]
};
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

