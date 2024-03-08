import { useContext, Fragment } from "react";
import { Route , Routes } from "react-router-dom";
import { useEffect } from "react";
import {  useDispatch } from "react-redux";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import { setCategories } from "../../store/categories/categories.action";
import ProductCard from "../../components/product-card/product-card.component";



import CategoryPreview from "../../components/category-preview/category-preview.component";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../../components/category/category.component";

import "./shop.styles.scss";


const Shop = () => {
const dispatch = useDispatch()
useEffect(() => {
  const getCategoriesMap = async () => {
    const categories = await getCategoriesAndDocuments('categories');
    dispatch({...setCategories(categories)});
  };

  getCategoriesMap();
}, []);
  

  return (
    <Routes>

   <Route index element = {<CategoriesPreview/>}/>
   <Route path=":category" element={<Category/>}/>
    </Routes>
  );
};

export default Shop;
