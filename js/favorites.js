let productDom = document.querySelector('.products');
let noProductDom = document.querySelector('.noProduct');

function drawFavoriteProductUI(allproducts = []) {
    let favProduct = JSON.parse(window.localStorage.getItem('productFavorite')) || allproducts;
    if(favProduct.length === 0){
        noProductDom.innerHTML = 'there is no item !!';
    }
    let products = JSON.parse(window.localStorage.getItem('productFavorite')) || allproducts;
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
                    <button class="add-to-cart" onclick="removeFromCart(${item.id})" >Remove from favorite</button>
                </div>
            </div>
        `
    })
    productDom.innerHTML = productUI.join('');
}
drawFavoriteProductUI();

function removeFromCart(id){
    let productFavorite = window.localStorage.getItem('productFavorite');
    if(productFavorite){
        let items = JSON.parse(productFavorite);
        let fillteredItem = items.filter(item => item.id != id);
        localStorage.setItem("productFavorite", JSON.stringify(fillteredItem))
        drawFavoriteProductUI(fillteredItem)
    }
}