import React,{useEffect,useState} from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../Store/CartSlice';

const Product = () => {
    const [products,setProducts] = useState([]);
    const dispatch = useDispatch();
    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products')
        .then((res)=>res.json())
        .then((response)=>setProducts(response))
    },[])

    console.log(products)

    const addToCart=(product)=>{
        // dispatch the add action of cartSlice
        dispatch(add(product))
    }
  
  return (
    <div >
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 p-3' style={{width:"100%"}}>
            {
                products.map((product,key)=>{
                    return(
                    <div className=' p-2 border border-black rounded-md flex flex-col items-center justify-center  flex-wrap'>
                        <div className='w-3/4 flex justify-center flex-col'>
                            <div><img src={product.images[0]} alt="" /></div>
                            <div className='text-center font-bold'>{product.title}</div>
                            <div className='text-center'>
                                {product.description}
                            </div>
                        </div>
                        <div className="footer mt-3">
                            <div onClick={()=>{addToCart(product);alert("Product added to cart")}} className='bg-green-400 cursor-pointer hover:scale-90 ease-in rounded-lg p-2'>Add To Cart</div>
                        </div>
                    </div>
                    )
                })
            }    
        </div>      
    </div>
  )
}

export default Product