import { Route, Routes, useSearchParams } from 'react-router-dom';
import Header from "../Header/Header.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import MovieList from "../MovieList/MovieList.jsx";
import FiltersBar from "../FiltersBar/FiltersBar.jsx";
import "./App.css";
import { useWatchlist } from "../../hooks/useWatchlist.js";
import WatchLater from "../WatchLater/WatchLater.jsx";
import moviesData from '../../../movies_data/movies.json';
import SearchBar from "../SearchBar/SearchBar.jsx";
import MovieDetails from '../MovieDetails/MovieDetails.jsx';
import Layout from '../Layout/Layout.jsx';

function App() {
  const { addToWatchlist } = useWatchlist();

  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("search") || "";
  const selectedGenre = searchParams.get("genre") || "";
  const selectedRating = searchParams.get("rating") || "";

  const updateFilters = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if(value) {
      newParams.set(key, value);
    }
    else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  }

  const filteredMovies = moviesData.filter((movie) => {
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === "" || movie.genre.toLowerCase() === selectedGenre.toLowerCase();
    const matchesRating = selectedRating === "" || parseFloat(movie.rating) >= parseFloat(selectedRating);
    return matchesSearch && matchesGenre && matchesRating;
  });

  return (
    <Routes>
      {/* parent layout route */}
      <Route path="/" element={ <Layout />}>
        <Route index element={
        <>
          <SearchBar query={searchQuery} setQuery={(value) => updateFilters("search", value)}/>
          {/* filters for search, such as genre and rating */}
          <FiltersBar selectedGenre={selectedGenre} onGenreChange={(value) => updateFilters("genre", value)} selectedRating={selectedRating} onRatingChange={(value) => updateFilters("rating", value)}/>
          <MovieList movies={filteredMovies} onWatchLater={addToWatchlist}/>
        </>
        } />

        {/* child routes */}
        {/* watch later route */}
        <Route path="/watchlist" element={<WatchLater />} />
        {/* individual movie details route */}
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
