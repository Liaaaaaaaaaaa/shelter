// import MainJS from '../../main.js' assert {
//     type: "js"
// }; 

// function include(url) {
//     var script = document.createElement('script');
//     script.src = url;
//     document.getElementsByTagName('head')[0].appendChild(script);
// }

// include("../../main.js");


// import petsFile from '../../json/pets.json' assert {
//     type: "json"
// };

// console.log(petsFile);




//-----------------PAGINATION--------------------
const sliderPetsContainer = document.querySelector('.slider-pets__container');
const paginationContainer = document.querySelector('.pagination__container');
const slidePetsContainer = document.querySelector(".slide-pets__container");

let numberslide = 0;
let leftMoveSlide = 0;

// console.log(sliderPetsContainer);

function CreatePetsContainer() {
    let newSlidePetsContainer = slidePetsContainer.cloneNode(true);

    // console.log(newSlidePetsContainer);

    sliderPetsContainer.insertAdjacentElement('beforeend', newSlidePetsContainer);
}

CreatePetsContainer();
CreatePetsContainer();
CreatePetsContainer();
CreatePetsContainer();
CreatePetsContainer();



// console.log(sliderPetsContainer.children.length);

let stepMove = 0;
let numberSlidesNeed = 0;

if (screen.width > 800) {
    stepMove = 1200;
    numberSlidesNeed = 6;
}

if (screen.width < 800 && screen.width > 400) {
    stepMove = 580;
    CreatePetsContainer();
    CreatePetsContainer();

    numberSlidesNeed = 8;
}

if (screen.width < 400) {
    stepMove = 270;
    CreatePetsContainer();
    CreatePetsContainer();
    CreatePetsContainer();
    CreatePetsContainer();
    CreatePetsContainer();

    CreatePetsContainer();
    CreatePetsContainer();
    CreatePetsContainer();
    CreatePetsContainer();
    CreatePetsContainer();


    numberSlidesNeed = 16;
}

for (let i = 0; i < sliderPetsContainer.children.length; i++) {
    sliderPetsContainer.children[i].style.left = stepMove * i + 'px';
}

// console.log(paginationContainer)
// console.log(paginationContainer.children[3]);

function ClickPaginationNext(e) {

    Array.from(paginationContainer.children).forEach(e => e.children[0].disabled = '');

    // console.log(paginationContainer.children[3]);
    // console.log(e.target);

    if (e.target === paginationContainer.children[3].children[0]) {

        // console.log(screen.width)
        // console.log(stepMove)

        for (let i = 0; i < sliderPetsContainer.children.length; i++) {
            let NumberLeftSlide = sliderPetsContainer.children[i].style.left;

            sliderPetsContainer.children[i].style.left = parseInt(NumberLeftSlide) - stepMove + 'px';
        }

        paginationContainer.children[2].children[0].textContent = +(paginationContainer.children[2].children[0].textContent) + 1;


    } else if (e.target === paginationContainer.children[4].children[0]) {

        for (let i = 0; i < sliderPetsContainer.children.length; i++) {
            let NumberLeftSlide = sliderPetsContainer.children[i].style.left;

            console.log(Math.sign(parseInt(NumberLeftSlide)));
            if (Math.sign(parseInt(NumberLeftSlide)) === '1') {
                sliderPetsContainer.children[i].style.left = -((numberSlidesNeed - 1 - i) * stepMove) + 'px';
            } else {
                sliderPetsContainer.children[i].style.left = -((numberSlidesNeed - 1 - i) * stepMove) + 'px';
            }

            paginationContainer.children[2].children[0].textContent = numberSlidesNeed;
        }

    }


    if (sliderPetsContainer.children[numberSlidesNeed - 1].style.left === '0px') {

        paginationContainer.children[3].children[0].disabled = 'true';
        // paginationContainer.children[3].removeEventListener('click', ClickPaginationNext, false);

        paginationContainer.children[4].children[0].disabled = 'true';
        // paginationContainer.children[4].removeEventListener('click', ClickPaginationNext, false);
    }



}

paginationContainer.children[3].addEventListener('click', ClickPaginationNext);

paginationContainer.children[4].addEventListener('click', ClickPaginationNext);



function ClickPaginationPrev(e) {

    Array.from(paginationContainer.children).forEach(e => e.children[0].disabled = '');

    if (e.target === paginationContainer.children[1].children[0]) {

        for (let i = 0; i < sliderPetsContainer.children.length; i++) {
            let NumberLeftSlide = sliderPetsContainer.children[i].style.left;

            sliderPetsContainer.children[i].style.left = parseInt(NumberLeftSlide) + stepMove + 'px';
        }
        paginationContainer.children[2].children[0].textContent = +(paginationContainer.children[2].children[0].textContent) - 1;

    } else if (e.target === paginationContainer.children[0].children[0]) {

        for (let i = 0; i < sliderPetsContainer.children.length; i++) {

            sliderPetsContainer.children[i].style.left = i * stepMove + 'px';
        }

        paginationContainer.children[2].children[0].textContent = '1';
    }


    if (sliderPetsContainer.children[0].style.left === '0px') {

        paginationContainer.children[0].children[0].disabled = 'true';
        // paginationContainer.children[0].removeEventListener('click', ClickPaginationPrev, false);


        paginationContainer.children[1].children[0].disabled = 'true';
        // paginationContainer.children[1].removeEventListener('click', ClickPaginationPrev, false);
    }


}

paginationContainer.children[0].addEventListener('click', ClickPaginationPrev);

paginationContainer.children[1].addEventListener('click', ClickPaginationPrev);


//-----Massive---pets--------------------------

import petsFile from '../../json/pets.json' assert {
    type: "json"
};

let MassivePetFile = petsFile.map(e => Object.values(e));
let MassivePetsPagination = MassivePetFile.concat(MassivePetFile).concat(MassivePetFile).concat(MassivePetFile).concat(MassivePetFile).concat(MassivePetFile);

// console.log(MassivePetsPagination);


function petsContainerCenterNamePets() {
    return Array.from(sliderPetsContainer.children[1].children).map(e => e.children[1].textContent);
}

// console.log(petsContainerCenterNamePets() );

function randomPets() {
    return Math.trunc(Math.random() * (8 - 0) + 0)
};

// console.log(randomPets())

// function petsFileSelected() {
//     return MassivePetFile.filter(elem => !friendsContainerCenterNamePets().includes(elem[0]));
// }


function randomPetsNumber() {
    let randomPetsEight = new Set();
    for (let i = 0; randomPetsEight.size < 8; i++) {
        randomPetsEight.add(randomPets());
    }
    return randomPetsEight;
}

// console.log(randomPetsNumber())

// numberSlidesNeed

// const friendsInContainer = friendsContainers.children[0];
// const friendsCountInConteiner = friendsContainers.children[0].children;

// const sliderPetsContainer = document.querySelector('.slider-pets__container');
// const paginationContainer = document.querySelector('.pagination__container');
// const slidePetsContainer = document.querySelector(".slide-pets__container");


function AddNewPets(numberFriendsContainer) {
    let a = MassivePetFile;
    let b = Array.from(randomPetsNumber());

    console.log(MassivePetFile);

    // console.log(  sliderPetsContainer.children[numberFriendsContainer].children[0].children[0].className);
    // console.log(sliderPetsContainer.children[0].children[0].children[1].innerText);
    console.log(randomPetsNumber())
    console.log(((a[b[7]])));

    for (let i = 0; i < slidePetsContainer.children.length ; i++) {
        sliderPetsContainer.children[numberFriendsContainer].children[i].children[0].className = 'friend__img-' + ((a[b[i]][0]));
        sliderPetsContainer.children[numberFriendsContainer].children[i].children[1].innerText = (a[b[i]][0]);
    }
}
console.log(slidePetsContainer.children.length);

for(let i = 1; i < slidePetsContainer.children.length; i++){
    AddNewPets(i);
}

