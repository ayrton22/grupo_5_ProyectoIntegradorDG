function qs(element) {
    return document.querySelectorAll(element);
}

window.addEventListener('load', function() {

    // Listado
    let generalSelect = qs('li#general');
    let gamesSelect = qs('li#games');
    let paysSelect = qs('li#pays');
    let settingsSelect = qs('li#settings');

    // Secciones
    let generalInfo = qs('div.container-profile-general');
    let gamesInfo = qs('div.container-profile-games');
    let paysInfo = qs('div.container-profile-pays');
    let settingsInfo = qs('div.container-profile-settings')

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

})