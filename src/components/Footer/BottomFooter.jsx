import React from 'react';
import { Link } from 'gatsby';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

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

const BottomFooter = () => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.bottomBar}>
        <Grid className={classes.section}>
          <Typography className={classes.bottomText}>
            Copyright 2020 Korova Digital All Rights Reserved.
          </Typography>
        </Grid>
        <Grid className={classes.sectionSocial}>
          <Typography className={classes.bottomText}>
            Email: info@korovadigital.com
          </Typography>
        </Grid>
        <Grid className={classes.sectionSocial}>
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
        </Grid>
      </Grid>
    </>
  );
};

export default BottomFooter;
