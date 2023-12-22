import React from 'react'

function HeaderItem({text}) {
  return (
    <div className='pb-8 mr-8 text-xs text-gray-400 font-medium border-b-4 border-transparent hover:border-b-orange-500 hover:text-black cursor-pointer'>
      {text}
    </div>
  )
}

export default HeaderItem