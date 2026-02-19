import { Link } from 'react-router-dom';
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
                    <Link to="/" className='back-button'>
                        Go find some movies
                    </Link>
                </div>
                ) : (
                    <div className='watchlater-list-container'>
                        {watchlist.map((movie) => (
                            <div key={movie.id} className='watch-later-item'>
                                <MovieCard key={movie.id} {...movie} variant="watchlist" isAdded={true} onButtonClick={() => removeFromWatchlist(movie.id)}/>
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    )
}

export default WatchLater;