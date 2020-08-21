function qs(elemento) {
    return document.querySelector(elemento);
}

window.addEventListener('load', function(){
    let formulario = qs("productEdit-form");

    let title = qs("input.title");

    let state = qs("select.state");

    let platform = qs("input.platformCheckbox");

    let videoLink = qs("input.videoLink");

    let paymentMethod = document.querySelectorAll("input.paymentMethod").checked

    let deliveryOption = document.querySelectorAll("input.deliveryOption");

    let price = qs("input.price");

    let description = qs("textarea.description");

    let mediumDescription = qs("textarea.mediumDescription");

    let largeDescription = qs("textarea.largeDescription");

    let editor = qs("input.editor");

    let developer = qs("input.developer");

    let launchDate = qs("input.launchDate");

    let category = qs("input.category");

    let tag = qs("input.tag");

    let classification = qs("input.classification");

    let score = qs("input.score");

    let errors = [];


    if(isEmpty(title)){
        errors.push("El campo 'Título del juego' no debe estar vacío");
    }else if(title.length < 5){
        errors.push("El campo 'Titulo del juego' debe tener al menos 5 caracteres");
    }

    if(state.value < 1){
        errors.push("Debes seleccionar un estado del juego")
    }

    if(platform.value < 1){
        errors.push("Debes marcar al menos una plataforma")
    }

    if(isEmpty(videoLink)){
        errors.push("Debes escribir un link de un video de Youtube")
    }

    if(paymentMethod.value == null){
        errors.push("Debes marcar al menos un método de pago")
    }

    if(deliveryOption == null){
        errors.push("Debes marcar al menos una opción de entrega del producto");
    }

    if(isEmpty(price)){
        errors.push("El campo 'precio' no debe estar vacío")
    }else if(price != Number){
        errors.push("El campo 'precio' debe contener números solamente")
    }

    if(description.length < 20){
        errors.push("El campo 'Descripción del juego' no debe tener menos de 20 caracteres")
    }else if(description == ""){
        errors.push("El campo 'Descripción del juego' no debe estar vacío")
    }

    if(mediumDescription == ""){
        errors.push("El campo 'Descripción mediana' no debe estar vacío")
    }

    if(largeDescription == ""){
        errors.push("El campo 'Descripción grande' no debe estar vacío")
    }

    if(isEmpty(editor)){
        errors.push("El campo 'Editora' no debe estar vacío")
    }

    if(isEmpty(developer)){
        errors.push("El campo 'Desarrolladora' no debe estar vacío")
    }

    if(isEmpty(launchDate)){
        errors.push("El campo 'Fecha de lanzamiento' no debe estar vacío")
    }

    if(isEmpty(category)){
        errors.push("Debes marcar al menos una categoría");
    }

    if(isEmpty(tag)){
        errors.push("Debes marcar al menos una etiqueta");
    }

    if(isEmpty(classification)){
        errors.push("El campo 'Clasificación' no debe estar vacío")
    }

    if(isEmpty(score)){
        errors.push("El campo 'Puntaje' no debe estar vacío")
    }else if(score > 10){
        errors.push("El campo 'Puntaje' no debe no debe ser mayor a 10")
    }


    
    formulario.addEventListener('submit', function(event){
        if(errors > 0){
        
            event.preventDefault();

            let ulErrors = document.querySelector("div.errors ul");

            for(let i=0; i < errors.length; i++){

                ulErrors.innerHTML += "<li>" + errors[i] + "</li>"
            }
            
        } else {
            alert('El producto se cargó correctamente')
        }
    });
})