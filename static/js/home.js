//Redirigir a la página desktop.html si el viewport es mayor a 500
function redirectionToDesktop() {
    if (window.innerWidth > 500) {
        window.location.href = '/error'
    }
}
window.addEventListener('load', redirectionToDesktop);
window.addEventListener('resize', redirectionToDesktop);

//Onpopstate hace que la function se dispare cuando se presiona el botón de retroceso o hacia adelante
document.addEventListener('popstate ', function() {
        window.location.href = '/'
});
