import React from 'react'

function ResultLabel({quantity, text}) {
  return (
    <div className='flex italic'>
        <div className='text-6xl text-violet-600 font-black mr-3'>{`${quantity || '--'}`}</div>
        <div className='text-6xl text-black font-black'>{`${text}`}</div>
    </div>
  );
}

export default ResultLabel