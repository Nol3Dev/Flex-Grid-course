const menuButton = document.querySelector('.header__menu')
const lateralMenu = document.querySelector('.lateral-menu')

menuButton.addEventListener('click', () => {
    lateralMenu.classList.toggle('lateral-menu__active')
})