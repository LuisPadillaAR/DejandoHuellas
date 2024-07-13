
import { Grid, TextField, Typography, Link} from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import NavBar from "../navbar/NavBar";
import axios from 'axios'
import { useEffect, useState } from "react";

export const CreatePatient = () => {


    const [name, setName] = useState("");
    const [species, setSpecies] = useState("")
    const [breed,  setBreed] = useState("")
    const [color, setColor] = useState("")
    const [rescue_date, setRescue_date] = useState("")
    const [size, setSize] = useState("")
    const [weight, setWeight] = useState("")
    const [age, setAge] = useState("")


    const createPatient = async () => {
        await axios.post(`http://localhost:3030/patients/create`, 
            {
                name: name,
                species: species,
                breed:breed,
                color: color,
                rescue_date: rescue_date,
                size: size,
                weight: weight,
                age: age,
                attentions: [
                    {
                        date: "12/12/12",
                        operation: "Vacunaciones",
                        description: "vacuna General",
                        volunteer: "general",
                        observations: "esto es una prueba",
                        place: "panama"
                    }
                ]
             })
        .then(() =>  alert('creado'))
        .catch(() => console.log('error'))
    }

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
                                <TextField variant="outlined" label='Nombre' onChange={(e) => setName(e.target.value)} />
                            </Grid>
                            <Grid item md={4}>
                                <TextField variant="outlined" label="Especie" onChange={(e) => setSpecies(e.target.value)} />
                            </Grid>
                            <Grid item md={4}>
                                <TextField variant="outlined" label='Raza' onChange={(e) => setBreed(e.target.value)} />
                            </Grid>
                            <Grid item md={4}>
                                <TextField variant="outlined"  label='Color'onChange={(e) => setColor(e.target.value)} />
                            </Grid>
                            <Grid item md={4}>
                                <TextField variant="outlined" label='Fecha de rescate'onChange={(e) => setRescue_date(e.target.value)} />
                            </Grid>
                            <Grid item md={4}>
                                <TextField variant="outlined" label='Tamaño' onChange={(e) => setSize(e.target.value)} />
                            </Grid>
                            <Grid item md={4}>
                                <TextField variant="outlined" label='peso' onChange={(e) => setWeight(e.target.value)} />
                            </Grid>
                            <Grid item md={12}>
                                <TextField variant="outlined" label='Edad' onChange={(e) => setAge(e.target.value)} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container gap={1}>
                            <Grid item>
                                <Link variant="button" onClick={createPatient} to={'/patients'} component={RouterLink} >Guardar</Link>
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