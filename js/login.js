let userName = document.querySelector("#userName");
let password = document.querySelector("#password");
let loginBtn = document.querySelector("#sign-in");
let getUser = window.localStorage.getItem('username');
let getPassword = window.localStorage.getItem('password');

loginBtn.addEventListener("click", login);

function login(e) {
    e.preventDefault();
    if (userName.value === '' || password.value === '') {
        window.alert('Please Fill Date')
    } else {
        if (getUser && getUser.trim() === userName.value && getPassword && getPassword.trim() === password.value) {
            setTimeout(() => {
                window.location.href = 'index.html'
            }, 1500)
        } else {
            console.log('false')
        }
    }
}