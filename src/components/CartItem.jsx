import React, { useState } from "react";

const CartItem = ({ name, imageUrl, price, quantity, onMinus, onPlus, onRemove, totalPrice, setIsOpenCart }) => {
  
  
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handlePlusClick = () => {
    if (isChecked) {
      onPlus(); 
    }
  };

  const handleMinusClick = () => {
    if (isChecked) {
      onMinus();
    }
  };

  return (
    
    <div className="cart w-[1000px] h-[180px] top-[212px] rounded-[10px] border-[10px] m-auto bg-[#EDF5F5] ">
      <button onClick={setIsOpenCart}></button>
      <div className="title flex justify-between text-black p-8 ml-20"></div>
      <div className="list">
        <div className="cart flex justify-around">
          <input type="checkbox" className="ml-40" checked={isChecked} onChange={handleCheckboxChange} />
          <img src={imageUrl} alt={name} className="w-20" />
          <p className="text-center font-bold size-[20px] text-black"> {name} </p>
          <p>{price}</p>
          <div className="btn bg-white"></div>
          <button onClick={handlePlusClick} className="bg-black w-7 h-7">
            <span className="text-white"> + </span>
          </button>
          <span>{quantity}</span>
          <button onClick={handleMinusClick} className="bg-black w-7 h-7">
            <span className="text-white"> - </span>
          </button>
          <div className="total-price">Total Price: {isChecked ? totalPrice : 0}</div>
          <button onClick={onRemove} className="bg-black w-7 h-7 rounded-xl">
            <span className="text-white"> X </span>
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default CartItem;
