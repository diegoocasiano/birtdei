//Redirigir a la página desktop.html si el viewport es mayor a 500
function redirectionToDesktop() {
    if (window.innerWidth > 500) {
        window.location.href = '/desktop'
    }
}
window.addEventListener('load', redirectionToDesktop);
window.addEventListener('resize', redirectionToDesktop);

//Configuración del confetti
function initConfetti() {
    var confettiSettings = {
        target: 'confetti',
        max: '70',
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