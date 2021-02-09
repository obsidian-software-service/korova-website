import React from 'react';
import './base.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import NavBar from './NavBar';
import Footer from './Footer';
import { theme } from '../components/Styles';

class Template extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
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
