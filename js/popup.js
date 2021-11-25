const prizeForm = document.getElementById("prize-popup");
const openBtn = document.querySelector("#popup-open");
const closeBtn = document.querySelector("#popup-close");
const nameInputWrapper = document.querySelector("#prize-popup input[name='name']").parentNode;
const emailInputWrapper = document.querySelector("#prize-popup input[name='e-mail']").parentNode;
function popupToggle() {
    prizeForm.classList.toggle("hidden");
}
// function initializeField(field) {
//     const input = field.getElementByTagName('input')[0];
//     const errorText = field.querySelector('st-input1__error-msg');
//     input.value = '';
//     errorText.innerText = '';
// }

// initializeField(nameInputWrapper);
// initializeField(emailInputWrapper);
openBtn.onclick = popupToggle;
closeBtn.onclick = popupToggle;
