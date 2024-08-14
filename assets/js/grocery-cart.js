<<<<<<< HEAD
import products from "./grocery-products.js";
=======
import products from "./Grocery_all1.js";

>>>>>>> 6977c416c89718376764ad0a239c53d202812e3d
const cart = () => {
    let listCartHTML = document.querySelector('.listCart');
    let iconCart = document.querySelector('.icon-cart');
    let iconCartSpan = iconCart.querySelector('span');
    let body = document.querySelector('body');
    let closeCart = document.querySelector('.close');
    let cart = [];

    // open and close tab
    iconCart.addEventListener('click', () => {
        body.classList.toggle('activeTabCart');
<<<<<<< HEAD
    })
    closeCart.addEventListener('click', () => {
        body.classList.toggle('activeTabCart');
    })
=======
    });
    closeCart.addEventListener('click', () => {
        body.classList.toggle('activeTabCart');
    });
>>>>>>> 6977c416c89718376764ad0a239c53d202812e3d

    const setProductInCart = (idProduct, value) => {
        let positionThisProductInCart = cart.findIndex((value) => value.product_id == idProduct);
        if (value <= 0) {
            cart.splice(positionThisProductInCart, 1);
        } else if (positionThisProductInCart < 0) {
            cart.push({
                product_id: idProduct,
                quantity: 1
            });
        } else {
            cart[positionThisProductInCart].quantity = value;
        }
        localStorage.setItem('cart', JSON.stringify(cart));
<<<<<<< HEAD
        addCartToHTML();
    }
=======
        console.log('Cart updated:', cart);
        addCartToHTML();
    };
>>>>>>> 6977c416c89718376764ad0a239c53d202812e3d

    const addCartToHTML = () => {
        listCartHTML.innerHTML = '';
        let totalQuantity = 0;
        if (cart.length > 0) {
            cart.forEach(item => {
<<<<<<< HEAD
                totalQuantity = totalQuantity + item.quantity;
=======
                totalQuantity += item.quantity;
>>>>>>> 6977c416c89718376764ad0a239c53d202812e3d
                let newItem = document.createElement('div');
                newItem.classList.add('item');
                newItem.dataset.id = item.product_id;

                let positionProduct = products.findIndex((value) => value.id == item.product_id);
                let info = products[positionProduct];
<<<<<<< HEAD
                listCartHTML.appendChild(newItem);
                newItem.innerHTML = `
                <div class="image">
                        <img src="${info.image}">
                    </div>
                    <div class="name">
                    ${info.name}
=======
                newItem.innerHTML = `
                    <div class="image">
                        <img src="${info.image}">
                    </div>
                    <div class="name">
                        ${info.name}
>>>>>>> 6977c416c89718376764ad0a239c53d202812e3d
                    </div>
                    <div class="totalPrice">$${info.price * item.quantity}</div>
                    <div class="quantity">
                        <span class="minus" data-id="${info.id}"><</span>
                        <span>${item.quantity}</span>
                        <span class="plus" data-id="${info.id}">></span>
                    </div>
                `;
<<<<<<< HEAD
            })
        }
        iconCartSpan.innerText = totalQuantity;
    }
=======
                listCartHTML.appendChild(newItem);
            });
        }
        iconCartSpan.innerText = totalQuantity;
    };
>>>>>>> 6977c416c89718376764ad0a239c53d202812e3d

    document.addEventListener('click', (event) => {
        let buttonClick = event.target;
        let idProduct = buttonClick.dataset.id;
        let quantity = null;
        let positionProductInCart = cart.findIndex((value) => value.product_id == idProduct);
        switch (true) {
            case (buttonClick.classList.contains('addCart')):
                quantity = (positionProductInCart < 0) ? 1 : cart[positionProductInCart].quantity + 1;
                setProductInCart(idProduct, quantity);
                break;
            case (buttonClick.classList.contains('minus')):
                quantity = cart[positionProductInCart].quantity - 1;
                setProductInCart(idProduct, quantity);
                break;
            case (buttonClick.classList.contains('plus')):
                quantity = cart[positionProductInCart].quantity + 1;
                setProductInCart(idProduct, quantity);
                break;
            default:
                break;
        }
<<<<<<< HEAD
    })

    const initApp = () => {

        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'));
            addCartToHTML();
        }
    }
    initApp();
}
=======
    });

    const initApp = () => {
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'));
            console.log('Cart loaded from localStorage:', cart);
            addCartToHTML();
        }
    };
    initApp();
};

>>>>>>> 6977c416c89718376764ad0a239c53d202812e3d
export default cart;