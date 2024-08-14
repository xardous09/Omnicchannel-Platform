<<<<<<< HEAD
import products from './grocery-products.js';
=======
import products from './Grocery_all1.js';
>>>>>>> 6977c416c89718376764ad0a239c53d202812e3d
import cart from './grocery-cart.js';

let app = document.getElementById('app');
let temporaryContent = document.getElementById('temporaryContent');

// load layout file
const loadTemplate = () => {
    fetch('/grocery-templets.html')
        .then(response => response.text())
        .then(html => {
<<<<<<< HEAD
            app.innerHTML = html;
            let contentTab = document.getElementById('contentTab');
=======
            console.log('Template loaded');
            app.innerHTML = html;
            let contentTab = document.getElementById('contentTab');
            console.log('Content tab:', contentTab);
>>>>>>> 6977c416c89718376764ad0a239c53d202812e3d
            contentTab.innerHTML = temporaryContent.innerHTML;
            temporaryContent.innerHTML = null;
            cart();
            initApp();
        })
<<<<<<< HEAD
}
loadTemplate();
=======
        .catch(error => console.error('Error loading template:', error));
}
loadTemplate();

>>>>>>> 6977c416c89718376764ad0a239c53d202812e3d
const initApp = () => {
    // load list product
    let listProductHTML = document.querySelector('.listProduct');
    listProductHTML.innerHTML = null;

    products.forEach(product => {
        let newProduct = document.createElement('div');
        newProduct.classList.add('item');
        newProduct.innerHTML =
<<<<<<< HEAD
            `<a href="/grocery-detail.html?id=${product.id}">
=======
            `<a href="/detail.html?id=${product.id}">
>>>>>>> 6977c416c89718376764ad0a239c53d202812e3d
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