import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const ProductList = ({ products, addToCart, selectedCategories, onProductClick }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    let filtered = products;

    if (selectedCategories.length > 0) {
      filtered = products.filter(product => selectedCategories.includes(product.categoryId));
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [products, selectedCategories]);

  const plus = (id) => {
    const updatedProducts = filteredProducts.map(product => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setFilteredProducts(updatedProducts);
  };


  const minus = (id) => {
    const updatedProducts = filteredProducts.map(product => {
      if (product.id === id && product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    setFilteredProducts(updatedProducts);
  };
  
  return (
    <div className="product-list grid grid-cols-4 gap-4 mt-4">
      {filteredProducts.map((product) => (
        <div className=' cursor-pointer text-center mx-auto' key={product.id} onClick={() => onProductClick(product)}>
          <ProductCard
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            desc={product.desc}
            price={product.price}
            quantity={product.quantity}
            plus={() => plus(product.id)}
            minus={() => minus(product.id)}
            onAdd={() => addToCart(product)}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
