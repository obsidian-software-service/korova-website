import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  overrides: {
    background: 'linear-gradient(0deg, #000000 35%, transparent 80%)',
    MuiAppBar: {
      colorPrimary: {
        background:
          'linear-gradient(180deg, #000000 40%, transparent)',
        backgroundColor: 'none',
      },
    },
    MuiCssBaseline: {
      '@global': {
        body: {
          fontSize: '1em',
          lineHeight: '1.65',
          margin: 0,
          fontFamily:
            'Roboto ligth, Tahoma, Arial, Helvetica, sans-serif',
          background:
            'linear-gradient(135deg, #e1e1e1 25%, transparent 25%) -50px 0, linear-gradient(225deg, #e1e1e1  25%, transparent 25%) -50px 0,linear-gradient(315deg, #e1e1e1  25%, transparent 25%),linear-gradient(45deg, #e1e1e1  25%, transparent 25%)',
          backgroundSize: '20vh 20vh',
          backgroundColor: '#cfd8dc',
        },
        '.wrapper': {
          width: 'calc(100% - 10vmin)',
          margin: '0 auto',
          padding: '5vmin 0',
        },
        img: {
          display: 'block',
          width: '100%',
        },
      },
    },
  },
  spacing: 4,
  palette: {
    primary: {
      light: '#484848',
      main: '#000000',
      dark: '#212121',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff5131',
      main: '#ff0400',
      dark: '#9b0000',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: ['Roboto ligth', 'Roboto', 'Arial'].join(','),
  },
});
