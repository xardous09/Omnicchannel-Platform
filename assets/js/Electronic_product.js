document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.thumb');
    const previewImage = document.getElementById('preview');
    const productDetails = document.getElementById('product-details');
    
    const productInfo = {
        1: {
            img: 'electronic_images/Accessories/img13.jpeg',
            title: 'Macbook Pro 16 inch',
            description: 'The MacBook Pro is a line of Mac laptop computers developed and manufactured by Apple.',
            manufacturer: "Foxconn, pegatron",
            weight: '2.0 kg',
            packer: 'Apple Inc.',
            price: '20'
        },
        2: {
            img: 'electronic_images/Accessories/img14.jpeg',
            title: 'Oppo F21 Pro',
            description: 'Oppo F21 Pro features a sleek design with a high-resolution AMOLED display, 64MP triple camera system, and 8GB RAM for smooth performance.',
            manufacturer: 'Oppo Electronics Corp.',
            weight: '175 grams',
            packer: 'Oppo Electronics Corp',
            price: '25'
        },
        3: {
            img: 'electronic_images/toy10.jpeg',
            title: 'Electronic Learning Toy Game',
            description: 'Interactive electronic toy game designed for kids to enhance their learning and cognitive skills with engaging activities and games.',
            manufacturer: 'EduToys Inc',
            weight: '300 grams',
            packer: 'EduToys Inc',
            price: '15'
        },
        4: {
            img: 'electronic_images/Accessories/img15.jpeg',
            title: ' iPhone 14 Pro',
            description: ' iPhone 14 Pro features a 6.1-inch Super Retina XDR display, A16 Bionic chip, advanced camera system with ProRAW and ProRes capabilities, and 5G connectivity.',
            manufacturer: ' Apple Inc.',
            weight: '206 grams',
            packer: ' Apple Inc..',
            price: '40'
        },
        5: {
            img: 'electronic_images/Accessories/img16.jpeg',
            title: 'Bluetooth Earphones',
            description: 'Wireless Bluetooth earphones with high-quality sound, comfortable fit, and long battery life. Ideal for music and calls.',
            manufacturer: 'SoundTech Ltd.',
            weight: '50 grams',
            packer: 'SoundTech Ltd.',
            price: '30.00'
        },
        
        6: {
            img: 'electronic_images/Accessories/img17.jpeg',
            title: 'USB Charger',
            description: 'Compact USB charger with fast charging capabilities. Compatible with various devices including smartphones and tablets.',
            manufacturer: 'ChargePro Inc.',
            weight: '100 grams',
            packer: 'ChargePro Inc.',
            price: '15.00'
        },

        7: {
            img: 'electronic_images/Accessories/img21.jpeg',
            title: 'Over-Ear Headphones',
            description: 'Comfortable over-ear headphones with noise-cancelling technology, high-fidelity sound, and adjustable headband for a perfect fit.',
            manufacturer: 'AudioMaster Ltd.',
            weight: '250 grams',
            packer: 'AudioMaster Ltd.',
            price: '70.00'
        },

        8: {
            img: 'electronic_images/Accessories/img22.jpeg',
            title: 'In-Ear Earphones',
            description: 'High-quality in-ear earphones with noise isolation, excellent sound clarity, and a comfortable fit. Perfect for daily use and listening on the go.',
            manufacturer: 'SoundWave Ltd.',
            weight: '20 grams',
            packer: 'SoundWave Ltd.',
            price: '25.00'
        },
        
        9: {
            img: 'electronic_images/Accessories/img24.jpeg',
            title: 'Portable Bluetooth Speaker',
            description: 'c.',
            manufacturer: 'AudioTech Inc.',
            weight: '300 grams',
            packer: 'AudioTech Inc.',
            price: '60.00'
        },
        
        10: {
            img: 'electronic_images/Accessories/img25.jpeg',
            title: 'Asus ZenBook 14',
            description: 'Asus ZenBook 14 features a 14-inch Full HD display, Intel Core i7 processor, 16GB RAM, and a sleek, lightweight design perfect for professionals on the go.',
            manufacturer: 'Asus Computer Inc.',
            weight: '1.35 kg',
            packer: 'Asus Computer Inc.',
            price: '1,299.00'
        },
        
        11: {
            img: 'electronic_images/Accessories/img26.jpeg',
            title: 'Mechanical Keyboard',
            description: 'High-performance mechanical keyboard with customizable RGB backlighting, tactile switches, and durable build. Ideal for gamers and typists.',
            manufacturer: 'KeyTech Ltd.',
            weight: '800 grams',
            packer: 'KeyTech Ltd.',
            price: '85.00'
        },
        
        12: {
            img: 'electronic_images/Accessories/img27.webp',
            title: 'Wireless Mouse',
            description: 'Ergonomic wireless mouse with precision tracking, adjustable DPI settings, and a comfortable grip for extended use. Ideal for both work and gaming.',
            manufacturer: 'TechMouse Inc.',
            weight: '100 grams',
            packer: 'TechMouse Inc.',
            price: '$35.00'
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
