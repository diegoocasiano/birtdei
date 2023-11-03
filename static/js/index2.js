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