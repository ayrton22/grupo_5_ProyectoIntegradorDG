function qs(elemento) {
    return document.querySelector(elemento);
}

window.addEventListener('load', function() {
    let formulario = qs('productEdit-form');
    
    let labelTitle = qs("label[for='title']");
    let inputTitle = qs('input#titleEdit');
    let errorTitle = qs('#errTitle');

    let btnEnviar = qs("form button[type='submit']");
    
    btnEnviar.addEventListener('click', function(event) {
        event.preventDefault();

        let errorsEdit = {};

        if(inputTitle.value.length < 5) {
            errorsEdit.title = "Como mínimo 5 caracteres";
        }

        if(Object.keys(errorsEdit).length >= 1) {
            if(errorsEdit.title) {
                labelTitle.classList.remove('success')
                labelTitle.classList.add('error')
                errorTitle.innerText = errorsEdit.title;
            } else {
                labelTitle.classList.remove('error')
                labelTitle.classList.add('success')
                errorTitle.innerText = '';
            }
        } else {
            // envio el formulario
            alert('El formulario se ha enviado')
        }

    })
})