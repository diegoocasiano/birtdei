//Redirigir a la página desktop.html si el viewport es mayor a 500
function redirectionToDesktop() {
    if (window.innerWidth > 500) {
        window.location.href = '/desktop'
    }
}
window.addEventListener('load', redirectionToDesktop);
window.addEventListener('resize', redirectionToDesktop);


//Form
const btnIdea = document.getElementById("btnIdea");
const btnError = document.getElementById("btnError");
const tituloInput = document.getElementById("titulo");
const detallesInput = document.getElementById("detalles");
const feedbackForm = document.getElementById("feedbackForm");
const btnSubmit = document.getElementById("btnSubmit")
const btnBackHome = document.getElementById("btnBackHome")


btnSubmit.addEventListener("click", function() {
    setTimeout(function() {
        btnBackHome.classList.add("active");
    }, 1400);
})
btnIdea.addEventListener("click", function() {
    tipoFeedback = "Idea";
    btnIdea.classList.add("selected")
    btnError.classList.remove("selected")

    btnSubmit.disabled = false;
    btnSubmit.classList.remove("sent");
    btnSubmit.value = "Enviar feedback";
})
btnError.addEventListener("click", function() {
    tipoFeedback = "Error";
    btnError.classList.add("selected")
    btnIdea.classList.remove("selected");

    btnSubmit.disabled = false;
    btnSubmit.classList.remove("sent");
    btnSubmit.value = "Enviar feedback";
})

// Variables para almacenar los datos del feedback
let tipoFeedback = "";
let tituloFeedback = "";
let detallesFeedback = "";

feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Captura el valor de los campos de título y detalles
    tituloFeedback = tituloInput.value;
    detallesFeedback = detallesInput.value

    console.log("Tipo de feedback: " + tipoFeedback)
    console.log("Título del feedback: " + tituloFeedback)
    console.log("Detalles del feedback: " + detallesFeedback)    

    // Enviar datos al servidor Flask para procesar el envío del correo
    fetch('/send_mail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            tipoFeedback: tipoFeedback,
            tituloFeedback: tituloFeedback,
            detallesFeedback: detallesFeedback
        })
    })
    .then(response => {
        if (response.status === 200) {
            btnSubmit.classList.add("sent");
            btnSubmit.value = "Enviado!";
            btnSubmit.disabled = true;
            
            //Restablece los valores de los inputs y los botones cuando se envíe el feedback
            tituloInput.value = '';
            detallesInput.value = '';
            btnError.classList.remove("selected")
            btnIdea.classList.remove("selected")

        } else {
            console.error('Error:', response.statusText);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
})