import { createTheme } from "@mui/material";
import {red} from '@mui/material/colors';

const theme = createTheme({
  typography: {
    fontFamily: ['Archivo', 'sans-serif'].join(','),
    fontSize: 22,
    h5: {
      fontSize: 16
    },
    h6: {
      fontSize: 12,
      fontWeight: 400,
    },
    body1: {
      fontSize: 14,
      fontWeight: 400,
      color: '#bbb'
    },
    body2: {
      fontSize: 12,
      color: '#bbb'
    }
  }, 
  palette: {
    mode: 'dark', 
    primary: {
      main: red[600],
      contrastText: '#fff'
    },
    secondary: {
      main: '#f2f2f2',
      contrastText: '#222'
    },
    lightGray: {
      main: '#2F2F2F'
    }
  },
})

export default theme;