import { createTheme, lighten } from '@mui/material/styles';

const primaryMain = '#1F3C3A';

const theme = createTheme({
  palette: {
    primary: {
      main: primaryMain ,
      contrastText: lighten(primaryMain, 0.4) 
    }
    
  },
});

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#8C1AD9',
//       contrastText: '#8C1AD9'
//       }
//   }
// });

export default theme;