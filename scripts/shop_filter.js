var brands = document.getElementById('brands');
var brands_menu = document.getElementById('brands_menu');
var brands_menu_curtain = document.getElementById('brands_menu_curtain');

var categories = document.getElementById('categories');
var categories_menu = document.getElementById('categories_menu');
var categories_menu_curtain = document.getElementById('categories_menu_curtain');

var price = document.getElementById('price');
var price_menu = document.getElementById('price_menu');
var price_menu_curtain = document.getElementById('price_menu_curtain');

var li_brands = document.querySelectorAll('.shop-filter__main__wrapper__box__bar__subMenu__brands > .shop-filter__main__wrapper__box__bar__subMenu__li');
var li_categories = document.querySelectorAll('.shop-filter__main__wrapper__box__bar__subMenu__categories > .shop-filter__main__wrapper__box__bar__subMenu__li');
var li_price = document.querySelectorAll('.shop-filter__main__wrapper__box__bar__subMenu__price > .shop-filter__main__wrapper__box__bar__subMenu__li');


/*Open menu*/
brands.addEventListener('click',function () {
    brands_menu.classList.remove('hidden');
    brands_menu_curtain.classList.remove('hidden');

    /*Choose filter*/
    li_brands.forEach(function(e) {
            e.addEventListener('click', function () {
                brands.textContent = e.textContent
            }, false);
        }
    );
},false);

categories.addEventListener('click',function () {
    categories_menu.classList.remove('hidden');
    categories_menu_curtain.classList.remove('hidden');

    /*Choose filter*/
    li_categories.forEach(function(e) {
            e.addEventListener('click', function () {
                categories.textContent = e.textContent
            }, false);
        }
    );
},false);

price.addEventListener('click',function () {
    price_menu.classList.remove('hidden');
    price_menu_curtain.classList.remove('hidden');

    /*Choose filter*/
    li_price.forEach(function(e) {
            e.addEventListener('click', function () {
                price.textContent = e.textContent
            }, false);
        }
    );
},false);

/*Close menu*/
brands_menu_curtain.addEventListener('click',function () {
    brands_menu.classList.add('hidden');
    brands_menu_curtain.classList.add('hidden');
},false);

categories_menu_curtain.addEventListener('click',function () {
    categories_menu.classList.add('hidden');
    categories_menu_curtain.classList.add('hidden');
},false);

price_menu_curtain.addEventListener('click',function () {
    price_menu.classList.add('hidden');
   price_menu_curtain.classList.add('hidden');
},false);

