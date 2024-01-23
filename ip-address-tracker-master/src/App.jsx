import React, {useEffect, useState} from 'react'
import IPData from './../ip.json'
import Map from './components/Map';

function App() {
  const [location, setLocation] = useState([IPData.location.lat, IPData.location.lng]);
  
  return (
    <>
      <div className='h-screen w-full flex flex-col relative'>
        <img className='h-1/3' src="./images/pattern-bg-desktop.png" alt="" />
        <Map x={location[0]} y={location[1]}></Map>
      </div>
    </>
  )
}

export default App