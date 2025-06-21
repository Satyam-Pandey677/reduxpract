import React from 'react'
import { Button } from '../ui/button'

const CartItem = (props) => {
  return (
    <div className='flex justify-around items-center p-4 outline m-5'>
        <img src={props.image} alt="" className='w-50' />
        <div className='flex flex-col'>
            <h2 className='text-xl font-semibold'>{props.name}</h2>
            <p className='text-gray-600'>${props.price}</p>
            <p className='text-gray-600'>Rating: {props.quantity}</p>
            </div>
        <Button onClick={props.onRemove} >remove item</Button>
    </div>
  )
}

export default CartItem