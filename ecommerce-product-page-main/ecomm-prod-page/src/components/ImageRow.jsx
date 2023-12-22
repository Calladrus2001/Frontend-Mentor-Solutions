import React from 'react'

function ImageRow({imageNum, setImageNum}) {
  let images = [1,2,3,4];
  return (
    <div className='flex space-x-5 justify-center'>
      {
        images.map((image) => {
          return (
            <div
              className={`h-16 aspect-square cursor-pointer`}
              key={image}
              onClick={() => setImageNum(image)}
            >
              <img 
                src={`./src/assets/images/image-product-${image}.jpg`} 
                alt="product image" 
                className={`w-full h-full rounded-lg border-2 border-transparent ${imageNum == image && 'border-orange-500'}`}
              />
            </div>
          )
        })
      }
    </div>
  )
}

export default ImageRow