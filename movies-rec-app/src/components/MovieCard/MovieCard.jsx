import './MovieCard.css'
import { Link } from 'react-router-dom';
import watchLaterIcon from '../../assets/watchlater.png'

function MovieCard({ id, title, image, genre, rating, onButtonClick, isAdded }) {
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
                {/* linking the image to the dynamic detail page */}
                <Link to={`/movies/${id}`}>
                    <img src={`${path}/${image}`} alt={title} className='movie-image'/>
                </Link>

                <button className={`slider-track ${isAdded ? 'active' : ''}`} onClick={onButtonClick}>
                    {/* <div className='slider-handle'></div> */}
                    <img src={watchLaterIcon} alt="watch later slider" className='handle-icon'/>
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