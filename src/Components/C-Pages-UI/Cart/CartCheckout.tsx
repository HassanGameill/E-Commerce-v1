import React from 'react'
import {TProducts} from '../../../Types/products'


// Types .....
type CartSubtotalPriceProps = {
  products: TProducts[];
  shapping: number;
} ;

const CartCheckout = ({products}: CartSubtotalPriceProps) => {
  
   
   const subtotal = products.reduce((accumulator, el) => {
     const price = el.price
     const quantity = el.quantity
     if (quantity && typeof quantity === "number") {
       return accumulator + price * quantity
     } else {
       return accumulator
     }
   }, 0)
   
   
   
  
  
  return (
    <section>
      <div className="CHECK mt-5 shadow-md p-3 bg-[#e0f4e3] rounded-md">
      
        
        <div className="flex items-center justify-between border-b-[1px] border-b-gray-400 pb-4 pt-3 font-semibold">
          <span className="">Subtotal</span>
          <span className="">${subtotal.toFixed(2)}</span>
        </div>
        
        
        
        <div className="flex items-center justify-between py-4 font-semibold mt-1 text-[18px]">
          <span className="">Total</span>
          <span className="">${subtotal.toFixed(2)}</span>
        </div>
        
        
        <div className="flex justify-center py-2 pt-4">
          <button className="bg-slate-900 px-20 py-2 text-[#e0f4e3] shadow-2xl rounded-lg font-semibold">
            Checkout
            </button>
        </div>
        
      </div>
    </section>
  )
}

export default CartCheckout