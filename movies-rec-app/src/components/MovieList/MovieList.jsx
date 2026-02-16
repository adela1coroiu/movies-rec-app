import './MovieList.css'
import MovieCard from '../MovieCard/MovieCard';

function MovieList({ movies, onWatchLater }) {
    return (
        <div className='movie-list-container'>
            {movies.length > 0 ? (
                movies.map((movie) => (
                <MovieCard key={movie.id} {...movie} onButtonClick={() => onWatchLater(movie)} variant="add"/>
            ))) : (
                <p className='no-results'>No movies found matching your search!</p>
            )}
        </div>
    );
}

export default MovieList;