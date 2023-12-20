import React, { useState } from 'react'
import DateInput from './components/DateInput'
import ResultLabel from './components/ResultLabel'
function App() {
  let [data, setData] = useState({});
  return (
    <>
      <div className='w-full h-screen px-3 pt-16 md:pt-28 bg-gray-200'>
        <div className=' w-2/3 min-w-96 px-10 py-10 flex flex-col mx-auto rounded-2xl rounded-br-6xl bg-white'>
          <DateInput data={data}/>
          <div className='relative mb-10'>
            <hr className='mt-10 md:mr-8'/>
            <img 
              src="./src/assets/images/icon-arrow.svg" 
              alt="icon" 
              className='h-14 w-14 p-4 lg:p-3 absolute top-3 left-1/2 transform -translate-x-1/2 rounded-full bg-violet-600 hover:bg-black cursor-pointer z-10 lg:right-0 lg:left-auto'
            />
          </div>
            <ResultLabel quantity={data.years} text='years'/>
            <ResultLabel quantity={data.months} text='months'/>
            <ResultLabel quantity={data.days} text='days'/>
        </div>
      </div>
    </>
  )
}

export default App