import React from 'react'

function App() {
  return (
    <>
      <div className='w-full h-screen px-36 py-12 bg-white flex flex-col'>
        <header className='w-full flex justify-between mb-12'>
          <div>
            icon + categories
          </div>
          <div className=''>
            image + cart
          </div>
        </header>
        <hr className='mb-24'/>
        <div className='flex justify-between px-12'>
          <div className='flex flex-col'>
            Image + ImageRow
          </div>
          <div className='flex flex-col'>
            Description component
          </div>
        </div>
      </div>
    </>
  )
}

export default App