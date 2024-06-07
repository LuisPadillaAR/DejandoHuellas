import NavBar from '../navbar/NavBar';
import './homeStyle.css';
import { Button, Container, Grid } from '@mui/material';



export const ExplorerNav = () => {
    return (
        <Container className='explorer' maxWidth="auto" sx={{p: 2, width: "fit-content", m: 0}}>
            <Grid container columns={2}>
                <Grid item md={2}>
                    <Button variant='text'>Gestión</Button>
                </Grid>
                <Grid item md={2}>
                    <Button variant='text'>Cerrar sesión</Button>
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