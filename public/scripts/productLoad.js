function qs(elemento){
    document.querySelector(elemento);
}

window.addEventListener('load', function(){
    let formulario = qs('form');

    let inputTitulo = qs('input#titleLoad');
    let errorTitulo = qs('#errTitleLoad');

    let selectEstado = qs('select#stateLoad');
    let errorEstado = qs('#errStateLoad');

    let inputPlataforma = qs('input#platformLoad').checked;
    let errorPlataforma = qs('#errPlatformLoad');

    let inputVideoLink = qs('input#videoLinkLoad')
    let errorVideoLink = qs('#errVideoLinkLoad')
    let regexVideo = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/gi;


    let inputDelivery = qs('input#deliveryLoad').checked;
    let inputDelivery = qs('input#buscarLoad').checked;
    let errorEntrega = qs('#errEntregaLoad');

    let inputPrecio = qs('input#priceLoad');
    let errorPrecio = qs('#errPriceLoad');
    let regexPrecio = /^[0-9.,]+$/;

    let textareaDescripcion = qs('textarea#descriptionLoad');
    let errorDescripcion = qs('#errDescriptionLoad');

    let textareaDescripcionMediana = qs('textarea#descriptionMediumLoad');
    let errorDescripcionMediana = qs('#errDescriptionMediumLoad');

    let textareaDescripcionGrande = qs('textarea#descriptionLargeLoad');
    let errorDescripcionGrande = qs('#errDescriptionLargeLoad');

    let inputEditora = qs('input#editorLoad');
    let errorEditora = qs('#errEditorLoad');

    let inputDesarroladora = qs('input#developerLoad');
    let errorDesarrolladora = qs('#errDeveloperLoad');

    let inputFecha = qs('input#launchDateLoad');
    let errorFecha = qs('#errLaunchDateLoad');

    let inputCategorias = qs('input#categoryLoad').checked;
    let errorCategorias = qs('#errCategoryLoad');

    let inputEtiquetas = qs('input#tagLoad').checked;
    let errorEtiquetas = qs('#errTagLoad');

    
    let inputClasificacion = qs('input#classificationLoad');
    let errorClasificacion = qs('#errClassificationLoad');
    let regexClasificacion = /^[0-9 ()+]+$/;

    let inputPuntaje = qs('input#ratingLoad');
    let errorPuntaje = qs('#errRatingLoad');
    let regexPuntaje = /^[0-9.]+$/;

    let btnEnviar = qs("form button[type='submit']");

    
    btnEnviar.addEventListener('click', function(event){
        event.preventDefault();

        let errores = {}

        console.log();

        if(inputTitulo.value.length < 5){
            errores.titulo = "Como mínimo 5 caracteres";
        }
        if(selectEstado.value == null){
            errores.estado = "Debes seleccionar al menos uno";
        }
        if(!inputPlataforma){
            errores.plataforma = "Debes marcar al menos uno";
        }
        if(inputVideoLink.value.length < 1){
            errores.videoLink = "Este campo es obligatorio"
        } else {
            if(inputVideoLink.value.match(regexVideo) == null){
                errores.videoLink = "Debes ingresar un link de un video de Youtube"
            }}
        if(!inputDelivery && !inputBuscar){
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
        if(!inputCategorias){
            errores.categorias = "Debes marcar al menos uno";
        }
        if(!inputEtiquetas){
            errores.etiquetas = "Debes marcar al menos uno";
        }
        if(inputClasificacion.value.length < 2 && inputClasificacion.value.length > 3){
            errores.clasificacion = "Este campo debe tener entre 2 y 3 caracteres. Ejemplo: +16";
        } else {
            if(inputClasificacion.value.match(regexClasificacion) == null){
                errores.precio = "El precio solo puedo contener números y el símbolo de sumar(+). Ejemplo: +12";
            }
        }
        if(inputPuntaje.value.length != 4){
            errores.puntaje = "Este campo debe tener 4 caracteres"
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
        }
    })
})