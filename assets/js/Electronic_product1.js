document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.thumb');
    const previewImage = document.getElementById('preview');
    const productDetails = document.getElementById('product-details');
    
    const productInfo = {
        1: {
            img: 'electronic_images/Household/img15.jpg',
            title: 'Facial Cleanser',
            description: 'Readily absorbs into facial skin, helping to leave it soft and nurtured all day. Helps keep skin moisturized with 24-hour hydration. For all skin types',
            manufacturer: "L'Oreal S.A",
            weight: '75ml',
            packer: 'Quest Retail Pvt Ltd',
            price: '29.00'
        },
        2: {
            img: 'electronic_images/Household/img16.jpeg',
            title: 'Anti-Aging Cream',
            description: 'Reduces the appearance of fine lines and wrinkles. Formulated with antioxidants and vitamins.',
            manufacturer: 'SkinCo Inc.',
            weight: '50ml',
            packer: 'Beauty Corp',
            price: '45.00'
        },
        3: {
            img: 'electronic_images/Household/img17.jpeg',
            title: 'Moisturizing Lotion',
            description: 'Hydrates and softens skin. Ideal for dry skin types. Contains natural oils and extracts.',
            manufacturer: 'PureSkin Labs',
            weight: '200ml',
            packer: 'PureSkin Co.',
            price: '30.00'
        },
        4: {
            img: 'electronic_images/Household/img18.jpeg',
            title: 'Sunscreen SPF 50',
            description: 'Provides broad-spectrum sun protection. Lightweight and non-greasy formula.',
            manufacturer: 'SunGuard LLC',
            weight: '100ml',
            packer: 'SunGuard Ltd.',
            price: '35.00'
        },
        5: {
            img: 'electronic_images/Household/img19.jpeg',
            title: 'Facial Cleanser',
            description: 'Readily absorbs into facial skin, helping to leave it soft and nurtured all day. Helps keep skin moisturized with 24-hour hydration. For all skin types',
            manufacturer: "L'Oreal S.A",
            weight: '75ml',
            packer: 'Quest Retail Pvt Ltd',
            price: '29.00'
        },
        6: {
            img: 'electronic_images/Household/img20.jpeg',
            title: 'Anti-Aging Cream',
            description: 'Reduces the appearance of fine lines and wrinkles. Formulated with antioxidants and vitamins.',
            manufacturer: 'SkinCo Inc.',
            weight: '50ml',
            packer: 'Beauty Corp',
            price: '45.00'
        },
        7: {
            img: 'electronic_images/fan5.jpeg',
            title: 'Moisturizing Lotion',
            description: 'Hydrates and softens skin. Ideal for dry skin types. Contains natural oils and extracts.',
            manufacturer: 'PureSkin Labs',
            weight: '200ml',
            packer: 'PureSkin Co.',
            price: '30.00'
        },
        8: {
            img: 'electronic_images/Household/img21.jpeg',
            title: 'Sunscreen SPF 50',
            description: 'Provides broad-spectrum sun protection. Lightweight and non-greasy formula.',
            manufacturer: 'SunGuard LLC',
            weight: '100ml',
            packer: 'SunGuard Ltd.',
            price: '35.00'
        },
        9: {
            img: 'electronic_images/Household/img24.jpeg',
            title: 'Sunscreen SPF 50',
            description: 'Provides broad-spectrum sun protection. Lightweight and non-greasy formula.',
            manufacturer: 'SunGuard LLC',
            weight: '100ml',
            packer: 'SunGuard Ltd.',
            price: '35.00'
        },
        10: {
            img: 'electronic_images/Household/img23.jpeg',
            title: 'Sunscreen SPF 50',
            description: 'Provides broad-spectrum sun protection. Lightweight and non-greasy formula.',
            manufacturer: 'SunGuard LLC',
            weight: '100ml',
            packer: 'SunGuard Ltd.',
            price: '35.00'
        },
        11: {
            img: 'electronic_images/toy10.jpeg',
            title: 'Sunscreen SPF 50',
            description: 'Provides broad-spectrum sun protection. Lightweight and non-greasy formula.',
            manufacturer: 'SunGuard LLC',
            weight: '100ml',
            packer: 'SunGuard Ltd.',
            price: '35.00'
        },
        12: {
            img: 'electronic_images/apple1.jpeg',
            title: 'Sunscreen SPF 50',
            description: 'Provides broad-spectrum sun protection. Lightweight and non-greasy formula.',
            manufacturer: 'SunGuard LLC',
            weight: '100ml',
            packer: 'SunGuard Ltd.',
            price: '35.00'
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
