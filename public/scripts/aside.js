window.addEventListener('load', function() {

    function qs(element) {
        return document.querySelector(element);
    }

    let op1 = qs('.juegos-container__item--genres')
    let op2 = qs('.juegos-container__item--platforms')
    let op3 = qs('.juegos-container__item--categories')
    let drop1 = qs('.juegos-container__sub-list--genres');
    let drop2 = qs('.juegos-container__sub-list--platforms');
    let drop3 = qs('.juegos-container__sub-list--categories');

    op1.addEventListener('click', () => {
        drop1.classList.toggle('juegos-container-aside-active');
    })

    op2.addEventListener('click', () => {
        drop2.classList.toggle('juegos-container-aside-active');
    })

    op3.addEventListener('click', () => {
        drop3.classList.toggle('juegos-container-aside-active');
    })

})