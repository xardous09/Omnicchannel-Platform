document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.thumb');
    const previewImage = document.getElementById('preview');
    const productDetails = document.getElementById('product-details');
    
    const productInfo = {
        1: {
            img: 'electronic_images/Household/img15.jpg',
            title: 'Wall-Mounted Fan',
            description: 'Durable wall-mounted fan with adjustable speed settings and oscillation for effective air circulation. Ideal for home and office use.',
            manufacturer: 'CoolBreeze Ltd.',
            weight: '3.0 kg',
            packer: 'CoolBreeze Ltd.',
            price: '80.00'
        },
        
        2: {
            img: 'electronic_images/Household/img16.jpeg',
            title: 'LED Electric Bulb',
            description: 'Energy-efficient LED electric bulb with a long lifespan and bright illumination. Suitable for various lighting needs at home or office.',
            manufacturer: 'BrightLight Inc.',
            weight: '50 grams',
            packer: 'BrightLight Inc.',
            price: '10.00'
        },
        
        3: {
            img: 'electronic_images/Household/img17.jpeg',
            title: 'Smart LED Bulb',
            description: 'Smart LED bulb with adjustable brightness and color temperature. Compatible with smart home systems for remote control and scheduling.',
            manufacturer: 'SmartLight Co.',
            weight: '60 grams',
            packer: 'SmartLight Co.',
            price: '15.00'
        },
        
        4: {
            img: 'electronic_images/Household/img18.jpeg',
            title: 'Microwave Oven',
            description: 'Compact microwave oven with multiple cooking modes, easy-to-use control panel, and a 20-liter capacity. Ideal for quick meal preparation and reheating.',
            manufacturer: 'HeatWave Appliances',
            weight: '12.0 kg',
            packer: 'HeatWave Appliances',
            price: '120.00'
        },
        
        5: {
            img: 'electronic_images/Household/img19.jpeg',
            title: 'Front-Load Washing Machine',
            description: 'Energy-efficient front-load washing machine with a 7 kg capacity, multiple wash programs, and a high spin speed for effective cleaning and fast drying.',
            manufacturer: 'CleanWave Appliances',
            weight: '60.0 kg',
            packer: 'CleanWave Appliances',
            price: '650.00'
        },
        
        6: {
            img: 'electronic_images/Household/img20.jpeg',
            title: 'Electric Heater',
            description: 'Compact electric heater with adjustable temperature settings and rapid heating capabilities. Ideal for keeping small to medium-sized rooms warm and cozy.',
            manufacturer: 'WarmTech Ltd.',
            weight: '3.5 kg',
            packer: 'WarmTech Ltd.',
            price: '45.00'
        },
        
        7: {
            img: 'electronic_images/fan5.jpeg',
            title: 'Table Fan',
            description: 'Compact table fan with adjustable speed settings and oscillation for efficient air circulation. Ideal for personal use on desks or tables.',
            manufacturer: 'BreezeCool Inc.',
            weight: '2.5 kg',
            packer: 'BreezeCool Inc.',
            price: '25.00'
        },
        
        8: {
            img: 'electronic_images/Household/img21.jpeg',
            title: 'Evaporative Air Cooler',
            description: 'Energy-efficient evaporative air cooler with a large water tank, adjustable fan speeds, and a remote control for convenient operation. Ideal for cooling medium-sized rooms.',
            manufacturer: 'CoolBreeze Ltd.',
            weight: '15.0 kg',
            packer: 'CoolBreeze Ltd.',
            price: '150.00'
        },
        
        9: {
            img: 'electronic_images/Household/img24.jpeg',
            title: 'Oil-Filled Radiator Heater',
            description: 'Oil-filled radiator heater with multiple heat settings, adjustable thermostat, and a quiet operation. Provides consistent and efficient heating, ideal for cold climates.',
            manufacturer: 'HeatMaster Inc.',
            weight: '12.0 kg',
            packer: 'HeatMaster Inc.',
            price: '180.00'
        },
        
        10: {
            img: 'electronic_images/Household/img23.jpeg',
            title: 'Decorative LED String Lights',
            description: 'Versatile decorative LED string lights with multiple color options and lighting modes. Perfect for enhancing the ambiance of any space for events or everyday decor.',
            manufacturer: 'GlowDecor Ltd.',
            weight: '200 grams',
            packer: 'GlowDecor Ltd.',
            price: '25.00'
        },
        
        11: {
            img: 'electronic_images/toy10.jpeg',
            title: 'Electric Race Car',
            description: 'Battery-operated electric race car with realistic sounds and lights. Features easy controls and durable design, perfect for kids who love fast-paced fun.',
            manufacturer: 'ToyTech Inc.',
            weight: '500 grams',
            packer: 'ToyTech Inc.',
            price: '35.00'
        },
        
        12: {
            img: 'electronic_images/apple1.jpeg',
            title: 'Smartphone X',
            description: 'Latest smartphone with a high-resolution display, powerful processor, and advanced camera system. Offers smooth performance and a sleek design.',
            manufacturer: 'TechWorld Ltd.',
            weight: '200 grams',
            packer: 'TechWorld Ltd.',
            price: '699.00'
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
