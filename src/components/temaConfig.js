import {createTheme} from "@material-ui/core/styles";
import { lightGreen, purple } from "@material-ui/core/colors";
const theme = createTheme({
    palette:{
        primary:{
            main: lightGreen[300]
        },
        secondary:{
            main: purple[500]
        }
    }
});
export default theme;