import React from 'react'

import {Heading} from '../../LogicList/index'
import CartCard from './CartCard'
import CartPromoCode from './CartPromoCode'
import CartCheckout from './CartCheckout'
import CartItemsList from '../../LogicList/CartItemsList/CartItemsList'
import {Loading} from "../../Feedback/index"

import useCart from "./useCart"


const CartRender = () => {
  const { loading, error, productsFullInfo, changeQuantityHandler, removeItemHandler, products } = useCart();
  
  return (
    <div>
      <Heading title={`My Cart`} />
      <Loading loading={loading} error={error}>
      
      {
        products.length ? (
         <div>
         <CartItemsList products={products}
        changeQuantityHandler={changeQuantityHandler} removeItemHandler={removeItemHandler} />
      
          <CartPromoCode />
          <CartCheckout products={products}/>
         </div>
          
        ) : (<h4 className="mt-5 text-2xl text-white bg-gray-400 text-center rounded-md p-3 shadow-2xl">Your cart is empty</h4>)
      }
      </Loading>
      
    </div>
  )
}

export default CartRender