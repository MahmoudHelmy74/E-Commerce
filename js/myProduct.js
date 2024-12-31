let productDom = document.querySelector(".products");
let NOproductDom = document.querySelector(".noProduct");

//display product
let drawProduct;
(drawProduct = function (products = []) {
    let myProdyucts = products.filter(item => item.isMe === 'Y' );
    if(myProdyucts.length != 0){
        let productUI = myProdyucts.map((item) => {
            return `
                    <div class="product-item" style= "border : ${item.isMe === 'Y' ? '1px solid green' : ''}">
                        <img src="${item.imageUrl}" alt="somthing wrong..." class="product-item-img">
                        <div class="product-item-desc">
                            <a onclick= 'saveItemId(${item.id})'>${item.title}</a>
                            <p>${item.desc}</p>
                            <span>size : ${item.size}</span>
                            <button class="edit-product" onclick="editProduct(${item.id})">Edit Product</button>
                            <button class="edit-product" onclick="deleteProduct(${item.id})">Delete Product</button>
                        </div>
                    </div>
                `;
          });
          productDom.innerHTML = productUI.join('');
    }else{
        NOproductDom.innerHTML = 'NO Products !!';
    }
    
})(JSON.parse(window.localStorage.getItem('products')) || productsDB);

// edit product
function editProduct(id){
    localStorage.setItem('editProduct', id);
    window.location= 'editProduct.html';
}

//delete product
function deleteProduct(id){
    let products = JSON.parse(window.localStorage.getItem('products')) || productsDB;
    let myProdyucts = products.filter(item => item.isMe === 'Y' );
    let filterd = myProdyucts.filter(i => i.id !== id);
    let clickItem =  myProdyucts.find(i => i.id === id);
    products =  products.filter(i => i.id !== clickItem.id);
    localStorage.setItem('products', JSON.stringify(products));
    drawProduct(filterd);
}