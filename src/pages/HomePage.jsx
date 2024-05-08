import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import CategoryPage from "../pages/CategoryPage";
import CartPage from "./CartPage";
import { useNavigate } from 'react-router-dom'; 

export default function HomePage({ cartTotal, addToCart, isOpenCart, setIsOpenCart, cartData, plus, minus, remove }) {
  const [products, setProducts] = useState([
    { id: 1, name: 'asala 1', imageUrl: 'product1.jpg', quantity: 1, desc: 'Product Name for weddingreception', price: 100, categoryId: 1 },
    { id: 2, name: 'Product 2', imageUrl: 'product2.jpg', quantity: 1, desc: 'Product Name for weddingreception', price: 100, categoryId: 2 },
    { id: 3, name: 'Product 3', imageUrl: 'product3.jpg', quantity: 1, desc: 'Product Name for weddingreception', price: 100, categoryId: 3 },
    { id: 4, name: 'Product 4', imageUrl: 'product4.jpg', quantity: 1, desc: 'Product Name for weddingreception', price: 100, categoryId: 4 },
    { id: 5, name: 'Product 5', imageUrl: 'product5.jpg', quantity: 1, desc: 'Product Name for weddingreception', price: 100, categoryId: 5 },
    { id: 6, name: 'Product 6', imageUrl: 'product6.jpg', quantity: 1, desc: 'Product Name for weddingreception', price: 100, categoryId: 6 },
    { id: 7, name: 'Product 7', imageUrl: 'product7.jpg', quantity: 1, desc: 'Product Name for weddingreception', price: 100, categoryId: 7 },
    { id: 8, name: 'Product 8', imageUrl: 'product8.jpg', quantity: 1, desc: 'Product Name for weddingreception', price: 200, categoryId: 8 },
  ]
  );


  const [categories, setCategories] = useState(
    [
      {
        "id": 1,
        "name": "Drinks",
        "image": "https://example.com/milk.jpg"
      },
      {
        "id": 2,
        "name": "Coffee",
        "image": "https://example.com/coffee.jpg"
      },
      {
        "id": 3,
        "name": "Tea",
        "image": "https://example.com/tea.jpg"
      },
      {
        "id": 4,
        "name": "Juice",
        "image": "https://example.com/juice.jpg"
      },
      {
        "id": 5,
        "name": "Water",
        "image": "https://example.com/water.jpg"
      },
      {
        "id": 6,
        "name": "Cakes",
        "image": "https://example.com/water.jpg"
      },
      {
        "id": 7,
        "name": "MacCoffee",
        "image": "https://example.com/water.jpg"
      },
      {
        "id": 8,
        "name": "alcohol",
        "image": "https://example.com/water.jpg"
      }
    ]
  )



  const navigate = useNavigate();

  const navigateToRecepPage = () => {
    navigate('/reception');
  };


  const navigateToRequestPage = () => {
    navigate('/request')
  }

  const [searchQuery, setSearchQuery] = useState('');


  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );




  const [selectedCategories, setSelectedCategories] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState(null);




  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };


  return (
    <div className="homePage">
      {/* input  */}
      <input className=' border-4 p-2 w-[98%] ml-3'
        type="text"
        placeholder="Search products by name..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      {filteredProducts.length > 0 ? (
        <p className='ml-3'>I am trying find it</p>
      ) : (
        searchQuery.trim() !== '' && <p>No products found.</p>
      )}

      {isOpenCart && <CartPage cartTotal={cartTotal} cartData={cartData} minus={minus} plus={plus} setIsOpenCart={setIsOpenCart} remove={remove} />}
      <CategoryPage categories={categories} selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} on />
      <ProductList products={filteredProducts} addToCart={addToCart} selectedCategories={selectedCategories} onProductClick={handleProductClick} />
      <button className='btn block text-center mx-auto bg-black text-white w-[1190px] h-[50px] capitalize mt-[24px] border rounded-md ' onClick={navigateToRecepPage}>Go to RecepPage</button>
      <button className='btn block text-center mx-auto bg-black text-white w-[1190px] h-[50px] capitalize mt-[24px] border rounded-md ' onClick={navigateToRequestPage} > Go to Request  </button>
    </div>
  );
}