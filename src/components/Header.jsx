import React from 'react';
import { NavLink as Link, useNavigate } from 'react-router-dom';

export function Header({setIsOpenCart , cartTotal , cartData, cartCount}) {
  const navigate = useNavigate();

  const handleViewCart = () => {
    setIsOpenCart(true);
  };

  
  return (
    <div className="header">
      <div className="top flex text-center justify-around p-4 ">
        <div className="title flex gap-4">
          <p className='mr-4'>Bonus System</p>
          <p className="mr-4">Payment and Delivery</p>
          <p className='mr-4'>FAQ</p>
        </div>
        <div className="header flex text-center gap-4 underline-offset-4">
          <i className="fa-solid fa-location-dot to-black"></i>
          <p className='text-center text-base'>Abelyan St, 1/4 Building, Yerevan</p>
          <i className="fa-solid fa-phone bg-black"></i>
          <p>+374-60-123456</p>
          <button onClick={handleViewCart} className='btn w-[84px] h-[32px] top-[8px] left-[1086px] rounded-md bg-[#96a0a1] text-black font-bold'>Eng</button>
          <button className='btn w-[84px] h-[32px] top-[8px] left-[1086px] rounded-md bg-[#96a0a1] text-black font-bold'>AMD ֏</button>
        </div>
      </div>
      <div className="subtitle flex justify-around p-14">
        <button onClick={()=> navigate(-1)} className='btn w-[206px] h-[50px] top-[82px] left-[81px] border-[1px] rounded-sm bg-[#F3F3F3] size-[22px] font-bold'>Back to shop</button>
        <Link className='logo w-[238.23px] h-[58.34px] rounded bg-[#A8B5BB] font-bold text-center' to="/">Logo</Link>
        {cartCount >= 0 && `(${cartCount} products)`}
        <button onClick={() => setIsOpenCart(true)} className='logo w-[215px] h-[50px] rounded-[10px] bg-[#223D40;] text-white font-bold'>
          View my Cart  Total: 
        </button>
        ${cartTotal}
      </div>
    </div>
  );
}
