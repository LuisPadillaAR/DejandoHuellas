
import { Grid, TextField, Typography, Link, dialogActionsClasses} from "@mui/material";
import { Link as RouterLink, useParams } from 'react-router-dom';
import NavBar from "../navbar/NavBar";
import axios from 'axios'
import { useEffect, useState } from "react";

export const CreateAttention = () => {


    const [date, setDate] = useState("");
    const [operation, setOperation] = useState("")
    const [description,  setDescription] = useState("")
    const [volunteer, setVolunteer] = useState("")
    const [observations, setObservations] = useState("")
    const [place, setPlace] = useState("")

    const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [breed, setBreed] = useState("");
  const [color, setColor] = useState("");
  const [rescue_date, setRescue_date] = useState("");
  const [size, setSize] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");

    const { id }  = useParams()
    const [datos, setDatos] = useState([])

    useEffect(() => {
        (async () => {
            await axios.get(`http://localhost:3030/patients/${id}`)
            .then((data) => {
                setDatos(data.data)
                
            })
            .catch((err) => console.log(err))
        })()
        console.log(id);
    }, [id])

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

    useEffect(() => {
        console.log(datos.attentions);
    },[datos])



    const updatePatient = async () => {
        let atten = datos.attentions;
        const midatos = {
            date: date,
            operation: operation,
            description: description,
            volunteer: volunteer,
            observations: observations,
            place: place,
        }
        atten.push(midatos);
        console.log(atten);
         await axios.put(`http://localhost:3030/patients/${id}`, 
            {
                name: name,
                species: species,
                breed:breed,
                color: color,
                rescue_date: rescue_date,
                size: size,
                weight: weight,
                age: age,
                attentions: atten
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
                        <Typography variant="h4">Nueva Atención</Typography>
                    </Grid>
                    <Grid item padding={'10px'}>
                        <Grid container columns={12} flexDirection={'row'} gap={2}>
                            <Grid item md={4}>
                                <TextField variant="outlined" label='Fecha' onChange={(e) => setDate(e.target.value)} />
                            </Grid>
                            <Grid item md={4}>
                                <TextField variant="outlined" label="Operación" onChange={(e) => setOperation(e.target.value)} />
                            </Grid>
                            <Grid item md={4}>
                                <TextField variant="outlined" label='Descripción' onChange={(e) => setDescription(e.target.value)} />
                            </Grid>
                            <Grid item md={4}>
                                <TextField variant="outlined"  label='Voluntario'onChange={(e) => setVolunteer(e.target.value)} />
                            </Grid>
                            <Grid item md={4}>
                                <TextField variant="outlined" label='Observaciones'onChange={(e) => setObservations(e.target.value)} />
                            </Grid>
                            <Grid item md={4}>
                                <TextField variant="outlined" label='Lugar' onChange={(e) => setPlace(e.target.value)} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container gap={1}>
                            <Grid item>
                                <Link variant="button" onClick={updatePatient} to={`/patients/${id}`} component={RouterLink} >Guardar</Link>
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