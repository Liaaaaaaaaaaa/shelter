console.log('100 баллов');

//----burgermenu------------
const burgermenu = document.querySelector('.burgermenu');
const headerNav = document.querySelector('nav');
const burgerLine = document.querySelector('.burger__line');
const nav = document.querySelector('nav');
const navItem = nav.children;
const html = document.querySelector('html');
const headerContainer = document.querySelector('.header__container');

console.log(navItem);

// console.log(burgermenu)


function burgermenuToggle() {
    headerNav.classList.toggle('burgermenu__active');
    burgermenu.classList.toggle('burgermenu-icon__active');
    headerContainer.classList.toggle('header__container_active');
    document.body.classList.toggle('lock');
    // nav.classList.toggle('burgermenu__container');


}

burgermenu.addEventListener('click', burgermenuToggle);

// function ClickNavLink(e) {
//     console.log(nav)
//         (navItem.map(e=> e.contains(e.target)) ? burgermenuOpen(): console.log('no') )
// }

// headerNav.addEventListener('click', ClickNavLink)

function notClickBurgerIcon(e) {
    if ((!burgermenu.contains(e.target) && headerNav.classList.contains('burgermenu__active') && !headerNav.contains(e.target))) {
        burgermenuToggle();
    } else if (nav.contains(e.target)) {
        burgermenuToggle();
    }
}


document.addEventListener('click', notClickBurgerIcon);