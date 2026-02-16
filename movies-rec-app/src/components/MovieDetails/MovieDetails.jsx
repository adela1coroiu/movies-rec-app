import { useNavigate, useParams } from 'react-router-dom';
import './MovieDetails.css';
import moviesData from '../../../movies_data/movies.json';

function MovieDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const path = '../../../movies_data/images';
    
    const movie = moviesData.find(m => m.id.toString() === id);

    if(!movie) {
        return <h2 className='error-message'>Movie not found!</h2>
    }

    return (
        <div className='movie-details'>
            <button className='back-button' onClick={() => navigate(-1)}>Back</button>
            <div className='details-content'>
                <img src={`${path}/${movie.image}`} alt={movie.title} />
                <h1>{movie.title}</h1>
                <p className='genre'>{movie.genre}</p>
                <p className='rating'>{movie.rating}⭐</p>
            </div>
        </div>
    );
}

export default MovieDetails;