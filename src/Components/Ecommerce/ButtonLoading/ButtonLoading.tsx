import style from './style.module.css'
const {loader} = style;

import React from 'react'

const ButtonLoading = ({}: ReactNode) => {
  return (
      <div className="flex justify-center items-center relative">
        <span className={`${loader} border-green-400`}>
        </span>
        <span className="absolute">
           <i className="ri-shopping-cart-line"></i>
        </span>
      </div>
  )
}

export default ButtonLoading