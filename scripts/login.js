var login = document.getElementById('login');
var loginBar = document.getElementById('login_bar');
var curtain = document.getElementById('curtain');

login.addEventListener('click',function () {
    loginBar.classList.remove('hidden');
},false);
curtain.addEventListener('click', function () {
    loginBar.classList.add('hidden');
},false);