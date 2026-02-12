import Header from "../Header/Header.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import MovieList from "../MovieList/MovieList.jsx";
import FiltersBar from "../FiltersBar/FiltersBar.jsx";
import "./App.css";
import { useWatchlist } from "../../hooks/useWatchlist.js";
import { useState } from "react";
import WatchLater from "../WatchLater/WatchLater.jsx";
import moviesData from '../../../movies_data/movies.json';
import SearchBar from "../SearchBar/SearchBar.jsx";

function App() {
  const { addToWatchlist } = useWatchlist();
  const [currentScreen, setCurrentScreen] = useState('home');
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  const filteredMovies = moviesData.filter((movie) => {
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === "" || movie.genre.toLowerCase() === selectedGenre.toLowerCase();
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="app-container">
      {/* header component for the title dock with title and logo */}
      <Header/>

      <main className="main-container">
        {/* navigation row with two buttons, home and watchlist */}
        <NavBar setScreen={setCurrentScreen} currentScreen={currentScreen}/>

        {currentScreen === 'home' ? (
          <>
            <SearchBar query={searchQuery} setQuery={setSearchQuery}/>
            {/* filters for search, such as genre and rating */}
            <FiltersBar selectedGenre={selectedGenre} onGenreChange={setSelectedGenre}/>
            <MovieList movies={filteredMovies} onWatchLater={addToWatchlist}/>
          </>
        ) : (
          <WatchLater/>
        )}
      </main>     
    </div>
  );
}

export default App;
