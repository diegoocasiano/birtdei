//Pg 1 - Pasar a la pg2 al hacer click en el btn-continuar
const body = document.getElementById("body")
const pg1 = document.getElementById("pg1")
const pg1Btn = document.getElementById("pg1-btn")

pg1Btn.addEventListener('click', function() {
    body.classList.remove("hidden");
    pg1.classList.add("hidden");
});

//Pg 1 - Redirigir a la página desktop.html si el viewport es mayor a 500
function redirectionToDesktop() {
    if (window.innerWidth > 500) {
        window.location.href = '/error'
    }
}
window.addEventListener('load', redirectionToDesktop);
window.addEventListener('resize', redirectionToDesktop);

//Pg 1 - Configuración del confetti
var confettiSettings = {
    target: 'confetti',
    max: '75',
    size: '1',
    animate: true,
    clock: 30,
    props: ['circle','square'],
    colors: [[248,79,57],[255,220,64],[0,148,255],[164,48,255],[255,117,17]]
};
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();


////Pg 2 - Script para el form de cumple

//Limitar a dos valores cada Input (Día, Mes y año)
function justTwoDigits(input) {
    const valor = input.value;
    if (valor.length > 2) {
        input.value = valor.slice(0, 2);
    }
}

function moveNext(input, nextInputId) {
    if (input.value.length === 2) {
        document.getElementById(nextInputId).focus();
    }
}

// Integración con la función checkInputs existente
function checkInputs() {
    const diaValue = document.getElementById('dia').value.trim();
    const mesValue = document.getElementById('mes').value.trim();
    const anioValue = document.getElementById('anio').value.trim();
    const submitButton = document.getElementById('btn-continuar');

    if (diaValue && mesValue && (anioValue.length >= 2)) {
        submitButton.removeAttribute('disabled');
        submitButton.classList.add('btn-activo');
    } else {
        submitButton.setAttribute('disabled', true);
        submitButton.classList.remove('btn-activo');
    }
}

// Asociar la función checkInputs a los eventos 'input'
document.getElementById('dia').addEventListener('input', function() {
    justTwoDigits(this);
    moveNext(this, 'mes');
    checkInputs();
});

document.getElementById('mes').addEventListener('input', function() {
    justTwoDigits(this);
    moveNext(this, 'anio');
    checkInputs();
});

document.getElementById('anio').addEventListener('input', function() {
    justTwoDigits(this);
    checkInputs();
});