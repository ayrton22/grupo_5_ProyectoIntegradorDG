function qs(elemento){
    return document.querySelectorAll(elemento);
}

let length = /^[a-zA-Z0-9]{20,}*$/

window.addEventListener('load', function(){
    let descripciones = qs('textarea');
    let error = qs('small.errorDescription');
    error.style.color = 'red';

    let form = qs('form.productEdit-form');
    form.addEventListener('submit', function(e){
        e.preventDefault();

        if(descripciones.value.match(length) == null){
            error.innerHTML = 'Las descripciones deben tener al menos 20 caracteres';
        }
    });
});