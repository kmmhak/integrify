import * as BiIcons from "react-icons/bi";

const Search = ({setSearchWord}) => {

    const handleChange = (e) => {
        e.preventDefault();
        setSearchWord(e.target.value)
    }

    return (
        <div className='search_container'>
            <div className='search'>
                <BiIcons.BiSearch />
                <input 
                type='text'
                placeholder='Search by country name'
                onChange={handleChange}
            ></input>
            </div>
        </div>
    )
}

export default Search;