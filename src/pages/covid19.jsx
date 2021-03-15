import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid, Typography } from '@material-ui/core';
import Layout from '../components/layout';
import KorovaIcon from '../assets/logo_icono2.svg';

const style = makeStyles((theme) => ({
  root: {
    flex: 1,
    height: '100%',
    backgroundColor: '#ffffff80',
    paddingBottom: '35vh',
  },
  containerIcon: {
    margin: 10,
    padding: 10,
    borderRadius: '50%',
    display: 'flex',
  },
  icon: {
    width: 150,
    height: 150,
    '@media(max-width: 576px)': { width: 100, height: 100 },
  },
  title: {
    fontWeight: 'bold',
    '@media(max-width: 576px)': { fontSize: '4em' },
  },
}));

const covid19 = () => {
  const classes = style();

  return (
    <Layout>
      <Grid
        container
        justify="center"
        direction="column"
        alignItems="center"
        className={classes.root}
      >
        <Card className={classes.containerIcon} elevation={3}>
          <KorovaIcon className={classes.icon} />
        </Card>
        <Typography variant="h1" className={classes.title}>
          {'Covid-19'}
        </Typography>
        <Typography variant="subtitle2">
          {
            'El virus se propaga principalmente de persona a persona pero puede sobrevivir en diferentes superficies.'
          }
        </Typography>
      </Grid>
    </Layout>
  );
};

export default covid19;
