const products = [
  {
    name: 'Wireless Bluetooth Headset',
    slug: 'wireless-bluetooth-headset', // Must be unique
    image: '/images/headset-main.jpg', // Main image for lists
    images: [ // Gallery images with alt text
      { url: '/images/headset-front.jpg', alt: 'Front view of the headset' },
      { url: '/images/headset-side.jpg', alt: 'Side view of the headset showing logo' },
    ],
    brand: 'Sony',
    category: 'Electronics',
    description:
      'High-fidelity wireless Bluetooth headset with noise-cancelling features and 24-hour battery life.',
    sku: 'SNY-WH1000XM5',
    price: 249.99,
    oldPrice: 299.99, // On sale!
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: 'Classic Canvas Backpack',
    slug: 'classic-canvas-backpack',
    image: '/images/backpack-main.jpg',
    images: [
      { url: '/images/backpack-open.jpg', alt: 'Backpack open revealing inner pockets' },
      { url: '/images/backpack-model.jpg', alt: 'Person wearing the backpack' },
    ],
    brand: 'Jansport',
    category: 'Bags & Luggage',
    description:
      'Durable, water-resistant canvas backpack perfect for school or a weekend trip. Features a dedicated laptop sleeve.',
    sku: 'JSP-CLASSIC-BLU',
    price: 59.99,
    oldPrice: undefined, // Not on sale
    countInStock: 0, // Out of stock!
    rating: 3.8,
    numReviews: 8,
  },
];

export default products;