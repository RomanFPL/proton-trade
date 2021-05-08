"use strict";
const   hamburgerMenu    = document.querySelector('.hamburger-menu'),
        menu             = document.querySelectorAll('.menu li');

const showMenu           = (clikedItem) => {
    clikedItem.closest('header').classList.toggle('menu-active');
    clikedItem.classList.toggle('active');
};

const linkOnMenu = (menuIco) => {
    if(menuIco.classList.contains('active')){
        showMenu(menuIco);
    }
};

hamburgerMenu.addEventListener("click", () => showMenu(hamburgerMenu));

menu.forEach(link => {
        link.addEventListener('click', () => linkOnMenu(hamburgerMenu));
});

