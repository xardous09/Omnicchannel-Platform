import products from './fashon-products-store.js';
import cart from './fashon-cart-store.js';


let listProduct = document.getElementById('listProduct');
let app = document.getElementById('app');
let temporaryContent = document.getElementById('temporaryContent');

const loadTemplate = () => {
    fetch('/fashon-templete-store.html')
        .then(response => response.text())
        .then(html => {
            app.innerHTML = html;
            let contentTab = document.getElementById('contentTab');
            contentTab.innerHTML = temporaryContent.innerHTML;
            temporaryContent.innerHTML = null;
            cart();
            initApp();
        })
}
loadTemplate();
const initApp = () => {
    let productId = new URLSearchParams(window.location.search).get('id');
    let thisProduct = products.filter(value => value.id == productId)[0];
    if (!thisProduct) {
        window.location.href = "/";
    }

    let detail = document.querySelector('.detail');
    detail.querySelector('.image img').src = thisProduct.image;
    detail.querySelector('.name').innerText = thisProduct.name;
    detail.querySelector('.price').innerText = '$' + thisProduct.price;
    detail.querySelector('.description').innerText = '$' + thisProduct.description;
    detail.querySelector('.addCart').dataset.id = thisProduct.id;


    let listProductHTML = document.querySelector('.listProduct');
    products.forEach(product => {
        let newProduct = document.createElement('div');
        newProduct.classList.add('item');
        newProduct.innerHTML =
            `<a href="/fashon-detail-store.html?id=${product.id}">
            <img src="${product.image}">
        </a>
        <h2>${product.name}</h2>
        <div class="price">$${product.price}</div>
        <button 
            class="addCart" 
            data-id='${product.id}'>
                Add To Cart
        </button>`;
        listProductHTML.appendChild(newProduct);
    });

}