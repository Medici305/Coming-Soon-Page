// Declare variables 
const form = document.getElementById('form');
const email = document.getElementById('email');
const text = document.getElementById('text');
const input = document.querySelector('input');
const inputImage = document.querySelector('.input-field');

const validation = () => {
    const form = document.getElementById('form');
    const email = document.getElementById('email').value
    const text = document.getElementById('text');
    let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if(email.match(pattern)) {
        form.classList.add('valid');
        form.classList.remove('invalid');
        text.innerHTML = 'Your Email Address is Valid.';
        text.style.color = '#0f0';
    } else {
        form.classList.add('invalid');
        form.classList.remove('valid');
        text.innerHTML = 'Please Enter Valid Email Address.';
        text.style.color = '#f00';
    }
}

email.addEventListener('keydown', validation);