import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import style from './style.module.css'
const {cart_badge} = style;
import BasketCart from '../../../Ecommerce/BasketCart/BasketCart'


interface MenuType {
  name: string;
  path: string;
  icon: any;
}

const Menu: MenuType[] = [
  {
    name: 'Home',
    path: '/',
    icon: <i className="ri-home-4-line"></i>,
  },
  
  {
    name: 'Products',
    path: "products",
    icon: <i className="ri-t-shirt-air-fill"></i>,
  },
  
  
  
  {
    name: 'Profile',
    path: 'profile',
    icon: <i className="ri-user-line"></i>,
  },
  
  {
    name: 'Cart',
    path: 'cart',
    icon: <BasketCart cart_badge={cart_badge}/>,
  },
]

const Navigation = () => {
  return (
    <nav className="md:py-2 ">
        <ul className="flex items-center justify-between">
          {
            Menu.map((item, i) => (
              <li key={i} className=" text-center w-20">
                <NavLink  to={item.path} className="flex flex-col text-white text-center">
                
                  <span className=" md:hidden text-2xl ">
                    {item.icon}
                  </span>
                  
                  <span className="hidden md:block text-sm ">
                    {item.name}
                  </span>
                </NavLink>
                
                
              </li>
            ))
          }
        </ul>
    </nav>
  )
}

export default Navigation