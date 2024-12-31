//define product
let productDom = document.querySelector(".products");
let products = productsDB;

//display product
let drawProduct;
(drawProduct = function (products = []) {
  let productUI = products.map((item) => {
    return `
            <div class="product-item" style= "border : ${item.isMe === 'Y' ? '1px solid green' : ''}">
                <img src="${item.imageUrl}" alt="somthing wrong..." class="product-item-img">
                <div class="product-item-desc">
                    <a onclick= 'saveItemId(${item.id})'>${item.title}</a>
                    <p>${item.desc}</p>
                    <span>size : ${item.size}</span>
                    ${item.isMe === 'Y' ? '<button class="edit-product" onclick="editProduct('+ item.id +')">Edit Product</button>' : ''}
                </div>
                <div class="product-item-action">
                    <button class="add-to-cart" onclick='addcart(${item.id})'>Add to cart</button>
                    <i class="favorite fa-regular fa-heart" onclick='addtofavorite(${item.id})' style="color:${item.liked == true ? 'red' : ''}"></i>
                </div>
            </div>
        `;
  });
  productDom.innerHTML = productUI.join('');
})(JSON.parse(window.localStorage.getItem('products')) || productsDB);

//add to cart
function addcart(id) {
  if (localStorage.getItem("username")) {
    let products = JSON.parse(localStorage.getItem('products')) || productsDB ;
    let product = products.find((item) => item.id == id);
    let isProductInCart = addedItem.some(i => i.id === product.id);

    if (isProductInCart) {
      addedItem = addedItem.map((p) => {
        if (p.id === product.id) p.qnt += 1;
        return p;
      });
    } else {
      addedItem.push(product)
    };

    cartProductdivDom.innerHTML = '';
    addedItem.forEach(item => cartProductdivDom.innerHTML += `<p>${item.title} <span class="item-qnt">${item.qnt}</span></p>`)

    localStorage.setItem("productsInCert", JSON.stringify(addedItem));
    let cartprodutsitem = document.querySelectorAll(".carts-products div p");
    badgeDom.style.display = "block";
    badgeDom.innerHTML = cartprodutsitem.length;
  } else {
    window.location.href = "login.html";
  }
}

function getUniqueArr(arr, filltertype) {
  let unique = arr
    .map(item => item[filltertype])
    .map((item, i, final) => final.indexOf(item) === i && i)
    .filter(item => arr[item])
    .map(item => arr[item])
  return unique;
}

//save item id
function saveItemId(id) {
  window.localStorage.setItem('id', id)
  window.location.href = 'cartDetailes.html'
}

//search function
let input = document.getElementById('search');
input.addEventListener('keyup', function (e) {
  search(e.target.value, JSON.parse(localStorage.getItem('products')) || productsDB);
  if (e.target.value.trim() === '') {
    drawProduct(products)
  }
})

// search product
function search(title, myArray) {
  let arr = myArray.filter(item => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1);
  drawProduct(arr)
}

//add to favorite
let favoriteItem = localStorage.getItem('productFavorite') ? JSON.parse(localStorage.getItem('productFavorite')) : [];
function addtofavorite(id) {
  if (localStorage.getItem("username")) {
    
    let choosenItem = products.find((item) => item.id == id);
    let isProductInFavorite = favoriteItem.some(i => i.id === choosenItem.id)
    
    if (isProductInFavorite) {
      favoriteItem;

    } else {
      choosenItem.liked = true;
      favoriteItem.push(choosenItem);
    };
    
    localStorage.setItem("productFavorite", JSON.stringify(favoriteItem));
    products.map(item => {
      if (choosenItem.id === item.id) {
        item.liked = true;
      }
    });
    localStorage.setItem("products", JSON.stringify(products));
    drawProduct(products)
  } else {
    window.location.href = "login.html";
  }
}

//fillter product by size
let sizeFillter = document.getElementById('size-fillter');

sizeFillter.addEventListener('change', getProductFillterBySize)

function getProductFillterBySize(e){
  let val = e.target.value;
  let products = JSON.parse(localStorage.getItem('products')) || productsDB ;
  if(val === 'all'){
    drawProduct(products);
  }else{
    products =  products.filter((i) => i.size === val);
    drawProduct(products);
  }
}

// edit product
function editProduct(id){
  localStorage.setItem('editProduct', id);
  window.location.href= 'editProduct.html';
}