import './MovieList.css'
import MovieCard from '../MovieCard/MovieCard';

function MovieList({ movies, watchlist, onToggleWatchlist }) {
    return (
        <div className='movie-list-container'>
            {movies.length > 0 ? (
                movies.map((movie) => (
                <MovieCard key={movie.id} {...movie} isAdded={watchlist.some(m => m.id === movie.id)} onButtonClick={() => onToggleWatchlist(movie)}/>
            ))) : (
                <p className='no-results'>No movies found matching your search!</p>
            )}
        </div>
    );
}

export default MovieList;