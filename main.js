function validateLogin(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (email === "" || password === "") {
        errorMessage.style.display = 'block';
        errorMessage.textContent = "You must enter your email or password";
        return;
    }

    const validEmail = "khalel.jbour.12@gmail.com";
    const validPassword = "khalel1596";

    if (email === validEmail && password === validPassword) {
        window.location.href = "welcome.html";
    } else {
        errorMessage.style.display = 'block';
        errorMessage.textContent =  "The email or password is incorrect";
    }
}

function restrictToEnglish(event) {
    const charCode = event.which || event.keyCode;
    const charStr = String.fromCharCode(charCode);
    const isEnglish = /^[A-Za-z0-9@._-]+$/.test(charStr);

    if (!isEnglish) {
        event.preventDefault();
    }
}

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const togglePasswordIcon = document.getElementById('toggle-password');

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePasswordIcon.classList.remove('fa-eye');
        togglePasswordIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = "password";
        togglePasswordIcon.classList.remove('fa-eye-slash');
        togglePasswordIcon.classList.add('fa-eye');
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const loginButton = document.querySelector('button.submit');
    loginButton.addEventListener('click', validateLogin);

    const emailInput = document.getElementById('email');
    emailInput.addEventListener('keypress', restrictToEnglish);

    const togglePasswordIcon = document.getElementById('toggle-password');
    togglePasswordIcon.addEventListener('click', togglePasswordVisibility);
});
