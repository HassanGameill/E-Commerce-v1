import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ProductCart from "./ProductCard.tsx";
import {Loading} from "../../Feedback/index";
import {GridList} from "../../LogicList/index";
import {Heading} from "../../LogicList/index";

import {useAppDispatch, useAppSelector} from '../../../RTK-STORE/hooks'
import { actGetProductsByCatPrefix, productsCleanUp } from "../../../RTK-STORE/products/productsSlice";



const ProductsGridList = () => {
  
  const params = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.products);
  const cartItems = useAppSelector((state) => state.cart.items);

  
  
  // text ......
  const productsFullInfo = records.map((el) => ({
    ...el,
    quantity: cartItems[el.id] || 0,
  }));

  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string));

    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params]);
  
  
  const ProductsList = (itemData) => (
    
    <ProductCart {...itemData} key={itemData.id} />
  )
  
  
  return (
     <section className="bg-slate-200 lg:px-20 px-10 lg:py-20 py-10 flex flex-col justify-center items-center gap-6">
    
        <Heading>
        <span className="capitalize text-gray-900 font-semibold">
         {params.prefix} 
        </span>
        {" "}
        Products
        </Heading>
      
      <h2 className="text-4xl font-semibold text-gray-900 ">Best Sellers</h2>
      
      <div className="">
        <Loading status={loading} error={error} >
          <GridList records={productsFullInfo} renderItem={ProductsList} />
        </Loading>

      </div>
      
    </section>
  )
}

export default ProductsGridList