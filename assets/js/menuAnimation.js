let menuIcon = document.querySelector('#menu_icon');
const menuList = document.querySelector('.header__menu');

menuIcon.addEventListener('click', () => {
    if (menuList.classList.contains('hideMenu')) {
        menuIcon.src = '../assets/img/closeMenuIcon.png';
        menuList.classList.add('showMenu');
        menuList.classList.remove('hideMenu');
    } else {
        menuIcon.src = '../assets/img/openMenuIcon.png';
        menuList.classList.remove('showMenu');
        menuList.classList.add('hideMenu');
    }
});

const menuLinks = document.querySelectorAll('#header__menu .header__links');

for(i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', ()=> {
        if(menuList.classList.contains('showMenu')) {
            menuIcon.src = '../assets/img/openMenuIcon.png';
            menuList.classList.add('hideMenu');
            menuList.classList.remove('showMenu');
        }
    });
};