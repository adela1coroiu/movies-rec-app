import { useWatchlist } from '../../hooks/useWatchlist';
import MovieCard from '../MovieCard/MovieCard';
import './WatchLater.css';

function WatchLater() {
    const { watchlist, removeFromWatchlist } = useWatchlist();

    return (
        <div className='watch-later-screen'>
            <h2 className='screen-title'>My Watchlist</h2>

            {watchlist.length === 0 ? (
                <div className='empty-message'>
                    <p>Your watchlist is feeling a little lonely...</p>
                    <button className='back-button' onClick={() => window.location.href = '/'}>
                        Go find some movies
                    </button>
                </div>
                ) : (
                    <div className='watchlater-list-container'>
                        {watchlist.map((movie) => (
                            <div key={movie.id} className='watch-later-item'>
                                <MovieCard title={movie.title} image={movie.image} genre={movie.genre} rating={movie.rating} variant="watchlist" onButtonClick={() => removeFromWatchlist(movie.id)}/>
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    )
}

export default WatchLater;