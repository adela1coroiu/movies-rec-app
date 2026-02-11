import Header from "../Header/Header.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import MovieList from "../MovieList/MovieList.jsx";
import FiltersBar from "../FiltersBar/FiltersBar.jsx";
import "./App.css";

function App() {
  const addToWatchLater = (movie) => {
    const currentWatchList = JSON.parse(localStorage.getItem('watchlist')) || [];
    const isAlreadyAdded = currentWatchList.some(item => item.id === movie.id);

    if(!isAlreadyAdded) {
      const updatedWatchList = [...currentWatchList, movie];
      localStorage.setItem('watchlist', JSON.stringify(updatedWatchList));
      alert(`${movie.title} added to Watch later!`);
    }
    else {
      alert(`${movie.title} is already in the Watch later list!`);
    }
  }

  return (
    <div className="app-container">
      {/* header component for the title dock with title and logo */}
      <Header/>

      <main className="main-container">
        {/* navigation row with two buttons, home and watchlist */}
        <NavBar/>

        {/* search bar with input and button */}
        <div className="search-container">
          <input type="text" placeholder="Search for a movie..." className="search-input"></input>
          <button className="search-button">Search</button>
        </div>

        {/* filters for search, such as genre and rating */}
        <FiltersBar/>

        <MovieList onWatchLater={addToWatchLater}/>
      </main>
       
    </div>
  );
}

export default App;
