"use strict";

// Declare variables 
var form = document.getElementById('form');
var email = document.getElementById('email');
var text = document.getElementById('text');
var input = document.querySelector('input');
var inputImage = document.querySelector('.input-field');

var validation = function validation() {
  var form = document.getElementById('form');
  var email = document.getElementById('email').value;
  var text = document.getElementById('text');
  var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  if (email.match(pattern)) {
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
};

email.addEventListener('keydown', validation);