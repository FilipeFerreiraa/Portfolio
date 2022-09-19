const menuIcon = document.querySelectorAll('#menu_icon');
let menuList = document.querySelector('.header__menu');

menuIcon[0].addEventListener('click', () => {


    if (menuList.classList.contains('hideMenu')) {
        menuList.classList.add('showMenu');
        menuList.classList.remove('hideMenu');
    } else {
        menuList.classList.remove('showMenu');
        menuList.classList.add('hideMenu');
    }
});

const headerLinks = document.querySelector('.header__links', '.header__links');

headerLinks.addEventListener('click', ()=> {
        if (menuList.classList.contains('showMenu')) {
            menuList.classList.add('hideMenu');
    }
});