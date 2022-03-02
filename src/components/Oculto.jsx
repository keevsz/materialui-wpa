import { withWidth, Typography, Hidden, Button } from "@material-ui/core";
import React from "react";

const Oculto = (props) => {
  return (
    <div>
      <Typography variant="h6" color="initial">
        Pantalla: {props.width}
      </Typography>

      {/* ocultar de xs a abajo */}
      <Hidden xsDown>
        <Button variant="contained" size="sm" color="default">
          xs
        </Button>
      </Hidden>

      {/* ocultar de sm a arriba */}
      <Hidden smUp>
        <Button variant="contained" size="sm" color="default">
          sm
        </Button>
      </Hidden>

      {/* ocultar solo en lg */}
      <Hidden only="lg">
      {/* only = {['lg','xs']} solo en lg y xs */}
        <Button variant="contained" size="sm" color="default">
          lg
        </Button>
      </Hidden>
    </div>
  );
};

//Mostramos width de la pantalla con props
export default withWidth()(Oculto);

// export default Oculto;
