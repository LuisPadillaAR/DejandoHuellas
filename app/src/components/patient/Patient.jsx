import { Table, Grid, TableHead, TableRow, TableCell, TableBody , Link} from "@mui/material";
import { Link as Routerlink } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import pets from "../../assets/pets.json";

export default function Patient() {


    console.log(pets)


    const DataTable = () => {
        return (
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell align="center" sx={{backgroundColor:"#ffdbff"}}>Nombre</TableCell>
                        <TableCell align="center" sx={{backgroundColor:"#ffdbff"}}>Tipo</TableCell>
                        <TableCell align="center" sx={{backgroundColor:"#ffdbff"}}>Tamaño (cm)</TableCell>
                        <TableCell align="center" sx={{backgroundColor:"#ffdbff"}}>peso (kgmod)</TableCell>
                        <TableCell align="center" sx={{backgroundColor:"#ffdbff"}}>dueño</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        pets.map(e => {
                            return (
                                <TableRow>
                                    <TableCell align="center">{e.name}</TableCell>
                                    <TableCell align="center">{e.type}</TableCell>
                                    <TableCell align="center">{e.size}</TableCell>
                                    <TableCell align="center">{e.weight}</TableCell>
                                    <TableCell align="center">{e.owner}</TableCell>
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
