import { Table, Grid, TableHead, TableRow, TableCell, TableBody , Link} from "@mui/material";
import { Link as Routerlink, useParams } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import axios from "axios"
import { useEffect, useState } from "react";

export default function ViewAttentions() {


    const [datos, setDatos] = useState(null)
    const [change, setChange] = useState(true)
    const { id } = useParams() 

    useEffect(() => {
        (async () => {
            await axios.get(`http://localhost:3030/attentions/${id}`).then((dat) => {
                setDatos(dat.data)
            }).catch((err) => console.log(err))
        })()
    },[id])

/*     const deletePatient = async (e) => {
        console.log(e.target.id);
        await axios.delete(`http://localhost:3030/patients/${e.target.id}`)
        .then(() => {
            alert('eliminado')
            setChange(!change)
    })
        .catch((err) => console.log(err)) 
    } */
    


    const DataTable = () => {
        return (
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell align="center" sx={{backgroundColor:"#ffdbff"}}>Fecha</TableCell>
                        <TableCell align="center" sx={{backgroundColor:"#ffdbff"}}>Volunteer</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        datos.attentions.map(e => e[0])
                        
                        
                                                        /* <TableRow>
                                            <TableCell align="center">{e.date}</TableCell>
                                            <TableCell align="center">{e.volunteer}</TableCell>
                                            <TableCell align="center">
                                                <Grid container columnGap={1}>
                                                    <Grid item>
                                                        <Link variant="button" to={`/patients/${e._id}`} component={Routerlink}>Abrir</Link>
                                                    </Grid> 
                                                </Grid>
                                            </TableCell>
                                        </TableRow>  */
                        
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
                    <Grid item md={10}>
                        <DataTable />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
