import { Grid } from "@mui/material";
import NavBar from "../navbar/NavBar";

export default function Statistics() {
  return (
    <Grid container columns={12}>
      <Grid item md={12}>
        <NavBar />
      </Grid>
      <Grid item md={12}>
            <p>Estadisticas</p>
      </Grid>
    </Grid>
  );
}
