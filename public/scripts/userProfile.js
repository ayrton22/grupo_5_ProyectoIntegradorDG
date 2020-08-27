function qs(element) {
    return document.querySelector(element);
}

window.addEventListener('load', function() {

    // Listado
    let generalSelect = qs('li#general');
    let gamesSelect = qs('li#games');
    let paysSelect = qs('li#pays');
    let settingsSelect = qs('li#settings');

    // Listado Responsive
    let generalRSelect = qs('li#general-responsive');
    let gamesRSelect = qs('li#games-responsive');
    let paysRSelect = qs('li#pays-responsive');
    let settingsRSelect = qs('li#settings-responsive');

    // Secciones
    let generalInfo = qs('div.container-profile-general');
    let gamesInfo = qs('div.container-profile-games');
    let paysInfo = qs('div.container-profile-pays');
    let settingsInfo = qs('div.container-profile-settings')


    // Sub secciones

    let generalSubInfo = qs('div.container-profile-general')

    // Avatar Image, SVG and Input

    let avatarImage = qs('img#avatar');
    let avatarInput = qs('input#avatar');

    // Pop-ups
    let gameInfoIcon = document.querySelectorAll('i.games-single-detailInfo');
    let gameDetail = qs('div.games-detailInfo');
    let gameDetailCross = qs('div.games-detailInfo i')

    let deleteIcon = document.querySelectorAll('i.games-single-delete');
    let deleteForm = qs('form.games-delete-form');
    let deleteBtn = qs('button.games-delete-form-button2')

    let passwordIcon = qs('h3.profile-pass i');
    let passwordForm = qs('form.general-profile-password-change');
    let passwordCross = qs('form.general-profile-password-change i')

    // Event Listeners

    generalSelect.addEventListener('click', function() {

        gamesInfo.classList.remove('active-block');
        gamesInfo.classList.add('inactiveUserProfile');

        paysInfo.classList.remove('active-block');
        paysInfo.classList.add('inactiveUserProfile');

        settingsInfo.classList.remove('active-block');
        settingsInfo.classList.add('inactiveUserProfile');

        generalInfo.classList.remove('inactiveUserProfile');
        generalInfo.classList.add('active-flex');

    });

    generalRSelect.addEventListener('click', function() {

        gamesInfo.classList.remove('active-block');
        gamesInfo.classList.add('inactiveUserProfile');

        paysInfo.classList.remove('active-block');
        paysInfo.classList.add('inactiveUserProfile');

        settingsInfo.classList.remove('active-block');
        settingsInfo.classList.add('inactiveUserProfile');

        generalInfo.classList.remove('inactiveUserProfile');

        generalInfo.classList.add('active-flex');
    });

    gamesSelect.addEventListener('click', function() {

        generalInfo.classList.remove('active-flex');
        generalInfo.classList.add('inactiveUserProfile');

        paysInfo.classList.remove('active-block');
        paysInfo.classList.add('inactiveUserProfile');

        settingsInfo.classList.remove('active-block');
        settingsInfo.classList.add('inactiveUserProfile');

        gamesInfo.classList.remove('inactiveUserProfile');
        gamesInfo.classList.add('active-block');

    });

    gamesRSelect.addEventListener('click', function() {

        generalInfo.classList.remove('active-flex');
        generalInfo.classList.add('inactiveUserProfile');

        paysInfo.classList.remove('active-block');
        paysInfo.classList.add('inactiveUserProfile');

        settingsInfo.classList.remove('active-block');
        settingsInfo.classList.add('inactiveUserProfile');

        gamesInfo.classList.remove('inactiveUserProfile');
        gamesInfo.classList.add('active-block');

    });

    paysSelect.addEventListener('click', function() {

        generalInfo.classList.remove('active-flex');
        generalInfo.classList.add('inactiveUserProfile');

        gamesInfo.classList.remove('active-block');
        gamesInfo.classList.add('inactiveUserProfile');

        settingsInfo.classList.remove('active-block');
        settingsInfo.classList.add('inactiveUserProfile');

        paysInfo.classList.remove('inactiveUserProfile');
        paysInfo.classList.add('active-block');
    })

    paysRSelect.addEventListener('click', function() {

        generalInfo.classList.remove('active-flex');
        generalInfo.classList.add('inactiveUserProfile');

        gamesInfo.classList.remove('active-block');
        gamesInfo.classList.add('inactiveUserProfile');

        settingsInfo.classList.remove('active-block');
        settingsInfo.classList.add('inactiveUserProfile');

        paysInfo.classList.remove('inactiveUserProfile');
        paysInfo.classList.add('active-block');
    })

    settingsSelect.addEventListener('click', function() {

        gamesInfo.classList.remove('active-block');
        gamesInfo.classList.add('inactiveUserProfile');

        paysInfo.classList.remove('active-block');
        paysInfo.classList.add('inactiveUserProfile');

        generalInfo.classList.remove('active-flex');
        generalInfo.classList.add('inactiveUserProfile');

        settingsInfo.classList.remove('inactiveUserProfile');
        settingsInfo.classList.add('active-block');

    });

    settingsRSelect.addEventListener('click', function() {

        gamesInfo.classList.remove('active-block');
        gamesInfo.classList.add('inactiveUserProfile');

        paysInfo.classList.remove('active-block');
        paysInfo.classList.add('inactiveUserProfile');

        generalInfo.classList.remove('active-flex');
        generalInfo.classList.add('inactiveUserProfile');

        settingsInfo.classList.remove('inactiveUserProfile');
        settingsInfo.classList.add('active-block');

    });

    passwordIcon.addEventListener('click', function() {
        passwordForm.classList.remove('inactive-password-change');
        passwordForm.classList.add('active-password-change');
    })

    passwordCross.addEventListener('click', function() {

        passwordForm.classList.remove('active-password-change');
        passwordForm.classList.add('inactive-password-change');
    })



    avatarImage.addEventListener('click', function() {
        avatarInput.click();
    });


    gameInfoIcon.forEach(element => {
        element.addEventListener('click', function() {
            gameDetail.classList.remove('inactive-games-detailInfo');
            gameDetail.classList.add('active-games-detailInfo');
        });
    })

    gameDetailCross.addEventListener('click', function() {
        gameDetail.classList.remove('active-games-detailInfo');
        gameDetail.classList.add('inactive-games-detailInfo');
    });


    deleteIcon.forEach(element => {
        element.addEventListener('click', function() {
            deleteForm.classList.remove('inactive-games-delete-form');
            deleteForm.classList.add('active-games-delete-form');
        });
    });

    deleteBtn.addEventListener('click', function() {
        deleteForm.classList.remove('active-games-delete-form');
        deleteForm.classList.add('inactive-games-delete-form');
    });

    if(window.matchMedia("(max-width: 550px)").matches) {
        gamesRSelect.addEventListener('click', () => {
            generalSubInfo.classList.add('container-profile-class-none')
        })

        paysRSelect.addEventListener('click', () => {
            generalSubInfo.classList.add('container-profile-class-none')
        })

        settingsRSelect.addEventListener('click', () => {
            generalSubInfo.classList.add('container-profile-class-none')
        })

        generalRSelect .addEventListener('click', () => {
            if(generalSubInfo.classList.contains('container-profile-class-none')){
                generalSubInfo.classList.remove('container-profile-class-none')
            }
        })
    }


    let passwordChangeForm = document.getElementById('passwordChangeForm');

    let passwordInput = document.getElementById('password-profile');
    let repasswordInput = document.getElementById('repassword-profile');

    let passwordError1 = qs('p.password-error1')
    let passwordError2 = qs('p.password-error2')
    let repasswordError = qs('p.repassword-error')

    passwordChangeForm.addEventListener('submit', function(event){
        event.preventDefault();

        let errores = {}

        if(passwordInput.value.length = 0) {
            errores.noPassword = "Este campo no puede estar incompleto"
        }

        if(passwordInput.value.length < 6 || passwordInput.value.length > 20 ){
            errores.password = "La contraseña debe tener entre 6 y 20 caracteres";
        }
        if(passwordInput.value != repasswordInput.value){
            errores.repassword = "Las contraseñas no coinciden";
        }

        if(Object.keys(errores).length >= 1){
            //console.log('Hay errores');
            //console.log(errores);

            passwordError1.innerText = (errores.noPassword) ? errores.noPassword : "";
            passwordError2.innerText = (errores.password) ? errores.password : "";
            repasswordError.innerText = (errores.repassword) ? errores.repassword : "";

            alert('No se pudo actualizar la contraseña');
            
        } else {
            // envio el passwordChangeForm
            alert('Se ha actualizado la contraseña');
            passwordForm.submit();
        }
    })

})