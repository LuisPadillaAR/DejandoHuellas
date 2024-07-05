
import { Grid, TextField, Typography, Link} from "@mui/material";
import { Link as RouterLink, useParams } from 'react-router-dom';
import NavBar from "../navbar/NavBar";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

export const ViewPatient = () => {

    const [datos, setDatos] = useState([]);
    const { id } = useParams();
    const [name, setName] = useState("");
    const [species, setSpecies] = useState("")
    const [breed,  setBreed] = useState("")
    const [color, setColor] = useState("")
    const [rescue_date, setRescue_date] = useState("")
    const [size, setSize] = useState("")
    const [weight, setWeight] = useState("")
    const [age, setAge] = useState("")

    useEffect(() => {
        (async () => {
            await axios.get(`http://localhost:3030/patients/${id}`)
            .then((dat) => {
                setDatos(dat.data)
               
                
        })
            .catch((err) => console.log(err))
        })()
    },[id])

    useEffect(() => {
        setName(datos.name)
        setSpecies(datos.species)
        setBreed(datos.breed)
        setColor(datos.color)
        setRescue_date(datos.rescue_date)
        setSize(datos.size)
        setWeight(datos.weight)
        setAge(datos.age)
    },[datos.name, datos.species, datos.breed, datos.color, datos.rescue_date, datos.size, datos.weight, datos.age])

    const updatePatient = async () => {
        await axios.put(`http://localhost:3030/patients/${id}`, 
            {
                name: name,
                species: species,
                breed:breed,
                color: color,
                rescue_date: rescue_date,
                size: size,
                weight: weight,
                age: age
             })
        .then(() =>   console.log('correcto'))
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
                                <Typography variant="h4">Paciente {datos._id}</Typography>
                            </Grid>
                            <Grid item padding={'10px'}>
                                <Grid container columns={12} flexDirection={'row'} gap={2}>
                                    <Grid item md={4}>
                                        <TextField variant="outlined" label='Nombre'  value={name} onChange={(e) => setName(e.target.value)} focused />
                                    </Grid>
                                    <Grid item md={4}>
                                        <TextField variant="outlined" label="Especie" value={species} onChange={(e) => setSpecies(e.target.value)} focused />
                                    </Grid>
                                    <Grid item md={4}>
                                        <TextField variant="outlined" label='Raza' value={breed} onChange={(e) => setBreed(e.target.value)} focused />
                                    </Grid>
                                    <Grid item md={4}>
                                        <TextField variant="outlined"  label='Color' value={color}onChange={(e) => setColor(e.target.value)} focused />
                                    </Grid>
                                    <Grid item md={4}>
                                        <TextField variant="outlined" label='Fecha de rescate' value={rescue_date} onChange={(e) => setRescue_date(e.target.value)} focused />
                                    </Grid>
                                    <Grid item md={4}>
                                        <TextField variant="outlined" label='Tamaño' value={size} onChange={(e) => setSize(e.target.value)} focused/>
                                    </Grid>
                                    <Grid item md={4}>
                                        <TextField variant="outlined" label='peso' value={weight} onChange={(e) => setWeight(e.target.value)} focused />
                                    </Grid>
                                    <Grid item md={12}>
                                        <TextField variant="outlined" label='Edad' value={age} onChange={(e) => setAge(e.target.value)} focused />
                                    </Grid>
                                </Grid>
                            </Grid>
                    <Grid item>
                        <Grid container gap={1}>
                            <Grid item>
                                <Link variant="button" component={RouterLink} onClick={updatePatient} to={'/patients'} >Guardar</Link>
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