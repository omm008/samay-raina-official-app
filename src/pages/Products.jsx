import React, { useState, useMemo } from 'react';
import { mockProducts, getProductsByCategory, searchProducts } from '../data/mockProducts';
import { useCart } from '../contexts/AppContext';
import ProductHero from '../components/products/ProductHero';
import CategoryFilter from '../components/products/CategoryFilter';
import ProductGrid from '../components/products/ProductGrid';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart } = useCart();

  const filteredProducts = useMemo(() => {
    let products = mockProducts;

    if (selectedCategory !== 'all') {
      products = getProductsByCategory(selectedCategory);
    }

    if (searchQuery) {
      products = searchProducts(searchQuery).filter(product => 
        selectedCategory === 'all' || product.category === selectedCategory
      );
    }

    return products;
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-black">
      <ProductHero />
      <CategoryFilter 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <ProductGrid products={filteredProducts} addToCart={addToCart} />
    </div>
  );
};

export default Products;
