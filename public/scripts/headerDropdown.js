function qs(element) {
    return document.querySelector(element);
}

window.addEventListener('load', function() {

    let dropdownIcon = qs('i.nav__right-profile-options-icon');
    let dropdownDiv = qs('div.nav__right-profile-dropdown');

    dropdownIcon.addEventListener('click', function() {
        dropdownDiv.classList.toggle('inactive-profile-dropdown');
        dropdownDiv.classList.toggle('active-profile-dropdown');
    })
})