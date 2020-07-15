//Carousel script
const current = document.querySelector('#current');
const fila = document.querySelector('.contenedor-carrusel');
const imagenes = document.querySelectorAll('.imagen-gameplay img');
const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');
let contador = 0;

// Event Listener para la flecha derecha //

flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;
});
// Event Listener para la flecha Izquierda //
flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;
});

setInterval(()=>{
    fila.scrollLeft += fila.offsetWidth;
},10000)

//carousel imagen script
imagenes.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
    //fila.style.transform = 'translate(-100%)'

    //change the imagen to src of clicked image
    current.src = e.target.src;
    
    //add fade in class
    current.classList.add('fade-in');
    //remove fade-in class
    setTimeout(()=> current.classList.remove('fade-in'),500);
}

