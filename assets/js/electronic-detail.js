import products from './Electronic_products';
import cart from './electronics-cart';

let listProduct = document.getElementById('listProduct');
let app = document.getElementById('app');
let temporaryContent = document.getElementById('temporaryContent');

const loadTemplate = () => {
    fetch('/template1.html')
        .then(response => response.text())
        .then(html => {
            console.log('Template loaded');
            app.innerHTML = html;
            let contentTab = document.getElementById('contentTab');
            console.log('Content tab:', contentTab);
            contentTab.innerHTML = temporaryContent.innerHTML;
            temporaryContent.innerHTML = null;
            cart();
            initApp();
        })
        .catch(error => console.error('Error loading template:', error));
}
loadTemplate();

const initApp = () => {
    let productId = new URLSearchParams(window.location.search).get('id');
    console.log('Product ID:', productId);
    let thisProduct = products.filter(value => value.id == productId)[0];
    if (!thisProduct) {
        window.location.href = "/";
    }

    let detail = document.querySelector('.detail');
    console.log('Detail element:', detail);
    detail.querySelector('.image img').src = thisProduct.image;
    detail.querySelector('.name').innerText = thisProduct.name;
    detail.querySelector('.price').innerText = '$' + thisProduct.price;
    detail.querySelector('.description').innerText = thisProduct.description;
    detail.querySelector('.addCart').dataset.id = thisProduct.id;

    let listProductHTML = document.querySelector('.listProduct');
    products.forEach(product => {
        let newProduct = document.createElement('div');
        newProduct.classList.add('item');
        newProduct.innerHTML =
            `<a href="/detail.html?id=${product.id}">
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