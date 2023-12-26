import React, { useContext, useState } from 'react'
import { ThemeContext } from '../context/Theme'
import Container from '../components/Container'
import Card from '../components/Card';

import { IoMdSearch } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import countries from '../data.json';


function Home() {
  const {theme} = useContext(ThemeContext)
  const [visible, setVisible] = useState(false)
  const [data, setData] = useState(countries);
  const regions = ['None', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  return (
    <div className={`w-full h-full min-h-screen px-12 py-8 ${theme ? 'bg-secondary':'bg-secondary-dark'}`}>
      <span className='sm:flex justify-between'>
        <Container className='flex items-center px-4 py-3 mb-8'>
          <IoMdSearch className='mr-3'/>
          <input 
            type="text" 
            className={`text-xs ${theme ? 'bg-primary':'bg-primary-dark'} w-56 focus:outline-none`} 
            placeholder='Search for a country...'
            onChange={ (e) => { setData(filterCountries(e.target.value))}}
          />
        </Container>
        <Container className='px-4 py-3 flex items-center relative space-x-8 max-w-40 text-xs mb-8'>
          <p>Filter by Region</p>
          <FaChevronDown className='cursor-pointer' onClick={() => setVisible((prev) => !prev)}/>
          <Container className={`absolute p-3 mt-1 w-full top-full right-0 z-10 ${!visible && 'hidden'}`}>
            {
              regions.map((region) => 
              <p 
                key={region} 
                className='py-1 font-medium cursor-pointer'
                onClick={ () => {
                  if (region === 'None') setData(countries);
                  else setData(countries.filter((country) => country.region == region));
                }}
                >{region}
              </p>)
            }
          </Container>
        </Container>
      </span>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 max-w-screen-lg mx-auto'>
        {
          data.map( (country) => {
            return <Card key={country.name} data={country}/>
          })
        }
      </div>
    </div>
  )
}

const filterCountries = (query) => {
  const regex = new RegExp(query, 'i');
  return countries.filter(country => regex.test(country.name));
};

export default Home