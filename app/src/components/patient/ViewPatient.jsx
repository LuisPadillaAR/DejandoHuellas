
import { Grid, TextField, Typography, Link} from "@mui/material";
import { Link as RouterLink, useParams } from 'react-router-dom';
import NavBar from "../navbar/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";

export const ViewPatient = () => {

    const [datos, setDatos] = useState([]);
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        (async () => {
            await axios.get(`http://localhost:3030/patients/${id}`)
            .then((dat) => {
                setDatos(dat.data)
                console.log(dat.data);
        })
            .catch((err) => console.log(err))
        })()
    },[id])

    return (
        <Grid container columns={12}>
            <Grid item md={12}>
                <NavBar />
            </Grid>
            <Grid item md={12}>
                <Grid container columns={12} sx={{p: 3}}> 
                            <Grid item md={12}>
                                <Typography variant="h4">Paciente {datos._id}</Typography>
                            </Grid>
                            <Grid item padding={'10px'}>
                                <Grid container columns={12} flexDirection={'row'} gap={2}>
                                    <Grid item md={4}>
                                        <TextField variant="outlined" label='Nombre' value={datos.name}   focused/>
                                    </Grid>
                                    <Grid item md={4}>
                                        <TextField variant="outlined" label="Especie" value={datos.species} focused/>
                                    </Grid>
                                    <Grid item md={4}>
                                        <TextField variant="outlined" label='Raza' value={datos.breed} focused/>
                                    </Grid>
                                    <Grid item md={4}>
                                        <TextField variant="outlined"  label='Color' value={datos.color} focused/>
                                    </Grid>
                                    <Grid item md={4}>
                                        <TextField variant="outlined" label='Fecha de rescate' value={datos.rescue_date} focused/>
                                    </Grid>
                                    <Grid item md={4}>
                                        <TextField variant="outlined" label='Tamaño' value={datos.size} focused/>
                                    </Grid>
                                    <Grid item md={4}>
                                        <TextField variant="outlined" label='peso' value={datos.weight} focused/>
                                    </Grid>
                                    <Grid item md={12}>
                                        <TextField variant="outlined" label='Edad' value={datos.age} focused/>
                                    </Grid>
                                </Grid>
                            </Grid>
                    <Grid item>
                        <Grid container gap={1}>
                            <Grid item>
                                <Link variant="button" component={RouterLink} >Guardar</Link>
                            </Grid>
                            <Grid item>
                                <Link variant="button" component={RouterLink} to={"/patients"} >Cancelar</Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}