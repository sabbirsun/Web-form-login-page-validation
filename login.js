let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let password2 = document.querySelector("#password2"); // Corrected typo in the selector
let form = document.querySelector("#form");

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerHTML = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function checkMail(input) {
    const RegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (RegEx.test(input.value)) {
        showSuccess(input);
    } else {
        showError(input, "Email is not validated"); // Corrected typo in the error message
    }
}

function checkInputLength(input, min, max) { // Corrected typo in the function name
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputLength(username, 3, 20);
    checkInputLength(password, 6, 30);
    checkMail(email);
    checkPasswordMatch(password, password2);
});
