
import logo from '../../assets/huellas-de-garras.png';
import './navbarStyle.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='navbar'>
            <Title />
            <NavLinks />
        </div>
    );
}

const Title = () => {
    return (
        <div className='navbar__title'>Dejando Huellas
            <img className='navbar__logo' src={logo} alt="logo"/>
        </div>
    );
}

const NavLinks = () => {
    return (
        <div className='navbar__links'>
            <Link to={'/'}>Inicio</Link>
            <Link href="#">Animales</Link>
            <Link href="#">Sobre Nosotros</Link>
        </div>
    );
}

export default NavBar;
