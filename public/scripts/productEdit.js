window.addEventListener('load', function(){

    let inputTitulo = document.getElementById('titleEdit');
    let errorTitulo = document.getElementById('errTitleEdit');

    let selectEstado = document.getElementById('stateEdit');
    let errorEstado = document.getElementById('errStateEdit');

    let inputPlataforma0 = document.getElementById('PlayStation');
    let inputPlataforma1 = document.getElementById('Xbox');
    let inputPlataforma2 = document.getElementById('Pc');
    let errorPlataforma = document.getElementById('errPlatformEdit');

    // Inicio variables imagenes

    let divPortray = document.querySelector('#divPortray img');
    console.log(divPortray);
    let inputPE = document.querySelector('input#portray');
    let imgPortray = "/img/Logos/Photo-upload.jpg"
    let inputPortrayEdit = document.getElementById('portray');
    let errorImgPortrayEdit = document.getElementById('errImgPortrayEdit');

    let divHorizontal = document.querySelector('#divHorizontal img');
    let inputHE = document.querySelector('input#horizontal');
    let inputHorizontalEdit = document.getElementById('horizontal');
    let errorImgHorizontalEdit = document.getElementById('errImgHorizontalEdit');

    let divDetail = document.querySelector('#divDetail img');
    let inputDE = document.querySelector('input#detail');
    let errorImgDetailEdit = document.getElementById('errImgRightEdit');

    let divCarousel = document.querySelector('#divCarousel img');
    let inputCE = document.querySelectorAll('input#carouselEdit');
    let errorImgCarouselEdit = document.getElementById('errInputCarouselEdit');

    let regexImagenEdit = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i
    // Fin variables imagenes

    let inputVideoLink = document.getElementById('videoLinkEdit');
    let errorVideoLink = document.getElementById('errVideoLinkEdit');
    let regexVideo = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/gi;

    let inputMetodoPago0 = document.getElementById('paymentMethodEdit0');
    let inputMetodoPago1 = document.getElementById('paymentMethodEdit1');
    let inputMetodoPago2 = document.getElementById('paymentMethodEdit2');
    let inputMetodoPago3 = document.getElementById('paymentMethodEdit3');
    let errorMetodoPago = document.getElementById('errPaymentMethodEdit');

    let inputDelivery = document.getElementById('deliveryEdit');
    let inputBuscar = document.getElementById('buscarEdit');
    let errorEntrega = document.getElementById('errEntregaEdit');

    let inputPrecio = document.getElementById('priceEdit');
    let errorPrecio = document.getElementById('errPriceEdit');
    let regexPrecio = /^[0-9.,]+$/;

    let textareaDescripcion = document.getElementById('descriptionEdit');
    let errorDescripcion = document.getElementById('errDescriptionEdit');

    let textareaDescripcionMediana = document.getElementById('descriptionMediumEdit');
    let errorDescripcionMediana = document.getElementById('errDescriptionMediumEdit');

    let textareaDescripcionGrande = document.getElementById('descriptionLargeEdit');
    let errorDescripcionGrande = document.getElementById('errDescriptionLargeEdit');

    let inputEditora = document.getElementById('editorEdit');
    let errorEditora = document.getElementById('errEditorEdit');

    let inputDesarroladora = document.getElementById('developerEdit');
    let errorDesarrolladora = document.getElementById('errDeveloperEdit');

    let inputFecha = document.getElementById('launchDateEdit');
    let errorFecha = document.getElementById('errLaunchDateEdit');

    let inputCategorias0 = document.getElementById('Best-sellers');
    let inputCategorias1 = document.getElementById('Free-to-play');
    let inputCategorias2 = document.getElementById('Coming-soon');
    let inputCategorias3 = document.getElementById('Early-bird');
    let inputCategorias4 = document.getElementById('Featured');
    let inputCategorias5 = document.getElementById('News');
    let errorCategorias = document.getElementById('errCategoryEdit');

    let inputEtiquetas0 = document.getElementById('First-Person');
    let inputEtiquetas1 = document.getElementById('MMO');
    let inputEtiquetas2 = document.getElementById('Action');
    let inputEtiquetas3 = document.getElementById('Adventure');
    let inputEtiquetas4 = document.getElementById('Roleplay');
    let inputEtiquetas5 = document.getElementById('Shooter');
    let inputEtiquetas6 = document.getElementById('Survival');
    let inputEtiquetas7 = document.getElementById('Horror');
    let inputEtiquetas8 = document.getElementById('Sports');
    let inputEtiquetas9 = document.getElementById('Racing');
    let inputEtiquetas10 = document.getElementById('Third person');
    let inputEtiquetas11 = document.getElementById('Indie');
    let inputEtiquetas12 = document.getElementById('MOBA');
    let errorEtiquetas = document.getElementById('errTagEdit');

    
    let inputClasificacion = document.getElementById('classificationEdit');
    let errorClasificacion = document.getElementById('errClassificationEdit');
    let regexClasificacion = /^[0-9 ()+]+$/;

    let inputPuntaje = document.getElementById('ratingEdit');
    let errorPuntaje = document.getElementById('errRatingEdit');
    let regexPuntaje = /^[0-9.]+$/;

    let btnEnviar = document.getElementById("buttonEdit");

    let formulario = document.getElementById('form');

    formulario.addEventListener('submit', function(event){
        event.preventDefault();

        let errores = {}

        if(inputTitulo.value.length < 5){
            errores.titulo = "Como mínimo 5 caracteres";
        }
        if(selectEstado.value == "estandarEdit"){
            errores.estado = "Debes seleccionar al menos uno";
        }
        if(inputPlataforma0.checked == false && inputPlataforma1.checked == false && inputPlataforma2.checked == false){
            errores.plataforma = "Debes marcar al menos uno";
        }
        //Trabajando en imagenes

        console.log(inputPortrayEdit)
       
        if(inputPE != undefined){
            console.log(inputPE)
            if(inputPE.value.length == 0){
                errores.imgPerfil = "Debes colocar una imagen";
            }
        }
        if(inputHE != undefined){
            if(inputHE.value.length == 0){
                errores.imgHorizontal = "Debes colocar una imagen";
            }
        }
        if(inputDE != undefined){
            if(inputDE.value.length == 0){
                errores.imgRight = "Debes colocar una imagen";
            }
        }


        //Fin imagenes
        if(inputVideoLink.value.length < 1){
            errores.videoLink = "Este campo es obligatorio"
        } else {
            if(inputVideoLink.value.match(regexVideo) == null){
                errores.videoLink = "Debes ingresar un link de un video de Youtube"
            }}
        if(inputMetodoPago0.checked == false && inputMetodoPago1.checked == false && inputMetodoPago2.checked == false && inputMetodoPago3.checked == false){
            errores.metodoPago = "Debes marcar al menos uno"
        }
        if(inputDelivery.checked == false && inputBuscar.checked == false){
            errores.entrega = "Debes marcar al menos una opción";
        }
        if(inputPrecio.value.length < 1){
            errores.precio = "Este campo es obligatorio";
        } else {
            if(inputPrecio.value.match(regexPrecio) == null){
                errores.precio = "El precio solo puedo contener números, comas y puntos";
            }
        }
        if(textareaDescripcion.value.length < 20){
            errores.descripcion = "Como mínimo 20 caracteres";
        }
        if(textareaDescripcionMediana.value.length < 30){
            errores.descripcionMediana = "Como mínimo 30 caracteres";
        }
        if(textareaDescripcionGrande.value.length < 50){
            errores.descripcionGrande = "Como mínimo 50 caracteres";
        }
        if(inputEditora.value.length < 1){
            errores.editora = "Este campo es obligatorio";
        }
        if(inputDesarroladora.value.length < 1){
            errores.desarrolladora = "Este campo es obligatorio";
        }
        if(inputFecha.value.length < 15){
            errores.fecha = "Fecha invalida, debe contener mínimo 15 caracteres. Ejemplo: Lun 06 Ene 2014"
        }
        if(inputCategorias0.checked == false && inputCategorias1.checked == false && inputCategorias2.checked == false && inputCategorias3.checked == false && inputCategorias4.checked == false && inputCategorias5.checked == false){
            errores.categorias = "Debes marcar al menos uno";
        }
        if(inputEtiquetas0.checked == false && inputEtiquetas1.checked == false && inputEtiquetas2.checked == false && inputEtiquetas3.checked == false && inputEtiquetas4.checked == false && inputEtiquetas5.checked == false && inputEtiquetas6.checked == false && inputEtiquetas7.checked == false && inputEtiquetas8.checked == false && inputEtiquetas9.checked == false && inputEtiquetas10.checked == false && inputEtiquetas11.checked == false && inputEtiquetas12.checked == false){
            errores.etiquetas = "Debes marcar al menos uno";
        }
        if(inputClasificacion.value.length < 2 && inputClasificacion.value.length > 3){
            errores.clasificacion = "Este campo debe tener entre 2 y 3 caracteres. Ejemplo: +16";
        } else {
            if(inputClasificacion.value.match(regexClasificacion) == null){
                errores.precio = "La clasificación solo puedo contener números y el símbolo de sumar(+). Ejemplo: +12";
            }
        }
        if(inputPuntaje.value.length != 4){
            errores.puntaje = "Este campo debe tener 4 caracteres. Ejemplo: 4.00"
        } else {
            if(inputPuntaje.value.match(regexPuntaje) == null){
                errores.puntaje = "El puntaje solo puede tener números y un punto(.). Ejemplo: 4.50"
            }
        }


        if(Object.keys(errores).length >= 1){
            //console.log('Hay errores');
            //console.log(errores);
            errorTitulo.innerText = (errores.titulo) ? errores.titulo : '';
            errorEstado.innerText = (errores.estado) ? errores.estado : '';
            errorPlataforma.innerText = (errores.plataforma) ? errores.plataforma : '';
            //errores imagenes empieza aca
            errorImgPortrayEdit.innerText = (errores.imgPerfil) ? errores.imgPerfil : '';

            errorImgHorizontalEdit.innerText = (errores.imgHorizontal) ? errores.imgHorizontal : '';

            errorImgDetailEdit.innerText = (errores.imgRight) ? errores.imgRight : '';

            //errores imagenes termina acá
            errorVideoLink.innerText = (errores.videoLink) ? errores.videoLink : '';
            errorMetodoPago.innerText = (errores.metodoPago) ? errores.metodoPago : '';
            errorEntrega.innerText = (errores.entrega) ? errores.entrega : '';
            errorPrecio.innerText = (errores.precio) ? errores.precio : '';
            errorDescripcion.innerText = (errores.descripcion) ? errores.descripcion : '';
            errorDescripcionMediana.innerText = (errores.descripcionMediana) ? errores.descripcionMediana : '';
            errorDescripcionGrande.innerText = (errores.descripcionGrande) ? errores.descripcionGrande : '';
            errorEditora.innerText = (errores.editora) ? errores.editora : '';
            errorDesarrolladora.innerText = (errores.desarrolladora) ? errores.desarrolladora : '';
            errorFecha.innerText = (errores.fecha) ? errores.fecha : '';
            errorCategorias.innerText = (errores.categorias) ? errores.categorias : '';
            errorEtiquetas.innerText = (errores.etiquetas) ? errores.etiquetas : '';
            errorClasificacion.innerText = (errores.clasificacion) ? errores.clasificacion : '';
            errorPuntaje.innerText = (errores.puntaje) ? errores.puntaje : '';

            alert('Tienes campos incompletos y/o errores en los campos que llenaste');
            
        } else {
            // envio el formulario
            setTimeout(function(){
                formulario.submit();
                alert('El formulario se envió');
            })
        }
    })
})