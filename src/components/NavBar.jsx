import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';
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
    cursor: 'default',
  },
  buttonMenu: { width: '98%', margin: 4 },
  link: {
    textDecoration: 'none',
    cursor: 'pointer',
  },
  buttomTour: {
    transition: 'all 0.5s ease-out',
    backgroundColor: theme.palette.secondary.light,
    fontWeight: 700,
  },
}));

const ButtonAppBar = (props) => {
  const classes = useStyles();
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="space-around"
          >
            <Grid
              container
              item
              md={4}
              direction="row"
              alignItems="center"
            >
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                href="/"
              >
                <KorovaIcon className={classes.icon} />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                {'KOROVA DIGITAL'}
              </Typography>
            </Grid>
            <Hidden smDown>
              <Grid
                item
                container
                md={8}
                justify="space-evenly"
                alignItems="center"
              >
                <Grid item>
                  <Link to="/" className={classes.link}>
                    <Button color="inherit">Home</Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    to="/blog/static-sites-are-great"
                    className={classes.link}
                  >
                    <Button color="inherit">Quiénes somos?</Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/" className={classes.link}>
                    <Button color="inherit">Eventos</Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/contact" className={classes.link}>
                    <Button color="inherit">Contactanos</Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/" className={classes.link}>
                    <Button color="inherit">Membresia</Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/" className={classes.link}>
                    <Button color="inherit">COVID-19</Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/" className={classes.link}>
                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.buttomTour}
                    >
                      TOUR
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Hidden>
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
          <Link to="/" className={classes.link}>
            <Button
              variant="outlined"
              color="inherit"
              className={classes.buttonMenu}
            >
              Home
            </Button>
          </Link>
          <Link
            to="/blog/static-sites-are-great"
            className={classes.link}
          >
            <Button
              variant="outlined"
              color="inherit"
              className={classes.buttonMenu}
            >
              Quiénes somos?
            </Button>
          </Link>
          <Link to="/" className={classes.link}>
            <Button
              variant="outlined"
              color="inherit"
              className={classes.buttonMenu}
            >
              Eventos
            </Button>
          </Link>
          <Link to="/contact" className={classes.link}>
            <Button
              variant="outlined"
              color="inherit"
              className={classes.buttonMenu}
            >
              Contactanos
            </Button>
          </Link>
          <Link to="/" className={classes.link}>
            <Button
              variant="outlined"
              color="inherit"
              className={classes.buttonMenu}
            >
              Membresia
            </Button>
          </Link>
          <Link to="/" className={classes.link}>
            <Button
              variant="outlined"
              color="inherit"
              className={classes.buttonMenu}
            >
              COVID-19
            </Button>
          </Link>
          <Link to="/" className={classes.link}>
            <Button
              variant="outlined"
              color="secondary"
              className={classes.buttonMenu}
            >
              TOUR
            </Button>
          </Link>
        </SwipeableDrawer>
      </Hidden>
    </div>
  );
};

export default withWidth()(ButtonAppBar);
