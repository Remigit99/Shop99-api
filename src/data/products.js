const products = [
  // 1. ELECTRONICS: Headphone (Sale Item)
  {
    name: 'Noise-Cancelling Over-Ear Headphones',
    slug: 'noise-cancelling-over-ear-headphones',
    image: '/images/headphones-main.jpg',
    images: [
      { url: '/images/headphones-side.jpg', alt: 'Headphones showing control buttons' },
      { url: '/images/headphones-case.jpg', alt: 'Headphones folded in protective case' },
    ],
    brand: 'AudioPro',
    category: 'Electronics',
    description: 'Industry-leading noise cancellation and superior sound quality with 30 hours of battery life.',
    sku: 'AP-NC-HP-901',
    price: 349.99,
    oldPrice: 399.99, // Sale Price
    countInStock: 25,
    rating: 4.8,
    numReviews: 155,
  },
  
  // 2. CLOTHING: Men's T-shirt
  {
    name: 'Organic Cotton Crew Neck T-Shirt',
    slug: 'organic-cotton-crew-neck-tshirt',
    image: '/images/tshirt-blue-main.jpg',
    images: [
      { url: '/images/tshirt-texture.jpg', alt: 'Close up of cotton fabric texture' },
      { url: '/images/tshirt-model.jpg', alt: 'Male model wearing blue t-shirt' },
    ],
    brand: 'EcoWear',
    category: 'Clothing',
    description: 'Supersoft, ethically sourced organic cotton tee. Perfect for everyday comfort.',
    sku: 'EW-TS-CR-BLU',
    price: 29.50,
    oldPrice: undefined,
    countInStock: 150,
    rating: 4.5,
    numReviews: 88,
  },

  // 3. HOME & KITCHEN: Coffee Maker
  {
    name: 'Programmable Drip Coffee Maker',
    slug: 'programmable-drip-coffee-maker',
    image: '/images/coffee-maker-main.jpg',
    images: [
      { url: '/images/coffee-maker-carafe.jpg', alt: 'Glass carafe filled with hot coffee' },
    ],
    brand: 'BrewMaster',
    category: 'Home & Kitchen',
    description: '12-cup capacity with a 24-hour programmable timer. Includes permanent filter.',
    sku: 'BM-DRIP-12C',
    price: 59.99,
    oldPrice: 65.00,
    countInStock: 80,
    rating: 4.2,
    numReviews: 45,
  },

  // 4. BOOKS: Novel
  {
    name: 'The Midnight Library',
    slug: 'the-midnight-library-novel',
    image: '/images/book-library-main.jpg',
    images: [
      { url: '/images/book-cover-detail.jpg', alt: 'Close-up of the book cover typography' },
    ],
    brand: 'Penguin Books',
    category: 'Books',
    description: 'A captivating novel about life, regret, and the choices that define us.',
    sku: 'PB-NOVEL-MID',
    price: 15.99,
    oldPrice: undefined,
    countInStock: 50,
    rating: 4.7,
    numReviews: 210,
  },

  // 5. SPORTS: Yoga Mat (Low Stock)
  {
    name: 'Non-Slip TPE Yoga Mat (5mm)',
    slug: 'non-slip-tpe-yoga-mat',
    image: '/images/yoga-mat-main.jpg',
    images: [
      { url: '/images/yoga-mat-rolled.jpg', alt: 'Yoga mat rolled up with carrying strap' },
    ],
    brand: 'FitnessGear',
    category: 'Sports & Outdoors',
    description: 'Eco-friendly TPE material provides superior grip and cushioning. Lightweight and durable.',
    sku: 'FG-YM-TPE05',
    price: 35.00,
    oldPrice: undefined,
    countInStock: 5, // Low stock
    rating: 4.4,
    numReviews: 62,
  },

  // 6. BEAUTY: Moisturizer
  {
    name: 'Hyaluronic Acid Face Moisturizer',
    slug: 'hyaluronic-acid-face-moisturizer',
    image: '/images/moisturizer-jar.jpg',
    images: [
      { url: '/images/moisturizer-swatch.jpg', alt: 'A small swatch of the cream on skin' },
    ],
    brand: 'SkinScience',
    category: 'Beauty & Personal Care',
    description: 'Deeply hydrating moisturizer suitable for all skin types. Paraben-free.',
    sku: 'SS-MOIST-HA',
    price: 45.00,
    oldPrice: undefined,
    countInStock: 120,
    rating: 4.6,
    numReviews: 95,
  },

  // 7. FURNITURE: Desk Lamp
  {
    name: 'Minimalist LED Desk Lamp',
    slug: 'minimalist-led-desk-lamp',
    image: '/images/desk-lamp-main.jpg',
    images: [
      { url: '/images/desk-lamp-on.jpg', alt: 'Lamp illuminated on a wooden desk' },
    ],
    brand: 'HomeLuxe',
    category: 'Furniture',
    description: 'Sleek aluminum desk lamp with adjustable arm and three brightness settings.',
    sku: 'HL-LAMP-MIN',
    price: 75.99,
    oldPrice: undefined,
    countInStock: 40,
    rating: 4.3,
    numReviews: 33,
  },

  // 8. BABY: Diapers (Subscription Item)
  {
    name: 'Eco-Friendly Disposable Diapers (Size 3)',
    slug: 'eco-friendly-disposable-diapers',
    image: '/images/diapers-pack.jpg',
    images: [
      { url: '/images/diapers-pattern.jpg', alt: 'Diaper close-up showing absorbent layer' },
    ],
    brand: 'TinyTots',
    category: 'Baby',
    description: 'Hypoallergenic and highly absorbent diapers made with sustainable materials.',
    sku: 'TT-DIAP-S03',
    price: 32.99,
    oldPrice: undefined,
    countInStock: 200,
    rating: 4.9,
    numReviews: 310,
  },

  // 9. TOOLS: Drill
  {
    name: 'Cordless 18V Power Drill',
    slug: 'cordless-18v-power-drill',
    image: '/images/drill-main.jpg',
    images: [
      { url: '/images/drill-bits.jpg', alt: 'Drill with a set of interchangeable drill bits' },
    ],
    brand: 'ProTools',
    category: 'Tools & Home Improvement',
    description: 'High-power 18V drill with two speed settings and integrated LED light.',
    sku: 'PT-DRILL-18V',
    price: 119.99,
    oldPrice: undefined,
    countInStock: 60,
    rating: 4.6,
    numReviews: 125,
  },

  // 10. FOOTWEAR: Running Shoes (Out of Stock)
  {
    name: 'Lightweight Trail Running Shoes',
    slug: 'lightweight-trail-running-shoes',
    image: '/images/running-shoe-main.jpg',
    images: [
      { url: '/images/running-shoe-sole.jpg', alt: 'Close up of the rugged shoe sole' },
    ],
    brand: 'RunFast',
    category: 'Footwear',
    description: 'Exceptional grip and cushioning for off-road running. Breathable mesh upper.',
    sku: 'RF-TRS-LGT',
    price: 99.99,
    oldPrice: 110.00,
    countInStock: 0, // OUT OF STOCK
    rating: 4.1,
    numReviews: 70,
  },

  // 11. PETS: Dog Food
  {
    name: 'Grain-Free Adult Dog Food (Salmon Recipe)',
    slug: 'grain-free-adult-dog-food',
    image: '/images/dog-food-bag.jpg',
    images: [
      { url: '/images/dog-food-bowl.jpg', alt: 'Dry dog food kibble in a silver bowl' },
    ],
    brand: 'HealthyPet',
    category: 'Pet Supplies',
    description: 'Nutrient-rich food formulated for adult dogs, featuring real salmon as the primary ingredient.',
    sku: 'HP-DF-GF-SAL',
    price: 65.00,
    oldPrice: undefined,
    countInStock: 110,
    rating: 4.8,
    numReviews: 240,
  },
  
  // 12. GAMES: Board Game
  {
    name: 'Strategy Board Game: Settlers of Catan',
    slug: 'settlers-of-catan-board-game',
    image: '/images/catan-box.jpg',
    images: [
      { url: '/images/catan-pieces.jpg', alt: 'Game pieces and map tiles set up' },
    ],
    brand: 'Catan Studio',
    category: 'Toys & Games',
    description: 'Classic strategy game of trading, building, and settling the fictional island of Catan.',
    sku: 'CS-BG-CATAN',
    price: 49.95,
    oldPrice: undefined,
    countInStock: 75,
    rating: 4.9,
    numReviews: 450,
  },

  // 13. CLOTHING: Women's Dress
  {
    name: 'Floral Print Midi Dress',
    slug: 'floral-print-midi-dress',
    image: '/images/dress-main.jpg',
    images: [
      { url: '/images/dress-close.jpg', alt: 'Close-up of the floral pattern fabric' },
    ],
    brand: 'StyleHouse',
    category: 'Clothing',
    description: 'Lightweight rayon midi dress with an elegant floral pattern and tie-waist detail.',
    sku: 'SH-DR-MID-FLR',
    price: 85.00,
    oldPrice: undefined,
    countInStock: 90,
    rating: 4.3,
    numReviews: 40,
  },

  // 14. KITCHEN: Blender
  {
    name: 'High-Speed Professional Blender',
    slug: 'high-speed-professional-blender',
    image: '/images/blender-main.jpg',
    images: [
      { url: '/images/blender-smoothie.jpg', alt: 'Blender making a green smoothie' },
    ],
    brand: 'VitaBlend',
    category: 'Home & Kitchen',
    description: '1500W motor with variable speed control. Perfect for smoothies, soups, and nut butter.',
    sku: 'VB-BLND-1500',
    price: 299.00,
    oldPrice: undefined,
    countInStock: 30,
    rating: 4.7,
    numReviews: 180,
  },

  // 15. COMPUTERS: Laptop
  {
    name: 'Ultra-Slim 14-inch Laptop',
    slug: 'ultra-slim-14-inch-laptop',
    image: '/images/laptop-main.jpg',
    images: [
      { url: '/images/laptop-keyboard.jpg', alt: 'Close-up of the keyboard and trackpad' },
    ],
    brand: 'TechWave',
    category: 'Electronics',
    description: 'Intel i7, 16GB RAM, 512GB SSD. Perfect for professional and student use.',
    sku: 'TW-LAP-US14',
    price: 1199.00,
    oldPrice: 1250.00,
    countInStock: 15,
    rating: 4.5,
    numReviews: 90,
  },

  // 16. SPORTS: Water Bottle
  {
    name: 'Insulated Stainless Steel Water Bottle',
    slug: 'insulated-stainless-steel-bottle',
    image: '/images/bottle-main.jpg',
    images: [
      { url: '/images/bottle-lid.jpg', alt: 'View of the leak-proof screw-on lid' },
    ],
    brand: 'AquaLife',
    category: 'Sports & Outdoors',
    description: 'Keeps drinks cold for 24 hours and hot for 12 hours. 32oz capacity.',
    sku: 'AL-BOT-SS32',
    price: 25.00,
    oldPrice: undefined,
    countInStock: 180,
    rating: 4.6,
    numReviews: 115,
  },

  // 17. HOME DECOR: Throw Blanket
  {
    name: 'Chunky Knit Throw Blanket',
    slug: 'chunky-knit-throw-blanket',
    image: '/images/blanket-main.jpg',
    images: [
      { url: '/images/blanket-texture.jpg', alt: 'Close-up of the chunky knit texture' },
    ],
    brand: 'CozyHome',
    category: 'Home & Kitchen',
    description: 'Luxuriously soft acrylic blend blanket, perfect for cozying up on the sofa.',
    sku: 'CH-THW-KNIT',
    price: 65.00,
    oldPrice: undefined,
    countInStock: 70,
    rating: 4.4,
    numReviews: 55,
  },

  // 18. JEWELRY: Necklace
  {
    name: 'Minimalist Gold Pendant Necklace',
    slug: 'minimalist-gold-pendant-necklace',
    image: '/images/necklace-main.jpg',
    images: [
      { url: '/images/necklace-on-model.jpg', alt: 'Model wearing the delicate gold necklace' },
    ],
    brand: 'FineJules',
    category: 'Jewelry',
    description: '14k gold-filled chain with a simple, elegant geometric pendant.',
    sku: 'FJ-NECK-GOLD',
    price: 89.99,
    oldPrice: undefined,
    countInStock: 45,
    rating: 4.9,
    numReviews: 20,
  },

  // 19. ART SUPPLIES: Paint Set
  {
    name: 'Professional 24-Color Acrylic Paint Set',
    slug: 'professional-acrylic-paint-set',
    image: '/images/paint-set-main.jpg',
    images: [
      { url: '/images/paint-tubes.jpg', alt: 'Tubes of acrylic paint lined up' },
    ],
    brand: 'ArtPro',
    category: 'Crafts & Art Supplies',
    description: 'High-pigment acrylic paints suitable for canvas, wood, and ceramic surfaces.',
    sku: 'AP-PAINT-ACR24',
    price: 45.99,
    oldPrice: undefined,
    countInStock: 100,
    rating: 4.3,
    numReviews: 35,
  },

  // 20. FOOTWEAR: Sandals
  {
    name: 'Leather Summer Walking Sandals',
    slug: 'leather-summer-walking-sandals',
    image: '/images/sandals-main.jpg',
    images: [
      { url: '/images/sandals-sole.jpg', alt: 'Close-up of the cushioned sandal sole' },
    ],
    brand: 'FootEase',
    category: 'Footwear',
    description: 'Adjustable strap leather sandals with arch support for all-day walking comfort.',
    sku: 'FE-SNDL-LTHR',
    price: 79.95,
    oldPrice: 85.00,
    countInStock: 65,
    rating: 4.0,
    numReviews: 18,
  },
];

export default products;