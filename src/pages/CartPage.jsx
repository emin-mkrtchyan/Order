import React from 'react';
import CartItem from '../components/CartItem';
import {  useNavigate } from "react-router-dom";


export default function CartPage({ cartTotal, cartData, minus, plus, setIsOpenCart, remove }) {
  const navigate = useNavigate();


  return (
    <div className={'bg-red mt-4 mb-2 p-4 w-[1200px] h-[1346px] '}>
      <button className=' float-right ' onClick={() => setIsOpenCart(false)}>Close <span className=" ml-2 p-2 rounded-md bg-slate-400"> X </span> </button>       
      <div>
        {cartData.map((product) => (
          <div key={product.id}>
            <CartItem
              name={product.name}
              imageUrl={product.imageUrl}
              price={product.price}
              quantity={product.quantity}
              totalPrice={product.price * product.quantity}
              onMinus={() => minus(product.id)}
              onPlus={() => plus(product.id)}
              onRemove={() => remove(product.id)}
              setIsOpenCart={setIsOpenCart}
            />
          </div>
        ))}
      </div>
      <h3 className=' mx-auto text-center'>Total: {cartTotal}</h3>
      <button onClick={() => navigate('/reception')} className='btn block text-center mx-auto bg-black text-white w-[1200px] h-[50px] capitalize mt-[24px] border rounded-md '>
        Send a Request
      </button>

    </div>
  );
}
