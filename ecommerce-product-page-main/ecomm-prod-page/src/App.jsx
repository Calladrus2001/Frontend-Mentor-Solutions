import React, {useState, useContext} from 'react'
import {CartContext} from './context/CartContext'

import HeaderItem from './components/HeaderItem';
import ImageRow from './components/ImageRow';
import Description from './components/Description';

function App() {
  const headerItems = ['Collections', 'Men', 'Women', 'About', 'Contact'];
  const [imageNum, setImageNum] = useState(1);
  const {cart} = useContext(CartContext);
  return (
    <>
      <div className='w-full h-screen px-4 lg:px-36 bg-white flex flex-col'>
        <header className='w-full flex justify-between'>
          <div className='flex pt-10'>
            <img src="./src/assets/images/icon-menu.svg" alt="menu icon" className='h-4 min-w-4 mr-4 mt-3 sm:hidden' />
            <div className='font-bold text-2xl tracking-tight mr-12'>sneakers</div>
            <div className='hidden sm:flex pt-1.5'>
              {headerItems.map((itemText) => <HeaderItem key={itemText} text={itemText}/>)}
            </div>
          </div>
          <div className='flex items-center justify-center py-10 sm:py-8'>
            <div className='mr-6 p-2 relative cursor-pointer'>
              <img src="./src/assets/images/icon-cart.svg" alt="cart icon" className='h-4 min-w-4' />
              <div className={`px-1.5 absolute bottom-4 right-0 z-10 text-xs text-white bg-orange-500 rounded-full ${!cart && 'hidden'}`}>
                {cart === null ? '' : cart.quantity}
              </div>
            </div>
            <div className='h-10 min-w-10 rounded-full hover:bg-orange-500 flex justify-center items-center'>
            <img src="./src/assets/images/image-avatar.png" alt="avatar" className='h-9 w-9 border-transparent hover:border-orange-500 cursor-pointer' />
            </div>
          </div>
        </header>
        <hr className='mb-16 hidden sm:block'/>
        <div className='flex flex-col sm:flex-row justify-between px-12 mx-auto'>
          <div className='flex flex-col mr-32'>
            <img src={`./src/assets/images/image-product-${imageNum}.jpg`} alt="product image" className='h-80 mb-4 aspect-square rounded-lg cursor-pointer'/>
            <ImageRow imageNum={imageNum} setImageNum={setImageNum}/>
          </div>
          <div className='max-w-lg'>
            <Description/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;