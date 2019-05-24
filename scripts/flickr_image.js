var flickr = document.querySelectorAll('.footer-main__wrapper__flickr__img');
var flickr__image__bar = document.querySelectorAll('.flickr__image__bar');
var flickr__image__bar__curtain = document.querySelectorAll('.flickr__image__bar__curtain');



flickr.forEach(function(el) {
        el.addEventListener('click', function () {
            el.nextElementSibling.classList.remove('hidden');
        }, false);

    }
);

flickr__image__bar__curtain.forEach(function(el) {
        el.addEventListener('click', function () {
            el.parentElement.classList.add('hidden');
        }, false);
    }
);
