import React from 'react'

function DateInputField({text}) {
    return (
      <div className='flex flex-col justify-start'>
          <div className='text-xs font-bold tracking-widest text-gray-500'>{text}</div>
          <input type="text" name="" id="" className='px-4 py-3 max-w-40 min-w-24 w-4/5 mt-1 border border-gray-300 hover:border-purple-700 cursor-pointer caret-purple-700 rounded-md text-xl font-black'/>
      </div>
    )
  }

function DateInput({data}) {
  return (
    <div className='flex'>
        <DateInputField text='DAY'/>
        <DateInputField text='MONTH'/>
        <DateInputField text='YEAR'/>
    </div>
  )
}

export default DateInput