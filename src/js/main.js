"use strict";
const   hamburgerMenu    = document.querySelector('.hamburger-menu'),
        menu             = document.querySelectorAll('.menu li'),
        upBtn            = document.querySelector('.pageup'),
        footer           = document.querySelector('footer'),
        textCounter      = document.querySelector('#text-counter'),
        textarea         = document.querySelector('textarea'),
        nameInput        = document.querySelector('[name="name"]'),
        emailInput        = document.querySelector('[name="email"]');
        
const showMenu           = (clikedItem) => {
    clikedItem.closest('header').classList.toggle('menu-active');
    clikedItem.classList.toggle('active');
};

const linkOnMenu = (menuIco) => {
    if(menuIco.classList.contains('active')){
        showMenu(menuIco);
    }
};

const addNameInput = (input, className) => {
    if(input.value.length>0){
        input.parentElement.classList.add(className);
    } else {
        input.parentElement.classList.remove(className);
    }
};

hamburgerMenu.addEventListener("click", () => showMenu(hamburgerMenu));

menu.forEach(link => {
        link.addEventListener('click', () => linkOnMenu(hamburgerMenu));
});

window.addEventListener('scroll', () => {
    if(window.pageYOffset>1500 && 
        footer.offsetTop<(window.pageYOffset + window.innerHeight)){
        upBtn.style.opacity = "100%";
        upBtn.style.bottom = (footer.clientHeight + 10) + 'px';
    } else if(window.pageYOffset>1500){
        upBtn.style.bottom = '20px';
        upBtn.style.opacity = "100%";
    } else {
        upBtn.style.opacity = "0";
    }
});

textarea.addEventListener('input', () => {
    textCounter.innerHTML = `${textarea.value.length}/500`;
});

nameInput.addEventListener('input', () => addNameInput(nameInput, 'input-name'));

emailInput.addEventListener('input', () => addNameInput(emailInput, 'input-email'));

textarea.addEventListener('input', () => addNameInput(textarea, 'add-desc-area'));
