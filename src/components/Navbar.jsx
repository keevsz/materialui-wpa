import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles, IconButton, Button, Hidden } from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";
import logo from "./logo.png";
import { useAuth } from "../context/authContext";
import {
  Avatar,
  Box,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";

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
  const { user, logout } = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  if (!user) return null;

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
        <Button>
          <Box
            sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
          >
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    style={{ width: 32, height: 32, borderRadius: "100%" }}
                    alt=""
                  />
                ) : (
                  <Avatar style={{ width: 32, height: 32}}/>
                )}

                
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem>
              <Avatar /> {user.displayName || user.email}
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Salir
            </MenuItem>
          </Menu>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
