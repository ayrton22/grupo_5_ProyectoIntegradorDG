const menuIcon = document.querySelector('.hamburguer-menu');
const navbar = document.querySelector('ul.header-nav__list')

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('change-line')
    navbar.classList.toggle('change-line-sub')
})