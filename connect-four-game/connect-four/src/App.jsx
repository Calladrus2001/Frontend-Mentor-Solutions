import React from 'react'
import {Outlet} from 'react-router-dom'
import {GameContextProvider} from './context/GameContext'

function App() {
  return (
    <GameContextProvider>
      <Outlet/>
    </GameContextProvider>
  )
}

export default App