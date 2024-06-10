import React from 'react'
import {useEffect, useCallback} from 'react'
import {Heading} from '../../LogicList/index'
import CartCard from './CartCard'
import CartPromoCode from './CartPromoCode'
import CartCheckout from './CartCheckout'

import CartItemsList from '../../LogicList/CartItemsList/CartItemsList'

import {useAppDispatch, useAppSelector} from '../../../RTK-STORE/hooks'
import { addGetProductsByItems } from "../../../RTK-STORE/cart/cartSlice";
import { cartItemsChangeQuantity } from "../../../RTK-STORE/cart/cartSlice";
import { cartItemRemove } from "../../../RTK-STORE/cart/cartSlice";
import {Loading} from "../../Feedback/index"


const CartRender = () => {
  const dispatch = useAppDispatch();
  const { items, productsFullInfo, loading, error } = useAppSelector(
    (state) => state.cart
  );
  
  console.log("C cart data", productsFullInfo)
  
  useEffect(() => {
    dispatch(addGetProductsByItems());
  }, [dispatch]);

  const products = productsFullInfo.map((el) => ({
    ...el,
    quantity: items[el.id],
  }));



  // cahnge Quantity handler 
  const changeQuantityHandler = useCallback((id: number, quantity: number) => {
    dispatch(cartItemsChangeQuantity({id, quantity}))
  }, [dispatch]);
  
  
  // Removig For Item Cart 
  const removeItemHandler = useCallback((id: number) => {
    dispatch(cartItemRemove(id))
  }, [dispatch])

  
  return (
    <div>
      <Heading>My Cart</Heading>
      <Loading loading={loading} error={error}>
      
      {
        products.length ? (
          <>
            <CartItemsList products={products}
        changeQuantityHandler={changeQuantityHandler} removeItemHandler={removeItemHandler}
        />
      
      
        <CartPromoCode />
        <CartCheckout products={products}/>
          </>
        ) : (<h4 className="mt-5 text-2xl text-white bg-gray-400 text-center rounded-md p-3 shadow-2xl">Your cart is empty</h4>)
      }
      
      
        
      </Loading>
      
    </div>
  )
}

export default CartRender