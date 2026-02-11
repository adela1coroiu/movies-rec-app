import './Header.css'
import logo from '../../assets/logo.png'


function Header() {
    return (
        <div className='header-container'>
            <img src={logo} alt='logo of the site' className='logo'></img>
            <h1 className='title'>Watch Now</h1>
        </div>
    );
}

export default Header;