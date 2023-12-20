import React, { useState } from 'react'

function DateInputField({error, setData, text}) {
    return (
      <div className='flex flex-col justify-start'>
          <div className='text-xs font-bold tracking-widest text-gray-500'>{text}</div>
          <input 
            type="text"
            className= {`px-4 py-3 max-w-40 min-w-24 w-4/5 mt-1 border ${error ? 'border-red-300' : 'border-gray-300 hover:border-purple-700'} cursor-pointer caret-purple-700 rounded-md text-xl font-black`}
            onChange={ 
                (e) => {
                setData(prevData => ({
                  ...prevData,
                  [text]: e.target.value
                }))
              }
            }
          />
          <div className= {`${error ? '' : 'invisible'} text-xs font-semibold text-red-500`}>{error}</div>
      </div>
    )
  }

function DateInput({error, setData}) {
  return (
    <div className='flex'>
        <DateInputField error={error.DAY} setData={setData} text='DAY'/>
        <DateInputField error={error.MONTH} setData={setData} text='MONTH'/>
        <DateInputField error={error.YEAR} setData={setData} text='YEAR'/>
    </div>
  )
}

export default DateInput