import React from 'react';
import './base.css';
import Container from './container';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import NavBar from './NavBar';

const theme = createMuiTheme({
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
});

class Template extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <NavBar />
        <Container>{children}</Container>
      </ThemeProvider>
    );
  }
}

export default Template;
