import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import AppsIcon from "@mui/icons-material/Apps";
import SegmentIcon from "@mui/icons-material/Segment";
import GestureIcon from "@mui/icons-material/Gesture";
const Listas = (props) => {
  return (
    <div>
      <List component="nav">
        <ListItem
          button
          component={RouterLink}
          to="/botones"
          onClick={() => props.accionAbrir()}
        >
          <ListItemIcon>
            <RadioButtonCheckedIcon></RadioButtonCheckedIcon>
          </ListItemIcon>
          <ListItemText>Botones</ListItemText>
        </ListItem>

        <ListItem
          button
          component={RouterLink}
          to="/iconos"
          onClick={() => props.accionAbrir()}
        >
          <ListItemIcon>
            <AppsIcon></AppsIcon>
          </ListItemIcon>
          <ListItemText>Iconos</ListItemText>
        </ListItem>

        <ListItem
          button
          component={RouterLink}
          to="/tipografia"
          onClick={() => props.accionAbrir()}
        >
          <ListItemIcon>
            <SegmentIcon></SegmentIcon>
          </ListItemIcon>
          <ListItemText>Tipografia</ListItemText>
        </ListItem>

        <ListItem
          button
          component={RouterLink}
          to="/personalizados"
          onClick={() => props.accionAbrir()}
        >
          <ListItemIcon>
            <GestureIcon></GestureIcon>
          </ListItemIcon>
          <ListItemText>Personalizados</ListItemText>
        </ListItem>

        <Divider></Divider>
      </List>
    </div>
  );
};

export default Listas;
