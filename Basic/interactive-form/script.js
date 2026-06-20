const form = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");

const successMessage = document.getElementById("successMessage");


// NAME VALIDATION
function validateName() {
    const value = nameInput.value.trim();

    if (value === "") {
        showError(nameInput, "Name is required");
        return false;
    }

    if (value.length < 3) {
        showError(nameInput, "Name must be at least 3 characters");
        return false;
    }

    showSuccess(nameInput);
    return true;
}


// EMAIL VALIDATION
function validateEmail() {
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value.trim())) {
        showError(emailInput, "Enter a valid email");
        return false;
    }

    showSuccess(emailInput);
    return true;
}


// PHONE VALIDATION
function validatePhone() {
    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phoneInput.value.trim())) {
        showError(phoneInput, "Phone must be 10 digits");
        return false;
    }

    showSuccess(phoneInput);
    return true;
}


// PASSWORD VALIDATION
function validatePassword() {
    const password = passwordInput.value;

    if (password.length < 8) {
        showError(passwordInput,
            "Password must be at least 8 characters");
        return false;
    }

    showSuccess(passwordInput);
    return true;
}


// DISPLAY ERROR
function showError(input, message) {
    const error =
        input.parentElement.querySelector(".error");

    error.textContent = message;

    input.style.borderColor = "red";
}


// DISPLAY SUCCESS
function showSuccess(input) {
    const error =
        input.parentElement.querySelector(".error");

    error.textContent = "";

    input.style.borderColor = "green";
}


// REAL-TIME VALIDATION
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
phoneInput.addEventListener("input", validatePhone);
passwordInput.addEventListener("input", validatePassword);


// FOCUS EVENTS
const inputs = document.querySelectorAll("input");

inputs.forEach(input => {

    input.addEventListener("focus", () => {
        input.classList.add("focused");
    });

    input.addEventListener("blur", () => {
        input.classList.remove("focused");
    });

});


// FORM SUBMISSION
form.addEventListener("submit", function(e){

    e.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isPasswordValid = validatePassword();

    if(
        isNameValid &&
        isEmailValid &&
        isPhoneValid &&
        isPasswordValid
    ){
        successMessage.textContent =
            "Form submitted successfully!";

        successMessage.classList.add("success");

        form.reset();
    }
});