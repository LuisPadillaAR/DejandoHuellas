import { Table, Grid, TableHead, TableRow, TableCell, TableBody , Link} from "@mui/material";
import { Link as Routerlink } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import axios from "axios"
import { useEffect, useState } from "react";

export default function Patient() {


    const [datos, setDatos] = useState([])
    const [change, setChange] = useState(true)

    useEffect(() => {
        (async () => {
            await axios.get("http://localhost:3030/patients").then((dat) => {
                setDatos(dat.data)
                console.log(dat.data)
            }).catch((err) => console.log(err))
        })()
    },[change])

    const deletePatient = async (e) => {
        console.log(e.target.id);
        await axios.delete(`http://localhost:3030/patients/${e.target.id}`)
        .then(() => {
            alert('eliminado')
            setChange(!change)
    })
        .catch((err) => console.log(err)) 
    }
    


    const DataTable = () => {
        return (
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell align="center" sx={{backgroundColor:"#ffdbff"}}>Id</TableCell>
                        <TableCell align="center" sx={{backgroundColor:"#ffdbff"}}>Nombre</TableCell>
                        <TableCell align="center" sx={{backgroundColor:"#ffdbff"}}>Especie</TableCell>
                        <TableCell align="center" sx={{backgroundColor:"#ffdbff"}}>Raza</TableCell>
                        <TableCell align="center" sx={{backgroundColor:"#ffdbff"}}>Fecha de rescate</TableCell>
                        <TableCell align="center" sx={{backgroundColor:"#ffdbff"}}>Opciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        datos.map(e => {
                            return (
                                <TableRow>
                                    <TableCell align="center">{e._id}</TableCell>
                                    <TableCell align="center">{e.name}</TableCell>
                                    <TableCell align="center">{e.species}</TableCell>
                                    <TableCell align="center">{e.breed}</TableCell>
                                    <TableCell align="center">{e.rescue_date}</TableCell>
                                    <TableCell align="center">
                                        <Grid container columnGap={1}>
                                            <Grid item>
                                                <Link variant="button" to={`/patients/${e._id}`} component={Routerlink}>Abrir</Link>
                                            </Grid>
                                            <Grid item>
                                                <Link variant="button" sx={{color: "red"}} id={e._id}  onClick={deletePatient} component={Routerlink}>Eliminar</Link>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                </TableRow> 
                            );
                        })
                    }
                    
                </TableBody>
            </Table>
        );
    }



    return ( 
        <Grid container columns={12}>
            <Grid item md={12}>
                <NavBar />
            </Grid>
            <Grid item md={12}>
                <Grid container columns={12} sx={{p: 3}}> 
                    <Grid item md={2} textAlign={"center"}>
                        <Link variant="button" component={Routerlink} to={'/patients/create'}>Crear</Link>
                    </Grid>
                    <Grid item md={10}>
                        <DataTable />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
