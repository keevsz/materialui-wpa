import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles, IconButton, Button, Hidden } from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";
import logo from "./logo.png";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1, //Ocupar todo el espacio disponible
  },
  mr: {
    marginLeft: 30,
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  return (
    <AppBar color="inherit">
      <Toolbar>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            aria-label="menu"
            className={classes.menuButton}
            onClick={() => props.accionAbrir()}
          >
            <MenuIcon></MenuIcon>
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <div className={classes.title}>
            <Button component={RouterLink} to="/">
              Inicio
            </Button>
          </div>
        </Hidden>
        <Hidden mdDown className={classes.title}>
          <Button component={RouterLink} to="/">
            <Typography variant="h6" color="inherit" marginTop={1}>
              <img src={logo} alt="Logo" width="40px" />
            </Typography>
          </Button>
          <Button
            variant="text"
            size="large"
            color="inherit"
            className={classes.mr}
            component={RouterLink}
            to="/botones"
          >
            Botones
          </Button>
          <Button
            variant="text"
            size="large"
            color="inherit"
            component={RouterLink}
            to="/iconos"
          >
            Iconos
          </Button>
          <Button
            variant="text"
            size="large"
            color="inherit"
            component={RouterLink}
            to="/tipografia"
          >
            Tipografía
          </Button>
          <Button
            variant="text"
            size="large"
            color="inherit"
            component={RouterLink}
            to="/personalizados"
          >
            Personalizados
          </Button>
          <div className={classes.title}>{/* Para rellenar espacio */}</div>
        </Hidden>
        <Button variant="text" size="large" color="inherit">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
