import { useContext, Fragment } from "react";
import { Route , Routes } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";

import { CategoriesContext } from "../../contexts/categories.context";

import CategoryPreview from "../../components/category-preview/category-preview.component";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../../components/category/category.component";

import "./shop.styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Routes>

   <Route index element = {<CategoriesPreview/>}/>
   <Route path=":category" element={<Category/>}/>
    </Routes>
  );
};

export default Shop;
