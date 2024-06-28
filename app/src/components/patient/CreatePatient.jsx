
import { Grid, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import NavBar from "../navbar/NavBar";

export const CreatePatient = () => {
    return (
        <Grid container columns={12}>
            <Grid item md={12}>
                <NavBar />
            </Grid>
            <Grid item md={12}>
                <Grid container columns={12} sx={{p: 3}}> 
                    
                </Grid>
            </Grid>
        </Grid>
    )
}