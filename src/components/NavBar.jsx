import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import KorovaIcon from '../assets/logo_icono.svg';
import {
  Grid,
  Hidden,
  Button,
  IconButton,
  Typography,
  Toolbar,
  AppBar,
  withWidth,
  SwipeableDrawer,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    width: '100%',
  },
  icon: { width: 100, height: 100 },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: 20,
  },
  buttonMenu: { margin: 10 },
}));

const ButtonAppBar = (props) => {
  const classes = useStyles();
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            href="/"
          >
            <Grid container item direction="row" alignItems="center">
              <KorovaIcon className={classes.icon} />
              <Typography variant="h6" className={classes.title}>
                {'KOROVA DIGITAL'}
              </Typography>
            </Grid>
          </IconButton>
          <Grid container direction="row" justify="space-between">
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              item
              xs={12}
            >
              <Hidden smDown>
                <Grid xs={11} item justify="space-around">
                  <Button color="inherit">Servicios</Button>
                  <Button color="inherit">Acerca de nosotros</Button>
                  <Button color="inherit">COVID-19</Button>
                  <Button color="inherit">Eventos</Button>
                  <Button color="inherit">Contactanos</Button>
                  <Button color="inherit">Membresia</Button>
                  <Button color="inherit">Programar visitas</Button>
                </Grid>
              </Hidden>
            </Grid>
          </Grid>
          <Hidden mdUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => setShowDrawer(true)}
              edge="end"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Hidden mdUp>
        <SwipeableDrawer
          anchor={'right'}
          open={showDrawer}
          onClose={() => setShowDrawer(false)}
          onOpen={() => setShowDrawer(true)}
        >
          <Button
            variant="outlined"
            size="large"
            color="secondary"
            className={classes.buttonMenu}
          >
            Servicios
          </Button>
          <Button
            variant="outlined"
            size="large"
            color="inherit"
            className={classes.buttonMenu}
          >
            Acerca de nosotros
          </Button>
          <Button
            variant="outlined"
            size="large"
            color="inherit"
            className={classes.buttonMenu}
          >
            COVID-19
          </Button>
          <Button
            variant="outlined"
            size="large"
            color="inherit"
            className={classes.buttonMenu}
          >
            Eventos
          </Button>
          <Button
            variant="outlined"
            size="large"
            color="inherit"
            className={classes.buttonMenu}
          >
            Contactanos
          </Button>
          <Button
            variant="outlined"
            size="large"
            color="inherit"
            className={classes.buttonMenu}
          >
            Membresia
          </Button>
          <Button
            variant="outlined"
            size="large"
            color="inherit"
            className={classes.buttonMenu}
          >
            Programar visitas
          </Button>
        </SwipeableDrawer>
      </Hidden>
    </div>
  );
};

export default withWidth()(ButtonAppBar);
