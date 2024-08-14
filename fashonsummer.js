document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.thumb');
    const previewImage = document.getElementById('preview');
    const productDetails = document.getElementById('product-details');

    const productInfo = {
        1: {
            img: './img/',
            title: 'Tata Tea Gold Leaf',
            description: ' Indulge in the rich and aromatic flavor of Tata Tea Gold Leaf,a premium blend of fine tea leaves that promise a perfect cup of tea every time. ',
            manufacturer: 'Tata Consumer Products',
            weight: '500g',
            packer: 'TCP Co.',
            price: '6.00'
        },
        2: {
            img: './fashon-products/yardley_london _race_deo.jpg',
            title: ' Yardley London Race Deodorant',
            description: 'Stay fresh and confident all day with Yardley London Race Deodorant, a premium body spray designed for the modern man. Infused with a dynamic and invigorating fragrance.',
            manufacturer: 'Yardley London',
            weight: '200ml',
            packer: 'Yardley Ltd.',
            price: '9.00'
        },
        3: {
            img: './fashon-products/patanjali_sheetal_hair_oil.jpg',
            title: 'Patanjali Sheetal Hair Oil',
            description: 'Revitalize your scalp and hair with Patanjali Sheetal Hair Oil, a natural blend of cooling and nourishing herbs designed to promote healthy hair and a calm mind. ',
            manufacturer: 'Patanjali LLC',
            weight: '100ml',
            packer: 'Patanjali Ltd.',
            price: '7.00'
        },
        4: {
            img: './fashon-products/parachute_pure_coconut_hair_oil.jpg',
            title: 'Parachute Pure Coconut Hair Oil',
            description: 'Nourish your hair with the natural goodness of Parachute Pure Coconut Hair Oil, a trusted choice for healthier and stronger hair. Made from 100% pure coconut oil.',
            manufacturer: 'Marico Limited',
            weight: '100ml',
            packer: 'Marico Ltd.',
            price: '9.00'
        }
    };

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
            const productId = thumb.getAttribute('data-product-id');
            const product = productInfo[productId];

            if (product) {
                previewImage.src = product.img;
                productDetails.querySelector('h6').textContent = product.title;
                productDetails.querySelector('p').textContent = product.description;
                productDetails.querySelector('#manufacturer').textContent = product.manufacturer;
                productDetails.querySelector('#weight').textContent = product.weight;
                productDetails.querySelector('#packer').textContent = product.packer;
                productDetails.querySelector('#price').textContent = product.price;
            }
        });
    });
});