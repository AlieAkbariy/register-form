// Get the form and add a submit event listener
const form = document.querySelector('form');

// Get the form fields
const username = form.querySelector('#username');
const phone = form.querySelector('#phone')
const email = form.querySelector('#email');
const password = form.querySelector('#password');
const confirm = form.querySelector('#confirm_password');
const emailValidationFalse = form.querySelector('#emailValidationFalse');
const passwordValidationFalse = form.querySelector('#passwordValidationFalse');
const submit = form.querySelector('#submit');

let usernameValid = false;
let phoneValid = false;
let emailValid = false;
let passwordValid = false;
let confirmValid = false;

form.addEventListener('input', () => {
    if (usernameValid && phoneValid && emailValid && passwordValid && confirmValid){
        submit.disabled = false;
    }else{
        submit.disabled = true;
    }
});

username.addEventListener('input', () => {
    if (username.value === ''){
        username.classList.add('invalid');
        username.nextElementSibling.innerHTML = 'Username is required';
        usernameValid = false;
    }else{
        username.classList.remove('invalid');
        username.nextElementSibling.innerHTML = '';
        usernameValid = true;
    }
});

phone.addEventListener('input', () =>{
    if (phone.value === '' || !validatePhone(phone.value)){
        phone.classList.add('invalid');
        phone.nextElementSibling.innerHTML = 'Phone is required or invalid';
        phoneValid = false;
    }else {
        phone.classList.remove('invalid');
        phone.nextElementSibling.innerHTML = '';
        phoneValid = true;
    }
});

email.addEventListener('input', () =>{
    if ((email.value === '' || !validateEmail(email.value)) && !emailValidationFalse.checked){
        email.classList.add('invalid');
        email.nextElementSibling.innerHTML = 'Email is required or invalid';
        emailValid = false;
    }else {
        email.classList.remove('invalid');
        email.nextElementSibling.innerHTML = '';
        emailValid = true;
    }
});


password.addEventListener('input', () =>{
    if (password.value.length < 8 && !passwordValidationFalse.checked){
        password.classList.add('invalid');
        password.nextElementSibling.innerHTML = 'Password must be at least 8 characters';
        passwordValid = false;

    }else if (!hasUpperCase(password.value) && !passwordValidationFalse.checked){
        password.classList.add('invalid');
        password.nextElementSibling.innerHTML = 'Password must have at least one upper letter';
        passwordValid = false;
    
    }else {
        password.classList.remove('invalid');
        password.nextElementSibling.innerHTML = '';
        passwordValid = true;
    }
});

confirm.addEventListener('input', () => {
    if (password.value !== confirm.value){
        confirm.classList.add('invalid');
        confirm.nextElementSibling.innerHTML = 'Passwords must match';
        confirmValid = false;
    }else{
        confirm.classList.remove('invalid');
        confirm.nextElementSibling.innerHTML = '';
        confirmValid = true;
    }
});



//email validation function
function validateEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

// phone validation
function validatePhone(phone) {
    const regex = /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/;
    return regex.test(phone)
}

function hasUpperCase(str) {
    for (var i = 0; i < str.length; i++) {
      if (str[i] === str[i].toUpperCase() && isNaN(str[i])) {
        return true;
      }
    }
    return false;
  }