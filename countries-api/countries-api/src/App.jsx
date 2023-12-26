import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import {ThemeContextProvider} from './context/Theme'

function App() {
  return (
    <ThemeContextProvider>
      <Header/>
      <Outlet/>
    </ThemeContextProvider>
  )
}

export default App