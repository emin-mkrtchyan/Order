import React, { useState } from 'react';
import ProductDetail from './ProductDetail';

const ProductCard = ({ name, imageUrl, desc, price, quantity, onAdd, plus, minus }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [cartItems, setCartItems] = useState([]);


  const handleAddToCart = (e) => {
    e.stopPropagation();
    onAdd();
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 1000);
  };

  const handleShowDetail = () => {
    setShowDetail(true);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
  };

  const handleMinus = (e) => {
    e.stopPropagation();
    minus();
  };

  const handlePlus = (e) => {
    e.stopPropagation();
    plus();
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="product-card p-3 w-[225px] h-[230px] border-2 rounded-lg" onClick={handleShowDetail}>
      <img src={imageUrl} alt={name} className='w-full rounded-md mb-2' />
      <span>{desc}</span>
      <div className="count flex justify-around">
        <div className="button flex gap-6 bg-[#DDE0E0] w-[116px] h-[37px] rounded-md mt-3">
          <button onClick={handleMinus} className='bg-black w-7 h-7 mt-1 rounded-md text-white'>  <span className='text-center'>-</span></button>
          <span>{quantity}</span>
          <button onClick={handlePlus} className='bg-black w-7 h-7 mt-1 rounded-md text-white'> <span className='text-center'>+</span></button>
        </div>
        <span className='mt-3'>{price} ֏</span>
      </div>
      {!addedToCart ? (
        <button className='block bg-[#201E1E] w-[200px] text-white mt-[30px] items-center' onClick={handleAddToCart}>Add to Cart</button>
      ) : (
        <p className="text-green-500">Item already added to cart</p>
      )}
      {showDetail && (
        <ProductDetail
          name={name}
          imageUrl={imageUrl}
          desc={desc}
          price={price}
          onClose={handleCloseDetail}
          addToCart={()=> addToCart}
        />
      )}
    </div>
  );
};

export default ProductCard;
