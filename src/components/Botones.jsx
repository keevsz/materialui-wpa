import React from "react";
import { Button } from "@material-ui/core";
import Fade from "@mui/material/Fade";


const Botones = () => {
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => setChecked(true), []);
  return (
    <Fade  in={checked} style={{ transitionDelay: "100ms" }}>
      <div>
        <Button color="secondary">color</Button>

        <Button color="primary" variant="contained">
          Contenido
        </Button>
        <p>Sin sombra</p>

        <Button color="primary" variant="contained" disableElevation>
          Sin sombra
        </Button>
        <p>Href</p>

        <Button color="primary" variant="contained" href="https://google.com">
          Href
        </Button>

        <p>fullWidth</p>
        <Button color="primary" variant="contained" fullWidth>
          fullWidth
        </Button>

        <p>Tamaños</p>
        <Button color="primary" variant="contained" size="small">
          size= "small"
        </Button>
        <Button color="primary" variant="contained" size="medium">
          size= "medium"
        </Button>
        <Button color="primary" variant="contained" size="large">
          size= "large"
        </Button>
      </div>
    </Fade>
  );
};

export default Botones;
