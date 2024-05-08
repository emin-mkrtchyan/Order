import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import HomePage from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { RequestPage } from './pages/RequestPage';
import Reception from './components/Reception';
import CategoryPage from './pages/CategoryPage';
import CartPage from './pages/CartPage';
import JustPage from './pages/JustPage';


export function App() {
  const [receptionData, setReceptionData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    updateTotal();
    updateCartCount();
  }, [cartData]);

  const updateTotal = () => {
    setCartTotal(cartData.reduce((total, item) => total + item.price * item.quantity, 0));
  };

  const incrementQuantity = (productId) => {
    const updatedCartData = cartData.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartData(updatedCartData);
  };

  const decrementQuantity = (productId) => {
    const updatedCartData = cartData.map(item => {
      if (item.id === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartData(updatedCartData);
  };
  const addToCart = (product) => {
    const existingProductIndex = cartData.findIndex(item => item.id === product.id);
  
    if (existingProductIndex !== -1) {
      const updatedCart = [...cartData];
      updatedCart[existingProductIndex].quantity += product.quantity; 
      setCartData(updatedCart);
    } else {
      setCartData(prevState => [...prevState, product]);
    }
  };
  

  const removeFromCart = (id) => {
    const index = cartData.findIndex(item => item.id === id);
    if (index !== -1) {
      const updatedCartData = [...cartData];
      updatedCartData.splice(index, 1); 
      setCartData(updatedCartData);
    }
  }

  const updateCartCount = () => {
    const totalCount = cartData.reduce((total, item) => total + item.quantity, 0);
    setCartCount(totalCount);
  };

  return (
    <>
      <Header setIsOpenCart={setIsOpenCart} cartData={cartData} cartTotal={cartTotal} cartCount={cartCount} />
      <Routes>
        <Route path='/' element={<HomePage cartTotal={cartTotal} addToCart={addToCart} remove={removeFromCart} isOpenCart={isOpenCart} setIsOpenCart={setIsOpenCart} minus={decrementQuantity} plus={incrementQuantity} cartData={cartData} removeFromCart={removeFromCart} />} />
        <Route path='/cart' element={<CartPage cartTotal={cartTotal} cartData={cartData} minus={decrementQuantity} plus={incrementQuantity} setIsOpenCart={setIsOpenCart} remove={removeFromCart} isOpenCart={isOpenCart} />} />
        <Route path='/request' element={<RequestPage />} />
        <Route path='/reception' element={<Reception receptionData={receptionData} isOpenCart={isOpenCart} />} />
        <Route path='category/:categoryId' element={<CategoryPage />} />
        <Route path='/just' element={<JustPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}
