const fila =    document.querySelector('.contenedor-carrusel');
const imagenes = document.querySelector('.imagen-gameplay');


const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// Event Listener para la flecha derecha //

flechaDerecha.addEventListener('click' , ()=> {
    fila.scrollLeft += fila.offsetWidth;
})
flechaIzquierda.addEventListener('click' , ()=> {
    fila.scrollLeft -= fila.offsetWidth;
})