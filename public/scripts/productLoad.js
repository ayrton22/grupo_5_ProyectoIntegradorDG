window.addEventListener('load', function(){

    let inputTitulo = document.getElementById("titleLoad");
    let errorTitulo = document.getElementById('errTitleLoad');

    let selectEstado = document.getElementById('stateLoad');
    let errorEstado = document.getElementById('errStateLoad');

    let inputPlataforma0 = document.getElementById('platformLoad0');
    let inputPlataforma1 = document.getElementById('platformLoad1');
    let inputPlataforma2 = document.getElementById('platformLoad2');
    let errorPlataforma = document.getElementById('errPlatformLoad');

    // Variables imagenes
    let img = "/img/Logos/Portray-upload.jpg";
    let imgPortrayLoad = document.getElementById('imgPortrayLoad').getAttribute('src');
    let errorImgPortrayLoad = document.getElementById('errImgPortrayLoad');

    let img1 = "/img/Logos/Horizontal-upload.jpg";
    let imgH2 = document.getElementById('imgH2').getAttribute('src');
    let errorImgH2 = document.getElementById('errImgH2');

    let img2 = "/img/Logos/Detail-upload.jpg";
    let imgRightLoad = document.getElementById('imgRightLoad').getAttribute('src');
    let errorImgRightLoad = document.getElementById('errImgRightLoad');
    // Fin variables imagenes

    let inputVideoLink = document.getElementById('videoLinkLoad')
    let errorVideoLink = document.getElementById('errVideoLinkLoad')
    let regexVideo = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/gi;

    let inputMetodoPago0 = document.getElementById('paymentMethodLoad0');
    let inputMetodoPago1 = document.getElementById('paymentMethodLoad1');
    let inputMetodoPago2 = document.getElementById('paymentMethodLoad2');
    let inputMetodoPago3 = document.getElementById('paymentMethodLoad3');
    let errorMetodoPago = document.getElementById('errPaymentMethodLoad');

    let inputDelivery = document.getElementById('deliveryLoad');
    let inputBuscar = document.getElementById('buscarLoad');
    let errorEntrega = document.getElementById('errEntregaLoad');

    let inputPrecio = document.getElementById('priceLoad');
    let errorPrecio = document.getElementById('errPriceLoad');
    let regexPrecio = /^[0-9.,]+$/;

    let textareaDescripcion = document.getElementById('descriptionLoad');
    let errorDescripcion = document.getElementById('errDescriptionLoad');

    let textareaDescripcionMediana = document.getElementById('descriptionMediumLoad');
    let errorDescripcionMediana = document.getElementById('errDescriptionMediumLoad');

    let textareaDescripcionGrande = document.getElementById('descriptionLargeLoad');
    let errorDescripcionGrande = document.getElementById('errDescriptionLargeLoad');

    let inputEditora = document.getElementById('editorLoad');
    let errorEditora = document.getElementById('errEditorLoad');

    let inputDesarroladora = document.getElementById('developerLoad');
    let errorDesarrolladora = document.getElementById('errDeveloperLoad');

    let inputFecha = document.getElementById('launchDateLoad');
    let errorFecha = document.getElementById('errLaunchDateLoad');

    let inputCategorias0 = document.getElementById('categoryLoad0');
    let inputCategorias1 = document.getElementById('categoryLoad1');
    let inputCategorias2 = document.getElementById('categoryLoad2');
    let inputCategorias3 = document.getElementById('categoryLoad3');
    let inputCategorias4 = document.getElementById('categoryLoad4');
    let inputCategorias5 = document.getElementById('categoryLoad5');
    let errorCategorias = document.getElementById('errCategoryLoad');

    let inputEtiquetas0 = document.getElementById('tagLoad0');
    let inputEtiquetas1 = document.getElementById('tagLoad1');
    let inputEtiquetas2 = document.getElementById('tagLoad2');
    let inputEtiquetas3 = document.getElementById('tagLoad3');
    let inputEtiquetas4 = document.getElementById('tagLoad4');
    let inputEtiquetas5 = document.getElementById('tagLoad5');
    let inputEtiquetas6 = document.getElementById('tagLoad6');
    let inputEtiquetas7 = document.getElementById('tagLoad7');
    let inputEtiquetas8 = document.getElementById('tagLoad8');
    let inputEtiquetas9 = document.getElementById('tagLoad9');
    let inputEtiquetas10 = document.getElementById('tagLoad10');
    let inputEtiquetas11 = document.getElementById('tagLoad11');
    let inputEtiquetas12 = document.getElementById('tagLoad12');
    let errorEtiquetas = document.getElementById('errTagLoad');

    
    let inputClasificacion = document.getElementById('classificationLoad');
    let errorClasificacion = document.getElementById('errClassificationLoad');
    let regexClasificacion = /^[0-9 ()+]+$/;

    let inputPuntaje = document.getElementById('ratingLoad');
    let errorPuntaje = document.getElementById('errRatingLoad');
    let regexPuntaje = /^[0-9.]+$/;

    let formulario = document.getElementById('form');

    formulario.addEventListener('submit', function(event){
        event.preventDefault();

        let errores = {}

        if(inputTitulo.value.length < 5){
            errores.titulo = "Como mínimo 5 caracteres";
        }
        if(selectEstado.value == "estandar"){
            errores.estado = "Debes seleccionar uno";
        }
        if(inputPlataforma0.checked == false && inputPlataforma1.checked == false && inputPlataforma2.checked == false){
            errores.plataforma = "Debes marcar al menos uno";
        }
        //Imagenes

        if(imgPortrayLoad == img){
            errores.imgPerfil = "Debes seleccionar una imagen para este campo";
        }
        if(imgH2 == img1){
            errores.imgH = "Debes seleccionar una imagen para este campo";
        }
        if(imgRightLoad == img2){
            errores.right = "Debes seleccionar una imagen para este campo";
        }
        

        // Fin imagenes
        if(inputVideoLink.value.length < 1){
            errores.videoLink = "Debes incluir un link de Youtube"
        } else {
            if(inputVideoLink.value.match(regexVideo) == null){
                errores.videoLink = "Debes ingresar un link de un video de Youtube"
            }}
        if(inputMetodoPago0.checked == false && inputMetodoPago1.checked == false && inputMetodoPago2.checked == false && inputMetodoPago3.checked == false){
            errores.metodoPago = "Debes marcar al menos uno";
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
                errores.clasificacion = "La clasificación solo puedo contener números y el símbolo de sumar(+). Ejemplo: +12";
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

            //Con if ternario se escibe sobre etiquetas small nada mas
            errorTitulo.innerText = (errores.titulo) ? errores.titulo : "";
            errorEstado.innerText = (errores.estado) ? errores.estado : '';
            errorPlataforma.innerText = (errores.plataforma) ? errores.plataforma : '';
            errorImgPortrayLoad.innerText = (errores.imgPerfil) ? errores.imgPerfil : '';
            errorImgH2.innerText = (errores.imgH) ? errores.imgH : '';
            errorImgRightLoad.innerText = (errores.right) ? errores.right : '';
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
            alert('El formulario se ha enviado');
            formulario.submit();
        }
    })
})