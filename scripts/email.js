var email_button = document.getElementById('email_button');
var array = [];

email_button.addEventListener('click',function () {
    event.preventDefault();
    var email_text = document.getElementById('email_text').value;
    array.push({
        email: email_text,
    });
    localStorage.setItem('array',JSON.stringify(array));
},false);
