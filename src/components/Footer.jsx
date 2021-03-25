import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Box, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import PrimaryInput from './PrimaryInput';
import KorovaIcon from '../assets/logo_icono2.svg';
import OctosoftLogo from '../assets/logoOctosoft.svg';

const useStyles = makeStyles((theme) => ({
  root: { margin: 0, padding: 0, maxWidth: 'none' },
  icon: { width: 100, height: 100 },
  toolbar: {
    boxShadow: 'inset 0 2px 3px #ccc',
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: theme.palette.main,
    background: theme.palette.primary.contrastText,
    flexWrap: 'wrap',
    '@media (max-width: 576px)': { flexDirection: 'column' },
  },
  section: {
    flex: 1,
    margin: theme.spacing(4),
    minWidth: 100,
  },
  sectionTitle: {
    color: theme.palette.primary.light,
    fontSize: '18px',
    fontWeight: 'bold',
  },
  links: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: 300,
    '@media (max-width: 576px)': { flexDirection: 'column' },
  },
  link: {
    textDecoration: 'none',
    cursor: 'pointer',
  },
  linkText: {
    color: 'gray',
    paddingTop: 5,
    fontSize: '14px',
    fontFamily: theme.typography.fontFamily,
  },
  formContainer: {
    paddingTop: 10,
    maxWidth: 300,
  },
  bottomBar: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(8),
    flexWrap: 'wrap',
  },
  bottomText: {
    fontSize: '14px',
    color: theme.palette.primary.contrastText,
    fontFamily: theme.typography.fontFamily,
    marginBottom: theme.spacing(4),
  },
  sectionSocial: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  itemSocial: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  iconSocial: {
    width: 40,
    height: 40,
    clipPath:
      'polygon(50% 0, 85.5% 14.5%, 100% 50%, 85.5% 85.5%, 50% 100%, 14.5% 85.5%, 0 50%, 14.5% 14.5% )',
    background: 'white',
    color: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& svg': {
      transition: '0.2s',
    },
    '&:hover svg': {
      width: 30,
      height: 30,
    },
  },
}));

const ItemSocial = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.itemSocial}>
      <div className={classes.iconSocial}>{children}</div>
    </div>
  );
};

const Footer = (props) => {
  const [email, setEmail] = useState('');
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Box className={classes.toolbar}>
        <div className={classes.section}>
          <Link
            className={classes.link}
            to="https://octosoftprofessionals.com/"
          >
            <Grid
              container
              alignItems="center"
              justify="center"
              direction="column"
              xs={6}
              className={classes.root}
            >
              <OctosoftLogo className={classes.icon} />
              <Typography className={classes.sectionTitle}>
                OCTOSOFT
              </Typography>
            </Grid>
          </Link>
        </div>

        <KorovaIcon className={classes.icon} />
        <div className={classes.section}>
          <Typography className={classes.sectionTitle}>
            KOROVA DIGITAL
          </Typography>

          <div className={classes.links}>
            <Link className={classes.link} margin={2} to="/">
              <div className={classes.linkText}>Home</div>
            </Link>

            <Link
              className={classes.link}
              margin={2}
              to="blog/static-sites-are-great"
            >
              <div className={classes.linkText}>Quiénes somos?</div>
            </Link>

            <Link className={classes.link} margin={2} to="/">
              <div className={classes.linkText}>Eventos</div>
            </Link>
            <Link className={classes.link} margin={2} to="/">
              <div className={classes.linkText}>COVID-19</div>
            </Link>
          </div>
        </div>
        <div className={classes.section}>
          <Typography className={classes.sectionTitle}>
            CONTACTANOS
          </Typography>
          <div className={classes.linkText}>
            No se pierda nuestras últimas novedades
          </div>
          <div className={classes.formContainer}>
            <form>
              <input type="hidden" name="form-name" value="contact" />
              <PrimaryInput
                id="EmailInput"
                value={email}
                name="email"
                onChange={({ target }) => setEmail(target.value)}
                label="Tu Email"
                variant="filled"
                type="email"
                required
              />
            </form>
          </div>
        </div>
      </Box>
      <div className={classes.bottomBar}>
        <div className={classes.section}>
          <Typography className={classes.bottomText}>
            Copyright 2020 Korova Digital All Rights Reserved.
          </Typography>
        </div>
        <div className={classes.sectionSocial}>
          <Typography className={classes.bottomText}>
            Email: info@korovadigital.com
          </Typography>
        </div>
        <div className={classes.sectionSocial}>
          <Link
            className={classes.link}
            to="https://www.facebook.com/korovadigital/"
          >
            <ItemSocial>
              <FacebookIcon />
            </ItemSocial>
          </Link>
          <Link
            className={classes.link}
            to="https://www.instagram.com/korovadigital/"
          >
            <ItemSocial>
              <InstagramIcon />
            </ItemSocial>
          </Link>
          <Link
            className={classes.link}
            to="https://github.com/obsidian-software-service/korova-website"
          >
            <ItemSocial>
              <GitHubIcon />
            </ItemSocial>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
