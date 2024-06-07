
import { Button, Grid, Typography } from '@mui/material';
import logo from '../../assets/huellas-de-garras.png';
import './navbarStyle.css';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';

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
        /*<div className='navbar__title'>Dejando Huellas
            
        </div>*/
        <Typography variant='h1' fontSize={"3em"} width="600px" fontFamily={"Poetsen One"}>Dejando Huellas
            <img className='navbar__logo' src={logo} alt="logo"/>
        </Typography>
    );
}

const NavLinks = () => {
    return (
        <Grid container spacing={2}>
            <Grid item>
                <Link component={RouterLink} to={'/'} variant='body1'>Inicio</Link>
            </Grid>
            <Grid item>
                <Link component={RouterLink} to={'/patients'} variant='body1'>Animales</Link>
            </Grid>
            <Grid item >
                <Link component={RouterLink} to={'/login'} variant='body1'>Sobre nosotros</Link>
            </Grid>
        </Grid>
    );
}

export default NavBar;
