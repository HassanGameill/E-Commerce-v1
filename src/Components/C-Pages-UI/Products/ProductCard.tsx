import React from 'react'
import {useEffect, useState, memo} from 'react'
import {Link} from 'react-router-dom'
import {TProducts} from "../../../Types/products"
import {useAppDispatch, useAppSelector} from '../../../RTK-STORE/hooks'
import { addToCart } from "../../../RTK-STORE/cart/cartSlice";

// removw import { Spinner } from "flowbite-react";

import ButtonLoader from '../../Ecommerce/ButtonLoading/ButtonLoading'

const ProductCard = memo((itemData: TProducts) => {
  const dispatch = useAppDispatch()
  
  // Send Data Cart
  const {id,  img, title, price, cat_prefix , max, quantity} = itemData;
  
  const cart = useAppSelector((state) => state.cart)
  
  const [isBtnDisabled, setIsBtnDisabled] = useState(false)
  
  
  
  
  const currentRemainingQuantity = max - (quantity ?? 0);
  
  const quantityReachedToMax = currentRemainingQuantity <= 0 ? true : false;

  
  useEffect(() => {
    if (!isBtnDisabled) {
      return;
    }
    const debounce = setTimeout(() => {
      setIsBtnDisabled(false)
    }, 500)
    
    return () => clearTimeout(debounce);
  }, [isBtnDisabled])
  
  // Add To Cart 
  const addToCartHandler = () => {
    
    dispatch(addToCart(id))
    setIsBtnDisabled(true)
  }
  
  
  return (
    <div className=" flex flex-col justify-center gap-3 items-start   bg-white rounded-3xl shadow-md">
  
      <div className="cursor-pointer container py-1 my-auto px-1 mx-auto ">
        <img src={img} alt="" className="w-[480px] h-[250px] rounded-3xl"/>
      </div>
      
      <div className="flex flex-col  p-3">
        <p className="italic text-gray-500">
          {cat_prefix}
        </p>
        
         
        
        <h1 className="text-[13px] font-semibold ">
          {title}
        </h1>
        
        <h1 className="text-md font-semibold text-red-600 ">
          {price.toFixed(2)}
        </h1>
        <p className=" text-gray-500">
         {quantityReachedToMax ? "limit" : <span className="text-blue-500">{`You can add ${currentRemainingQuantity} item`}</span>}
        </p>
        
        {
          isBtnDisabled ? <button className="flex items-center justify-center bg-blue-100 px-2 py-1.5 gap-2 text-[15px] text-black rounded-md overflow-hidden">
          <ButtonLoader />
          
          </button> : <button className={` px-2 py-2 text-[14px] text-white rounded-md transform hover:scale-105 transition-transform duration-300 mt-2  overflow-hidden ${quantityReachedToMax ? "bg-gray-400"  :  "bg-slate-900" }`}
        onClick={addToCartHandler}
        disabled={isBtnDisabled || quantityReachedToMax}
        >Add</button>
        }
        
      
      </div>
      
      
    </div>
  )
})

export default ProductCard