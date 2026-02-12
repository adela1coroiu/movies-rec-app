import './MovieList.css'
import moviesData from '../../../movies_data/movies.json'
import MovieCard from '../MovieCard/MovieCard';

function MovieList({ onWatchLater }) {
    return (
        <div className='movie-list-container'>
            {moviesData.map((movie) => (
                <MovieCard key={movie.id} title={movie.title} image={movie.image} genre={movie.genre} rating={movie.rating} onButtonClick={() => onWatchLater(movie)} variant="add"/>
            ))}
        </div>
    );
}

export default MovieList;