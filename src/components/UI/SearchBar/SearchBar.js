import React from 'react';
import { SEARCH_BAR_TEXT } from '../../api/strings';
import './searchbar.css';
import { GrFormSearch } from "react-icons/gr";

const SearchBar = ({ getSearchText }) => {
  return (
    <form className='search-bar-main' onSubmit={e => (e.preventDefault(), getSearchText(e.target.searchphotos.value))}>
        <input id='search-text' placeholder={SEARCH_BAR_TEXT} name='searchphotos' />
        <button>
            <GrFormSearch size={'25px'} />
        </button>
    </form>
  )
}

export default SearchBar