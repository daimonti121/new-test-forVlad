const headerBtn = document.querySelector('.header__btn');
const closeBtn = document.querySelector('.rightside__content__btn');
const rightSide = document.querySelector('.rightside');



headerBtn.onclick = function () {
   rightSide.classList.toggle('hidden');
}

closeBtn.onclick = function () {
   rightSide.classList.toggle('hidden');
}


//header__mobile__btn

const menuIcon = document.querySelector('.header__mobile__btn');
const menuIconActive = document.querySelector('.menu-icon');
const sidebarToggleButton = document.querySelector('.sidebar__mobile');

menuIcon.onclick = function () {
   menuIconActive.classList.toggle('menu-icon-active');
   sidebarToggleButton.classList.toggle('hidden');
};



// Slick-slider--main

$('.top__slider').slick({
   dots: true,
   arrows: false,
   autoplay: true,
});

// Slick-slider--contact

$('.contact__slider').slick({
   dots: true,
   arrows: false,
   slidesToShow: 10,
   slidesToScroll: 10,
   responsive: [
      {
         breakpoint: 1600,
         settings: {
            slidesToShow: 8,
            slidesToScroll: 8,
         }
      },
      {
         breakpoint: 1200,
         settings: {
            slidesToShow: 4,
            slidesToScroll: 4
         }
      },
       {
         breakpoint: 768,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 3
         }
      },
       {
         breakpoint: 551,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 2
         }
      },
      {
         breakpoint: 370,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1
         }
      }
   ]
});





//Gallery


const inputBedroom = document.querySelector('#inputBedroom');
const inputLiving = document.querySelector('#inputLiving');
const inputOffice = document.querySelector('#inputOffice');
const inputDining = document.querySelector('#inputDining');
const inputChair = document.querySelector('#inputChair');


const bedroom = document.querySelector('#bedroom__items');
const living = document.querySelector('#living__items');
const office = document.querySelector('#office__items');
const dining = document.querySelector('#dining__items');
const chair = document.querySelector('#chair__items');




inputBedroom.addEventListener('click', function () {
   if (inputBedroom.checked) {
      bedroom.classList.add('hidden--gallery');
      living.classList.remove('hidden--gallery');
      office.classList.remove('hidden--gallery');
      dining.classList.remove('hidden--gallery');
      chair.classList.remove('hidden--gallery');
   }

})

inputLiving.addEventListener('click', function () {
   if (inputLiving.checked) {
      living.classList.add('hidden--gallery')
      bedroom.classList.remove('hidden--gallery');
      office.classList.remove('hidden--gallery');
      dining.classList.remove('hidden--gallery');
      chair.classList.remove('hidden--gallery');
   }

})

inputOffice.addEventListener('click', function () {
   if (inputOffice.checked) {
      office.classList.add('hidden--gallery');
      bedroom.classList.remove('hidden--gallery');
      living.classList.remove('hidden--gallery');
      dining.classList.remove('hidden--gallery');
      chair.classList.remove('hidden--gallery');
   }

})

inputDining.addEventListener('click', function () {
   if (inputDining.checked) {
      dining.classList.add('hidden--gallery');
      bedroom.classList.remove('hidden--gallery');
      living.classList.remove('hidden--gallery');
      office.classList.remove('hidden--gallery');
      chair.classList.remove('hidden--gallery');
   }

})

inputChair.addEventListener('click', function () {
   if (inputChair.checked) {
      chair.classList.add('hidden--gallery');
      bedroom.classList.remove('hidden--gallery');
      living.classList.remove('hidden--gallery');
      office.classList.remove('hidden--gallery');
      dining.classList.remove('hidden--gallery');
   }

})
