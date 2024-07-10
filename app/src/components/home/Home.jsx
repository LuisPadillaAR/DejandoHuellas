import NavBar from '../navbar/NavBar';
import './homeStyle.css';
import { Container, Grid, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';



export const ExplorerNav = () => {
    return (
        <Container className='explorer' maxWidth="auto" sx={{p: 2, width: "fit-content", m: 0}}>
            <Grid container columns={2}>
                <Grid item md={2}>
                    <Link component={RouterLink} variant='button' to={'/patients'}>Pacientes</Link>
                </Grid>
                <Grid item md={2}>
                    <Link component={RouterLink} variant='button' to={'/statistics'}>Estadisticas</Link>
                </Grid>
                <Grid item md={2}>
                    <Link component={RouterLink} variant='button' to={'/login'}>Cerrar sesión</Link>
                </Grid>
            </Grid>
        </Container>
        )    
    }

const ItemExplorer = ({ name, fn }) => {
    return (
            <input className='explorer__item' type="submit" value={name} onClick={fn}/>
    );
}

export const Home = () => {
    return (
        <div className="home__container">
            <NavBar />
            <ExplorerNav />
        </div>
    );
}