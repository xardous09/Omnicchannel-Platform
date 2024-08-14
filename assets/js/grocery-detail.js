<<<<<<< HEAD
<<<<<<< HEAD
import products from './grocery-products.js';
=======
import products from './Grocery_all1.js';
>>>>>>> 6977c416c89718376764ad0a239c53d202812e3d
=======
import products from './Grocery_all1.js';
>>>>>>> 6977c416c89718376764ad0a239c53d202812e3d
import cart from './grocery-cart.js';

let listProduct = document.getElementById('listProduct');
let app = document.getElementById('app');
let temporaryContent = document.getElementById('temporaryContent');

const loadTemplate = () => {
<<<<<<< HEAD
<<<<<<< HEAD
    fetch('/grocery-templets.html') // Make sure the file path is correct
        .then(response => response.text())
        .then(html => {
            app.innerHTML = html;
            let contentTab = document.getElementById('contentTab');
=======
=======
>>>>>>> 6977c416c89718376764ad0a239c53d202812e3d
    fetch('/grocery-templets.html')
        .then(response => response.text())
        .then(html => {
            console.log('Template loaded');
            app.innerHTML = html;
            let contentTab = document.getElementById('contentTab');
            console.log('Content tab:', contentTab);
<<<<<<< HEAD
>>>>>>> 6977c416c89718376764ad0a239c53d202812e3d
=======
>>>>>>> 6977c416c89718376764ad0a239c53d202812e3d
            contentTab.innerHTML = temporaryContent.innerHTML;
            temporaryContent.innerHTML = null;
            cart();
            initApp();
        })
<<<<<<< HEAD
<<<<<<< HEAD
}

const initApp = () => {
    let productId = new URLSearchParams(window.location.search).get('id');
    let thisProduct = products.find(product => product.id == productId);

    if (!thisProduct) {
        window.location.href = "/";
        return;
    }

    let detail = document.querySelector('.detail');
=======
=======
>>>>>>> 6977c416c89718376764ad0a239c53d202812e3d
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
<<<<<<< HEAD
>>>>>>> 6977c416c89718376764ad0a239c53d202812e3d
=======
>>>>>>> 6977c416c89718376764ad0a239c53d202812e3d
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
<<<<<<< HEAD
<<<<<<< HEAD
            `<a href="/grocery-detail.html?id=${product.id}">
                <img src="${product.image}">
            </a>
            <h2>${product.name}</h2>
            <div class="price">$${product.price}</div>
            <button class="addCart" data-id='${product.id}'>
                Add To Cart
            </button>`;
        listProductHTML.appendChild(newProduct);
    });
}

loadTemplate();
=======
=======
>>>>>>> 6977c416c89718376764ad0a239c53d202812e3d
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
<<<<<<< HEAD
}
>>>>>>> 6977c416c89718376764ad0a239c53d202812e3d
=======
}
>>>>>>> 6977c416c89718376764ad0a239c53d202812e3d
