import React from 'react'
import style from './style.module.css'
import {NavLink, Link} from 'react-router-dom'
const {cart_badge} = style;
import BasketCart from '../../../Ecommerce/BasketCart/BasketCart'


const MinHeader = () => {
  return (
    <div className="md:px-8 flex items-center justify-between">
    
      <h1 className="flex items-center text-2xl  gap-3">
        <span className="font-bold">Hello</span>
        <span className="text-[16px] font-semibold px-3 p-1  md:p-2 bg-[#e0f4e3] text-gray-900 rounded-md">Commerce</span>
      </h1>
      
      <NavLink to='cart' className=" text-2xl mt-4 text-slate-900 ">
        <BasketCart cart_badge={cart_badge}/>
      </NavLink>
      
      
    </div>
  )
}

export default MinHeader