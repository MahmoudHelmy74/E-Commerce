let userInfo = document.querySelector('#user-info');
let userDom = document.querySelector('#user');
let Links = document.querySelector('#links');
let logoutBtn = document.querySelector('#logout');

let userName = window.localStorage.getItem("username");
if (userName) {
    Links.remove()
    userInfo.style.display = 'flex';
    userDom.innerHTML = userName;
}

logoutBtn.addEventListener("click", () => {
    window.localStorage.clear();
    setTimeout(() => {
        window.location.href = 'register.html';
    }, 1500)
})