import React from 'react'

import {Heading} from '../../LogicList/index'
import CartCard from './CartCard'
import CartPromoCode from './CartPromoCode'
import CartCheckout from './CartCheckout'
import CartItemsList from '../../LogicList/CartItemsList/CartItemsList'
import {Loading} from "../../Feedback/index"
import {LottieHandler} from "../../Feedback/index"

import useCart from "./useCart"


const CartRender = () => {
  const { loading, error, productsFullInfo, changeQuantityHandler, removeItemHandler, products } = useCart();
  
  return (
    <div>
      <Heading title={`My Cart`} />
      <Loading loading={loading} error={error} type="cart">
      
      {
        products.length ? (
         <div>
         <CartItemsList products={products}
        changeQuantityHandler={changeQuantityHandler} removeItemHandler={removeItemHandler} />
      
          <CartPromoCode />
          <CartCheckout products={products}/>
         </div>
          
        ) : (<LottieHandler message="Your cart is empty" type="empty" />)
      }
      </Loading>
      
    </div>
  )
}

export default CartRender