import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Icon, Button, IconButton } from "@material-ui/core";
import Fade from "@mui/material/Fade";


const Iconos = () => {
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => setChecked(true), []);
  return (
    <Fade in={checked} style={{ transitionDelay: "100ms" }}>
      <div>
        <p>Forma 1</p>
        <DeleteIcon color="primary" sx={{ fontSize: 20 }} />

        <Button
          variant="contained"
          size="small"
          color="secondary"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>

        <p>Forma 2</p>
        <Icon color="secondary">star</Icon>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Icon>star</Icon>}
        >
          Star
        </Button>
        <p>IconButton</p>
        <IconButton aria-label="delete">
          <DeleteIcon color="primary" />
        </IconButton>
      </div>
    </Fade>
  );
};

export default Iconos;
