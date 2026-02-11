import Header from "../Header/Header.jsx";
import MovieList from "../MovieList/MovieList.jsx";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      {/* header component for the title dock with title and logo */}
      <Header/>

      <main className="main-container">
        {/* navigation row with two buttons, home and watchlist */}
        <div className="nav-buttons">
          <button className="nav-button">Home</button>
          <button className="nav-button">Watchlist</button>
        </div>

        {/* search bar with input and button */}
        <div className="search-container">
          <input type="text" placeholder="Search for a movie..." className="search-input"></input>
          <button className="search-button">Search</button>
        </div>

        {/* filters for search, such as genre and rating */}
        <div className="filters-container">
          <select className="filter-dropdown" name="genre">
            <option value="">All Genres</option>
            <option value="drama">Drama</option>
            <option value="fantasy">Fantasy</option>
            <option value="horror">Horror</option>
            <option value="action">Action</option>
          </select>

          <select className="filter-dropdown" name="rating">
            <option value="">All Ratings</option>
            <option value="9">9+ rating</option>
            <option value="8">8+ rating</option>
            <option value="7">7+ rating</option>
          </select>
        </div>
        <MovieList/>
      </main>
       
    </div>
  );
}

export default App;
