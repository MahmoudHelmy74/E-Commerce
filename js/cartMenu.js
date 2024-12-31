let cartProductmenu = document.querySelector(".carts-products");
let cartProductdivDom = document.querySelector(".carts-products div");
let shoppingcarticon = document.querySelector(".shoppingcart");
let badgeDom = document.querySelector(".badge");

//check if there is an item in localstorge
let addedItem = window.localStorage.getItem("productsInCert")
  ? JSON.parse(window.localStorage.getItem("productsInCert"))
  : [];
if (addedItem) {
  addedItem.map((item) => {
    cartProductdivDom.innerHTML += `<p>${item.title} ${item.qnt}</p>`;
  });
  badgeDom.style.display = "block";
  badgeDom.innerHTML = addedItem.length;
}

//open cart menu
function addcartmenu() {
    if (cartProductdivDom.innerHTML != "") {
      if (cartProductmenu.style.display == "block") {
        cartProductmenu.style.display = "none";
      } else {
        cartProductmenu.style.display = "block";
      }
    }
}


// open cart menu
shoppingcarticon.addEventListener("click", addcartmenu);