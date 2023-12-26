import React, { useContext } from 'react'
import { ThemeContext } from '../context/Theme'
import Container from './Container'

function Home() {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`w-full h-screen px-12 py-8 ${!theme && 'bg-secondary-dark'}`}>
      <span className='flex justify-between'>
        <Container>
          hello world
        </Container>
      </span>
    </div>
  )
}

export default Home