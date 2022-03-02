import React from "react";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";

const Tipografia = () => {
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => setChecked(true), []);
  return (
    <Fade in={checked} style={{ transitionDelay: "100ms" }}>
      <div>
        <Typography variant="h1" color="primary" align="center" gutterBottom>
          Hola
        </Typography>

        <Typography variant="body1" color="secondary" align="right" paragraph>
          Hola
        </Typography>
        <Typography align="right" variant="body1" color="primary">
          Hola
        </Typography>
      </div>
    </Fade>
  );
};

export default Tipografia;
