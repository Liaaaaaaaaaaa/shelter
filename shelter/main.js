//----burgermenu------------
const burgermenu = document.querySelector('.burgermenu');
const headerNav = document.querySelector('nav');
const burgerLine = document.querySelector('.burger__line');
const nav = document.querySelector('nav');
const navItem = nav.children;
const html = document.querySelector('html');
const headerContainer = document.querySelector('.header__container');
const WidthForBurgermenu = 768;
console.log(navItem);


function burgermenuToggle() {
    headerNav.classList.toggle('burgermenu__active');
    burgermenu.classList.toggle('burgermenu-icon__active');
    headerContainer.classList.toggle('header__container_active');
    document.body.classList.toggle('lock');
}

burgermenu.addEventListener('click', burgermenuToggle);

function notClickBurgerIcon(e) {
    if ((!burgermenu.contains(e.target) && headerNav.classList.contains('burgermenu__active') && !headerNav.contains(e.target))) {
        burgermenuToggle();
    } else if (screen.width < WidthForBurgermenu && nav.contains(e.target)) {
        burgermenuToggle();
    }
}


document.addEventListener('click', notClickBurgerIcon);



//---------SLIDER---MAIN-----------

const buttonSwitchNext = document.querySelector('.button_switchNext');
const buttonSwitchPrev = document.querySelector('.button_switchPrev');


let friendsContainer = document.querySelectorAll('.friends-container');
const sliderContainer = document.querySelector('.slider-container')
const friendsContainers = document.querySelector('.friends__containers');


let leftMove = 0;

function CreateBlockSliders() {
    console.log(screen.width > 768);

    let NewBlockSlider = '';

    if (screen.width > 800) {
        NewBlockSlider = '<div class="friends-container "><div class="friend"> <div class="friend__img-Katrine"> </div> <h4 class="friend__name">Katrine</h4> <button class="button button__friend">Learn more</button>                                </div>                                                          <div class="friend"> <div class="friend__img-Katrine"> </div> <h4 class="friend__name">Katrine</h4> <button class="button button__friend">Learn more</button>                                </div>                                                          <div class="friend"> <div class="friend__img-Katrine"> </div> <h4 class="friend__name">Katrine</h4> <button class="button button__friend">Learn more</button></div>';
        leftMove = 990;
    } else
    if (screen.width > 400) {
        NewBlockSlider = '<div class="friends-container "><div class="friend"> <div class="friend__img-Katrine"> </div> <h4 class="friend__name">Katrine</h4> <button class="button button__friend">Learn more</button>                                </div>                                                          <div class="friend"> <div class="friend__img-Katrine"> </div> <h4 class="friend__name">Katrine</h4> <button class="button button__friend">Learn more</button>                                </div>                                                          <div class="friend"> <div class="friend__img-Katrine"> </div> <h4 class="friend__name">Katrine</h4> <button class="button button__friend">Learn more</button></div>';
        leftMove = 580;
    } else {
        NewBlockSlider = '<div class="friends-container "><div class="friend"> <div class="friend__img-Katrine"> </div> <h4 class="friend__name">Katrine</h4> <button class="button button__friend">Learn more</button>                                </div>                                                          <div class="friend"> <div class="friend__img-Katrine"> </div> <h4 class="friend__name">Katrine</h4> <button class="button button__friend">Learn more</button> </div>';
        leftMove = 270;
    }


    friendsContainers.insertAdjacentHTML('beforeend', NewBlockSlider);
    friendsContainers.insertAdjacentHTML('afterbegin', NewBlockSlider);

    friendsContainers.children[1].style.right = '0px';
    friendsContainers.children[0].style.right = leftMove + 'px';

    friendsContainers.children[1].style.left = '0px';
    friendsContainers.children[2].style.left = leftMove + 'px';


}

CreateBlockSliders();





//----------Random --- cards---pets----------------



import petsFile from './json/pets.json' assert {
    type: "json"
};



const petsFileMasiive = petsFile.map(e => Object.values(e));


function friendsContainerCenterNamePets() {
    return Array.from(friendsContainers.children[1].children).map(e => e.children[1].textContent);
}


function petsFileSelected() {
    return petsFile.map(e => Object.values(e)).filter(elem => !friendsContainerCenterNamePets().includes(elem[0]));
}



function randomPets() {
    return Math.trunc(Math.random() * (5 - 1) + 0)
};



let randomPetsNumber = function () {
    let randomPetsThree = new Set();
    for (let i = 0; randomPetsThree.size < 3; i++) {
        randomPetsThree.add(randomPets());
    }
    return randomPetsThree;
}



const friendsInContainer = friendsContainers.children[0];
const friendsCountInConteiner = friendsContainers.children[0].children;



function AddNewPets(numberFriendsContainer) {
    let a = petsFileSelected();
    let b = Array.from(randomPetsNumber());

    for (let i = 0; i < friendsCountInConteiner.length; i++) {
        friendsContainers.children[numberFriendsContainer].children[i].children[0].className = 'friend__img-' + a[b[i]][0];
        friendsContainers.children[numberFriendsContainer].children[i].children[1].innerText = a[b[i]][0];

    }
}

AddNewPets(0);
AddNewPets(2)

//------------left/right-click--------------------

let slides = friendsContainers.children;

function leftSlider() {
    AddNewPets(2);
    buttonSwitchNext.removeEventListener('click', leftSlider);
    friendsContainers.children[0].remove();

    let SaveslideLeft = slides[0];

    let offset = 0;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.left = offset * leftMove - leftMove + 'px';
        offset++;
    }

    setTimeout(function () {
        slides[0].remove();
        CreateBlockSliders();
        AddNewPets(2);
        buttonSwitchNext.addEventListener('click', leftSlider);
    }, 1000)


}

function rightSlider() {

    buttonSwitchNext.removeEventListener('click', rightSlider);
    friendsContainers.children[2].remove();

    AddNewPets(0);

    let offset = 1;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.right = offset * leftMove - leftMove + 'px';
        friendsContainers.children[1].style.left = '990px';
        offset--;
    }

    setTimeout(function () {
        slides[1].remove();
        CreateBlockSliders();
        AddNewPets(0);
        buttonSwitchNext.addEventListener('click', rightSlider);
    }, 1000)


}


buttonSwitchNext.addEventListener('click', leftSlider);
buttonSwitchPrev.addEventListener('click', rightSlider);


//--------------POP-UP----------------


const popUp = document.querySelector('.popUp');
const popUpClose = document.querySelector('.popUp__close');
const cardAboutPet = document.querySelector('.cardAboutPet');


function addInfoPet(e) {
    console.log('its addinfopet')
    let describePetOrigin = petsFileMasiive.filter(t => t[0] === e.target.closest('.friend').children[1].textContent).flat(2);

    cardAboutPet.children[0].className = 'friend__img-' + describePetOrigin[0] + ' popUp__img';

    let petTitle = cardAboutPet.children[1].children[0];

    petTitle.children[0].textContent = describePetOrigin[0];
    petTitle.children[1].textContent = describePetOrigin[2] + '-' + describePetOrigin[3];


    cardAboutPet.children[1].children[1].textContent = describePetOrigin[4];

    let petsList = cardAboutPet.children[1].children[2];
    petsList.children[0].children[1].textContent = describePetOrigin[5];
    petsList.children[1].children[1].textContent = describePetOrigin[6];
    petsList.children[2].children[1].textContent = describePetOrigin[7];
    petsList.children[3].children[1].textContent = describePetOrigin[8];
}

function OpenCardPet(e) {
    if (e.target.closest('.friend').className === 'friend') {
        popUp.classList.toggle('popUp_active');
        addInfoPet(e);
        document.body.classList.toggle('lock');
    }
}

function CloseCardPet(e) {
    popUp.classList.toggle('popUp_active');
    document.body.classList.toggle('lock');
}


friendsContainers.addEventListener('click', OpenCardPet);

console.log(friendsContainer);

popUpClose.addEventListener('click', CloseCardPet);


function notClickModalWindow(e) {
    if ( popUp.classList.contains('popUp_active') && !cardAboutPet.contains(e.target) && !friendsContainers.contains(e.target)) {
        CloseCardPet();
    } 
    console.log(popUp.classList.contains('popUp_active') && !cardAboutPet.contains(e.target)  )
}



document.addEventListener('click', notClickModalWindow);


