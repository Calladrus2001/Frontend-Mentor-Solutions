import React from 'react'
import { NavLink } from 'react-router-dom';
import Container from '../components/Container';

function Home() {
  return (
    <div className='w-full h-screen bg-purple-dark flex justify-center items-center'>
      <Container className='w-1/3 h-1/2 min-w-80 px-8 bg-purple-light flex flex-col justify-center space-y-6'>
        <img src="./assets/images/logo.svg" alt="logo" className='h-12 mb-6' />
        <Container className='w-full flex justify-between items-center p-4 bg-yellow-gold rounded-2xl font-bold' hoverEffect={true}>
          <p>PLAY VS PLAYER</p>
          <img src="./assets/images/player-vs-player.svg" alt="logo" className='h-8' />
        </Container>
        <NavLink to='/rules'>
          <Container className='w-full p-4 bg-white rounded-2xl font-bold' hoverEffect={true}>GAME RULES</Container>
        </NavLink>
      </Container>
    </div>
  )
}

export default Home