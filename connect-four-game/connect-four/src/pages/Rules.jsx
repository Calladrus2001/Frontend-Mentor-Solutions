import React from 'react';
import Container from '../components/Container'

function Rules() {
    return (
        <div className='w-full h-screen bg-purple-dark flex flex-col justify-center items-center'>
          <Container className='w-1/3 min-w-80 bg-white'>
              <div className='px-8 py-6 flex flex-col justify-center space-y-2'>
                <p className='text-3xl font-bold mx-auto mb-4'>RULES</p>
                <p className='text-md text-purple-light font-bold tracking-tighter'>OBJECTIVE</p>
                <p className='text-sm text-gray-500 font-semibold'> 
                  Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally or diagonally).
                </p>
                <p className='pt-4 text-md text-purple-light font-bold tracking-tighter'>HOW TO PLAY</p>
                <div className='flex space-x-2 text-sm'>
                  <b>1</b>
                  <p className='text-gray-500 font-semibold'>Red goes first in the first game</p>
                </div>
                <div className='flex space-x-2 text-sm'>
                  <b>2</b>
                  <p className='text-gray-500 font-semibold'>Players must alternate turns, and only one disc can be dropped in each turn.</p>
                </div>
                <div className='flex space-x-2 text-sm'>
                  <b>3</b>
                  <p className='text-gray-500 font-semibold'>The game ends when there is a 4-in-a-row or stalemate.</p>
                </div>
                <div className='flex space-x-2 text-sm pb-4'>
                  <b>4</b>
                  <p className='text-gray-500 font-semibold'>The starter of the previous game goes second on the next game</p>
                </div>
              </div>
            </Container>          
        </div>
      )
}

export default Rules