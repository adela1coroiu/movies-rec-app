import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import MovieDetails from '../MovieDetails/MovieDetails.jsx';

function App() {
  const { addToWatchlist } = useWatchlist();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedRating, setSelectedRating] = useState("");

  const filteredMovies = moviesData.filter((movie) => {
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === "" || movie.genre.toLowerCase() === selectedGenre.toLowerCase();
    const matchesRating = selectedRating === "" || parseFloat(movie.rating) >= parseFloat(selectedRating);
    return matchesSearch && matchesGenre && matchesRating;
  });

  return (
    <BrowserRouter>
      <div className="app-container">
        {/* header component for the title dock with title and logo */}
        <Header/>

        <main className="main-container">
          {/* navigation row with two buttons, home and watchlist */}
          <NavBar />

          <Routes>
            {/* home page route */}
            <Route path="/" element={
              <>
                <SearchBar query={searchQuery} setQuery={setSearchQuery}/>
                {/* filters for search, such as genre and rating */}
                <FiltersBar selectedGenre={selectedGenre} onGenreChange={setSelectedGenre} selectedRating={selectedRating} onRatingChange={setSelectedRating}/>
                <MovieList movies={filteredMovies} onWatchLater={addToWatchlist}/>
              </>
            } />

            {/* watch later route */}
            <Route path="/watchlist" element={<WatchLater />} />

            {/* individual movie details route */}
            <Route path="/movies/:id" element={<MovieDetails />} />
          </Routes>
        </main>     
      </div>
    </BrowserRouter>
  );
}

export default App;
