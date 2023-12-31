function validation() {
    var emri = document.formfill.Emri.value;
    var email = document.formfill.Email.value;
    var fjalekalimi = document.formfill.Fjalekalimi.value;
    var konfirmimi = document.formfill.Konfirmimi.value;

    if (emri.length < 3) {
        alert('Emri duhet të ketë së paku 3 shkronja!');
        return false;
    }

    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
        alert('Ju lutem shenoni një Email Adresë valide!');
        return false;
    }

    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(fjalekalimi)) {
        alert('Fjalëkalimi duhet të ketë së paku 8 karaktere dhe të përmbajë një kombinim të shkronjave (të vogla dhe të mëdha), numrave, dhe karaktereve speciale!');
        return false;
    }

    if (konfirmimi === "") {
        alert('Konfirmoni Fjalekalimin*');
        return false;
    } else if (fjalekalimi !== konfirmimi) {
        alert('Fjalëkalimet nuk korrespondojnë mes vete!');
        return false;
    }

    popup.classList.add("open-slide");
    return false;
}

function closePopup() {
    var popup = document.getElementById('popup');
    popup.classList.remove("open-slide");
}

var OKButton = document.querySelector("#popup button");

OKButton.addEventListener("click", function () {
    closePopup();
});
