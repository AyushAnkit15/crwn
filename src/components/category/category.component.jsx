import React from 'react'
import { useParams } from 'react-router-dom'

import { UseSelector, useSelector } from 'react-redux'
import { useContext  , useState , useEffect} from 'react'
import ProductCard from '../product-card/product-card.component'

import { selectCategoriesMap } from '../../store/categories/categories.selector'


const Category = () => {

 
    const {category} = useParams()
 
    const categoriesMap = useSelector(selectCategoriesMap)
    const[products , setProducts] = useState(categoriesMap[category]);

    useEffect(()=>{
setProducts(categoriesMap[category])
    } ,[categoriesMap , category])
    
  return (

    <>
  <h2 className='category-title'>{category.toUpperCase()}</h2>
  <div className='category-container'>
    
    {
      products &&   products.map((product)=> <ProductCard key = {product.id} product={product}/>)
    }

    </div>
    </>
   
  )
}

export default Category