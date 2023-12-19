import React from 'react'
import { useState } from 'react';
import { IoIosAddCircle } from "react-icons/io";
import { MdOutlineRemoveCircle } from "react-icons/md";

function QnA({question, answer}) {
  let [isExpanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!isExpanded);
  };

  let icon = isExpanded ? 
    <MdOutlineRemoveCircle onClick={handleClick} className='text-dark-purple h-6 w-6 ml-4 cursor-pointer'/> : 
    <IoIosAddCircle onClick={handleClick} className='text-purple-700 h-6 w-6 ml-4 cursor-pointer'/>;   

  return (
    <>
        <div className='flex justify-between items-center my-4'>
          <div className='font-bold text-dark-purple hover:text-purple-700 cursor-pointer'>
            {question}
          </div>
          {icon}
        </div>
        {isExpanded && <div className='mt-4 text-sm text-grey-purple mb-4'>{answer}</div>}
    </>
  )
}

export default QnA;