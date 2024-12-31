let productDom = document.querySelector('.products');
let noProductDom = document.querySelector('.noProduct');

function drawProductUI(allproducts = []) {
    if(JSON.parse(window.localStorage.getItem('productsInCert')).length === 0){
        noProductDom.innerHTML = 'there is no item !!';
    }

    let products = JSON.parse(window.localStorage.getItem('productsInCert')) || allproducts;
    let productUI = products.map((item) => {
        return `
            <div class="product-item">
                <img src="${item.imageUrl}" alt="somthing wrong..." class="product-item-img">
                <div class="product-item-desc">
                    <h2>${item.title}</h2>
                    <p>${item.desc}</p>
                    <span>size : ${item.size}</span><br>
                    <span>Quantity : ${item.qnt}</span>

                </div>
                <div class="product-item-action">
                    <button class="add-to-cart" onclick='removeFromCart(${item.id})'>Remove from cart</button>
                </div>
            </div>
        `
    })
    productDom.innerHTML = productUI.join('');
}
drawProductUI();
 
function removeFromCart(id){
    let productInCart = window.localStorage.getItem('productsInCert');
    if(productInCart){
        let items = JSON.parse(productInCart);
        let fillteredItem = items.filter(item => item.id != id);
        localStorage.setItem("productsInCert", JSON.stringify(fillteredItem))
        drawProductUI(fillteredItem)
    }
}