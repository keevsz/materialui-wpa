import React from "react";
import {
  makeStyles,
  Drawer,
  Divider,
  Typography,
  ListItem,
  ListItemText,
  List,
} from "@material-ui/core";
import theme from "./temaConfig";
import Listas from "./Listas";
import { Link as RouterLink } from "react-router-dom";
import logo from "./logo.png";


const estilos = makeStyles({
  drawer: {
    widht: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  toolbar: theme.mixins.toolbar,
});

const Cajon = (props) => {
  const classes = estilos();
  return (
    <Drawer
      className={classes.drawer}
      variant={props.variant}
      classes={{
        paper: classes.drawerPaper,
      }}
      open={props.open}
      anchor="left"
      onClose={props.onClose ? props.onClose : null}
    >
      <div>
        <List
          className={classes.toolbar}
          component={RouterLink}
          to="/"
          onClick={() => props.accionAbrir()}
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItem>
            <img src={logo} alt="Logo" width="50px"></img>
            <ListItemText>
              <Typography
                style={{ marginLeft: "10px" }}
                variant="h5"
                color="white"
              >
                Material UI
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </div>

      <Divider></Divider>
      <Listas accionAbrir={props.accionAbrir}></Listas>
    </Drawer>
  );
};

export default Cajon;
