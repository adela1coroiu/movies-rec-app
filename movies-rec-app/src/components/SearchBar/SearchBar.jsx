import './SearchBar.css';
import searchIcon from '../../assets/search.png';


function SearchBar({query, setQuery}) {

    return (
        <div className="search-container">
            <input type="text" placeholder="Search for a movie..." className="search-input" value={query} onChange={(event) => setQuery(event.target.value)}></input>
            <img src={searchIcon} className="search-icon"/>
        </div>
    )
}

export default SearchBar;