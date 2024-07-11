import { Grid } from "@mui/material";
import NavBar from "../navbar/NavBar";
import axios from "axios"
import { useEffect, useState } from "react";

export default function Statistics() {


  const [datos, setDatos] = useState([]);

  useEffect(() => {
      (() => {
        axios.get('http://localhost:3030/patients/')
        .then((dat) => {
          setDatos(dat.data)
        })
      })()
  },[])



  return (
    <Grid container columns={12}>
      <Grid item md={12}>
        <NavBar />
      </Grid>
      <Grid item md={12}>
            <p>Estadisticas</p>
            <p>{datos?.map(e => {
              const att = e.attentions
              const attda = att.find(e => e.operation === "vacunaciones")
              return (
                <p>{attda.operation}</p>
                
              )
              
            })}</p>
      </Grid>
    </Grid>
  );
}
