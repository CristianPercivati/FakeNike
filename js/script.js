document.addEventListener('DOMContentLoaded', () => {

//Función abrir/cerrar navbar burger
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
            const target = el.dataset.target;
            const $target = document.getElementById(target);
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        });
    });

});

document.addEventListener('DOMContentLoaded', () => {

//Función de cerrar modal
function closeModal($el) {
$el.classList.remove('is-active');
}



// Listener a todos los elementos del modal para cerrar con clic
(document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
const $target = $close.closest('.modal');
$close.addEventListener('click', () => {
closeModal($target);
});
});

// Cierra el modal con el teclado.
document.addEventListener('keydown', (event) => {
const e = event || window.event;
let $target = document.querySelector('.modal');
if (e.keyCode === 27) { 
closeModal($target);
}
});
});