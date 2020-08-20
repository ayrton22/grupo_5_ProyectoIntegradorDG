function qs(element) {
    return document.querySelector(element);
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
    let avatarSVG = qs('svg#svg')

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



    avatarSVG.addEventListener('click', function() {
        avatarInput.click();
    });

    avatarImage.addEventListener('mouseover', function() {
        avatarSVG.classList.remove('inactiveUserProfile');
        avatarSVG.classList.add('svg-avatar-active')
    });

    avatarImage.addEventListener('mouseout', function() {
        avatarSVG.classList.remove('svg-avatar-active')
        avatarSVG.classList.add('inactiveUserProfile');
    })
})