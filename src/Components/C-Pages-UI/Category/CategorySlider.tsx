import React from 'react'
import {useEffect} from 'react'
import CategoryCard from "./CategoryCard";
import {Loading} from "../../Feedback/index";
import {SliderList} from "../../LogicList/index"

import {useAppDispatch, useAppSelector} from '../../../RTK-STORE/hooks'
import { actGetCategories } from "../../../RTK-STORE/categories/categoriesSlice";


import Subtitles from '../../Common/Subtitles/Subtitles'
import {NavLink, Link} from 'react-router-dom'

  
 const CategorySlider = () => {
   
  const dispatch = useAppDispatch()
  const {loading, error, records} = useAppSelector((state) => state.categories)
  
  useEffect(() => {
    if (!records.length) {
      dispatch(actGetCategories());
    }
  }, [dispatch, records]);


  
  const renderCategories = (itemData) => (
    <div className="" key={itemData}>
       <CategoryCard {...itemData}/>
    </div>
   
    );
  
  
  return (
    <div className="container px-5 mx-auto   ">
       <div className="">
        <Subtitles  btnTitle="Categories" pathText="categories"/>
       </div>
       
       <Loading status={loading} error={error}>
       
        <SliderList records={records} renderItem={renderCategories} />
        
       </Loading>
       
   </div>
  )
}

export default CategorySlider