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


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/botones" element={<Botones />} />
        <Route path="/iconos" element={<Iconos />} />
        <Route path="/tipografia" element={<Tipografia />} />
        <Route path="/personalizados" element={<Personalizados />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();