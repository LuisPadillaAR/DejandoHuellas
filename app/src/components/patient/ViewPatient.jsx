import {
  Grid,
  TextField,
  Typography,
  Link,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { Link as RouterLink, useParams } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

export const ViewPatient = () => {
  const [datos, setDatos] = useState([]);
  const { id } = useParams();
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [breed, setBreed] = useState("");
  const [color, setColor] = useState("");
  const [rescue_date, setRescue_date] = useState("");
  const [size, setSize] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [att, setAtt] = useState([]);

  useEffect(() => {
    (async () => {
      await axios
        .get(`http://localhost:3030/patients/${id}`)
        .then((dat) => {
          setDatos(dat.data);
        })
        .catch((err) => console.log(err));
    })();
  }, [id]);

  useEffect(() => {
    setName(datos.name);
    setSpecies(datos.species);
    setBreed(datos.breed);
    setColor(datos.color);
    setRescue_date(datos.rescue_date);
    setSize(datos.size);
    setWeight(datos.weight);
    setAge(datos.age);
    setAtt(datos.attentions);
  }, [
    datos.name,
    datos.species,
    datos.breed,
    datos.color,
    datos.rescue_date,
    datos.size,
    datos.weight,
    datos.age,
    datos.att,
  ]);

  const updatePatient = async () => {
    await axios
      .put(`http://localhost:3030/patients/${id}`, {
        name: name,
        species: species,
        breed: breed,
        color: color,
        rescue_date: rescue_date,
        size: size,
        weight: weight,
        age: age,
      })
      .then(() => console.log("correcto"))
      .catch(() => console.log("error"));
  };

  const InfPatient = () => {
    return (
      <Grid container columns={10} gap={1.2}>
        <Grid item md={4}>
          <TextField
            variant="outlined"
            label="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            focused
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            variant="outlined"
            label="Especie"
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
            focused
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            variant="outlined"
            label="Raza"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            focused
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            variant="outlined"
            label="Color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            focused
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            variant="outlined"
            label="Fecha de rescate"
            value={rescue_date}
            onChange={(e) => setRescue_date(e.target.value)}
            focused
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            variant="outlined"
            label="Tamaño"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            focused
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            variant="outlined"
            label="peso"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            focused
          />
        </Grid>
        <Grid item md={12}>
          <TextField
            variant="outlined"
            label="Edad"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            focused
          />
        </Grid>
      </Grid>
    );
  };

  const Attentions = () => {
    return (
      <Grid container columns={1}>
        <Grid item md={1}>
          <Typography variant="overline">Atenciones</Typography>
        </Grid>
        <Grid item md={1}>
          <Grid container columns={1}>
            {att?.map((e) => {
              return (
                <Accordion sx={{width: "100%"}}>
                  <AccordionSummary
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    {e.date}
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body1">Operación: {e.operation}</Typography>
                    <Typography variant="body1">Descripción: {e.description}</Typography>
                    <Typography variant="body1">Voluntario: {e.volunteer}</Typography>
                    <Typography variant="body1">Lugar de la atención: {e.place}</Typography>
                    <Typography variant="body1">Observaciones: {e.observations}</Typography>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    );
  };
  return (
    <Grid container columns={12}>
      <Grid item md={12}>
        <NavBar />
      </Grid>
      <Grid item md={12}>
        <Grid container columns={12} gap={1} sx={{ p: 3 }}>
          <Grid item md={12} sx={{  }}>
            <Typography variant="h4">Paciente {datos._id}</Typography>
          </Grid>
          <Grid item md={12} padding={"10px"} sx={{ }}>
            <Grid container columns={12} gap={1}>
              <Grid item md={12}>
                <InfPatient />
              </Grid>
              <Grid item md={122} sx={{ padding: 1, boxShadow: 12 }}>
                <Attentions />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container gap={1} sx={{  }}>
              <Grid item>
                <Link
                  variant="button"
                  component={RouterLink}
                  onClick={updatePatient}
                  to={"/patients"}
                >
                  Guardar
                </Link>
              </Grid>
              <Grid item>
                <Link variant="button" component={RouterLink} to={"/patients"}>
                  Cancelar
                </Link>
              </Grid>
              <Grid item>
                <Link
                  variant="button"
                  component={RouterLink}
                  to={"/atentions/create"}
                >
                  Crear Atención
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
