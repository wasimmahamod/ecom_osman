import React from 'react'
import Search from '../../../public/assets/svg/search'
import "./style.css"

const SearchBar = () => {
  return (
    <div className='searchbar'>
      <input placeholder='Search here' />
      <div className='search_icon'>
      <Search/>
      </div>
    </div>
  )
}

export default SearchBar;


