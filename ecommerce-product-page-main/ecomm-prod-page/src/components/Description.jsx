import React, {useContext, useState} from 'react'
import { CartContext } from '../context/CartContext';

function Description() {
  const [quantity, setQuantity] = useState(1);
  let {setCart} = useContext(CartContext);
  return (
    <div className='pt-8 flex flex-col justify-start space-y-3'>
        <div className='text-xs text-orange-400 font-medium'>SNEAKER COMPANY</div>
        <div className='text-3xl font-bold'>Fall Limited Sneakers</div>
        <div className='text-sm text-gray-400 pt-4'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum eligendi quibusdam hic! Voluptatibus adipisci ut, fuga, eum facilis molestiae repudiandae facere modi minus corrupti ullam exercitationem autem? Excepturi, consequatur quod.</div>
        <div className='flex space-x-3 items-center'>
            <div className='text-lg font-bold'>$125.00</div>
            <div className='px-1 py-0.5 text-xs font-medium text-orange-500 bg-orange-100 rounded-sm'> 50% </div>
        </div>
        <div className='text-xs text-gray-400 font-medium line-through'>$250.00</div>
        <div className='flex pt-4 space-x-3'>
          <div className='px-2 py-3 flex items-center justify-center bg-gray-100 rounded-md space-x-8'>
            <img 
              src="./src/assets/images/icon-minus.svg" 
              alt="cart icon" 
              className='h-1 w-2 cursor-pointer' 
              onClick={() => quantity > 0 ? setQuantity(prev => prev-1) : null}  
            />
            <div className='text-sm font-bold'> {quantity} </div>
            <img 
              src="./src/assets/images/icon-plus.svg" 
              alt="cart icon" 
              className='h-2 w-2 cursor-pointer' 
              onClick={() => setQuantity(prev => prev+1)}  
            />
          </div>
          <div 
            className='flex flex-grow justify-center items-center bg-orange-500 rounded-md cursor-pointer hover:bg-orange-400 hover:drop-shadow-xl' 
            onClick={()=>{
              setCart(prev => {
                if (quantity === 0) return null;
                return {
                ...prev,
                  quantity: quantity,
                  total: quantity * 125
                }
              })
            }}>
            <div 
              className='text-sm text-white font-semibold'>
              Add to cart
            </div>
          </div>
        </div>
    </div>
  )
}

export default Description