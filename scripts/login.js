var login = document.getElementById('login');
var loginBar = document.getElementById('login_bar');
var curtain = document.getElementById('curtain');
var close = document.getElementById('close');

login.addEventListener('click',function () {
    loginBar.classList.remove('hidden');
},false);
curtain.addEventListener('click', function () {
    loginBar.classList.add('hidden');
},false);
close.addEventListener('click', function () {
    loginBar.classList.add('hidden');
},false);