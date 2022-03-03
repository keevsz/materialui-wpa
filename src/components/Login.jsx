import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { Alert } from "./Alert";
import logo from "./logo.png";
import GoogleIcon from "@mui/icons-material/Google";
import { Box, TextField, Button } from "@material-ui/core";
import { Grid, Hidden, Paper, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Fade from "@mui/material/Fade";

export function Login() {
  const [checked, setChecked] = useState(false);

  useEffect(() => setChecked(true), []);
  const [user, setUser] = useState({ email: "", password: "" });

  const { login, loginWithGoogle, resetPassword } = useAuth();

  const navigate = useNavigate();

  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/invalid-email")
        setError("Ingrese un email valido");
      if (error.code === "auth/internal-error")
        setError("Ingrese una contraseña valida");
      if (error.code === "auth/wrong-password")
        setError("Contraseña incorrecta");
      if (error.code === "auth/user-not-found")
        setError("Usuario no encontrado");
    }
  };

  const handleResetPassword = async () => {
    if (!user.email) return setError("Ingresa tu email");
    try {
      await resetPassword(user.email);
      setError(`Se ha enviado un correo a ${user.email}`);
    } catch (error) {
      setError(error.message);
    }
  };

  // Mensaje de error {error && <Alert message={error} />}
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
        <form onSubmit={handleSubmit} style={{ margin: "20px" }}>
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

          <Box style={{ marginBottom: "25px" }}>
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
            <Box style={{ height: "20px", marginTop: "10px" }}>
              {error && <Alert message={error} />}
            </Box>
          </Box>
          <Box style={{ marginBottom: "15px" }}>
            <Button
              fullWidth
              type="submit"
              style={{ backgroundColor: "#0C5FE8", color: "white" }}
              variant="contained"
            >
              <PersonIcon style={{ marginRight: "5%" }}></PersonIcon>
              Ingresar
            </Button>
          </Box>

          <Box style={{ marginBottom: "30px" }}>
            <Button
              fullWidth
              onClick={handleGoogleSignIn}
              style={{ backgroundColor: "#FF4200", color: "white" }}
            >
              <GoogleIcon style={{ marginRight: "5%" }}></GoogleIcon>
              Google
            </Button>
          </Box>

          <Box>
            <Grid justify="space-between" container spacing={6}>
              <Grid item>
                <Link
                  style={{ textDecoration: "none", color: "gray" }}
                  to="/resetpassword"
                  onClick={handleResetPassword}
                >
                  Olvidé mi contraseña
                </Link>
              </Grid>

              <Grid item>
                <Link
                  style={{ textDecoration: "none", color: "gray" }}
                  to="/register"
                >
                  Registrarse
                </Link>
              </Grid>
            </Grid>
          </Box>
        </form>
      </Box>
    </Fade>
  );
}
