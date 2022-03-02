import React from "react";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "@mui/material/Fade";

//Metodo hook useStyle

const useStyle = makeStyles({
  estilo: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  estilo2: {
    background: "linear-gradient(45deg, #FFFF8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },

  //Utilizando keyframes de animatecss
  div: {
    display: "inline-block",

    animation:
      "shakeY" /* referring directly to the animation's @keyframe declaration */,
    animationDuration: "2s" /* don't forget to set a duration! */,
  },
});
const Personalizados = () => {
  const classes = useStyle();
  const [checked, setChecked] = React.useState(false);
  React.useEffect(() => setChecked(true), []);
  return (
    <Fade  in={checked} style={{ transitionDelay: "150ms" }}>
      <div>
        <p>Tambien usando animate.css</p>
        {/* utilizando cdn de animate.css */}
        <div className="animate__animated animate__bounce">
          <Button className={classes.estilo}>Botón</Button>
        </div>
        <p></p>
        <p></p>
        <div className={classes.div}>
          <Button className={classes.estilo2}>Botón</Button>
        </div>
      </div>
    </Fade >
  );
};

export default Personalizados;
