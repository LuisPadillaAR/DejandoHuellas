
import { Grid, TextField, Typography, Link, InputLabel, Select, MenuItem } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import NavBar from "../navbar/NavBar";

export const CreatePatient = () => {
    return (
        <Grid container columns={12}>
            <Grid item md={12}>
                <NavBar />
            </Grid>
            <Grid item md={12}>
                <Grid container columns={12} sx={{p: 3}}> 
                    <Grid item md={12}>
                        <Typography variant="h4">Nuevo Paciente</Typography>
                    </Grid>
                    <Grid item padding={'10px'}>
                        <Grid container columns={12} flexDirection={'row'} gap={2}>
                            <Grid item md={4}>
                                <TextField variant="outlined" label='Nombre'/>
                            </Grid>
                            <Grid item md={4}>
                                <TextField variant="outlined" label="Tipo"/>
                            </Grid>
                            <Grid item md={4}>
                                <TextField variant="outlined" label='Color'/>
                            </Grid>
                            <Grid item md={4}>
                                <TextField variant="outlined" label='Fecha de rescate'/>
                            </Grid>
                            <Grid item md={4}>
                                <TextField variant="outlined" label='Tamano'/>
                            </Grid>
                            <Grid item md={4}>
                                <TextField variant="outlined" label='peso'/>
                            </Grid>
                            <Grid item md={4}>
                                <TextField variant="outlined" label='edad(aprox.)'/>
                            </Grid>
                            <Grid item md={12}>
                                <TextField variant="outlined" label='Descripción' multiline rows={10}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container gap={1}>
                            <Grid item>
                                <Link variant="button" component={RouterLink} >Guardar</Link>
                            </Grid>
                            <Grid item>
                                <Link variant="button" component={RouterLink} >Cancelar</Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}