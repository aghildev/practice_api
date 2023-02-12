import React,{useState,useEffect} from 'react'
import { PRODUCTS_URL } from '../utils/Constants'
import ProductCard from './ProductCard'
import styles from './styles/Body.module.css'

function Body() {
    const[allProducts,setProducts]=useState([])
    const[url,setUrl] = useState(PRODUCTS_URL)
    const[showCategories,setShowCategories] = useState(false)
    const getProducts = async()=>{
        const data = await fetch(url);
        const jsonData = await data.json();
        console.log(jsonData.products)
        setProducts(jsonData.products)
    }
    useEffect(()=>{
        getProducts()
    },[url])
    
  return (
    <>
    {!showCategories && <button onClick = {()=>{setShowCategories(true)}}>Show Available Categories</button>}
    {showCategories && <button onClick = {()=>{setShowCategories(false)}}>Hide Available Categories</button>}
    {showCategories && <div className="categories">
    <button onClick = {()=>{setUrl(PRODUCTS_URL)}}>All Products</button>
    <button onClick = {()=>{setUrl(PRODUCTS_URL + "/category/smartphones")}}>Smart Phones</button>
    <button onClick = {()=>{setUrl(PRODUCTS_URL + "/category/laptops")}}>Laptops</button>
    <button onClick = {()=>{setUrl(PRODUCTS_URL + "/category/fragrances")}}>Fragrances</button>
    <button onClick = {()=>{setUrl(PRODUCTS_URL + "/category/skincare")}}>Skincare</button>
    <button onClick = {()=>{setUrl(PRODUCTS_URL + "/category/groceries")}}>Groceries</button>
    <button onClick = {()=>{setUrl(PRODUCTS_URL + "/category/home-decoration")}}>Home-Decoration</button>
    <button onClick = {()=>{setUrl(PRODUCTS_URL + "/category/furniture")}}>Furniture</button>
    <button onClick = {()=>{setUrl(PRODUCTS_URL + "/category/tops")}}>Tops</button>
    <button onClick = {()=>{setUrl(PRODUCTS_URL + "/category/womens-dresses")}}>Womens-Dresses</button>
    <button onClick = {()=>{setUrl(PRODUCTS_URL + "/category/women-shoes")}}>Womens-Shoes</button>
    <button onClick = {()=>{setUrl(PRODUCTS_URL + "/category/mens-shirts")}}>Mens-Shirts</button>
    <button onClick = {()=>{setUrl(PRODUCTS_URL + "/category/mens-shoes")}}>Mens-Shoes</button>
    <button onClick = {()=>{setUrl(PRODUCTS_URL + "/category/mens-watches")}}>Mens-Watches</button>
    <button onClick = {()=>{setUrl(PRODUCTS_URL + "/category/womens-watches")}} >Womens-Watches</button>
    <button onClick = {()=>{setUrl(PRODUCTS_URL + "/category/womens-bags")}}>Womens-bags</button>
    <button onClick = {()=>{setUrl(PRODUCTS_URL + "/category/womens-jewellery")}}>Womens-Jewellwery</button>
    <button onClick = {()=>{setUrl(PRODUCTS_URL + "/category/sunglasses")}}>Sunglasses</button>
    <button onClick = {()=>{setUrl(PRODUCTS_URL + "/category/automotive")}}>Automotive</button>
    <button onClick = {()=>{setUrl(PRODUCTS_URL + "/category/motorcycle")}}>Motorcycle</button>
    <button onClick = {()=>{setUrl(PRODUCTS_URL + "/category/lighting")}}>Lighting</button>
    </div>}
    <div className={styles.ProductContainer}>
       {allProducts.map((product)=>{
            return (
               
                <ProductCard {...product} key={product.id}/>
                
            )
       })}
    </div>
    </>
  )
}

export default Body