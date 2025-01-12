// Top Bar Slider
function initializeSlider() {
    const sliderContainer = document.querySelector('.slider-container');
    const sliderTexts = document.querySelectorAll('.slider-text');
    let currentIndex = 0;

    function slideText() {
        currentIndex = (currentIndex + 1) % sliderTexts.length;
        sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(slideText, 3000);
}

// Initialize the slider when the page loads
window.onload = initializeSlider;


// State management
let wishlistItems = [];
let cartItems = [];
let orderHistory = [];

// Add this product database at the top of your script
const allProducts = [
    // New Drops
    {
        id: 1,
        name: "Classic White T-Shirt",
        price: 49.99,
        category: "t-shirt",
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27"
    },
    {
        id: 2,
        name: "Casual Denim Shirt",
        price: 29.99,
        category: "shirt",
        image: "https://images.unsplash.com/photo-1604695573706-53170668f6a6"
    },
    {
        id: 3,
        name: "Urban Hoodie",
        price: 59.99,
        category: "hoddie",
        image: "https://img.freepik.com/premium-photo/hip-hop-style-young-adult-studio-photo-with-green-background-ideal-cropping_496782-2381.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
    {
        id: 4,
        name: "Designer Jacket",
        price: 45.99,
        category: "jackets",
        image: "https://img.freepik.com/premium-photo/portrait-young-stylish-man-yellow-leather-jacket-black-jeans-with-white-background_953460-254.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
    {
        id: 5,
        name: "Premium Formal Shirt",
        price: 79.99,
        category: "premium, shirt",
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35"
    },
    {
        id: 6,
        name: "Casual Blazer",
        price: 39.99,
        category: "blazer",
        image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8"
    },
    {
        id: 7,
        name: "Classic Denim Jacket",
        price: 44.99,
        category: "jacket",
        image: "https://images.unsplash.com/photo-1578932750294-f5075e85f44a"
    },
    {
        id: 8,
        name: "Designer Sweater",
        price: 24.99,
        category: "sweater",
        image: "https://plus.unsplash.com/premium_photo-1673458070037-8cc98a465c0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHN3ZWF0ZXJ8ZW58MHx8MHx8fDA%3D"
    },
    // Deals
    {
        id: 9,
        name: "Premium Suit",
        price: 59.99,
        originalPrice: 99.99,
        discount: "40%",
        category: "suit",
        image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923",
        isDeal: true
    },
    {
        id: 10,
        name: "Designer Blazer",
        price: 62.99,
        originalPrice: 89.99,
        discount: "30%",
        category: "blazer",
        image: "https://images.unsplash.com/photo-1594938291221-94f18cbb5660",
        isDeal: true
    },
    {
        id: 11,
        name: "Premium Leather Jacket",
        price: 97.49,
        originalPrice: 129.99,
        discount: "25%",
        category: "jacket",
        image: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4",
        isDeal: true
    },
    {
        id: 12,
        name: "Casual Shirt",
        price: 129.99,
        originalPrice: 199.99,
        discount: "35%",
        category: "shirt",
        image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10",
        isDeal: true
    },
    // Add these products to the allProducts array after the existing deals
    {
        id: 13,
        name: "Denim Collection",
        price: 87.99,
        originalPrice: 159.99,
        discount: "45%",
        category: "denim",
        image: "https://images.unsplash.com/photo-1617137968427-85924c800a22",
        isDeal: true
    },
    {
        id: 14,
        name: "Formal Shirt",
        price: 39.99,
        originalPrice: 49.99,
        discount: "20%",
        category: "shirt",
        image: "https://img.freepik.com/free-photo/portrait-cheerful-man-white-shirt-standing_171337-12073.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid",
        isDeal: true
    },
    {
        id: 15,
        name: "Premium Jacket",
        price: 64.99,
        originalPrice: 129.99,
        discount: "50%",
        category: "jacket",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
        isDeal: true
    },
    {
        id: 16,
        name: "Casual Jacket",
        price: 51.99,
        originalPrice: 79.99,
        discount: "35%",
        category: "jacket",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
        isDeal: true
    },



    // Hoodies Collection
        {
            id: 17,
            name: "Basic Cotton Hoodie",
            price: 59.99,
            category: "hoodies",
            image: "https://img.freepik.com/free-photo/attractive-young-caucasian-male-student-gray-hoodie-jeans-puffing-out-his-cheeks-like-he-is-tired-running-as-he-is-late-classes_176420-13437.jpg?t=st=1735927605~exp=1735931205~hmac=bcf1b1f5096bd5e11705e2c525f83b94bcc3d624c862c5cc5963cd7f9f8995db&w=900",
        },
        {
            id: 18,
            name: "Full-Zip Hoodie",
            price: 54.99,
            category: "hoodies",
            image: "https://img.freepik.com/premium-photo/young-man-christmas-kigurumi-knitted-hat-colored-background_8544-4105.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid",
        },
    {
        id: 19,
        name: "Oversized Comfort Hoodie",
        price: 49.99,
        category: "hoodies",
        image: "https://img.freepik.com/premium-photo/portrait-woman-standing-against-wall_1048944-22882399.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid",
    },
    {
        id: 20,
        name: "Graphic Print Hoodie",
        price: 64.99,
        category: "hoodies",
        image: "https://images.unsplash.com/photo-1530475329205-1c5333ae40fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByZW1pdW0lMjBob29kaWV8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 21,
        name: "Premium Blend Hoodie",
        price: 52.99,
        category: "hoodies",
        image: "https://plus.unsplash.com/premium_photo-1673827311290-d435f481152e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvb2RpZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 22,
        name: "Winter Fleece Hoodie",
        price: 49.99,
        category: "hoodies",
        image: "https://plus.unsplash.com/premium_photo-1674718916953-d6431979f5ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFdpbnRlciUyMEZsZWVjZSUyMEhvb2RpZSUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 23,
        name: "Athletic Sport Hoodie",
        price: 69.99,
        category: "hoodies",
        image: "https://img.freepik.com/free-photo/close-up-portrait-happy-young-man-green_155003-5571.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid",
    },
    {
        id: 24,
        name: "Designer Collection Hoodie",
        price: 57.99,
        category: "hoodies",
        image: "https://img.freepik.com/free-photo/portrait-young-man-yellow-scene_23-2148184819.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid",
    },



    //casual shirts
    {
        id: 25,
        name: "Classic Oxford Shirt",
        price: 49.99,
        category: "shirts",
        image: "https://img.freepik.com/free-photo/closeup-person-wearing-light-blue-shirt_181624-2598.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid",
    },
    {
        id: 26,
        name: "Pure Linen Shirt",
        price: 69.99,
        category: "shirts",
        image: "https://img.freepik.com/free-photo/smiling-man-listening-music-headphone-standing-near-red-rough-wall_23-2148193985.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid",
    },
    {
        id: 27,
        name: "Classic Check Shirt",
        price: 54.99,
        category: "shirts",
        image: "https://img.freepik.com/free-photo/confident-handsome-man-with-curly-hair-checked-shirt-showing-strength-gesture_141793-29608.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid",
    },
    {
        id: 28,
        name: "Denim Casual Shirt",
        price: 49.99,
        category: "shirts",
        image: "https://img.freepik.com/free-photo/portrait-handsome-confident-stylish-hipster-lambersexual-model-with-curly-hairstyle-sexy-man-dressed-jeans-jacket-fashion-male-isolated-blue-wall-studio_158538-26538.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid",
    },
    {
        id: 29,
        name: "Printed Summer Shirt",
        price: 49.99,
        category: "shirts",
        image: "https://img.freepik.com/premium-photo/feeling-shocked-open-mouthed-amazed-looking-pointing-downwards-disbelief-surprise_1194-89327.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid",
    },
    {
        id: 30,
        name: "Flannel Check Shirt",
        price: 59.99,
        category: "shirts",
        image: "https://img.freepik.com/premium-photo/portrait-man-casual-style-posing_484921-11380.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid",
    },
    {
        id: 31,
        name: "Striped Cotton Shirt",
        price: 49.99,
        category: "shirts",
        image: "https://img.freepik.com/free-photo/handsome-smiling-hipster-man-posing-studio_158538-25548.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid",
    },
    {
        id: 32,
        name: "Mandarin Collar Shirt",
        price: 69.99,
        category: "shirts",
        image: "https://img.freepik.com/free-photo/portrait-young-man-wearing-embroidered-shirt_23-2149302541.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid",
    },
    // T-Shirts
    {
        id: 33,
        name: "Basic Cotton T-Shirt",
        price: 29.99,
        category: "t-shirts",
        image: "https://img.freepik.com/free-photo/front-view-young-man-holding-cello-tape_23-2148273248.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
    {
        id: 34,
        name: "Graphic Print T-Shirt",
        price: 24.99,
        category: "t-shirts",
        image: "https://img.freepik.com/premium-photo/valentines-day-concept_474717-111952.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
    {
        id: 35,
        name: "Striped Cotton T-Shirt",
        price: 29.99,
        category: "t-shirts",
        image: "https://img.freepik.com/free-photo/front-view-smiley-young-man-posing_23-2149745580.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
    {
        id: 36,
        name: "Classic Polo T-Shirt",
        price: 29.99,
        category: "t-shirts",
        image: "https://img.freepik.com/premium-photo/portrait-young-man-standing-against-gray-background_1048944-18061336.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
    {
        id: 37,
        name: "Henley Neck T-Shirt",
        price: 29.99,
        category: "t-shirts",
        image: "https://img.freepik.com/premium-photo/just-average-joe-cropped-portrait-handsome-young-guy-standing-casually-while-isolated-white_590464-29310.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
    {
        id: 38,
        name: "V-Neck T-Shirt",
        price: 29.99,
        category: "t-shirts",
        image: "https://img.freepik.com/premium-photo/just-average-joe-cropped-portrait-handsome-young-guy-standing-casually-while-isolated-white_590464-29310.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
    {
        id: 39,
        name: "Longline T-Shirt",
        price: 29.99,
        category: "t-shirts",
        image: "https://img.freepik.com/premium-photo/portrait-happy-handsome-man-with-casual-clothing-smiling_251136-45709.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
    {
        id: 40,
        name: "Premium Cotton T-Shirt",
        price: 29.99,
        category: "t-shirts",
        image: "https://img.freepik.com/free-photo/portrait-handsome-confident-stylish-hipster-lambersexual-model-with-curly-hairstyle-sexy-man-dressed-jeans-white-tshirt-fashion-male-isolated-blue-wall-studio_158538-26574.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
    //jackets
    {
        id: 41,
        name: "Classic Denim Jacket",
        price: 89.99,
        category: "jackets",
        image: "https://img.freepik.com/free-photo/young-teenage-boy-wearing-denim-outfit_23-2150151058.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
    {
        id: 42,
        name: "Premium Leather Jacket",
        price: 79.99,
        category: "jackets",
        image: "https://img.freepik.com/free-photo/vertical-shot-young-man-wearing-leather-coat-with-turtleneck-necklace-holding-hat_181624-38661.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
    {
        id: 43,
        name: "Classic Bomber Jacket",
        price: 89.99,
        category: "jackets",
        image: "https://img.freepik.com/free-photo/autumn-person-with-beautiful-hat_23-2149137832.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
    {
        id: 44,
        name: "Winter Puffer Jacket",
        price: 79.99,
        category: "jackets",
        image: "https://img.freepik.com/free-photo/expressive-young-man-posing-studio_176474-38562.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
    {
        id: 45,
        name: "Lightweight Windbreaker",
        price: 89.99,
        category: "jackets",
        image: "https://img.freepik.com/premium-photo/dressing-properly-fashionable-man-cold-weather-style-handsome-man-wearing-hooded-coat-fashion-model-enjoying-warmth-comfort-casual-fashion-coat-cold-winter-conditions_474717-187403.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid.jpg"
    },
    {
        id: 46,
        name: "Classic Varsity Jacket",
        price: 79.99,
        category: "jackets",
        image: "https://img.freepik.com/free-photo/portrait-teenage-boy-with-arms-pockets_23-2148478779.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
    {
        id: 47,
        name: "Sports Track Jacket",
        price: 89.99,
        category: "jackets",
        image: "https://img.freepik.com/free-photo/close-up-portrait-attractive-male-model-color-flash-light_158595-5120.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
    {
        id: 48,
        name: "Casual Blazer Jacket",
        price: 499.99,
        category: "jackets",
        image: "https://img.freepik.com/free-photo/front-view-young-attractive-male-black-dark-classic-modern-suit-with-beard-blue-space_140725-12738.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
    //BOTTON WEAR
    //Trousers
    {
        id: 49,
        name: "Classic Formal Trousers",
        price: 69.99,
        category: "trousers",
        image: "https://img.freepik.com/free-photo/portrait-middle-aged-businessman_144627-27267.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
    {
        id: 50,
        name: "Slim Fit Chinos",
        price: 54.99,
        category: "trousers",
        image: "https://img.freepik.com/free-photo/man-beige-shirt-pants-casual-wear-fashion-full-body_53876-128784.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
    {
        id: 51,
        name: "Classic Chino Trousers",
        price: 69.99,
        category: "trousers",
        image: "https://img.freepik.com/free-photo/man-beige-shirt-pants-casual-wear-fashion-full-body_53876-128784.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
    {
        id: 52,
        name: "Pleated Formal Trouser",
        price: 54.99,
        category: "trousers",
        image: ""
    },
    //jeans
    {
        id: 53,
        name: "Slim Fit Jeans",
        price: 59.99,
        category: "jeans",
        image: "https://img.freepik.com/premium-photo/full-body-handsome-young-man-with-beard-standing-front-white-wall_33839-13183.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
    {
        id: 54,
        name: "Classic Straight Jeans",
        price: 64.99,
        category: "jeans",
        image: "https://img.freepik.com/premium-photo/portrait-young-stylish-athelet-pakistani-male-model-check-shirt-with-white-background_953460-344.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
    {
        id: 55,
        name: "Skinny Fit Jeans",
        price: 59.99,
        category: "jeans",
        image: "https://img.freepik.com/free-photo/hipster-holding-head_171337-16413.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
    {
        id: 56,
        name: "Distressed Ripped Jeans",
        price: 64.99,
        category: "jeans",
        image: "https://img.freepik.com/free-photo/portrait-handsome-young-model-man-dressed-jeans-clothes-sitting-near-white-textured-wall_158538-6998.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
    //shorts
    {
        id: 57,
        name: "Classic Chino Shorts",
        price: 34.99,
        category: "shorts",
        image: "https://img.freepik.com/premium-photo/portrait-young-man-standing-against-white-background_1048944-13836836.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
    {
        id: 58,
        name: "Cargo Pocket Shorts",
        price: 29.99,
        category: "shorts",
        image: "https://img.freepik.com/premium-photo/hallo-this-look-model-you-photo-asset_891936-1789.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
    {
        id: 59,
        name: "Denim Casual Shorts",
        price: 34.99,
        category: "shorts",
        image: "https://img.freepik.com/premium-photo/young-handsome-bearded-persian-man-brown-wall_251136-14385.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
    {
        id: 60,
        name: "Cotton Bermuda Shorts",
        price: 29.99,
        category: "shorts",
        image: "https://img.freepik.com/premium-photo/portrait-young-man-standing-against-white-background_1048944-20198894.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
    //track pants
    {
        id: 61,
        name: "Classic Track Pants",
        price: 44.99,
        category: "track pants",
        image: "https://img.freepik.com/premium-photo/portrait-young-guy_93995-4492.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
    {
        id: 62,
        name: "Slim Fit Jogger Track",
        price: 39.99,
        category: "track pants",
        image: "https://img.freepik.com/free-photo/front-view-male-performer-posing-jeans-sneakers_23-2148418014.jpg?ga=GA1.1.1862102380.1729219632"
    },
    {
        id: 63,
        name: "Performance Sport Track",
        price: 44.99,
        category: "track pants",
        image: "https://img.freepik.com/free-photo/ethnic-man-wearing-black-sportswear-with-rope_23-2148203553.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
    {
        id: 64,
        name: "Cotton Comfort Track",
        price: 39.99,
        category: "track pants",
        image: "https://img.freepik.com/premium-photo/man-wearing-beanie-against-white-space_251136-70057.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
    //designer suits
    {
        id: 65,
        name: "Italian Slim Fit Suit",
        price: 899.99,
        category: "designer,suits",
        image: "https://img.freepik.com/premium-photo/young-handsome-bearded-businessman-wearing-suit-isolated-against-white-wall_251136-76152.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
    {
        id: 66,
        name: "Premium Tuxedo",
        price: 799.99,
        category: "designer,suits",
        image: "https://img.freepik.com/free-photo/portrait-handsome-fashion-stylish-hipster-businessman-model-dressed-elegant-black-suit_158538-11474.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
    {
        id: 67,
        name: "Executive Business Suit",
        price: 899.99,
        category: "designer,suits",
        image: "https://img.freepik.com/free-photo/portrait-handsome-fashion-businessman-model-dressed-elegant-blue-suit-with-glasses-posing-gray_158538-11155.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
    {
        id: 68,
        name: "Luxury Wedding Suit",
        price: 799.99,
        category: "designer,suits",
        image: "https://img.freepik.com/free-photo/groom-stands-alone-tent-wedding-ceremony-by-sea_8353-7085.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },



    //premium blazers
    {
        id: 69,
        name: "Luxury Velvet Blazer",
        price: 599.99,
        category: "premium,blazers",
        image: "https://img.freepik.com/free-photo/man-fashion-fall-winter-collection-jacket_144627-54677.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
    {
        id: 70,
        name: "Premium Wool Blazer",
        price: 499.99,
        category: "premium,blazers",
        image: "https://img.freepik.com/free-photo/handsome-man-wearing-beige-coat_144627-23641.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
    {
        id: 71,
        name: "Summer Linen Blazer",
        price: 599.99,
        category: "premium,blazers",
        image: "https://img.freepik.com/premium-photo/wedding-s-hand_100800-18776.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
   
    {
        id: 72,
        name: "Cashmere Blend Blazer",
        price: 499.99,
        category: "premium,shirts",
        image: "https://img.freepik.com/free-photo/handsome-man-gray-checkered-suit_158538-4202.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },


     //luxury shirts


    {
        id: 73,
        name: "Pure Silk Dress Shirt",
        price: 299.99,
        category: "premium,shirts",
        image: "https://img.freepik.com/free-photo/hipster-style-bearded-man_158595-707.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
    {
        id: 74,
        name: "Egyptian Cotton Shirt",
        price: 249.99,
        category: "premium,shirts",
        image: "https://img.freepik.com/free-photo/muslim-man-front-golden-wall_23-2147796853.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
    {
        id: 75,
        name: "Italian Designer Shirt",
        price: 299.99,
        category: "premium,shirts",
        image: "https://img.freepik.com/free-photo/man-white-shirt-giving-neutral-appealing-poses_144627-62289.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
    {
        id: 76,
        name: "Premium Linen Shirt",
        price: 249.99,
        category: "premium,signature,collection",
        image: "https://img.freepik.com/free-photo/smiling-man-listening-music-headphone-standing-near-red-rough-wall_23-2148193985.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },

        //signature collection

    {
        id: 77,
        name: "Limited Edition Suit",
        price: 199.99,
        category: "premium,signature,collection",
        image: "https://img.freepik.com/free-photo/portrait-bearded-redhead-english-male_1157-39181.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
    {
        id: 78,
        name: "Designer Signature Blazer",
        price: 499.99,
        category: "premium,signature,collection",
        image: "https://img.freepik.com/free-photo/portrait-handsome-fashion-stylish-businessman-model-dressed-elegant-black-classic-suit-posing-metrosexual_158538-9181.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
    {
        id: 79,
        name: "Exclusive Dress Shirt",
        price: 199.99,
        category: "premium,signature,collection",
        image: "https://img.freepik.com/free-photo/portrait-handsome-young-man_158595-242.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
    {
        id: 80,
        name: "Premium Signature Trouser",
        price: 499.99,
        category: "premium,signature,collection",
        image: "https://img.freepik.com/premium-photo/bearded-businessman-with-blond-hair-gray_251136-23313.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
    },
];

function saveState() {
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

function loadState() {
    const savedWishlist = localStorage.getItem('wishlistItems');
    const savedCart = localStorage.getItem('cartItems');
    
    wishlistItems = savedWishlist ? JSON.parse(savedWishlist) : [];
    cartItems = savedCart ? JSON.parse(savedCart) : [];
    
    updateNotifications();
    updateWishlistUI();
    updateCartUI();
}

// UI Updates
function updateNotifications() {
    const wishlistCount = document.querySelector('.wishlist-count');
    const cartCount = document.querySelector('.cart-count');
    
    if (wishlistCount) {
        wishlistCount.style.display = wishlistItems.length > 0 ? 'block' : 'none';
        wishlistCount.textContent = wishlistItems.length;
    }
    
    if (cartCount) {
        const totalItems = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);
        cartCount.style.display = totalItems > 0 ? 'block' : 'none';
        cartCount.textContent = totalItems;
    }
}

function updateCartTotal() {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    const cartTotal = document.getElementById('cartTotal');
    if (cartTotal) {
        cartTotal.textContent = total.toFixed(2);
    }
}

function updateWishlistUI() {
    const wishlistContainer = document.querySelector('.wishlist-items');
    if (!wishlistContainer) return;
    
    wishlistContainer.innerHTML = '';
    wishlistItems.forEach(item => {
        const wishlistItem = document.createElement('div');
        wishlistItem.className = 'wishlist-item';
        wishlistItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="wishlist-item-details">
                <h4>${item.name}</h4>
                ${item.isDeal ? `
                    <div class="price-container">
                        <span class="new-price">$${item.price.toFixed(2)}</span>
                        <span class="old-price">$${item.originalPrice}</span>
                    </div>
                ` : `
                    <p>$${item.price.toFixed(2)}</p>
                `}
            </div>
            <button onclick="removeFromWishlist(${item.id})">Remove</button>
            <button onclick="moveToCart(${item.id})">Move to Cart</button>
        `;
        wishlistContainer.appendChild(wishlistItem);
    });
}

function updateCartUI() {
    const cartContainer = document.querySelector('.cart-items');
    const cartTotal = document.getElementById('cartTotal');
    const cartCount = document.querySelector('.cart-count');
    
    if (cartContainer) {
        cartContainer.innerHTML = '';
        let total = 0;
        
        cartItems.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>$${item.price.toFixed(2)} × ${item.quantity || 1}</p>
                    <div class="quantity-controls">
                        <button class="quantity-btn minus-btn" onclick="decreaseQuantity(${item.id})">&#8722;</button>
                        <span>${item.quantity || 1}</span>
                        <button class="quantity-btn plus-btn" onclick="increaseQuantity(${item.id})">&#43;</button>
                    </div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">×</button>
            `;
            cartContainer.appendChild(cartItem);
            total += item.price * (item.quantity || 1);
        });

        if (cartTotal) cartTotal.textContent = total.toFixed(2);
        if (cartCount) {
            const totalItems = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);
            cartCount.textContent = totalItems;
        }
    }
}

// Item Management
function removeFromWishlist(productId) {
    const index = wishlistItems.findIndex(item => item.id === productId);
    if (index > -1) {
        wishlistItems.splice(index, 1);
        updateWishlistUI();
        updateNotifications();
        saveState();
    }
}

function removeFromCart(productId) {
    const index = cartItems.findIndex(item => item.id === productId);
    if (index > -1) {
        cartItems.splice(index, 1);
        updateCartUI();
        updateNotifications();
        saveState();
    }
}

// Toggle Functions
function toggleWishlist(productId) {
    const product = getProductDetails(productId);
    const exists = wishlistItems.some(item => item.id === productId);
    
    if (!exists && product) {
        wishlistItems.push(product);
        updateWishlistUI();
        updateNotifications();
        saveState();
        
        // Visual feedback for all product cards with this ID
        const wishlistBtns = document.querySelectorAll(`.product-card[data-id="${productId}"] .wishlist-btn`);
        wishlistBtns.forEach(btn => {
            btn.classList.add('active');
            btn.querySelector('i').style.color = ' #ff4444';
        });
    }
}

function addToCart(productId) {
    const product = getProductDetails(productId);
    if (product) {
        // Check if product already exists in cart
        const existingItem = cartItems.find(item => item.id === productId);
        
        if (existingItem) {
            // Update quantity if product already exists
            existingItem.quantity = (existingItem.quantity || 1) + 1;
        } else {
            // Add new product with quantity 1
            product.quantity = 1;
            cartItems.push(product);
        }
        
        updateCartUI();
        updateNotifications();
        saveState();
        
        // Visual feedback
        const addToCartBtn = document.querySelector(`.product-card[data-id="${productId}"] .add-to-cart-btn`);
        if (addToCartBtn) {
            const originalText = addToCartBtn.textContent;
            addToCartBtn.textContent = 'Added!';
            addToCartBtn.style.backgroundColor = '#4CAF50';
            
            setTimeout(() => {
                addToCartBtn.textContent = originalText;
                addToCartBtn.style.backgroundColor = '';
            }, 1000);
        }

        // Show cart sidebar
        document.getElementById('cartSidebar').classList.add('active');
    }
}

// Helper function to get product details
function getProductDetails(productId) {
    // First try to find the product in our database
    const productFromDB = allProducts.find(p => p.id === productId);
    if (productFromDB) {
        return {
            id: productFromDB.id,
            name: productFromDB.name,
            price: productFromDB.isDeal ? productFromDB.price : productFromDB.price,
            image: productFromDB.image,
            isDeal: productFromDB.isDeal,
            originalPrice: productFromDB.originalPrice,
            discount: productFromDB.discount
        };
    }

    // If not found in database, try to get from DOM
    const productCard = document.querySelector(`.product-card[data-id="${productId}"]`);
    if (!productCard) return null;

    const name = productCard.querySelector('h3').textContent;
    const image = productCard.querySelector('img').src;
    let price, originalPrice, discount;
    
    // Check if it's a deal card
    if (productCard.classList.contains('deal-card')) {
        const newPriceElement = productCard.querySelector('.new-price');
        const oldPriceElement = productCard.querySelector('.old-price');
        const discountElement = productCard.querySelector('.discount-badge');
        
        price = parseFloat(newPriceElement.textContent.replace('$', ''));
        originalPrice = parseFloat(oldPriceElement.textContent.replace('$', ''));
        discount = discountElement.textContent;

        return {
            id: productId,
            name: name,
            price: price,
            originalPrice: originalPrice,
            discount: discount,
            image: image,
            isDeal: true
        };
    } else {
        price = parseFloat(productCard.querySelector('p').textContent.replace('$', ''));
        return {
            id: productId,
            name: name,
            price: price,
            image: image,
            isDeal: false
        };
    }
}

// Add these functions for search functionality
function setupSearch() {
    const searchInput = document.querySelector('.search-container input');
    const searchButton = document.querySelector('.search-container button');
    
    // Search when pressing enter
    searchInput?.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            performSearch(searchInput.value);
        }
    });

    // Search when clicking the search button
    searchButton?.addEventListener('click', () => {
        performSearch(searchInput.value);
    });

    // Real-time search as user types (optional)
    searchInput?.addEventListener('input', (e) => {
        if (e.target.value.length >= 2) { // Start searching after 2 characters
            performSearch(e.target.value);
        } else if (e.target.value.length === 0) {
            clearSearch();
        }
    });
}

function performSearch(query) {
    query = query.toLowerCase().trim();
    if (!query) return;

    let hasResults = false;

    // Create or get search results container
    let searchResults = document.querySelector('.search-results');
    if (!searchResults) {
        searchResults = document.createElement('div');
        searchResults.className = 'search-results';
        document.querySelector('main')?.prepend(searchResults);
    }
    searchResults.innerHTML = `<h2>Search Results for "${query}"</h2><div class="products-grid"></div>`;
    const resultsGrid = searchResults.querySelector('.products-grid');

    // Determine current page and filter products accordingly
    let productsToSearch = allProducts;
    const currentPath = window.location.pathname.toLowerCase();
    
    // Show all products only on index page
    if (!currentPath.includes('index.html') && currentPath !== '/' && currentPath !== '') {
        if (currentPath.includes('deals.html')) {
            productsToSearch = allProducts.filter(product => product.isDeal);
        } else if (currentPath.includes('hoodies.html')) {
            productsToSearch = allProducts.filter(product => product.category.includes('hoodies'));
        } else if (currentPath.includes('tshirts.html')) {
            productsToSearch = allProducts.filter(product => product.category.includes('t-shirts'));
        } else if (currentPath.includes('casual-shirts.html')) {
            productsToSearch = allProducts.filter(product => product.category.includes('shirts'));
        } else if (currentPath.includes('jackets.html')) {
            productsToSearch = allProducts.filter(product => product.category.includes('jackets'));
        } else if (currentPath.includes('trousers.html')) {
            productsToSearch = allProducts.filter(product => product.category.includes('trousers'));
        } else if (currentPath.includes('jeans.html')) {
            productsToSearch = allProducts.filter(product => product.category.includes('jeans'));
        } else if (currentPath.includes('shorts.html')) {
            productsToSearch = allProducts.filter(product => product.category.includes('shorts'));
        } else if (currentPath.includes('track-pants.html')) {
            productsToSearch = allProducts.filter(product => product.category.includes('track-pants'));
        } else if (currentPath.includes('premium-suits.html')) {
            productsToSearch = allProducts.filter(product => 
                product.category.includes('premium') && product.category.includes('suits')
            );
        } else if (currentPath.includes('designer-jackets.html')) {
            productsToSearch = allProducts.filter(product => 
                product.category.includes('premium') && product.category.includes('jackets')
            );
        } else if (currentPath.includes('luxury-shirts.html')) {
            productsToSearch = allProducts.filter(product => 
                product.category.includes('premium') && product.category.includes('shirts')
            );
        } else if (currentPath.includes('premium-accessories.html')) {
            productsToSearch = allProducts.filter(product => 
                product.category.includes('premium') && product.category.includes('accessories')
            );
        }
    }

    // Search through filtered products
    const matchingProducts = productsToSearch.filter(product => {
        const nameMatch = product.name.toLowerCase().includes(query);
        const categoryMatch = product.category?.toLowerCase().includes(query);
        const priceMatch = product.price.toString().includes(query);
        const discountMatch = product.discount?.toLowerCase().includes(query);
        const originalPriceMatch = product.originalPrice?.toString().includes(query);
        
        // Search in multiple categories if product has them
        const categoriesMatch = product.category?.split(',').some(cat => 
            cat.toLowerCase().trim().includes(query)
        );

        // Enhanced deal matching
        const isDiscountSearch = query.includes('%') || query.includes('off');
        const discountValueMatch = isDiscountSearch && product.discount?.includes(query.replace('off', '').trim());

        return nameMatch || 
               categoryMatch || 
               priceMatch || 
               discountMatch || 
               originalPriceMatch || 
               categoriesMatch ||
               discountValueMatch;
    });

    if (matchingProducts.length > 0) {
        hasResults = true;
        matchingProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = `product-card${product.isDeal ? ' deal-card' : ''}`;
            productCard.setAttribute('data-id', product.id);
            
            // Handle different size options based on product category
            let sizeButtons = '';
            if (product.category.includes('shoes')) {
                sizeButtons = `
                    <button class="size-btn">40</button>
                    <button class="size-btn">41</button>
                    <button class="size-btn">42</button>
                    <button class="size-btn">43</button>
                    <button class="size-btn">44</button>
                `;
            } else if (product.category.includes('accessories')) {
                sizeButtons = `<button class="size-btn">One Size</button>`;
            } else {
                sizeButtons = `
                    <button class="size-btn">S</button>
                    <button class="size-btn">M</button>
                    <button class="size-btn">L</button>
                    <button class="size-btn">XL</button>
                `;
            }
            
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    <button class="wishlist-btn" onclick="toggleWishlist(${product.id})">
                        <i class="fas fa-heart"></i>
                    </button>
                    ${product.isDeal ? `<span class="discount-badge">-${product.discount}</span>` : ''}
                </div>
                <h3>${product.name}</h3>
                ${product.isDeal ? `
                    <div class="price-container">
                        <span class="old-price">$${product.originalPrice}</span>
                        <span class="new-price">$${product.price}</span>
                    </div>
                ` : `
                    <p>$${product.price}</p>
                `}
                <div class="sizes">
                    ${sizeButtons}
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            
            resultsGrid.appendChild(productCard);
        });
    }

    // Show no results message if needed
    if (!hasResults) {
        searchResults.innerHTML = `
            <h2>Search Results for "${query}"</h2>
            <div class="no-results">
                <p>No products found matching your search.</p>
                <button onclick="clearSearch()">Clear Search</button>
            </div>
        `;
    }

    // Hide banner and show only search results
    const heroBanner = document.querySelector('.hero-banner');
    if (heroBanner) {
        heroBanner.style.display = 'none';
    }

    // Show search results and hide other sections except search results
    document.querySelectorAll('main > section:not(.search-results), main > .products-grid').forEach(section => {
        section.style.display = 'none';
    });
    searchResults.style.display = 'block';

    // Add clear search button
    if (!document.querySelector('.clear-search') && hasResults) {
        const clearButton = document.createElement('button');
        clearButton.className = 'clear-search';
        clearButton.textContent = 'Clear Search';
        clearButton.onclick = clearSearch;
        searchResults.insertBefore(clearButton, searchResults.querySelector('.products-grid'));
    }
}

function clearSearch() {
    // Remove search results
    const searchResults = document.querySelector('.search-results');
    if (searchResults) {
        searchResults.remove();
    }

    // Clear search input
    const searchInput = document.querySelector('.search-container input');
    if (searchInput) {
        searchInput.value = '';
    }

    // Show banner again on index page
    const heroBanner = document.querySelector('.hero-banner');
    if (heroBanner) {
        heroBanner.style.display = 'flex';
    }

    // Show all sections again
    document.querySelectorAll('main > section, main > .products-grid').forEach(section => {
        section.style.display = '';
    });
}

// Load order history from localStorage
function loadOrderHistory() {
    const savedOrders = localStorage.getItem('orderHistory');
    orderHistory = savedOrders ? JSON.parse(savedOrders) : [];
}

// Save order history to localStorage
function saveOrderHistory() {
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
}

// Add this function to handle order display
function displayOrders() {
    const ordersContainer = document.querySelector('.orders-container');
    if (!ordersContainer) return;

    ordersContainer.innerHTML = '';
    orderHistory.forEach(order => {
        const orderElement = document.createElement('div');
        orderElement.className = 'order-item';
        orderElement.innerHTML = `
            <div class="order-header">
                <div class="order-info">
                    <h3>Order #${order.id}</h3>
                    <span class="order-date">${order.date}</span>
                </div>
                <div class="order-actions">
                    <span class="status-confirmed">Confirmed</span>
                    <button class="cancel-order-btn" onclick="cancelOrder(${order.id})">Cancel Order</button>
                </div>
            </div>
            <div class="order-products">
                ${order.items.map(item => `
                    <div class="order-product">
                        <img src="${item.image}" alt="${item.name}">
                        <div class="order-product-details">
                            <h4>${item.name}</h4>
                            <p class="order-price">$${item.price.toFixed(2)} × ${item.quantity || 1}</p>
                            <p class="order-item-total">Item Total: $${(item.price * (item.quantity || 1)).toFixed(2)}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="order-summary">
                <div class="order-total">
                    <p>Total Items: ${order.items.reduce((sum, item) => sum + (item.quantity || 1), 0)}</p>
                    <p>Order Total: $${order.total.toFixed(2)}</p>
                </div>
            </div>
        `;
        ordersContainer.appendChild(orderElement);
    });
}

// Update the checkout function to include quantities
function checkout() {
    if (cartItems.length === 0) return;

    const order = {
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        items: cartItems.map(item => ({
            ...item,
            quantity: item.quantity || 1
        })),
        total: cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0)
    };

    // Add to order history
    orderHistory.push(order);
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));

    // Clear cart
    cartItems = [];
    saveState();
    updateCartUI();
    updateNotifications();

    // Close cart sidebar
    document.getElementById('cartSidebar').classList.remove('active');

    // Show confirmation
    alert('Order placed successfully!');
}

// Function to show orders when clicking on Orders in hamburger menu
function showOrders() {
    // Load orders first
    loadOrderHistory();

    // Hide all sections
    document.querySelectorAll('main > section, main > .products-grid, main > .hero-banner').forEach(section => {
        section.style.display = 'none';
    });

    // Show orders section
    let ordersSection = document.querySelector('.orders-section');
    if (!ordersSection) {
        ordersSection = document.createElement('div');
        ordersSection.className = 'orders-section';
        document.querySelector('main').appendChild(ordersSection);
    }

    // Update orders UI
    if (orderHistory.length === 0) {
        ordersSection.innerHTML = `
            <h1 class="section-title">My Orders</h1>
            <div class="orders-container">
                <div class="no-orders">
                    <p>You haven't placed any orders yet.</p>
                    <button onclick="window.location.href='index.html'">Start Shopping</button>
                </div>
            </div>
        `;
    } else {
        ordersSection.innerHTML = `
            <h1 class="section-title">My Orders</h1>
            <div class="orders-container">
                ${orderHistory.map(order => `
                    <div class="order-item">
                        <div class="order-header">
                            <div class="order-date">
                                Order placed: ${new Date(order.date).toLocaleDateString()}
                            </div>
                            <div class="order-total">
                                Total: $${order.total.toFixed(2)}
                            </div>
                        </div>
                        <div class="order-products">
                            ${order.items.map(item => `
                                <div class="order-product">
                                    <img src="${item.image}" alt="${item.name}">
                                    <div class="order-product-details">
                                        <h4>${item.name}</h4>
                                        <p>$${item.price.toFixed(2)}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    ordersSection.style.display = 'block';
}

// Add this function to handle order cancellation
function cancelOrder(orderId) {
    if (confirm('Are you sure you want to cancel this order?')) {
        // Remove order from orderHistory
        orderHistory = orderHistory.filter(order => order.id !== orderId);
        // Save updated order history
        localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
        // Refresh orders display
        displayOrders();
        // Show confirmation
        alert('Order cancelled successfully');
    }
}

// Add this function to update orders display
function updateOrdersDisplay(container) {
    if (orderHistory.length === 0) {
        container.innerHTML = `
            <div class="no-orders">
                <p>You haven't placed any orders yet.</p>
                <button onclick="window.location.href='index.html'">Start Shopping</button>
            </div>
        `;
    } else {
        container.innerHTML = orderHistory.map(order => `
            <div class="order-item">
                <div class="order-header">
                    <div class="order-info">
                        <div class="order-date">
                            Order placed: ${new Date(order.date).toLocaleDateString()}
                        </div>
                        <div class="order-total">
                            Total: $${order.total.toFixed(2)}
                        </div>
                    </div>
                    <button class="cancel-order-btn" onclick="cancelOrder(${order.id})">
                        Cancel Order
                    </button>
                </div>
                <div class="order-products">
                    ${order.items.map(item => `
                        <div class="order-product">
                            <img src="${item.image}" alt="${item.name}">
                            <div class="order-product-details">
                                <h4>${item.name}</h4>
                                <p>$${item.price.toFixed(2)}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }
}

// Add moveToCart function
function moveToCart(productId) {
    // Find item in wishlist
    const item = wishlistItems.find(item => item.id === productId);
    if (item) {
        // Add to cart
        cartItems.push(item);
        // Remove from wishlist
        removeFromWishlist(productId);
        // Update UI
        updateCartUI();
        updateWishlistUI();
        updateNotifications();
        saveState();
        
        // Close wishlist sidebar and open cart sidebar
        document.getElementById('wishlistSidebar').classList.remove('active');
        document.getElementById('cartSidebar').classList.add('active');
    }
}

// Add these quantity control functions
function increaseQuantity(productId) {
    const item = cartItems.find(item => item.id === productId);
    if (item) {
        item.quantity = (item.quantity || 1) + 1;
        updateCartUI();
        updateNotifications();
        saveState();
    }
}

function decreaseQuantity(productId) {
    const item = cartItems.find(item => item.id === productId);
    if (item) {
        if (item.quantity > 1) {
            item.quantity -= 1;
            updateCartUI();
            updateNotifications();
            saveState();
        } else {
            removeFromCart(productId);
        }
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    loadOrderHistory();
    updateWishlistUI();
    updateCartUI();
    updateNotifications();
    
    const sidebar = document.getElementById('sidebar');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const wishlistSidebar = document.getElementById('wishlistSidebar');
    const cartSidebar = document.getElementById('cartSidebar');
    
    // Toggle Sidebar
    hamburgerMenu?.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        document.body.classList.toggle('sidebar-active');
    });

    // Header Icons - Fix the selectors
    const wishlistIcon = document.querySelector('.header-icons .fa-heart').parentElement;
    const cartIcon = document.querySelector('.header-icons .fa-shopping-cart').parentElement;

    // Add click handlers for wishlist and cart icons
    wishlistIcon.addEventListener('click', () => {
        wishlistSidebar.classList.add('active');
        cartSidebar.classList.remove('active'); // Close cart if open
    });

    cartIcon.addEventListener('click', () => {
        cartSidebar.classList.add('active');
        wishlistSidebar.classList.remove('active'); // Close wishlist if open
    });

    // Close buttons
    document.querySelector('.close-sidebar')?.addEventListener('click', () => {
        sidebar.classList.remove('active');
        document.body.classList.remove('sidebar-active');
    });

    document.querySelector('.close-wishlist')?.addEventListener('click', () => {
        wishlistSidebar.classList.remove('active');
    });

    document.querySelector('.close-cart')?.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
    });

    // Outside click handler
    document.addEventListener('click', (e) => {
        // Sidebar
        if (sidebar && !sidebar.contains(e.target) && 
            !hamburgerMenu.contains(e.target)) {
            sidebar.classList.remove('active');
            document.body.classList.remove('sidebar-active');
        }

        // Wishlist
        if (wishlistSidebar && !wishlistSidebar.contains(e.target) && 
            !wishlistIcon.contains(e.target) &&
            !e.target.matches('.wishlist-item button')) {
            wishlistSidebar.classList.remove('active');
        }
        
        // Cart
        if (cartSidebar && !cartSidebar.contains(e.target) && 
            !cartIcon.contains(e.target) &&
            !e.target.matches('.cart-item button')) {
            cartSidebar.classList.remove('active');
        }
    });

    // Initialize submenu functionality
    const menuItems = document.querySelectorAll('.menu-item.has-submenu');
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (e.target.closest('.submenu')) return;
            
            if (this.classList.contains('active')) {
                this.classList.remove('active');
            } else {
                this.classList.add('active');
                
                // Close other open submenus
                menuItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
            }
        });
    });

    // Initialize search functionality
    setupSearch();

    // Initialize wishlist state for all products
    wishlistItems.forEach(item => {
        const wishlistBtns = document.querySelectorAll(`.product-card[data-id="${item.id}"] .wishlist-btn`);
        wishlistBtns.forEach(btn => {
            btn.classList.add('active');
            btn.querySelector('i').style.color = '#ff4444';
        });
    });

    // Add click handler for Orders menu item
    const ordersMenuItem = document.querySelector('.menu-item .orders-link');
    if (ordersMenuItem) {
        ordersMenuItem.addEventListener('click', function(e) {
            e.preventDefault();
            showOrders();
            // Close sidebar
            const sidebar = document.getElementById('sidebar');
            if (sidebar) {
                sidebar.classList.remove('active');
                document.body.classList.remove('sidebar-active');
            }
        });
    }

    // Add click handler for Orders icon in header (if exists)
    const ordersIcon = document.querySelector('.header-icons .fa-clipboard-list')?.parentElement;
    if (ordersIcon) {
        ordersIcon.addEventListener('click', showOrders);
    }

    // Update the checkout button event listener
    document.querySelector('.checkout-btn')?.addEventListener('click', checkout);

    // If on orders page, display orders
    if (document.querySelector('.orders-container')) {
        displayOrders();
    }
}); 













function displayOrders() {
    const ordersContainer = document.querySelector('.orders-container');
    const savedOrders = localStorage.getItem('orderHistory');
    const orderHistory = savedOrders ? JSON.parse(savedOrders) : [];

    if (orderHistory.length === 0) {
        ordersContainer.innerHTML = `
            <div class="no-orders">
                <p>You haven't placed any orders yet.</p>
                <button onclick="window.location.href='index.html'">Start Shopping</button>
            </div>
        `;
    } else {
        ordersContainer.innerHTML = orderHistory.map(order => {
            // Calculate total quantities for this order
            const totalQuantities = order.items.reduce((sum, item) => sum + item.quantity, 0);

            return `
                <div class="order-item">
                    <div class="order-header">
                        <div class="order-info">
                            <div class="order-date">
                                Order placed: ${new Date(order.date).toLocaleDateString()}
                            </div>
                            <div class="order-total">
                                Total Amount: $${order.total.toFixed(2)}
                            </div>
                            <div class="order-total-quantities">
                                Total Quantities: ${totalQuantities}
                            </div>
                        </div>
                        <button class="cancel-order-btn" onclick="cancelOrder(${order.id})">
                            Cancel Order
                        </button>
                    </div>
                    <div class="order-products">
                        ${order.items.map(item => `
                            <div class="order-product">
                                <img src="${item.image}" alt="${item.name}">
                                <div class="order-product-details">
                                    <h4>${item.name}</h4>
                                    <p>Price: $${item.price.toFixed(2)}</p>
                                    <p>Quantity: ${item.quantity}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }).join('');
    }
}

// Ensure to call the `displayOrders` function if on the orders page
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.orders-container')) {
        displayOrders();
    }
});

