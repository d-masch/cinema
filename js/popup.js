const prizeForm = document.getElementById("prize-popup");
const openBtn = document.querySelector("#popup-open");
const closeBtn = document.querySelector("#popup-close");
const nameFieldDom = document.querySelector(
    "#prize-popup input[name='name']"
).parentNode;
const emailField = document.querySelector(
    "#prize-popup input[name='e-mail']"
).parentNode;
function popupToggle() {
    prizeForm.classList.toggle("hidden");
}
// function initializeField(field) {
//     const input = field.getElementByTagName("input")[0];
// }
// initializeField(nameField);
// initializeField(emailField);
openBtn.onclick = popupToggle;
closeBtn.onclick = popupToggle;
