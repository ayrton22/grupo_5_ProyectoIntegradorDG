function qs(elemento) {
    return document.querySelector(elemento);
}

window.addEventListener('load', function(){
    
    let title = qs("input.titleEdit");
    let errorTitleEmpty = qs(small.errorTitleEmpty);
    let errorTitleLength = qs(small.errorTitleLength);
    /*let state = qs("select.stateEdit");
    let platform = document.querySelectorAll('input[type=checkbox].platformEdit');
    let videoLink = qs("input.videoLinkEdit");
    let paymentMethod = document.querySelectorAll("input[type=checkbox].paymentMethodEdit")
    let deliveryOption = document.querySelectorAll("input[type=checkbox].deliveryOptionEdit");
    let price = qs("input.priceEdit");
    let description = qs("textarea.descriptionEdit");
    let mediumDescription = qs("textarea.mediumDescriptionEdit");
    let largeDescription = qs("textarea.largeDescriptionEdit");
    let editor = qs("input.editorEdit");
    let developer = qs("input.developerEdit");
    let launchDate = qs("input.launchDateEdit");
    let category = document.querySelectorAll("input[type=checkbox].categoryEdit");
    let tag = document.querySelectorAll("input[type=checkbox].tagEdit");
    let classification = qs("input.classificationEdit");
    let score = qs("input.scoreEdit");*/
    
    let formulario = qs("form.productEdit-form");
    formulario.onsubmit = function(event){
        event.preventDefault();

        let errors = {}


    
        if(title.value === null || title.value === ""){
            errors.titleEmpty = "El campo 'Título del juego' no debe estar vacío";
        }else if(title.value.length < 5){
            errors.titleLength = "El campo 'Titulo del juego' debe tener al menos 5 caracteres";
        }
        errorTitleEmpty.innerHTML = errors.titleEmpty
        errorTitleLength.innerHTML = errors.titleLength
        /*if(state.value === null || state.value === ""){
            errors.state = "Debes seleccionar un estado del juego";
        }
        if(platform.length == 0){
            errors.platform = "Debes marcar al menos una plataforma"
        }
        if(isEmpty(videoLink)){
            errors. videoLink = "Debes escribir un link de un video de Youtube"
        }
        if(paymentMethod.value == 0){
            errors.paymentMethod = "Debes marcar al menos un método de pago"
        }
        if(deliveryOption == 0){
            errors.deliveryOption = "Debes marcar al menos una opción de entrega del producto";
        }
        if(price.value === null || price.value === ""){
            errors.price = "El campo 'precio' no debe estar vacío"
        }
        if(description.value.length < 20){
            errors.descriptionLength = "El campo 'Descripción del juego' no debe tener menos de 20 caracteres"
        }else if(description.value == ""){
            errors.decriptionEmpty = "El campo 'Descripción del juego' no debe estar vacío"
        }
        if(mediumDescription.value == ""){
            errors.mediumEmpty = "El campo 'Descripción mediana' no debe estar vacío"
        }
        if(largeDescription.value == ""){
            errors.largeEmpty = "El campo 'Descripción grande' no debe estar vacío"
        }
        if(editor.value == ""){
            errors.editor = "El campo 'Editora' no debe estar vacío"
        }
        if(developer.value == ""){
            errors.developer = "El campo 'Desarrolladora' no debe estar vacío"
        }
        if(launchDate.value == ""){
            errors.launchDate = "El campo 'Fecha de lanzamiento' no debe estar vacío"
        }
        if(category.value == 0){
            errors.category = "Debes marcar al menos una categoría";
        }
        if(tag.value == 0){
            errors.tag = "Debes marcar al menos una etiqueta";
        }
        if(classification.value == ""){
            errors.classification = "El campo 'Clasificación' no debe estar vacío"
        }
        if(score.value == ""){
            errors.score = "El campo 'Puntaje' no debe estar vacío"
        }*/
    }
})