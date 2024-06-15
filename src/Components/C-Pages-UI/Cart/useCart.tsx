import React from 'react'
import {useEffect, useCallback} from 'react'
import {useAppDispatch, useAppSelector} from '../../../RTK-STORE/hooks'
import { 
  addGetProductsByItems,
  cleanCartProductsFullInfo,
  cartItemsChangeQuantity,
  cartItemRemove
} from "../../../RTK-STORE/cart/cartSlice";




const useCart = () => {
  
  const dispatch = useAppDispatch();
  const { items, productsFullInfo, loading, error } = useAppSelector(
    (state) => state.cart
  );
  
  
  
  useEffect(() => {
   const promise = dispatch(addGetProductsByItems());
    return () => {
      dispatch(cleanCartProductsFullInfo())
      promise.abort();
    }
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

  
  



  return {loading, error, productsFullInfo, changeQuantityHandler, removeItemHandler,products }
}

export default useCart