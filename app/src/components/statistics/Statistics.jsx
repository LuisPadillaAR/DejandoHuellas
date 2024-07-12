import { Grid } from "@mui/material";
import NavBar from "../navbar/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


export default function Statistics() {
  const [datos, setDatos] = useState([]);
  const [vc, setVc] = useState(0);
  const [desp, setDesp] = useState(0);
  const [cg, setCg] = useState(0);
  const [cig, setCig] = useState(0);
  const [td, setTd] = useState(0);
  const [la, setLa] = useState(0);

  const data = [
    { name: 'Vacunaciones', value: vc },
    { name: 'Desparacitaciones', value: desp },
    { name: 'Chequeos Generales', value: cg },
    { name: 'Cirugias', value: cig },
    { name: 'Tratamiento Dental', value: td },
    { name: 'Laboratorio y analisis', value: la },
  ];
  
  const COLORS = ['#FF5733', '#33FF57 ', '#3357FF', '#FF33A8', '#FFD700', '#8A2BE2'];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

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
        <div style={{color: "#FF5733 "}}>Vacunaciones: {vc}</div>
        <div style={{color: "#33FF57 "}}>desparasitación: {desp}</div>
        <div style={{color: "#3357FF  "}}>chequeos generales: {cg}</div>
        <div style={{color: "#FF33A8  "}}>cirugias: {cig}</div>
        <div style={{color: "#FFD700  "}}>tratamiento dental: {td}</div>
        <div style={{color: "#8A2BE2  "}}>laboratorio y analisis: {la}</div>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={true}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </Grid>
    </Grid>
  );
}