document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.thumb');
    const previewImage = document.getElementById('preview');
    const productDetails = document.getElementById('product-details');

    const productInfo = {
        1: {
            img: './products/cadbury_miniatures_dairy_milk_silk_chocolate.jpg',
            title: 'Cadbury Miniatures Dairy Milk Silk Chocolate',
            description: 'Indulge in the luxurious taste of Cadbury Miniatures Dairy Milk Silk Chocolate. These bite-sized chocolates are crafted from the finest ingredients, offering a smooth, creamy texture.',
            manufacturer: "Mondelez International",
            weight: '250gm',
            packer: 'Quest Retail Pvt Ltd',
            price: '8.00'
        },
        2: {
            img: './products/denver_hamilton caliber_deo.jpg',
            title: 'Denver hamilton caliber deo',
            description: 'Discover the exquisite taste of Ferrero Rocher Premium Chocolate, where a whole hazelnut is surrounded by creamy chocolate filling, encased in a crisp wafer shell.',
            manufacturer: 'Hamilton.',
            weight: '100ml',
            packer: 'Hamilton',
            price: '10.00'
        },
        3: {
            img: './products/crystamin_natural_himalyan_pink_rock_salt.jpg',
            title: 'Crystamin Natural Himalayan Pink Rock Salt',
            description: 'Enhance your culinary creations with the pure and mineral-rich Crystamin Natural Himalayan Pink Rock Salt. Sourced from the ancient salt mines of the Himalayas.',
            manufacturer: "Crystamin",
            weight: '1kg',
            packer: 'Quest Retail Pvt Ltd',
            price: '5.00'

        },
        4: {
            img: './products/Khadi_chandan.jpg',
            title: 'Khadi Chandan (Sandalwood) Soap',
            description: 'Experience the soothing and aromatic benefits of Khadi Chandan (Sandalwood) Soap, a natural and handmade soap crafted with pure sandalwood oil.',
            manufacturer: 'Khadi Natural',
            weight: '125g',
            packer: 'khadi',
            price: '2.00'

        },
        5: {
            img: './products/tata_tea_gold_leaf.jpg',
            title: 'Tata Tea Gold Leaf',
            description: ' Indulge in the rich and aromatic flavor of Tata Tea Gold Leaf,a premium blend of fine tea leaves that promise a perfect cup of tea every time. ',
            manufacturer: 'Tata Consumer Products',
            weight: '500g',
            packer: 'TCP Co.',
            price: '6.00'

        },
        6: {
            img: './products/yardley_london _race_deo.jpg',
            title: ' Yardley London Race Deodorant',
            description: 'Stay fresh and confident all day with Yardley London Race Deodorant, a premium body spray designed for the modern man. Infused with a dynamic and invigorating fragrance.',
            manufacturer: 'Yardley London',
            weight: '200ml',
            packer: 'Yardley Ltd.',
            price: '9.00'

        },
        7: {
            img: './products/patanjali_sheetal_hair_oil.jpg',
            title: 'Patanjali Sheetal Hair Oil',
            description: 'Revitalize your scalp and hair with Patanjali Sheetal Hair Oil, a natural blend of cooling and nourishing herbs designed to promote healthy hair and a calm mind. ',
            manufacturer: 'Patanjali LLC',
            weight: '100ml',
            packer: 'Patanjali Ltd.',
            price: '7.00'
        },
        8: {
            img: './products/parachute_pure_coconut_hair_oil.jpg',
            title: 'Parachute Pure Coconut Hair Oil',
            description: 'Nourish your hair with the natural goodness of Parachute Pure Coconut Hair Oil, a trusted choice for healthier and stronger hair. Made from 100% pure coconut oil.',
            manufacturer: 'Marico Limited',
            weight: '100ml',
            packer: 'Marico Ltd.',
            price: '9.00'

        },
        9: {
            img: './products/mtr_gulab_jamun.jpg',
            title: ' MTR Gulab Jamun',
            description: 'Enjoy the deliciously soft and sweet taste of MTR Gulab Jamun, a classic Indian dessert that brings the authentic flavors of tradition to your table. ',
            manufacturer: 'MTR foods',
            weight: '500g',
            packer: 'MTR Ltd.',
            price: '10.00'
        },
        10: {
            img: './products/mtr_powder_turmeric.jpg',
            title: ' MTR Powder Turmeric',
            description: 'Add a touch of vibrant color and rich flavor to your dishes with MTR Powder Turmeric, a high-quality spice renowned for its purity and freshness.',
            manufacturer: 'LLC',
            weight: '100g',
            packer: 'MTR Ltd.',
            price: '5.00'
        },
        11: {
            img: './products/mangaldeep_temple_gold_agarbatti.jpg',
            title: ' Mangaldeep Temple Gold Agarbatti',
            description: 'Enhance your spiritual rituals with the rich and soothing fragrance of Mangaldeep Temple Gold Agarbatti. Crafted with a blend of high-quality natural resins .',
            manufacturer: 'Mangaldeep',
            weight: '100g',
            packer: 'Deep Ltd.',
            price: '4.00'
        },
        12: {
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