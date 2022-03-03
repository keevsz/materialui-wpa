import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { Alert } from "./Alert";
import logo from "./logo.png";
import { Box, TextField, Button } from "@material-ui/core";
import { Paper, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Fade from "@mui/material/Fade";

export function Register() {
  const [checked, setChecked] = useState(false);

  useEffect(() => setChecked(true), []);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/invalid-email")
        setError("Ingrese un email valido");
      if (error.code === "auth/internal-error")
        setError("Ingrese una contraseña valida");
      if (error.code === "auth/weak-password")
        setError("La contraseña debe tener minimo 6 caracteres");
      if (error.code === "auth/email-already-in-use")
        setError("Usuario ya registrado");
    }
  };
  return (
    <Fade in={checked} style={{ transitionDelay: "100ms" }}>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "97vh",
        }}
      >
        <form onSubmit={handleSubmit} style={{ margin: "20px", width: "260px" }}>
          <Box display="flex">
            <Box m="auto">
              <img src={logo} width="80px" />
            </Box>
          </Box>

          <Box display="flex" style={{ marginBottom: "10px" }}>
            <Box m="auto">
              <Typography variant="subtitle" style={{ fontSize: "20px" }}>
                Material UI
              </Typography>
            </Box>
          </Box>

          <Box style={{ marginBottom: "15px" }}>
            <TextField
              onChange={handleChange}
              type="email"
              id="standard-basic"
              label="Email"
              variant="standard"
              fullWidth
              name="email"
            />
          </Box>

          <Box style={{ marginBottom: "10px" }}>
            <TextField
              onChange={handleChange}
              fullWidth
              type="password"
              id="standard-basic"
              label="Password"
              variant="standard"
              name="password"
              id="password"
            />
          </Box>

          <Box style={{ height: "20px", marginBottom: "5px" }}>
            {error && (
              <Alert
                message={error}
              />
            )}
          </Box>

          <Box style={{ marginBottom: "15px" }}>
            <Button
              fullWidth
              type="submit"
              style={{ backgroundColor: "#0C5FE8", color: "white" }}
              variant="contained"
            >
              <PersonIcon style={{ marginRight: "5%" }}></PersonIcon>
              Registrarse
            </Button>
          </Box>

          <Box style={{ textAlign: "left", color:"gray" }}>
            <Link
              style={{
                textDecoration: "none",
                color: "gray",
                marginLeft: "5px",
              }}
              to="/login"
            >
              Regresar
            </Link>
          </Box>
        </form>
      </Box>
    </Fade>
  );
}
