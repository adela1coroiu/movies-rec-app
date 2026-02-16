import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <div className="nav-buttons">
          <NavLink to="/" className={({isActive}) => `nav-button ${isActive ? 'active' : ''}`}>Home</NavLink>
          <NavLink to="/watchlist" className={({isActive}) => `nav-button ${isActive ? 'active' : ''}`}>Watchlist</NavLink>
        </div>
    );
}

export default NavBar;