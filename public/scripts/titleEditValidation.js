function qs(elemento) {
    return document.querySelector(elemento);
}

window.addEventListener('load', function() {
    let form = qs('form.productEdit-form');

    let title = qs('input.titleEdit');
    let errorTitle = qs('small.errorTitle');
    errorTitle.style.color = 'red';

    form.addEventListener('submit', function(event){
        event.preventDefault();

        let errors = []

        if(title.value === ""){
            errors.push("Debe estar completo");
        }

        errorTitle.innerHTML = errors.join(', ');
    })
});