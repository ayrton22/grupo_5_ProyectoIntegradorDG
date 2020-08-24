function qs(elemento) {
    return document.querySelector(elemento);
}

window.addEventListener('load', function(){
    
    let title = qs("input.titleEdit");
    let state = qs("select.stateEdit");
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
    let score = qs("input.scoreEdit");
    
    let formulario = qs("form.productEdit-form");
    formulario.onsubmit = function(event){

        let errorsEdit1 = [];
        errorsEdit1.style.color = "red";
        let errorsEdit2 = [];
        errorsEdit2.style.color = "red";
        let errorsEdit3 = [];
        errorsEdit3.style.color = "red";
        let errorsEdit4 = [];
        errorsEdit4.style.color = "red";
        let errorsEdit5 = [];
        errorsEdit5.style.color = "red";
    
        if(title.value === null || title.value === ""){
            errorsEdit1.push("El campo 'Título del juego' no debe estar vacío");
        }else if(title.value.length < 5){
            errorsEdit1.push("El campo 'Titulo del juego' debe tener al menos 5 caracteres");
        }
        if(state.value === null || state.value === ""){
            errorsEdit1.push("Debes seleccionar un estado del juego")
        }
        if(platform.length == 0){
            errorsEdit1.push("Debes marcar al menos una plataforma")
        }
        if(isEmpty(videoLink)){
            errorsEdit2.push("Debes escribir un link de un video de Youtube")
        }
        if(paymentMethod.value == 0){
            errorsEdit3.push("Debes marcar al menos un método de pago")
        }
        if(deliveryOption == 0){
            errorsEdit3.push("Debes marcar al menos una opción de entrega del producto");
        }
        if(price.value === null || price.value === ""){
            errorsEdit3.push("El campo 'precio' no debe estar vacío")
        }
        if(description.value.length < 20){
            errorsEdit4.push("El campo 'Descripción del juego' no debe tener menos de 20 caracteres")
        }else if(description.value == ""){
            errorsEdit4.push("El campo 'Descripción del juego' no debe estar vacío")
        }
        if(mediumDescription.value == ""){
            errorsEdit4.push("El campo 'Descripción mediana' no debe estar vacío")
        }
        if(largeDescription.value == ""){
            errorsEdit4.push("El campo 'Descripción grande' no debe estar vacío")
        }
        if(editor.value == ""){
            errorsEdit4.push("El campo 'Editora' no debe estar vacío")
        }
        if(developer.value == ""){
            errorsEdit4.push("El campo 'Desarrolladora' no debe estar vacío")
        }
        if(launchDate.value == ""){
            errorsEdit4.push("El campo 'Fecha de lanzamiento' no debe estar vacío")
        }
        if(category.value == 0){
            errorsEdit5.push("Debes marcar al menos una categoría");
        }
        if(tag.value == 0){
            errorsEdit5.push("Debes marcar al menos una etiqueta");
        }
        if(classification.value == ""){
            errorsEdit5.push("El campo 'Clasificación' no debe estar vacío")
        }
        if(score.value == ""){
            errorsEdit5.push("El campo 'Puntaje' no debe estar vacío")
        }

        if(errorsEdit1 > 0){
        
            event.preventDefault();

            let ulErrorsEdit1 = document.querySelector("div.errorsEdit1 ul");

            for(let i=0; i < errorsEdit1.length; i++){

                ulErrorsEdit1.innerHTML += "<li>" + errorsEdit1[i] + "</li>"
            }
            
        }
        if(errorsEdit2 > 0){
        
            event.preventDefault();

            let ulErrorsEdit2 = document.querySelector("div.errorsEdit2 ul");

            for(let i=0; i < errorsEdit2.length; i++){

                ulErrorsEdit2.innerHTML += "<li>" + errorsEdit2[i] + "</li>"
            }
            
        }
        if(errorsEdit3 > 0){
        
            event.preventDefault();

            let ulErrorsEdit3 = document.querySelector("div.errorsEdit3 ul");

            for(let i=0; i < errorsEdit3.length; i++){

                ulErrorsEdit3.innerHTML += "<li>" + errorsEdit3[i] + "</li>"
            }
            
        }
        if(errorsEdit4 > 0){
        
            event.preventDefault();

            let ulErrorsEdit4 = document.querySelector("div.errorsEdit4 ul");

            for(let i=0; i < errorsEdit4.length; i++){

                ulErrorsEdit4.innerHTML += "<li>" + errorsEdit4[i] + "</li>"
            }
            
        }
        if(errorsEdit5 > 0){
        
            event.preventDefault();

            let ulErrorsEdit5 = document.querySelector("div.errorsEdit5 ul");

            for(let i=0; i < errorsEdit5.length; i++){

                ulErrorsEdit5.innerHTML += "<li>" + errorsEdit5[i] + "</li>"
            }
            
        }
    };
})