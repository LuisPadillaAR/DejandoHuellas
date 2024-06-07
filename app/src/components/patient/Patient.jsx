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
                        <TableCell>Nombre</TableCell>
                        <TableCell>Tipo</TableCell>
                        <TableCell>Tamaño</TableCell>
                        <TableCell>peso ()</TableCell>
                        <TableCell>dueño</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        pets.map(e => {
                            return (
                                <TableRow>
                                    <TableCell>{e.name}</TableCell>
                                    <TableCell>{e.type}</TableCell>
                                    <TableCell>{e.size}</TableCell>
                                    <TableCell>{e.weight}</TableCell>
                                    <TableCell>{e.owner}</TableCell>
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
                    <Grid item md={10} height={400} sx={{overflow: "scroll"}}>
                        <DataTable />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
