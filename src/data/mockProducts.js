import { createProduct, PRODUCT_CATEGORIES } from '../types/index.js';

// Function to dynamically import images
const importImage = (imageName) => {
  try {
    return new URL(`../assets/images/${imageName}`, import.meta.url).href;
  } catch (error) {
    console.warn(`Failed to load image: ${imageName}`);
    return null;
  }
};

// Function to get all product images
const getProductImages = () => {
  const imageFiles = [
    'tshirt1.png',
    'tshirt2.png',
    'tshirt3.png',
    'tshirt4.png',
    'tshirt5.png',
    'mug1.png',
    'mug2.png',
    'mug3.png',
    'mug4.png',
    'mug5.jpeg',
    'samay.png',
    'chess1.png',
    'chess2.png'
  ];

  const images = {};
  imageFiles.forEach(fileName => {
    const imageName = fileName.split('.')[0]; // Remove extension for key
    images[imageName] = importImage(fileName);
  });

  return images;
};

// Get all images using the function
const images = getProductImages();


// Mock product data for the Samay Raina merchandise store
export const mockProducts = [
  createProduct({
    id: 'sr-tshirt-001',
    name: 'Samay Raina Comedy Chess T-Shirt',
    description: 'Premium cotton t-shirt featuring Samay\'s iconic "Comedy Chess" design. Perfect for chess enthusiasts and comedy fans alike.',
    price: 899,
    originalPrice: 1299,
    images: [
      images.tshirt1,
      images.tshirt2,
      images.tshirt3
    ],
    category: PRODUCT_CATEGORIES.APPAREL,
    inStock: true,
    stockCount: 50,
    rating: 4.8,
    reviews: 127,
    isNew: false,
    isBestseller: true,
    variants: {
      size: ['S', 'M', 'L', 'XL', 'XXL'],
      color: ['Black', 'Navy Blue', 'Maroon']
    }
  }),

  createProduct({
    id: 'sr-hoodie-001',
    name: 'Checkmate Hoodie',
    description: 'Cozy hoodie with Samay\'s signature chess-comedy fusion design. Stay warm while you checkmate your opponents.',
    price: 1599,
    originalPrice: 2199,
    images: [
      images.tshirt4,
      images.tshirt5
    ],
    category: PRODUCT_CATEGORIES.APPAREL,
    inStock: true,
    stockCount: 30,
    rating: 4.9,
    reviews: 89,
    isNew: false,
    isBestseller: false,
    variants: {
      size: ['S', 'M', 'L', 'XL', 'XXL'],
      color: ['Black', 'Grey', 'Maroon']
    }
  }),

  createProduct({
    id: 'sr-tshirt-002',
    name: 'Rook to Queen T-Shirt',
    description: 'Limited edition tee with Samay\'s famous "Rook to Queen" chess move illustration.',
    price: 799,
    originalPrice: 999,
    images: [
      images.tshirt2,
      images.tshirt3
    ],
    category: PRODUCT_CATEGORIES.APPAREL,
    inStock: true,
    stockCount: 75,
    rating: 4.6,
    reviews: 203,
    isNew: true,
    isBestseller: false,
    variants: {
      size: ['S', 'M', 'L', 'XL', 'XXL'],
      color: ['White', 'Black', 'Red']
    }
  }),

  createProduct({
    id: 'sr-jacket-001',
    name: 'Chess Master Bomber Jacket',
    description: 'Premium bomber jacket with embroidered chess pieces and Samay\'s signature.',
    price: 2999,
    originalPrice: 3999,
    images: [
      images.tshirt4,
      images.tshirt5
    ],
    category: PRODUCT_CATEGORIES.APPAREL,
    inStock: true,
    stockCount: 15,
    rating: 4.9,
    reviews: 45,
    isNew: true,
    isBestseller: true,
    variants: {
      size: ['S', 'M', 'L', 'XL', 'XXL'],
      color: ['Black', 'Navy Blue']
    }
  }),

  createProduct({
    id: 'sr-cap-001',
    name: 'Samay Raina Chess Cap',
    description: 'Stylish cap with embroidered chess piece and Samay\'s logo. Perfect for outdoor chess matches.',
    price: 599,
    originalPrice: 799,
    images: [
      images.tshirt1,
      images.tshirt2
    ],
    category: PRODUCT_CATEGORIES.APPAREL,
    inStock: true,
    stockCount: 75,
    rating: 4.4,
    reviews: 156,
    isNew: false,
    isBestseller: false,
    variants: {
      color: ['Black', 'Navy Blue', 'White']
    }
  }),

  createProduct({
    id: 'sr-sweatshirt-001',
    name: 'Comedy Chess Sweatshirt',
    description: 'Comfortable sweatshirt perfect for long chess sessions and comedy shows.',
    price: 1299,
    originalPrice: 1699,
    images: [
      images.tshirt3,
      images.tshirt4
    ],
    category: PRODUCT_CATEGORIES.APPAREL,
    inStock: true,
    stockCount: 40,
    rating: 4.7,
    reviews: 92,
    isNew: false,
    isBestseller: true,
    variants: {
      size: ['S', 'M', 'L', 'XL', 'XXL'],
      color: ['Grey', 'Black', 'Maroon']
    }
  }),

  createProduct({
    id: 'sr-chessset-001',
    name: 'Samay Raina Signature Chess Set',
    description: 'Premium wooden chess set with custom pieces designed by Samay. Includes a signed certificate of authenticity.',
    price: 2999,
    originalPrice: 3999,
    images: [
      images.chess1,
      images.chess2
      // Placeholder for chess set images - can be outsourced

    ],
    category: PRODUCT_CATEGORIES.ACCESSORIES,
    inStock: true,
    stockCount: 20,
    rating: 4.9,
    reviews: 67,
    isNew: false,
    isBestseller: true,
    variants: {}
  }),

  createProduct({
    id: 'sr-chessboard-001',
    name: 'Tournament Chess Board',
    description: 'Professional tournament-grade chess board used in Samay\'s streams.',
    price: 1499,
    originalPrice: 1999,
    images: [
      // Placeholder for chess board images - can be outsourced
      'https://images.unsplash.com/photo-1528819622765-d6bcf132ac11?w=500',
      'https://images.unsplash.com/photo-1606166187734-a4cb74079037?w=500'
    ],
    category: PRODUCT_CATEGORIES.ACCESSORIES,
    inStock: true,
    stockCount: 35,
    rating: 4.8,
    reviews: 124,
    isNew: false,
    isBestseller: false,
    variants: {
      size: ['Standard', 'Large']
    }
  }),

  createProduct({
    id: 'sr-mug-001',
    name: 'Comedy Chess Mug',
    description: 'Start your day with a laugh! Ceramic mug featuring Samay\'s funniest chess quotes.',
    price: 399,
    originalPrice: 499,
    images: [
      images.mug1,
      images.mug2,
      images.mug3
    ],
    category: PRODUCT_CATEGORIES.ACCESSORIES,
    inStock: true,
    stockCount: 100,
    rating: 4.5,
    reviews: 234,
    isNew: false,
    isBestseller: true,
    variants: {
      color: ['White', 'Black', 'Red']
    }
  }),

  createProduct({
    id: 'sr-mug-002',
    name: 'Premium Chess Mug Collection',
    description: 'Exclusive ceramic mug collection with different chess-themed designs for every mood.',
    price: 599,
    originalPrice: 799,
    images: [
      images.mug4,
      images.mug5,
      images.mug1
    ],
    category: PRODUCT_CATEGORIES.ACCESSORIES,
    inStock: true,
    stockCount: 75,
    rating: 4.7,
    reviews: 156,
    isNew: true,
    isBestseller: false,
    variants: {
      color: ['White', 'Black', 'Blue', 'Red']
    }
  }),

  createProduct({
    id: 'sr-mousepad-001',
    name: 'Chess Master Gaming Mousepad',
    description: 'Large gaming mousepad with chess board design and Samay\'s signature.',
    price: 699,
    originalPrice: 899,
    images: [
      images.mug3,
      images.mug4
    ],
    category: PRODUCT_CATEGORIES.ACCESSORIES,
    inStock: true,
    stockCount: 80,
    rating: 4.6,
    reviews: 178,
    isNew: true,
    isBestseller: false,
    variants: {
      size: ['Medium', 'Large', 'XL']
    }
  }),

  createProduct({
    id: 'sr-keychain-001',
    name: 'Chess Piece Keychain Set',
    description: 'Set of 6 metal chess piece keychains with Samay\'s branding.',
    price: 299,
    originalPrice: 399,
    images: [
      images.mug5,
      images.samay
    ],
    category: PRODUCT_CATEGORIES.ACCESSORIES,
    inStock: true,
    stockCount: 150,
    rating: 4.3,
    reviews: 89,
    isNew: false,
    isBestseller: false,
    variants: {
      color: ['Silver', 'Gold', 'Black']
    }
  }),

  createProduct({
    id: 'sr-stickers-001',
    name: 'Samay Raina Sticker Pack',
    description: 'Collection of 10 waterproof stickers featuring Samay\'s most popular memes and chess moments.',
    price: 199,
    images: [
      images.tshirt1,
      images.tshirt2
    ],
    category: PRODUCT_CATEGORIES.ACCESSORIES,
    inStock: true,
    stockCount: 200,
    variants: {}
  }),

  createProduct({
    id: 'sr-phonecase-001',
    name: 'Chess Master Phone Case',
    description: 'Protect your phone with style! Available for multiple phone models with Samay\'s chess-themed design.',
    price: 799,
    images: [
      images.tshirt3,
      images.tshirt4
    ],
    category: PRODUCT_CATEGORIES.ACCESSORIES,
    inStock: true,
    stockCount: 60,
    variants: {
      size: ['iPhone 14', 'iPhone 13', 'Samsung Galaxy S23', 'OnePlus 11']
    }
  }),

  createProduct({
    id: 'sr-digital-001',
    name: 'Exclusive Comedy Special Access',
    description: 'Get early access to Samay\'s upcoming comedy special plus behind-the-scenes content.',
    price: 499,
    originalPrice: 699,
    images: [
      images.samay
    ],
    category: PRODUCT_CATEGORIES.DIGITAL,
    inStock: true,
    stockCount: 1000,
    rating: 4.9,
    reviews: 456,
    isNew: true,
    isBestseller: true,
    variants: {}
  }),

  createProduct({
    id: 'sr-digital-002',
    name: 'Personal Chess Lesson with Samay',
    description: '30-minute one-on-one chess lesson with Samay Raina via video call. Limited slots available!',
    price: 2499,
    originalPrice: 2999,
    images: [
      images.samay
    ],
    category: PRODUCT_CATEGORIES.DIGITAL,
    inStock: true,
    stockCount: 5,
    rating: 5.0,
    reviews: 23,
    isNew: false,
    isBestseller: true,
    variants: {}
  }),

  createProduct({
    id: 'sr-digital-003',
    name: 'Personalized Video Message',
    description: 'Get a personalized video message from Samay for birthdays, celebrations, or just for fun!',
    price: 1999,
    originalPrice: 2499,
    images: [
      images.samay
    ],
    category: PRODUCT_CATEGORIES.DIGITAL,
    inStock: false,
    stockCount: 0,
    rating: 4.8,
    reviews: 67,
    isNew: false,
    isBestseller: false,
    variants: {}
  }),

  createProduct({
    id: 'sr-digital-004',
    name: 'Chess Strategy Masterclass',
    description: '4-hour comprehensive chess strategy course with Samay\'s unique teaching style.',
    price: 1299,
    originalPrice: 1799,
    images: [
      images.samay
    ],
    category: PRODUCT_CATEGORIES.DIGITAL,
    inStock: true,
    stockCount: 500,
    rating: 4.9,
    reviews: 189,
    isNew: true,
    isBestseller: false,
    variants: {}
  }),

  createProduct({
    id: 'sr-digital-005',
    name: 'Comedy Writing Workshop',
    description: 'Learn the art of comedy writing from Samay in this exclusive 2-hour workshop.',
    price: 999,
    originalPrice: 1299,
    images: [
      images.samay
    ],
    category: PRODUCT_CATEGORIES.DIGITAL,
    inStock: true,
    stockCount: 200,
    rating: 4.7,
    reviews: 134,
    isNew: false,
    isBestseller: false,
    variants: {}
  })
];

// Helper functions for product data
export const getProductById = (id) => {
  return mockProducts.find(product => product.id === id);
};

export const getProductsByCategory = (category) => {
  return mockProducts.filter(product => product.category === category);
};

export const getInStockProducts = () => {
  return mockProducts.filter(product => product.inStock);
};

export const searchProducts = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return mockProducts.filter(product =>
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery)
  );
};