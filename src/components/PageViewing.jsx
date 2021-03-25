import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { Button, Grid, Typography, Divider } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '95.45%',
    margin: '0 auto',
    marginBottom: '30px',
    padding: 0,
    border: '2px solid #ccc',
    boxShadow: '-1px 0px 3px black',
    backgroundColor: 'white',
  },
  calendarContainer: {
    height: '300px',
    paddingRight: '3%',
    paddingBottom: '20px',
  },
  boxPrimary: {
    backgroundColor: '#eee',
  },
  boxSecondary: {
    backgroundColor: '#ccc',
  },
  boxButton: {
    paddingRight: '3%',
    padding: '20px 0',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 30,
    padding: 15,
    textAlign: 'center',
    color: 'black',
  },
  description: {
    fontSize: 20,
    padding: 20,
    color: 'black',
  },
});

const PageViewing = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item xs={12} className={classes.boxPrimary}>
        <Typography variant="h1" className={classes.title}>
          Titulo
        </Typography>
      </Grid>
      <Grid item container>
        <Typography
          variant="subtitle1"
          className={classes.description}
        >
          Esta es la lista de turnos disponibles para consultas en la
          fecha seleccionada, por favor seleccione el que prefiera:
        </Typography>
      </Grid>
      <Grid container className={classes.calendarContainer}>
        <Grid item xs={5} className={classes.boxPrimary}>
          <Typography className={classes.title}>Calendar</Typography>
        </Grid>

        <Grid item xs={7} className={classes.boxSecondary}>
          <Typography className={classes.title}>
            Cuadro vacio
          </Typography>
        </Grid>
      </Grid>
      <Divider />
      <Grid container className={classes.boxButton}>
        <Button variant="contained" color="secondary">
          <ArrowForwardIosIcon fontSize="small" />
        </Button>
      </Grid>
    </Grid>
  );
};

export default PageViewing;
