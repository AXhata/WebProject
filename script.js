//maarrim te dhena

const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const sucess = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");


function validateForm(){

    clearMessages();
    let errorFlag = false

    if(nameInput.ariaValueMax.length < 1){
        errorNodes[0].innerText = "Emri nuk mund te jet i zbrazet";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }
    if(!emailIsValid(emri.value)){
        errorNodes[1].innerText = "Ky email nuk eshte valid ";
        email.classList.add("error-border");
        errorFlag = true;
    }
    if(message.value.length < 1){
        errorNodes[2].innerText = "Ju lutem vendosni nje messazh";
        message.classList.add("error-border");
        errorFlag = true;
    }
    if(!errorFlag){
        success.innerText = "Success!"
    }
}

function clearMessages(){
    for(let i = 0;i < errorNodes.length; i++){
        console.error[i].innerText = "";
    }
    sucess.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}

function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}