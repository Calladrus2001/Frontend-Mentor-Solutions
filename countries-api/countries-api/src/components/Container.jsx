import React, { useContext } from 'react'
import { ThemeContext } from '../context/Theme'

function Container({children}) {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={`${!theme && 'bg-primary-dark text-white'} shadow-sm`}>
      {children}
    </div>
  )
}

export default Container