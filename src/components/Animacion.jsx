import * as React from "react";
import Zoom from "@mui/material/Zoom";

export default function Animacion() {
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => setChecked(true), []);

  return (
    <Zoom in={checked} style={{ transitionDelay: checked ? "500ms" : "0ms" }}>
      <div>
        {/* Aca van los componenents */}
        hola
      </div>
    </Zoom>
  );
} 
