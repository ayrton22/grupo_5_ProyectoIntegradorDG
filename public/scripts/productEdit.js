function qs(elemento){
    document.querySelector(elemento);
}

window.addEventListener('load', function(){
    let formulario = qs('form');

    let inputTitulo = qs('input#titleEdit');
    let errorTitulo = qs('#errTitleEdit');

    let selectEstado = qs('select#stateEdit');
    let errorEstado = qs('#errStateEdit');

    let inputPlataforma = qs('input#platformEdit').checked;
    let errorPlataforma = qs('#errPlatformEdit');

    let inputDelivery = qs('input#deliveryEdit').checked;
    let inputDelivery = qs('input#buscarEdit').checked;
    let errorEntrega = qs('#errEntregaEdit');

    let inputPrecio = qs('input#priceEdit');
    let errorPrecio = qs('#errPriceEdit');
    let regexPrecio = /^[0-9.,]+$/;

    let textareaDescripcion = qs('textarea#descriptionEdit');
    let errorDescripcion = qs('#errDescriptionEdit');

    let textareaDescripcionMediana = qs('textarea#descriptionMediumEdit');
    let errorDescripcionMediana = qs('#errDescriptionMediumEdit');

    let textareaDescripcionGrande = qs('textarea#descriptionLargeEdit');
    let errorDescripcionGrande = qs('#errDescriptionLargeEdit');

    let inputEditora = qs('input#editorEdit');
    let errorEditora = qs('#errEditorEdit');

    let inputDesarroladora = qs('input#developerEdit');
    let errorDesarrolladora = qs('#errDeveloperEdit');

    let inputFecha = qs('input#launchDateEdit');
    let errorFecha = qs('#errLaunchDateEdit');

    let inputCategorias = qs('input#categoryEdit').checked;
    let errorCategorias = qs('#errCategoryEdit');

    let inputEtiquetas = qs('input#tagEdit').checked;
    let errorEtiquetas = qs('#errTagEdit');

    
    let inputClasificacion = qs('input#classificationEdit');
    let errorClasificacion = qs('#errClassificationEdit');
    let regexClasificacion = /^[0-9 ()+]+$/;

    let inputPuntaje = qs('input#ratingEdit');
    let errorPuntaje = qs('#errRatingEdit');
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