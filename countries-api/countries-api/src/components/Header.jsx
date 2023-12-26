import React, {useContext} from 'react'
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
import { ThemeContext } from '../context/Theme';

function Header() {
  const {theme, setTheme} = useContext(ThemeContext);
  return (
    <div className={`w-full flex justify-between items-center px-12 py-4 shadow-md ${theme ? '' : 'bg-primary-dark text-white'}`}>
      <h1 className='font-bold'>Where in the world?</h1>
      <h4 className='flex items-center cursor-pointer' onClick={() => {setTheme((prev) => !prev)}}>
        { theme ? <MdOutlineDarkMode />: <MdDarkMode/>}
        <span className='ml-2 text-sm font-semibold'>Dark Mode</span>
      </h4>
    </div>
  )
}

export default Header