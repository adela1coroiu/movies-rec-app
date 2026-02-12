import './NavBar.css';

function NavBar({setScreen, currentScreen}) {
    return (
        <div className="nav-buttons">
          <button className={`nav-button ${currentScreen === 'home' ? 'active' : ''}`} onClick={() => setScreen('home')}>Home</button>
          <button className={`nav-button ${currentScreen === 'watchlist' ? 'active' : ''}`} onClick={() => setScreen('watchlist')}>Watchlist</button>
        </div>
    );
}

export default NavBar;