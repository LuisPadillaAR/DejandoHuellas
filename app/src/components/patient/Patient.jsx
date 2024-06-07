import { Table, Grid, Button, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
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
                        <Button variant="text" color="secondary">Crear</Button>
                    </Grid>
                    <Grid item md={10}>
                        <DataTable />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
