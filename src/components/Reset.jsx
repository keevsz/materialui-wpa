import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { Alert } from "./Alert";
import logo from "./logo.png";
import { Box, TextField, Button } from "@material-ui/core";
import { Grid, Paper, Typography } from "@mui/material";
import { EmailOutlined } from "@mui/icons-material";
import Fade from "@mui/material/Fade";

export function Reset() {
  const [checked, setChecked] = useState(false);

  useEffect(() => setChecked(true), []);
  const [user, setUser] = useState({ email: "", password: "" });

  const { resetPassword } = useAuth();

  const navigate = useNavigate();

  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError("");
    if (!user.email) return setError("Ingresa tu email");
    try {
      await resetPassword(user.email);
    } catch (error) {
      setError(error.message);
    } finally {
      setError(`Se ha enviado un correo a ${user.email}`);
    }
  };

  return (
    <Fade in={checked} style={{ transitionDelay: "100ms" }}>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "94vh",
        }}
      >
        <form
          onSubmit={handleResetPassword}
          style={{ margin: "20px", width: "260px" }}
        >
          <Box display="flex">
            <Box m="auto">
              <img src={logo} width="80px" />
            </Box>
          </Box>

          <Box
            display="flex"
            style={{ marginBottom: "20px", marginTop: "30px" }}
          >
            <Box m="auto">
              <Typography
                variant="h4"
                style={{ fontSize: "25px" }}
                align="center"
              >
                ¿Olvidaste tu contraseña?
              </Typography>
            </Box>
          </Box>

          <Box style={{ marginBottom: "5px" }}>
            <Typography
              variant="subtitle2"
              color="initial"
              align="center"
              style={{ marginBottom: "10px" }}
            >
              Se le enviará un correo electronico para poder restablecer su
              contraseña.
            </Typography>
            <TextField
              onChange={handleChange}
              type="email"
              id="standard-basic"
              label="Email"
              variant="standard"
              fullWidth
              name="email"
              required
            />
          </Box>
          <Box style={{ height: "20px", marginBottom: "10px" }}>
            {error && <Alert message={error} />}
          </Box>

          <Box style={{ marginBottom: "15px" }}>
            <Button
              fullWidth
              type="submit"
              style={{ backgroundColor: "#0C5FE8", color: "white" }}
              variant="contained"
            >
              <EmailOutlined style={{ marginRight: "5%" }}></EmailOutlined>
              Enviar correo
            </Button>
          </Box>
          <Box style={{ textAlign: "left", marginTop: "5%" }}>
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
