window.addEventListener('load', function() {

    function qs(element) {
        return document.querySelector(element);
    }

    function qsAll(element) {
        return document.querySelectorAll(element);
    }

    const arrowLeft = qs('.buyDelivery__arrow-left');
    const arrowRight = qs('.buyDelivery__arrow-right');

    const fila = qs('.buyDelivery__carousel-games');
    const movies = qsAll('.buyDelivery__game');

    arrowRight.addEventListener('click', () => {
        fila.scrollLeft += fila.offsetWidth;

        const indexActive = qs('.buyDelivery__slider-i .buyForm-btn__active');
        if(indexActive.nextSibling){
            indexActive.nextSibling.classList.add('buyForm-btn__active');
            indexActive.classList.remove('buyForm-btn__active')
        }
    })

    arrowLeft.addEventListener('click', () => {
        fila.scrollLeft -= fila.offsetWidth;

        const indexActive = qs('.buyDelivery__slider-i .buyForm-btn__active');
        if(indexActive.previousSibling){
            indexActive.previousSibling.classList.add('buyForm-btn__active');
            indexActive.classList.remove('buyForm-btn__active')
        }
    })

    const gamesNumbers =  movies.length / 1

    for(let i = 0; i < gamesNumbers; i++){
         const index = document.createElement('button');

         if(i === 0){
             index.classList.add('buyForm-btn__active')
         }

         qs('.buyDelivery__slider-i').appendChild(index)
         index.addEventListener('click', (e) => {
            fila.scrollLeft = i * fila.offsetWidth;

            qs('.buyDelivery__slider-i .buyForm-btn__active').classList.remove('buyForm-btn__active'); 
            e.target.classList.add('buyForm-btn__active');
         })
    }
})

