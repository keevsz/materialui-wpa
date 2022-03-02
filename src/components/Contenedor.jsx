import React, { useState } from "react";
import { Hidden, makeStyles } from "@material-ui/core";
import Navbar from "./Navbar";
import Cajon from "./Cajon";
import { Outlet } from "react-router-dom";

const estilos = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: "white",
    padding: theme.spacing(3),
  },
}));

const Contenedor = () => {
  const classes = estilos();
  const [abrir, setAbrir] = useState(false);
  const accionAbrir = () => {
    setAbrir(!abrir);
  };
  
  return (
    <div className={classes.root} >
      <Navbar accionAbrir={accionAbrir}></Navbar>
      

      <Hidden lgUp>
        <Cajon accionAbrir={accionAbrir} variant="temporary" open={abrir} onClose={accionAbrir}></Cajon>
      </Hidden>

      <div className={classes.content} >
        <div className={classes.toolbar}></div>
        {/* Aca van las paginas */}
        
       <Outlet />
      </div>
    </div>
  );
};

export default Contenedor;
