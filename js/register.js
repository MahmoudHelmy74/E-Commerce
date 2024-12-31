let userName = document.querySelector("#userName");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let registerBtn = document.querySelector("#sign-up");

registerBtn.addEventListener("click", register);

function register(e) {
    e.preventDefault();
    if (userName.value === '' || email.value === '' || password.value === '') {
        window.alert('Please Fill Date')
    } else {
        window.localStorage.setItem('username', userName.value);
        window.localStorage.setItem('email', email.value);
        window.localStorage.setItem('password', password.value);
        setTimeout(() => {
            window.location.href = 'login.html'
        }, 1500)
    }
}