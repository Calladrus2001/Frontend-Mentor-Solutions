import React from 'react'

function Container({children, className, hoverEffect}) {
  var style = 'border-black border-2 border-b-10 rounded-3xl ';
  if (hoverEffect) style += 'hover:border-purple-dark cursor-pointer';
  return (
    <div className={`${style} ${className}`}>
      {children}
    </div>
  )
}

export default Container