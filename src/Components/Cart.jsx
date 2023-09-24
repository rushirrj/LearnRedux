import React from 'react'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { add,remove } from '../Store/CartSlice'
const Cart=()=>{
  const dispatch = useDispatch();

  const cartProducts = useSelector(state => state.cart)
  const removeProduct=(id)=>{
    dispatch(remove(id))
  }
  return(
    <div className='flex flex-col gap-3 p-3 justify-center items-center'>
      <div className='w-2/5 border-black border-dashed border flex flex-col divide-y-2 gap-2 p-3'>
      {
        cartProducts.map((e,k)=>{
          return(
            <div className='p-3 relative  flex justify-center items-start'>
              <div className='basis-1/2 p-2 gap-3 h-full w-full flex flex-col justify-center items-center'>
                <div className='h-48'><img className='h-full w-full' src={e.images[0]} alt="" /></div>
                <div><span className='font-bold'>PRICE: </span>{e.price}</div>
              </div>
              <div className='flex basis-1/2 flex-col gap-2 pt-3 h-full'>
                <div className='font-bold'>{e.title}</div>
                <div className='text-xs '>{e.description}</div>
                <div onClick={()=>{removeProduct(e.id)}} style={{transform:"translate(-50%,-50%)"}} className='mt-5 absolute bottom-5 right-0 text-white cursor-pointer rounded-md bg-red-500 w-1/3 text-center hover:scale-95'>Remove</div>
              </div>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Cart