import React from 'react';
import './base.css';
import {
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import NavBar from './NavBar';
import Footer from './Footer';

const theme = createMuiTheme({
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

class Template extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <NavBar />
        <main>
          {children}
          <Footer />
        </main>
      </ThemeProvider>
    );
  }
}

export default Template;
