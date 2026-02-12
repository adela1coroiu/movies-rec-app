import Header from "../Header/Header.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import MovieList from "../MovieList/MovieList.jsx";
import FiltersBar from "../FiltersBar/FiltersBar.jsx";
import "./App.css";
import { useWatchlist } from "../../hooks/useWatchlist.js";
import { useState } from "react";
import WatchLater from "../WatchLater/WatchLater.jsx";

function App() {
  const { addToWatchlist } = useWatchlist();
  const [currentScreen, setCurrentScreen] = useState('home');

  return (
    <div className="app-container">
      {/* header component for the title dock with title and logo */}
      <Header/>

      <main className="main-container">
        {/* navigation row with two buttons, home and watchlist */}
        <NavBar setScreen={setCurrentScreen} currentScreen={currentScreen}/>

        {currentScreen === 'home' ? (
          <>
            {/* search bar with input and button */}
            <div className="search-container">
              <input type="text" placeholder="Search for a movie..." className="search-input"></input>
              <button className="search-button">Search</button>
            </div>
            {/* filters for search, such as genre and rating */}
            <FiltersBar/>
            <MovieList onWatchLater={addToWatchlist}/>
          </>
        ) : (
          <WatchLater/>
        )}
      </main>     
    </div>
  );
}

export default App;
