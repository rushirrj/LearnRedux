import React from 'react'
import { Link } from 'react-router-dom'
import {  useSelector } from 'react-redux/es/hooks/useSelector'

const Navbar = () => {
  const cartProducts = useSelector(state => state.cart)
  return (
    <div className='flex justify-between p-3 shadow-md'>
        <Link to="/"  className='pl-4 font-extrabold text-2xl'>
            Redux Toolkit is Coolkit
        </Link>
        <Link to="/cart"  className='pr-4'>
            <div className='bg-orange-400 cursor-pointer rounded-md hover:scale-95 p-2'>Cart {cartProducts.length} </div>
        </Link>
    </div>
  )
}

export default Navbar