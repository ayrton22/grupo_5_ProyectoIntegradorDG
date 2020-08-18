//Carousel script
const current = document.querySelector('#current');
const fila = document.querySelector('.contenedor-carrusel');
const imagenes = document.querySelectorAll('.imagen-gameplay img');
const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');
const vistaVideo = document.querySelector('.vista iframe');
const vistaImg = document.querySelector('.vista img');
const logo = document.querySelector('.logo');

// Event Listener para la flecha derecha //

flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;
});
// Event Listener para la flecha Izquierda //
flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;
});

/*setInterval(()=>{
    fila.scrollLeft += fila.offsetWidth;
},10000)*/

//carousel imagen script


imagenes.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
    //deleting border
    imagenes.forEach(img => (img.classList.remove('bordeado')));
    //switch mode video-img
    if(e.target.classList.contains('videoPreview')){
        vistaVideo.classList.remove('oculto');
        vistaImg.classList.add('oculto');
        logo.classList.add('bordeado');
    }
    else{
    vistaImg.classList.remove('oculto');
    vistaVideo.classList.add('oculto');
    }
    //change the imagen to src of clicked image
    current.src = e.target.src;

    //add fade in class
    current.classList.add('fade-in');

    //remove fade-in class
    setTimeout(()=> current.classList.remove('fade-in'),500);
    //border for active imagen element
    e.target.classList.add('bordeado');
}


