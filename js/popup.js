const prizeForm = document.getElementById("prize-popup");
const openBtn = document.querySelector("#popup-open");
const closeBtn = document.querySelector("#popup-close");
const nameInputWrapper = document.querySelector(
    "#prize-popup input[name='name']"
).parentNode;
const emailInputWrapper = document.querySelector(
    "#prize-popup input[name='e-mail']"
).parentNode;
const prizeSelect = document.querySelector('#choose-prize');

const INPUT_ERROR_CLASS = "st-input1_error";
const INPUT_FOCUS_CLASS = "st-input1_focused";
function popupToggle() {
    prizeForm.classList.toggle("hidden");
}
function initializeField(field) {
    const input = field.getElementsByTagName('input')[0];
    const errorText = field.querySelector('.st-input1__error-msg');
    clearError();
    field.classList.remove(INPUT_FOCUS_CLASS);
    input.value = '';

    function clearError() {
        field.classList.remove(INPUT_ERROR_CLASS);
        errorText.innerText = '';
    }
    input.addEventListener('focus', function () {
        field.classList.add(INPUT_FOCUS_CLASS);
    });
    input.addEventListener('input', function () {
        clearError();
    });
    input.addEventListener('blur', function () {
        if (!input.value) {
            field.classList.remove(INPUT_FOCUS_CLASS);
        }
    });

    return {
        focus() {
            input.focus();
        },
        getValue() {
            return input.value;
        },
        setError(error) {
            errorText.innerText = error;
            field.classList.add(INPUT_ERROR_CLASS);
        },
    };
}

const nameField = initializeField(nameInputWrapper);
const emailField = initializeField(emailInputWrapper);

openBtn.onclick = function () {
    popupToggle();
    nameField.focus();
};

closeBtn.onclick = popupToggle;
prizeForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameValue = nameField.getValue();
    const emailValue = emailField.getValue();

    if (!nameValue) {
        nameField.setError("Поле обязательно для заполнения");
        nameField.focus();
        return;
    }
    if (!emailValue) {
        emailField.setError("Поле обязательно для заполнения");
        nameField.focus();
        return;
    }
    if (prizeSelect.value === 'none'){
        prizeSelect.classList.add(INPUT_ERROR_CLASS);
        return;
    }
    const data = {
        name: nameValue,
        email: emailValue,
        prize: prizeSelect.value,
    }
    const url = new URL('http://inno-ijl.ru/multystub/stc-21/feedback');
    url.searsh = new URLSearchParams(data).toString();
    fetch(url.toString());
});
