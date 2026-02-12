import './MovieCard.css'
import watchLaterIcon from '../../assets/watchlater.png'
import deleteIcon from '../../assets/trash.png';

function MovieCard({ title, image, genre, rating, onButtonClick, variant }) {
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
                <img src={`${path}/${image}`} alt={title} className='movie-image'/>
                {/* watch later/remove movie button overlaying the movie image */}
                <button className={isWatchlist ? "remove-button" : "watch-later-button"} title={buttonAlt} onClick={onButtonClick}>
                    <img src={icon} alt={buttonAlt} />
                </button>
            </div>
            <div className='movie-title'>{title}</div>
            <div className='movie-genre'>{genre}</div>
            <div className={`movie-rating ${getRatingColor(rating)}`}>{rating}⭐</div>
        </div>
    );
}

export default MovieCard;