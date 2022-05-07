import { createTheme } from '@mui/material/styles'
import { red,grey } from '@mui/material/colors';



export default createTheme({
  palette:{
    mode:'dark',
    primary:{main:red[500]},
    secondary:{main:grey[200]},
    background:{default:red[500]}
  }
});