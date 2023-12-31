import React, { useContext } from 'react'
import { ThemeContext } from '../context/Theme'

function Container({children, className, onClick}) {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={`${theme ? 'bg-primary':'bg-primary-dark text-white'} shadow-md ${className} rounded-md`} onClick={onClick}>
      {children}
    </div>
  )
}

export default Container