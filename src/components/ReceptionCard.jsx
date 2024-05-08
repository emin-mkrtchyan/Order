import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ReceptionCard = ({ name, imageUrl, price, plus, minus, remove, quantity, totalPrice }) => {
  const [isChecked, setIsChecked] = useState(false);

  
  const navigate = useNavigate();


  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handlePlusClick = () => {
    if (isChecked) {
      plus();
    }
  };

  const handleMinusClick = () => {
    if (isChecked) {
      minus();
    }
  };

  return (
    <div className="recep-card w-[1000px] h-[200px] top-[212px] rounded-[10px] border-[10px] m-auto bg-[#EDF5F5] ">
      <div className="title flex justify-between  text-black p-8 ml-20">
      </div>
      <div className="list">
        <div className="recep1 flex justify-around">
          <input type="checkbox" className="ml-40" checked={isChecked} onChange={handleCheckboxChange} />
          <img src={imageUrl} alt={name} className=' w-20' />
          <p className=' text-center font-bold size-[20px] text-black' > {name} </p>
          <p className=''>{price}</p>

          <div className="btn bg-white"></div>
          <button onClick={handlePlusClick} className=' bg-black w-7 h-7 ' > <span className=' text-white'> + </span> </button>
          <span>{quantity}</span>
          <button onClick={handleMinusClick} className=' bg-black w-7 h-7 ' > <span className=' text-white'> - </span> </button>
          <div className="total-price">
            Total Price: {totalPrice}
          </div>
          <button onClick={remove} className=' bg-black w-7 h-7  rounded-xl' > <span className=' text-white'> X </span> </button>
        </div>
      </div>
    </div>
  );
};

export default ReceptionCard;
