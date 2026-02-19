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
  const { watchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();

  const [searchParams, setSearchParams] = useSearchParams(); //returns a tuple of the current url's urlsearchparams 
  // and a function to update them

  const searchQuery = searchParams.get("search") || "";
  const selectedGenre = searchParams.get("genre") || "";
  const selectedRating = searchParams.get("rating") || "";

  const updateFilters = (key, value) => {
    const newParams = new URLSearchParams(searchParams); //cloning the current set of url params
    if(value) {
      newParams.set(key, value); //if the value exists, it created/overwrites the specific param
    }
    else {
      newParams.delete(key); //in case it doesn't exist, then it cleans up the url, removing the key from the url search params
    }
    setSearchParams(newParams); //by calling the updating function of the urlsearchparams, we re-render the app component
    //thus updating the filteredMovies that are being passed onto the MovieList component
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
          <MovieList movies={filteredMovies} watchlist={watchlist} onToggleWatchlist={(movie) => {
            const isAdded = watchlist.some(m => m.id === movie.id);
            isAdded ? removeFromWatchlist(movie.id) : addToWatchlist(movie);
          }}/>
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
