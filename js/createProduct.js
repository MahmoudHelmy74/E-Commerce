let productName = document.getElementById('product-name');
let productDesc = document.getElementById('product-desc');
let producSize = document.getElementById('product-size');
let createForm = document.getElementById('create-form');
let inputFile = document.getElementById('uploadImg');
let producSizeVlue;
let producImage;

//Events
producSize.addEventListener('change', getProductSizeValue);
createForm.addEventListener('submit', createProductFun);
inputFile.addEventListener('change', uploadImg);

function getProductSizeValue(e){
    producSizeVlue = e.target.value;
}

function createProductFun(e){
    e.preventDefault();
    let allPeoduct = JSON.parse(localStorage.getItem('products')) || productsDB;
    let nameValue = productName.value;
    let descValue = productDesc.value;
    let obj = {
        id: allPeoduct ? allPeoduct.length + 1 : 1,
        imageUrl: producImage,
        title: nameValue,
        desc: descValue,
        size: producSizeVlue,
        qnt: 1,
        isMe : 'Y'
    };
    let newProduct = allPeoduct ? [...allPeoduct, obj] : [obj] ;
    localStorage.setItem("products", JSON.stringify(newProduct));
    productName.value = '';
    productDesc.value = '';
    producSizeVlue.value = '';
    setTimeout(() => {
        window.location = 'index.html';
    }, 500);
}

let preview;
function uploadImg(){
    let file = this.files[0];
    let types = ['image/jpeg', 'image/png'];
    if(types.indexOf(file.type) == -1){
        alert('type not supported')
    };
    if(file.size > 2 * 1024 * 1024){
        alert('size not supported')
    };
    getImageBase64(file)
}

function getImageBase64(file){
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(){
        producImage = reader.result;
    };
    reader.onerror = function(){
        alert('Error !!');
    }
}