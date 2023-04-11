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
// const slidePetsContainer = document.querySelector

let numberslide = 0;
let leftMoveSlide = 0;

console.log(sliderPetsContainer);

function CreatePetsContainer() {
    let newSlidePetsContainer = '<div class="slide-pets__container"> <div class="friend"><div class="friend__img-Katrine"></div><h4 class="friend__name">Katrine</h4><button class="button button__friend">Learn more</button></div><div class="friend"><div class="friend__img-Jennifer"></div><h4 class="friend__name">Jennifer</h4><button class="button button__friend">Learn more</button></div>                         <div class="friend"> <div class="friend__img-Woody"></div><h4 class="friend__name">Woody</h4><button class="button button__friend">Learn more</button></div>                 /n        <div class="friend"><div class="friend__img-Sophia"></div> <h4 class="friend__name">Sophia</h4><button class="button button__friend">Learn more</button></div><div class="friend"><div class="friend__img-Timmy"></div><h4 class="friend__name">Timmy</h4><button class="button button__friend">Learn more</button></div><div class="friend"><div class="friend__img-Charly"></div><h4 class="friend__name">Charly</h4><button class="button button__friend">Learn more</button></div><div class="friend"><div class="friend__img-Scarlett"></div><h4 class="friend__name">Scarlett</h4><button class="button button__friend">Learn more</button></div><div class="friend"><div class="friend__img-Freddie"></div><h4 class="friend__name">Freddie</h4><button class="button button__friend">Learn more</button></div>';

    sliderPetsContainer.insertAdjacentHTML('beforeend', newSlidePetsContainer);


}

CreatePetsContainer();
CreatePetsContainer();
CreatePetsContainer();
CreatePetsContainer();
CreatePetsContainer();

console.log(sliderPetsContainer.children.length);

for (let i = 0; i < sliderPetsContainer.children.length; i++) {
    sliderPetsContainer.children[i].style.left = 1200 * i + 'px';
}

console.log(paginationContainer)
console.log(paginationContainer.children[3]);

function ClickPaginationNext(e) {

    Array.from(paginationContainer.children).forEach(e => e.children[0].disabled = '');

    let stepMove = 0;

    console.log(paginationContainer.children[3]);
    console.log(e.target);

    if (e.target === paginationContainer.children[3].children[0]) {

        stepMove = 1200;
        for (let i = 0; i < sliderPetsContainer.children.length; i++) {
            let NumberLeftSlide = sliderPetsContainer.children[i].style.left;

            sliderPetsContainer.children[i].style.left = parseInt(NumberLeftSlide) - stepMove + 'px';
        }

        paginationContainer.children[2].children[0].textContent = +(paginationContainer.children[2].children[0].textContent) + 1 ;


    } else if (e.target === paginationContainer.children[4].children[0]) {

        for (let i = 0; i < sliderPetsContainer.children.length; i++) {
            let NumberLeftSlide = sliderPetsContainer.children[i].style.left;

            console.log(Math.sign(parseInt(NumberLeftSlide)));
            if (Math.sign(parseInt(NumberLeftSlide)) === '1') {
                sliderPetsContainer.children[i].style.left = -((5 - i) * 1200) + 'px';
            } else {
                sliderPetsContainer.children[i].style.left = -((5 - i) * 1200) + 'px';
            }

            paginationContainer.children[2].children[0].textContent = '6';
        }

    }


    if (sliderPetsContainer.children[5].style.left === '0px') {

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

    let stepMove = 0;

    if (e.target === paginationContainer.children[1].children[0]) {

        stepMove = 1200;
        for (let i = 0; i < sliderPetsContainer.children.length; i++) {
            let NumberLeftSlide = sliderPetsContainer.children[i].style.left;

            sliderPetsContainer.children[i].style.left = parseInt(NumberLeftSlide) + stepMove + 'px';
        }
        paginationContainer.children[2].children[0].textContent = +(paginationContainer.children[2].children[0].textContent) - 1 ;

    } else if (e.target === paginationContainer.children[0].children[0]) {

        for (let i = 0; i < sliderPetsContainer.children.length; i++) {
            // let NumberLeftSlide = sliderPetsContainer.children[i].style.left;

            sliderPetsContainer.children[i].style.left =   i*1200 + 'px';
        }

        paginationContainer.children[2].children[0].textContent = '0';
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



