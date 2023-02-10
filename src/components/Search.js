import { useState } from 'react';
import * as BiIcons from "react-icons/bi";

const Search = ({setSearchWord}) => {

    const [searchInput, setSearchInput] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value)
        setSearchWord(e.target.value)
    }

    console.log(searchInput)
    return (
        <div className='search'>
            <BiIcons.BiSearch />
            <input 
            type='text'
            placeholder='Search by country name'
            onChange={handleChange}
            value={searchInput}
            ></input>
        </div>
    )
}

export default Search;