import React, { useState } from 'react'
import "./search.css"
import SearchIcon from '@mui/icons-material/Search';

function Search( {search, onSearchChange} ) {


  return (
    <div className='seach-box'>
     <input className='search-box-input' 
     placeholder='Search Coins'
      type='text'
      value={search}
      onChange={ (e) =>  onSearchChange(e)}
      /> <SearchIcon />


    </div>
  )
}

export default Search;
