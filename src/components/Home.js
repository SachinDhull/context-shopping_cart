import React, { useContext, useState } from 'react'
import { faker } from '@faker-js/faker';
import SingleProduct from './SingleProduct';
import './styles.css'
import { Cart } from '../Context';
faker.seed(100)
const Home = () => {
    const {cart,setCart} = useContext(Cart)

    const productsArray = [...Array(20)].map(()=>({
        id:faker.datatype.uuid(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        image: faker.image.image() 
    }))



    const[products,setProducts]=useState(productsArray)

  return (
    <div className='productContainer'>
      {products.map((prod)=>(
        <SingleProduct key={prod.id} prod={prod} cart={cart} setCart={setCart}/>
      ))}
    </div>
  )
}

export default Home
