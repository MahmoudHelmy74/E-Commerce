let products = JSON.parse(localStorage.getItem('products'));
let productID = localStorage.getItem('id');
let itemDom = document.querySelector('.item-detailes');

let productDetailes = products.find(item => item.id == productID);

itemDom.innerHTML = `
<img src='${productDetailes.imageUrl}' alt='' />
<h2>${productDetailes.title}</h2>
<p>${productDetailes.desc}</p>
<span> size : ${productDetailes.size}</span><br>
<span> Quantity : ${productDetailes.qnt}</span>
`