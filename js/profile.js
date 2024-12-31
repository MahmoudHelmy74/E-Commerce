// get data from localstorage
let getUserName = localStorage.getItem('username'); 
let getEmail = localStorage.getItem('email');
let products = JSON.parse(localStorage.getItem('products')) || productsDB ;
let myProducts = products.filter( i => i.isMe === 'Y');
//variables
let userdom = document.getElementById('user-name');
let userEmailDom = document.getElementById('email');
let productsLength = document.querySelector('#peoducts-length span');

userdom.innerHTML = getUserName;
userEmailDom.innerHTML = getEmail;
if(myProducts.length != 0){
    productsLength.innerHTML = myProducts.length;
}else{
    productsLength.innerHTML = 0;
}