const form = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");

const successMessage =
document.getElementById("successMessage");

function showError(input, message){

    const error =
    input.parentElement.querySelector(".error");

    error.textContent = message;

    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
}

function showSuccess(input){

    const error =
    input.parentElement.querySelector(".error");

    error.textContent = "";

    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
}

function validateName(){

    const value =
    nameInput.value.trim();

    if(value === ""){
        showError(
            nameInput,
            "Name is required"
        );
        return false;
    }

    if(value.length < 3){
        showError(
            nameInput,
            "Minimum 3 characters"
        );
        return false;
    }

    showSuccess(nameInput);
    return true;
}

function validateEmail(){

    const pattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!pattern.test(emailInput.value.trim())){
        showError(
            emailInput,
            "Enter a valid email"
        );
        return false;
    }

    showSuccess(emailInput);
    return true;
}

function validatePhone(){

    const pattern =
    /^(07|01)\d{8}$/;

    if(!pattern.test(phoneInput.value.trim())){
        showError(
            phoneInput,
            "Enter valid Kenyan number"
        );
        return false;
    }

    showSuccess(phoneInput);
    return true;
}

function validatePassword(){

    const password =
    passwordInput.value;

    const strongPassword =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

    if(!strongPassword.test(password)){

        showError(
            passwordInput,
            "8+ chars, uppercase, lowercase & number"
        );

        return false;
    }

    showSuccess(passwordInput);
    return true;
}

nameInput.addEventListener(
    "input",
    validateName
);

emailInput.addEventListener(
    "input",
    validateEmail
);

phoneInput.addEventListener(
    "input",
    validatePhone
);

passwordInput.addEventListener(
    "input",
    validatePassword
);

const inputs =
document.querySelectorAll("input");

inputs.forEach(input => {

    input.addEventListener("focus", () => {
        input.classList.add("focused");
    });

    input.addEventListener("blur", () => {
        input.classList.remove("focused");
    });

});

form.addEventListener(
    "submit",
    function(e){

        e.preventDefault();

        const validName =
        validateName();

        const validEmail =
        validateEmail();

        const validPhone =
        validatePhone();

        const validPassword =
        validatePassword();

        if(
            validName &&
            validEmail &&
            validPhone &&
            validPassword
        ){

            successMessage.textContent =
            "Registration Successful!";

            successMessage.classList.add(
                "success"
            );

            form.reset();

            document
            .querySelectorAll("input")
            .forEach(input => {
                input.classList.remove(
                    "is-valid"
                );
            });

        }

    }
);