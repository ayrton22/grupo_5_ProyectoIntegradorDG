window.addEventListener('load', function() {

    function qs(element) {
        return document.querySelector(element);
    }

    function qsAll(element) {
        return document.querySelectorAll(element);
    }
    const buy_sucursal =qs('div.buyLocal')
    const btn_sucursal = qs('button#btnSucursal');
    const btnSucursalContinuar = qs('button.bntContinuar');

    const btn_online = qs('button#btnOnline');
    const buy_online = qs('div.paymentMethod');

    const btn_domicilio = qs('button#btnDomicilio');
    const buyDelivery = qs('div.buyDelivery');
    const btnDelivery = qs('button.bntContinuar2');
    const imputCasa = document.getElementById('purchaserPhone2');
    console.log(imputCasa);
    //----------------------------------------------------------
     let tipodelivery = document.getElementById('tipoTransaction');

    //-----------------------------------------------------
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
    };
//-----------------------------------------------------------------------------------------------------------------------------------
        btn_domicilio.addEventListener('click', () => {
            buyDelivery.classList.remove('inactived-form-contenedor');
            buy_sucursal.classList.add('inactived-form-contenedor');
            buy_online.classList.add('inactived-form-contenedor');
            btnDelivery.addEventListener('click', () => {
            buy_online.classList.remove('inactived-form-contenedor');
            tipodelivery.value = "delivery";
            console.log(tipodelivery.value);

            });
        });
        btn_sucursal.addEventListener('click', () => {
            buy_sucursal.classList.remove('inactived-form-contenedor');
            buyDelivery.classList.add('inactived-form-contenedor');
            buy_online.classList.add('inactived-form-contenedor');
            btnSucursalContinuar.addEventListener('click', () => {
            buy_online.classList.remove('inactived-form-contenedor');
            tipodelivery.value = "sucursal";
            console.log(tipodelivery.value);
            });
        });
        btn_online.addEventListener('click', () => {
            buy_sucursal.classList.add('inactived-form-contenedor');
            buyDelivery.classList.add('inactived-form-contenedor');
            buy_online.classList.remove('inactived-form-contenedor');
            tipodelivery.value = "online";
            console.log(tipodelivery.value);
        })
});

