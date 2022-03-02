import Contenedor from "./components/Contenedor";
import { ThemeProvider } from "@material-ui/core";
import theme from './components/temaConfig'

function App() {
  return (
      <ThemeProvider theme={theme}>
        <Contenedor></Contenedor>
      </ThemeProvider>
  );
}

export default App;
