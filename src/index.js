import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Botones from "./components/Botones";
import Iconos from "./components/Iconos";
import Tipografia from "./components/Tipografia";
import Personalizados from "./components/Personalizados";
import Home from "./components/Home";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import {Reset} from "./components/Reset"


ReactDOM.render(
  <BrowserRouter>
  <AuthProvider>
    <Routes>
      

      <Route path="/" element={ <App />  }> 
        <Route index element={<ProtectedRoute><Home /></ ProtectedRoute>} />
        <Route path="/botones" element={<ProtectedRoute> <Botones /> </ ProtectedRoute>} />
        <Route path="/iconos" element={<ProtectedRoute> <Iconos /> </ ProtectedRoute>} />
        <Route path="/tipografia" element={<ProtectedRoute> <Tipografia /> </ ProtectedRoute>} />
        <Route path="/personalizados" element={<ProtectedRoute> <Personalizados /> </ ProtectedRoute>} />
      </Route>
      <Route path="/login" element={ <Login />  }> </Route>
      <Route path="/register" element={ <Register />  }> </Route>
      <Route path="/resetpassword" element={ <Reset />  }> </Route>

     
      
    </Routes>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();