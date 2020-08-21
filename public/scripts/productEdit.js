/*window.addEventListener('load', function(){
    let formulario = this.document.querySelector("productEdit-form");
    
    formulario.addEventListener('submit', function(event){
            event.preventDefault();
            let errors = [];

            let gameTitle = document.querySelector("input.title");
            if(gameTitle.value == ""){
                errors.push("El campo 'Título del juego' no debe estar vacío")
            }

            let gameState = document.querySelector("select.state");
            if(gameState.value != null){
                errors.push("Debes seleccionar un estado del juego")
            }

            let platform1 = document.querySelector("input.platformCheckbox1").checked
            let platform2 = document.querySelector("input.platformCheckbox2").checked
            let platform3 = document.querySelector("input.platformCheckbox3").checked
            let platform4 = document.querySelector("input.platformCheckbox4").checked
            let platform5 = document.querySelector("input.platformCheckbox5").checked
            let platform6 = document.querySelector("input.platformCheckbox6").checked

            let platform = [platform1, platform2, platform3, platform4, platform5, platform6];

            for(let i = 0; i <= platform.length; i++){
                if(platform[i] == true){
                    console.log();
                } else {
                    errors.push("Debes marcar al menos una plataforma");
                };
            };

            let paymentMethod1 = document.querySelector("input.paymentMethod1").checked
            let paymentMethod2 = document.querySelector("input.paymentMethod2").checked
            let paymentMethod3 = document.querySelector("input.paymentMethod3").checked
            let paymentMethod4 = document.querySelector("input.paymentMethod4").checked

            let paymentMethod = [paymentMethod1, paymentMethod2, paymentMethod3, paymentMethod4];

            for(let i = 0; i <= paymentMethod.length; i++){
                if(paymentMethod[i] == true){
                    console.log();
                } else {
                    errors.push("Debes marcar al menos un método de pago");
                };
            };

            let deliveryOption1 = document.querySelector("input.deliveryOption1").checked
            let deliveryOption2 = document.querySelector("input.deliveryOption2").checked

            let deliveryOption = [deliveryOption1, deliveryOption2];

            for(let i = 0; i <= deliveryOption.length; i++){
                if(deliveryOption[i] == true){
                    console.log();
                } else {
                    errors.push("Debes marcar al menos una opción de entrega del producto");
                };
            };

            let productPrice = document.querySelector("input.price")
            if(productPrice.value == ""){
                errors.push("El campo 'precio' no debe estar vacío")
            }

            let gameDescription = document.querySelector("input.gameDescription")
            if(gameDescription.value == ""){
                errors.push("El campo 'Descripción del juego' no debe estar vacío")
            }

            let gameMediumDescription = document.querySelector("input.gameMediumDescription")
            if(gameMediumDescription.value == ""){
                errors.push("El campo 'Descripción mediana' no debe estar vacío")
            }

            let gameLargeDescription = document.querySelector("input.gameLargeDescription")
            if(gameLargeDescription.value == ""){
                errors.push("El campo 'Descripción grande' no debe estar vacío")
            }

            let gameEditor = document.querySelector("input.gameEditor")
            if(gameEditor.value == ""){
                errors.push("El campo 'Editora' no debe estar vacío")
            }

            let gameDeveloper = document.querySelector("input.gameDeveloper")
            if(gameDeveloper.value == ""){
                errors.push("El campo 'Desarrolladora' no debe estar vacío")
            }

            let launchDate = document.querySelector("input.launchDate")
            if(launchDate.value == ""){
                errors.push("El campo 'Fecha de lanzamiento' no debe estar vacío")
            }

            let category1 = document.querySelector("input.category1").checked
            let category2 = document.querySelector("input.category2").checked
            let category3 = document.querySelector("input.category3").checked
            let category4 = document.querySelector("input.category4").checked
            let category5 = document.querySelector("input.category5").checked
            let category6 = document.querySelector("input.category6").checked

            let category = [category1, category2, category3, category4, category5, category6];

            for(let i = 0; i <= category.length; i++){
                if(category[i] == true){
                    console.log();
                } else {
                    errors.push("Debes marcar al menos una categoría");
                };
            };

            let tag = document.querySelector("input.tag")
            if(tag.value == ""){
                errors.push("El campo 'Etiquetas' no debe estar vacío")
            }

            let classification = document.querySelector("input.classification")
            if(classification.value == ""){
                errors.push("El campo 'Clasificación' no debe estar vacío")
            }

            let score = document.querySelector("input.score")
            if(score.value == ""){
                errors.push("El campo 'Puntaje' no debe estar vacío")
            }
    });
})*/