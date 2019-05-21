var block_pink_shoes = document.getElementById('block_pink_shoes');
var pink_shoes_slider = document.getElementById('pink_shoes_slider');
var pink_shoes_title = document.getElementById('pink_shoes_title');
var pink_shoes_text = document.getElementById('pink_shoes_text');

var block_anna_field = document.getElementById('block_anna_field');
var anna_field_slider = document.getElementById('anna_field_slider');
var anna_field_title = document.getElementById('anna_field_title');
var anna_field_text = document.getElementById('anna_field_text');

var block_prada = document.getElementById('block_prada');
var prada_slider = document.getElementById('prada_slider');
var prada_title = document.getElementById('prada_title');
var prada_text = document.getElementById('prada_text');


block_pink_shoes.addEventListener('click',function () {
    pink_shoes_slider.classList.remove('slider-main__home__wrapper__pink-shoes__head__active');
    pink_shoes_title.classList.remove('slider-main__home__wrapper__pink-shoes__title__active');
    pink_shoes_text.classList.remove('slider-main__home__wrapper__pink-shoes__text__active');

    block_anna_field.addEventListener('click', function () {
        anna_field_slider.classList.add('slider-main__home__wrapper__anna-field__head__active');
        anna_field_title.classList.add('slider-main__home__wrapper__anna-field__title__active');
        anna_field_text.classList.add('slider-main__home__wrapper__anna-field__text__active');
    },false);

    block_prada.addEventListener('click', function () {
        prada_slider.classList.add('slider-main__home__wrapper__prada__head__active');
        prada_title.classList.add('slider-main__home__wrapper__prada__title__active');
        prada_text.classList.add('slider-main__home__wrapper__prada__text__active');
    },false);

},false);



block_anna_field.addEventListener('click',function () {
    anna_field_slider.classList.remove('slider-main__home__wrapper__anna-field__head__active');
    anna_field_title.classList.remove('slider-main__home__wrapper__anna-field__title__active');
    anna_field_text.classList.remove('slider-main__home__wrapper__anna-field__text__active');

    block_pink_shoes.addEventListener('click', function () {
        pink_shoes_slider.classList.add('slider-main__home__wrapper__pink-shoes__head__active');
        pink_shoes_title.classList.add('slider-main__home__wrapper__pink-shoes__title__active');
        pink_shoes_text.classList.add('slider-main__home__wrapper__pink-shoes__text__active');
    },false);

    block_prada.addEventListener('click', function () {
        prada_slider.classList.add('slider-main__home__wrapper__prada__head__active');
        prada_title.classList.add('slider-main__home__wrapper__prada__title__active');
        prada_text.classList.add('slider-main__home__wrapper__prada__text__active');
    },false);

},false);


block_prada.addEventListener('click',function () {
    prada_slider.classList.remove('slider-main__home__wrapper__prada__head__active');
    prada_title.classList.remove('slider-main__home__wrapper__prada__title__active');
    prada_text.classList.remove('slider-main__home__wrapper__prada__text__active');

    block_pink_shoes.addEventListener('click', function () {
        pink_shoes_slider.classList.add('slider-main__home__wrapper__pink-shoes__head__active');
        pink_shoes_title.classList.add('slider-main__home__wrapper__pink-shoes__title__active');
        pink_shoes_text.classList.add('slider-main__home__wrapper__pink-shoes__text__active');
    },false);

    block_anna_field.addEventListener('click', function () {
        anna_field_slider.classList.add('slider-main__home__wrapper__anna-field__head__active');
        anna_field_title.classList.add('slider-main__home__wrapper__anna-field__title__active');
        anna_field_text.classList.add('slider-main__home__wrapper__anna-field__text__active');
    },false);

},false);
