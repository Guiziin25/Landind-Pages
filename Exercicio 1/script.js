const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toogle('ativo');
    NavMenu.classList.toogle('ativo');
})