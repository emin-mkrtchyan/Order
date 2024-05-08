import React, { useState } from 'react';

const ProductDetail = ({ name, imageUrl, desc, price, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [visible, setVisible] = useState(true);

  const handleAdd = () => {
    addToCart({ name, imageUrl, desc, price, quantity });
  };

  const handlePlus = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleClose = () => {
    setVisible(false); 
  };

  return visible ? (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg relative">
        <button className="absolute top-0 right-0 m-4 text-gray-500 hover:text-black" onClick={handleClose}>
          Close
        </button>
        <img src={imageUrl} alt={name} className="w-64 h-64 mx-auto mb-4 rounded-lg" />
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-600 mb-4">{desc}</p>
        <p className="text-gray-800 font-semibold mb-4">{price} ֏</p>
        <div className="flex items-center justify-center mb-4">
          <button onClick={handleMinus} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
            -
          </button>
          <span className="bg-gray-200 px-4 py-2">{quantity}</span>
          <button onClick={handlePlus} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
            +
          </button>
        </div>
        <button onClick={handleAdd} className="block w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  ) : null;
};

export default ProductDetail;
