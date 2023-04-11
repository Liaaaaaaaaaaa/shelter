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
    let stepMove = 0;

    console.log(paginationContainer.children[3]);
    console.log(e.target);

    if (e.target === paginationContainer.children[3].children[0]) {

        stepMove = 1200;
        for (let i = 0; i < sliderPetsContainer.children.length; i++) {
            let NumberLeftSlide = sliderPetsContainer.children[i].style.left;

            sliderPetsContainer.children[i].style.left = parseInt(NumberLeftSlide) - stepMove + 'px';
        }
    } else if (e.target === paginationContainer.children[4].children[0]) {

        for (let i = 0; i < sliderPetsContainer.children.length; i++) {
            let NumberLeftSlide = sliderPetsContainer.children[i].style.left;

            console.log(Math. sign(parseInt(NumberLeftSlide)));
            if(Math. sign(parseInt(NumberLeftSlide)) === '1') {
                 sliderPetsContainer.children[i].style.left = -((5-i)*1200)  + 'px';
            } else
            // if(Math. sign(NumberLeftSlide) === '-1')
             {
                sliderPetsContainer.children[i].style.left = -((5-i)*1200)  + 'px';
           }   
            
            // -(1200*i + parseInt(NumberLeftSlide))  + 'px';
        }

        // sliderPetsContainer.children[0].style.left = '6000px';
        // sliderPetsContainer.children[1].style.left = '4800px';
        // sliderPetsContainer.children[2].style.left = '3600px';
        // sliderPetsContainer.children[3].style.left = '2400px';
        // sliderPetsContainer.children[4].style.left = '1200px';
        // sliderPetsContainer.children[5].style.left = '0px';
    }


    if (sliderPetsContainer.children[5].style.left === '0px') {

        paginationContainer.children[3].children[0].disabled = 'true';
        paginationContainer.children[3].removeEventListener('click', ClickPaginationNext, false);


        paginationContainer.children[4].children[0].disabled = 'true';
        paginationContainer.children[4].removeEventListener('click', ClickPaginationNext, false);
    }
}

paginationContainer.children[3].addEventListener('click', ClickPaginationNext);

paginationContainer.children[4].addEventListener('click', ClickPaginationNext);


// function ClickPaginationNextNext () {

// }



