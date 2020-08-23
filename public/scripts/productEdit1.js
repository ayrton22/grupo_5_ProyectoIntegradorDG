function qs(elemento) {
    return document.querySelector(elemento);
}

window.addEventListener('load', function(){
    let formulario = qs("productEdit-form");

    let title = qs("input.titleEdit");

    let state = qs("select.stateEdit");

    let platform = qs("input.platformCheckboxEdit");

    let videoLink = qs("input.videoLinkEdit");

    let paymentMethod = document.querySelectorAll("input.paymentMethodEdit").checked

    let deliveryOption = document.querySelectorAll("input.deliveryOptionEdit");

    let price = qs("input.priceEdit");

    let description = qs("textarea.descriptionEdit");

    let mediumDescription = qs("textarea.mediumDescriptionEdit");

    let largeDescription = qs("textarea.largeDescriptionEdit");

    let editor = qs("input.editorEdit");

    let developer = qs("input.developerEdit");

    let launchDate = qs("input.launchDateEdit");

    let category = qs("input.categoryEdit");

    let tag = qs("input.tagEdit");

    let classification = qs("input.classificationEdit");

    let score = qs("input.scoreEdit");

    let errorsEdit = [];


    if(isEmpty(title)){
        errorsEdit.push("El campo 'Título del juego' no debe estar vacío");
    }else if(title.length < 5){
        errorsEdit.push("El campo 'Titulo del juego' debe tener al menos 5 caracteres");
    }

    if(state.value < 1){
        errorsEdit.push("Debes seleccionar un estado del juego")
    }

    if(platform.value < 1){
        errorsEdit.push("Debes marcar al menos una plataforma")
    }

    if(isEmpty(videoLink)){
        errorsEdit.push("Debes escribir un link de un video de Youtube")
    }

    if(paymentMethod.value == null){
        errorsEdit.push("Debes marcar al menos un método de pago")
    }

    if(deliveryOption == null){
        errorsEdit.push("Debes marcar al menos una opción de entrega del producto");
    }

    if(isEmpty(price)){
        errorsEdit.push("El campo 'precio' no debe estar vacío")
    }else if(price != Number){
        errorsEdit.push("El campo 'precio' debe contener números solamente")
    }

    if(description.length < 20){
        errorsEdit.push("El campo 'Descripción del juego' no debe tener menos de 20 caracteres")
    }else if(description == ""){
        errorsEdit.push("El campo 'Descripción del juego' no debe estar vacío")
    }

    if(mediumDescription == ""){
        errorsEdit.push("El campo 'Descripción mediana' no debe estar vacío")
    }

    if(largeDescription == ""){
        errorsEdit.push("El campo 'Descripción grande' no debe estar vacío")
    }

    if(isEmpty(editor)){
        errorsEdit.push("El campo 'Editora' no debe estar vacío")
    }

    if(isEmpty(developer)){
        errorsEdit.push("El campo 'Desarrolladora' no debe estar vacío")
    }

    if(isEmpty(launchDate)){
        errorsEdit.push("El campo 'Fecha de lanzamiento' no debe estar vacío")
    }

    if(isEmpty(category)){
        errorsEdit.push("Debes marcar al menos una categoría");
    }

    if(isEmpty(tag)){
        errorsEdit.push("Debes marcar al menos una etiqueta");
    }

    if(isEmpty(classification)){
        errorsEdit.push("El campo 'Clasificación' no debe estar vacío")
    }

    if(isEmpty(score)){
        errorsEdit.push("El campo 'Puntaje' no debe estar vacío")
    }else if(score > 10){
        errorsEdit.push("El campo 'Puntaje' no debe no debe ser mayor a 10")
    }


    
    formulario.addEventListener('submit', function(event){
        if(errorsEdit > 0){
        
            event.preventDefault();

            let ulErrorsEdit = document.querySelector("div.errorsEdit ul");

            for(let i=0; i < errorsEdit.length; i++){

                ulErrorsEdit.innerHTML += "<li>" + errorsEdit[i] + "</li>"
            }
            
        }
    });
})