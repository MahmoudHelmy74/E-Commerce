let products = JSON.parse(localStorage.getItem('products')) || productsDB ;
let productId = JSON.parse(localStorage.getItem('editProduct'));
let getProduct = products.find(i => i.id === productId)
let productName = document.getElementById('product-name');
let productDesc = document.getElementById('product-desc');
let producSize = document.getElementById('product-size');
let updateForm = document.getElementById('update-form');
let inputFile = document.getElementById('uploadImg');
let producSizeVlue;
let producImage;

productName.value = getProduct.title;
productDesc.value = getProduct.desc;
producSize.value = getProduct.size;
producImage = getProduct.imageUrl;

//Events
producSize.addEventListener('change', getProductSizeValue);
updateForm.addEventListener('submit', updateProductFun);
inputFile.addEventListener('change', uploadImg);

function getProductSizeValue(e){
    producSizeVlue = e.target.value;
}

function updateProductFun(e){
    e.preventDefault();
    getProduct.title = productName.value;
    getProduct.desc = productDesc.value;
    getProduct.size = producSize.value;
    getProduct.imageUrl= producImage; 
    localStorage.setItem("products", JSON.stringify(products));
    setTimeout(() => {
        window.location.href = 'index.html';
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