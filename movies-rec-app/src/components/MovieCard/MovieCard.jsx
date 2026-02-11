import './MovieCard.css'
import watchLaterIcon from '../../assets/watchlater.png'


function MovieCard({ title, image, genre, rating, onWatchLater }) {
    const path = '../../../movies_data/images/';
    

    const getRatingColor = (score) => {
        const scoreParsed = parseFloat(score);
        if(scoreParsed >= 9) return 'high-rating';
        if(scoreParsed >= 8) return 'medium-rating';
        return 'low-rating';
    }

    return (
        <div className='movie-card'>
            <div className="image-container">
                <img src={`${path}/${image}`} alt={title} className='movie-image'/>
                {/* watch later button overlaying the movie image */}
                <button className="watch-later-button" title="add to watch later" onClick={onWatchLater}>
                    <img src={watchLaterIcon} alt="watch Later" />
                </button>
            </div>
            <div className='movie-title'>{title}</div>
            <div className='movie-genre'>{genre}</div>
            <div className={`movie-rating ${getRatingColor(rating)}`}>{rating}⭐</div>
        </div>
    );
}

export default MovieCard;