import './FiltersBar.css';

function FiltersBar({selectedGenre, onGenreChange, selectedRating, onRatingChange}) {
    return (
        <div className="filters-container">
          <select className="filter-dropdown" name="genre" value={selectedGenre} onChange={(event) => onGenreChange(event.target.value)}>
            <option value="">All Genres</option>
            <option value="drama">Drama</option>
            <option value="fantasy">Fantasy</option>
            <option value="horror">Horror</option>
            <option value="action">Action</option>
          </select>

          <select className="filter-dropdown" name="rating" value={selectedRating} onChange={(event) => onRatingChange(event.target.value)}>
            <option value="">All Ratings</option>
            <option value="9">9+ rating</option>
            <option value="8">8+ rating</option>
            <option value="7">7+ rating</option>
          </select>
        </div>
    );
}

export default FiltersBar;