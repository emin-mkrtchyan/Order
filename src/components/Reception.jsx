import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReceptionCard from './ReceptionCard';

const Reception = () => {
  const [receptionData, setReceptionData, setIsOpenCart] = useState([
    { id: 1, name: 'Product 1', imageUrl: 'product1.jpg', quantity: 1, price: 200 },
    { id: 2, name: 'Product 2', imageUrl: 'product2.jpg', quantity: 1, price: 150 },
    { id: 3, name: 'Product 3', imageUrl: 'product3.jpg', quantity: 1, price: 100 },
  ]);
  const [totalPrice, setTotalPrice] = useState(0);

  const navigate = useNavigate();

    const handleSendRequest = () => {
    navigate('/cart'); 
  };


  useEffect(() => {
    updateTotalPrice();
  }, [receptionData]);

  const plus = (id) => {
    const updatedReceptionData = receptionData.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setReceptionData(updatedReceptionData);
  };

  const minus = (id) => {
    const updatedReceptionData = receptionData.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setReceptionData(updatedReceptionData);
  };

  const remove = (id) => {
    const updatedReceptionData = receptionData.filter(item => item.id !== id);
    setReceptionData(updatedReceptionData);
  };

  const updateTotalPrice = () => {
    let totalPrice = 0;
    receptionData.forEach(item => {
      totalPrice += item.price * item.quantity;
    });
    setTotalPrice(totalPrice);
  };



  return (
    <div className="items-container">
  <button onClick={handleSendRequest} className='btn bg-[#00B74A] w-[245px] h-[55px] rounded-[10px] uppercase'> +  ADD more products</button>
  {receptionData.map((item) => (
    <ReceptionCard
      key={item.id}
      name={item.name}
      imageUrl={item.imageUrl}
      price={item.price}
      quantity={item.quantity}
      totalPrice={item.price * item.quantity} 
      plus={() => plus(item.id)}
      minus={() => minus(item.id)}
      remove={() => remove(item.id)}
    />
  ))}


<span className="total-price block text-center  mx-auto w-[1200px] h-[50px] mt-[24px] font-bold border">
  Total: {totalPrice} AMD
</span>

<button className='btn block text-center mx-auto bg-black text-white w-[1200px] h-[50px] capitalize mt-[24px] border rounded-md ' onClick={handleSendRequest}>
        Go to Cart
      </button>
    </div>
  );
};

export default Reception;
