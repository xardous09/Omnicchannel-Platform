document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.thumb');
    const previewImage = document.getElementById('preview');
    const productDetails = document.getElementById('product-details');
    
    const productInfo = {
        1: {
            img: './products/mtr_gulab_jamun.jpg',
            title: ' MTR Gulab Jamun',
            description: 'Enjoy the deliciously soft and sweet taste of MTR Gulab Jamun, a classic Indian dessert that brings the authentic flavors of tradition to your table. ',
            manufacturer: 'MTR foods',
            weight: '500g',
            packer: 'MTR Ltd.',
            price: '10.00'
        },
        2: {
            img: './products/mtr_powder_turmeric.jpg',
            title: ' MTR Powder Turmeric',
            description: 'Add a touch of vibrant color and rich flavor to your dishes with MTR Powder Turmeric, a high-quality spice renowned for its purity and freshness.',
            manufacturer: 'LLC',
            weight: '100g',
            packer: 'MTR Ltd.',
            price: '5.00'
        },
        3: {
            img: './products/mangaldeep_temple_gold_agarbatti.jpg',
            title: ' Mangaldeep Temple Gold Agarbatti',
            description: 'Enhance your spiritual rituals with the rich and soothing fragrance of Mangaldeep Temple Gold Agarbatti. Crafted with a blend of high-quality natural resins .',
            manufacturer: 'Mangaldeep',
            weight: '100g',
            packer: 'Deep Ltd.',
            price: '4.00'
        },
        4: {
            img: './products/lipton_green_tea.jpg',
            title: 'Lipton Green Tea',
            description: 'Refresh your senses with the light and natural flavor of Lipton Green Tea. Made from carefully selected tea leaves, this green tea offers a smooth, crisp taste with subtle grassy notes that provide a calming and invigorating experience.',
            manufacturer: 'Unilever',
            weight: '25 Tea Bags,100g',
            packer: 'Lipton Ltd.',
            price: '6.00'
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
