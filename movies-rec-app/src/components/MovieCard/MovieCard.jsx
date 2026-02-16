import './MovieCard.css'
import watchLaterIcon from '../../assets/watchlater.png'
import deleteIcon from '../../assets/trash.png';
import { Link } from 'react-router-dom';

function MovieCard({ id, title, image, genre, rating, onButtonClick, variant }) {
    const path = '../../../movies_data/images/';
    

    const getRatingColor = (score) => {
        const scoreParsed = parseFloat(score);
        if(scoreParsed >= 9) return 'high-rating';
        if(scoreParsed >= 8) return 'medium-rating';
        return 'low-rating';
    }

    const isWatchlist = variant === 'watchlist';
    const icon = isWatchlist ? deleteIcon : watchLaterIcon;
    const buttonAlt = isWatchlist ? "remove movie from watch later list" : "add movie to watch later list";

    return (
        <div className='movie-card'>
            <div className="image-container">
                {/* linking the image to the dynamic detail page */}
                <Link to={`/movies/${id}`}>
                    <img src={`${path}/${image}`} alt={title} className='movie-image'/>
                </Link>
                
                {/* watch later/remove movie button overlaying the movie image */}
                <button className={isWatchlist ? "remove-button" : "watch-later-button"} title={buttonAlt} onClick={onButtonClick}>
                    <img src={icon} alt={buttonAlt} />
                </button>
            </div>
            <Link to={`/movies/${id}`} style={{textDecoration: 'none', color: 'inherit'}}>
                <div className='movie-title'>{title}</div>
            </Link>
            
            <div className='movie-genre'>{genre}</div>
            <div className={`movie-rating ${getRatingColor(rating)}`}>{rating}⭐</div>
        </div>
    );
}

export default MovieCard;