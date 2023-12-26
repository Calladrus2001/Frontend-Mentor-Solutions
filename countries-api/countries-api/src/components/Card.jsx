import React from 'react'
import Container from './Container'

function Card({data}) {
  return (
    <Container className='overflow-hidden cursor-pointer pb-3'>
      <img src={data.flags.svg} alt="flag image" className='aspect-video'/>
      <div className='p-4 text-xs'>
        <h3 className='font-bold text-sm mb-2'>{data.name}</h3>
        <span className='flex'>
          <div className='font-semibold mr-1'>Population: </div>
          <div>{data.population}</div>
        </span>
        <span className='flex'>
          <div className='font-semibold mr-1'>Region: </div>
          <div>{data.region}</div>
        </span>
        <span className='flex'>
          <div className='font-semibold mr-1'>Capital: </div>
          <div>{data.capital}</div>
        </span>
      </div>
    </Container>
  )
}

export default Card