import React, { useEffect, useState } from 'react'
import { data, Link } from 'react-router-dom'
import {Button} from "../components/ui/button.jsx"
import { useDispatch } from 'react-redux'
import { addItems } from '../fetaure/cart/shoppingCart'

const Home = () => {

  const [items, setItems] = useState([])
  const [products, setProducts] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
       (async() => {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        setItems(data)
      })
      ()
  },[])


  const handleSubmit = (e) => {
      e.preventDefault()
      
      dispatch(addItems(products))
      localStorage.setItem("item",products)
  }
  
  return (
    <div>
      <h1 className='text-3xl font-bold text-center'>Shopping Cart</h1>
      <Link to="/cart"><Button>Cart</Button></Link>
      <div className=''>
        <form onSubmit={handleSubmit} className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
        {items.map((item) => (
          <div key={item.id} className='border p-4 rounded-lg'>
            <img src={item.image} alt={item.title} className='w-full h-48 object-cover' />
            <h2 className='text-xl font-semibold mt-2'>{item.title}</h2>
            <p className='text-gray-600'>${item.price}</p>
            <Button onClick = {() => {
              setProducts(item)
              localStorage.setItem("item", JSON.stringify(item))
            }}> Add To cart</Button>
          </div>
        ))}
        </form>
      </div>
    </div>
  )
}

export default Home