"use strict";

var prizeForm = document.getElementById("prize-popup");
var openBtn = document.querySelector("#popup-open");
var closeBtn = document.querySelector("#popup-close");
var nameInputWrapper = document.querySelector("#prize-popup input[name='name']").parentNode;
var emailInputWrapper = document.querySelector("#prize-popup input[name='e-mail']").parentNode;

function popupToggle() {
  prizeForm.classList.toggle("hidden");
} // function initializeField(field) {
//     const input = field.getElementByTagName('input')[0];
//     const errorText = field.querySelector('st-input1__error-msg');
//     input.value = '';
//     errorText.innerText = '';
// }
// initializeField(nameInputWrapper);
// initializeField(emailInputWrapper);


openBtn.onclick = popupToggle;
closeBtn.onclick = popupToggle;