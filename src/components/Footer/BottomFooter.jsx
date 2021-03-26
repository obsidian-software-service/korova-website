import React from 'react';
import { Link } from 'gatsby';
import { Typography, Grid, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles((theme) => ({
  bottomBar: {
    height: 9 * theme.spacing(5),
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(5),
  },
  section: {
    minWidth: 100,
  },
  link: {
    textDecoration: 'none',
    cursor: 'pointer',
  },
  bottomText: {
    fontSize: '14px',
    color: theme.palette.primary.contrastText,
    fontFamily: theme.typography.fontFamily,
    marginBottom: theme.spacing(4),
  },
  sectionSocial: {},
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
  tooltip: {
    backgroundColor: 'rgb(0 0 0 / 40%)',
    color: '#fff',
    padding: 5,
    fontSize: '.9em',
    fontWeight: '600',
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
      <Grid
        container
        alignItems="center"
        wrap="wrap"
        className={classes.bottomBar}
      >
        <Grid
          container
          item
          md={4}
          justify="center"
          className={classes.section}
        >
          <Typography className={classes.bottomText}>
            Copyright 2020 Korova Digital All Rights Reserved.
          </Typography>
        </Grid>
        <Grid container item md={4} justify="center">
          <Typography className={classes.bottomText}>
            Email: info@korovadigital.com
          </Typography>
        </Grid>
        <Grid container item md={4} justify="center">
          <Tooltip title="Youtube" classes={classes}>
            <Grid item xs={2}>
              <Link
                className={classes.link}
                to="https://www.facebook.com/korovadigital/"
              >
                <ItemSocial>
                  <YouTubeIcon />
                </ItemSocial>
              </Link>
            </Grid>
          </Tooltip>
          <Tooltip title="Facebook" classes={classes}>
            <Grid item xs={2}>
              <Link
                className={classes.link}
                to="https://www.facebook.com/korovadigital/"
              >
                <ItemSocial>
                  <FacebookIcon />
                </ItemSocial>
              </Link>
            </Grid>
          </Tooltip>
          <Tooltip title="Instagram" classes={classes}>
            <Grid item xs={2}>
              <Link
                className={classes.link}
                to="https://www.instagram.com/korovadigital/"
              >
                <ItemSocial>
                  <InstagramIcon />
                </ItemSocial>
              </Link>
            </Grid>
          </Tooltip>
          <Tooltip title="GitHub" classes={classes}>
            <Grid item xs={2}>
              <Link
                className={classes.link}
                to="https://github.com/obsidian-software-service/korova-website"
              >
                <ItemSocial>
                  <GitHubIcon />
                </ItemSocial>
              </Link>
            </Grid>
          </Tooltip>
        </Grid>
      </Grid>
    </>
  );
};

export default BottomFooter;
