

// Set your secret number here
const CORRECT_NUMBER = "220923";

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("password-form");
    const numberInput = document.getElementById("number-input");
    const errorMessage = document.getElementById("error-message");

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        if (numberInput.value === CORRECT_NUMBER) {
            window.location.href = "home.html";
        } else {
            errorMessage.style.display = "block";
            errorMessage.textContent = "ไม่ถูกก็ไม่ต้องดู อิอิ";
            numberInput.value = "";
            numberInput.focus();
        }
    });
});
