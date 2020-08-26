window.addEventListener('load', function(){

    function qs(elemento){
        document.querySelector(elemento);
    }

    let formulario = document.getElementById('form');

    let inputTitulo = document.getElementById('titleEdit');
    let errorTitulo = document.getElementById('errTitleEdit');

    let selectEstado = document.getElementById('stateEdit');
    let errorEstado = document.getElementById('errStateEdit');

    let inputPlataforma = document.getElementById('platformEdit');
    let errorPlataforma = document.getElementById('errPlatformEdit');

    let inputVideoLink = document.getElementById('videoLinkEdit')
    let errorVideoLink = document.getElementById('errVideoLinkEdit')
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

    let inputCategorias = document.getElementById('categoryEdit');
    let errorCategorias = document.getElementById('errCategoryEdit');

    let inputEtiquetas = document.getElementById('tagEdit');
    let errorEtiquetas = document.getElementById('errTagEdit');

    
    let inputClasificacion = document.getElementById('classificationEdit');
    let errorClasificacion = document.getElementById('errClassificationEdit');
    let regexClasificacion = /^[0-9 ()+]+$/;

    let inputPuntaje = document.getElementById('ratingEdit');
    let errorPuntaje = document.getElementById('errRatingEdit');
    let regexPuntaje = /^[0-9.]+$/;

    let btnEnviar = document.getElementById("buttonEdit");

    console.log(btnEnviar);

    btnEnviar.addEventListener('click', function(event){
        event.preventDefault();

        let errores = {}

        console.log(btnEnviar);

        if(inputTitulo.value.length < 5){
            errores.titulo = "Como mínimo 5 caracteres";
        }
        if(selectEstado.value == "estandarEdit"){
            errores.estado = "Debes seleccionar al menos uno";
        }
        if(inputPlataforma.value == false){
            errores.plataforma = "Debes marcar al menos uno";
        }
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
        if(inputCategorias.checked == false){
            errores.categorias = "Debes marcar al menos uno";
        }
        if(inputEtiquetas.checked == false){
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
        } else {
            // envio el formulario
            alert('El formulario se ha enviado');
            btnEnviar.click();
        }
    })
})