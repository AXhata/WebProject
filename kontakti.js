
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

function validateForm() {
    clearMessages();
    let errorFlag = false;

    if (nameInput.value.length < 1) {
        errorNodes[0].innerText = "Emri nuk mund te jet i zbrazet";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }
    if (!emailIsValid(email.value)) {
        errorNodes[1].innerText = "Ky email nuk eshte valid";
        email.classList.add("error-border");
        errorFlag = true;
    }
    if (message.value.length < 1) {
        errorNodes[2].innerText = "Ju lutem vendosni nje messazh";
        message.classList.add("error-border");
        errorFlag = true;
    }
    if (!errorFlag) {
        success.innerText = "Mesazhi u dergua me sukses";
    }
}

function clearMessages() {
    for (let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}

function emailIsValid(email) {
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}