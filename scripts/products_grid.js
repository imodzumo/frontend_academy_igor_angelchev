var blocks_grid = document.getElementById('blocks_grid');
var column_grid = document.getElementById('column_grid');
var products_grid = document. getElementById('products_grid');

column_grid.addEventListener('click',function () {
    products_grid.classList.add('width-300');
},false);

blocks_grid.addEventListener('click',function () {
    products_grid.classList.remove('width-300');
},false);



