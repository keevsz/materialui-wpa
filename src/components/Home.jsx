import React from "react";
import Typography from "@mui/material/Typography";
import { Grid, List, ListItem, makeStyles } from "@material-ui/core";
import { Paper } from "@mui/material";
import logo from './logo.png';

const useStyles = makeStyles({
  root: {
    minWidth: "100%",
    minHeight: "75vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <Paper className="animate__animated animate__fadeIn">
      <Grid
        className={classes.root}
        spacing={0}
        alignItems="center"
        justify="center"
      >
        <List>
          <Grid
            container
            alignItems="flex-start"
            justify="center"
            direction="row"
          >
            <Typography
              fontFamily="Times"
              variant="h3"
              color="initial"
              
            >
              Bienvenido
            </Typography>
          </Grid>

          <Grid
            container
            alignItems="flex-start"
            justify="center"
            direction="row"
          >
            <div>
              <ListItem>
                <img
                  src={logo}
                  alt="Logo"
                  width="100px"
                />
              </ListItem>
            </div>
          </Grid>
          <Grid
            container
            alignItems="flex-start"
            justify="center"
            direction="row"
          >
            <div>
              <ListItem>
                <Typography
                  variant="subtitle2"
                  color="initial"
                  fontSize={20}
                >
                  Material UI
                </Typography>
              </ListItem>
            </div>
          </Grid>
        </List>
      </Grid>
    </Paper>
  );
};

export default Home;
