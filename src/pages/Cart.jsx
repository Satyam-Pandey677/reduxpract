import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../components/shareUi/CartItem'
import { removeItems } from '../fetaure/cart/shoppingCart'

const Cart = () => {
    const products = useSelector(state => state.items)
    const dispatch = useDispatch()

    const handleRemoveItem = (id) => {
        dispatch(removeItems(id))
    }

    const totalPrice = products.reduce((sum, product) => sum + product.item.price, 0);
  return (
     <div>
            <h1 className='text-3xl'>Your Shopping Cart</h1>
            {products.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                products.map(product => (
                    <CartItem 
                        key={product.id} 
                        name={product.item.title} 
                        image={product.item.image}
                        price={product.item.price} 
                        quality={product.item.rating.rate} 
                        onRemove={() => handleRemoveItem(product.id)} 
                    />
                ))
            )}

            <div className='text-2xl font-bold mt-4'>
                Total Price: ${totalPrice.toFixed(2)}
                </div>
            </div>


  )
}

export default Cart