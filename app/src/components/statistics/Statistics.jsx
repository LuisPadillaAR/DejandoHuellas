import { Grid } from "@mui/material";
import NavBar from "../navbar/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Statistics() {
  const [datos, setDatos] = useState([]);
  const [vc, setVc] = useState(0);
  const [desp, setDesp] = useState(0);
  const [cg, setCg] = useState(0);
  const [cig, setCig] = useState(0);
  const [td, setTd] = useState(0);
  const [la, setLa] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3030/patients/')
      .then((dat) => {
        setDatos(dat.data);
        console.log(datos);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    // Esta función calcula el número de vacunaciones
    const calcularVacunaciones = () => {
      let countVacunaciones = 0;
      datos.forEach(e => {
        e.attentions.forEach(att => {
          if (att.operation === "vacunaciones") {
            countVacunaciones++;
          }
        });
      });
      setVc(countVacunaciones);
    };
    const calcularDes = () => {
      let countDes = 0;
      datos.forEach(e => {
        e.attentions.forEach(att => {
          if (att.operation === "desparasitación") {
            countDes++;
          }
        });
      });
      setDesp(countDes);
    };
    const calcularCg = () => {
      let count = 0;
      datos.forEach(e => {
        e.attentions.forEach(att => {
          if (att.operation === "chequeos generales") {
            count++;
          }
        });
      });
      setCg(count);
    };
    const calcularCig = () => {
      let count = 0;
      datos.forEach(e => {
        e.attentions.forEach(att => {
          if (att.operation === "chequeos generales") {
            count++;
          }
        });
      });
      setCig(count);
    };
    const calcularTd = () => {
      let count = 0;
      datos.forEach(e => {
        e.attentions.forEach(att => {
          if (att.operation === "chequeos generales") {
            count++;
          }
        });
      });
      setTd(count);
    };
    const calcularLa = () => {
      let count = 0;
      datos.forEach(e => {
        e.attentions.forEach(att => {
          if (att.operation === "chequeos generales") {
            count++;
          }
        });
      });
      setLa(count);
    };

    calcularLa();
    calcularTd();
    calcularCig();
    calcularCg();
    calcularDes();
    calcularVacunaciones();
  }, [datos]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12}>
        <p>Estadísticas</p>
        <div>Vacunaciones: {vc}</div>
        <div>desparasitación: {desp}</div>
        <div>chequeos generales: {cg}</div>
        <div>cirugias: {cig}</div>
        <div>tratamiento dental: {td}</div>
        <div>laboratorio y analisis: {la}</div>
      </Grid>
    </Grid>
  );
}