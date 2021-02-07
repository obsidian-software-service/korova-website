import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Hidden, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PrimaryInput from '../components/PrimaryInput';
import Layout from '../components/layout';

const useStyles = makeStyles((theme) => ({
  root: {},
  formContainer: {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  gridContainer: {
    flex: 1,
    margin: 30,
  },
  gridItem: {
    padding: '0 5px',
  },
  title: {
    margin: '10px 10px 30px 0',
    fontWeight: 900,
    fontSize: 48,
    lineHeight: 1,

    width: '100%',
  },
  division: {
    width: 0,
    borderWidth: 2,
    borderStyle: 'solid',

    marginTop: 60,
    marginBottom: 60,
  },
  imgContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  smartphoneImg: {
    width: '100%',
    height: '100%',

    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  },
  buttonContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    margin: 5,
    width: 200,
    borderRadius: 0,
  },
}));

const Contact = (props) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [content, setContent] = useState('');
  const [space, setSpace] = useState('');

  const DummyData = [
    { title: 'Tatuajes', days: 'lunes a sábado' },
    { title: 'Fotografia', days: 'martes a sábado' },
    { title: 'Bar', days: 'viernes y sábado' },
    { title: 'datos', days: 'lunes a viernes' },
  ];

  const classes = useStyles();

  useEffect(() => {}, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    setName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setContent('');
    setSpace('');
  };

  return (
    <Layout>
      <form
        name="contact"
        onSubmit={handleSubmit}
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className={classes.formContainer}>
          <Hidden smDown>
            <Grid item className={classes.imgContainer} md={5}>
              <div className={classes.smartphoneImg} />
            </Grid>
            <div className={classes.division} />
          </Hidden>
          <Grid
            className={classes.gridContainer}
            container
            md={6}
            spacing={3}
          >
            <h1 className={classes.title}>CONTACTATE!!!</h1>
            <Grid className={classes.gridItem} item xs={6}>
              <PrimaryInput
                id="NameInput"
                value={name}
                name="name"
                onChange={({ target }) => setName(target.value)}
                label="Nombres"
                required
              />
            </Grid>
            <Grid className={classes.gridItem} item xs={6}>
              <PrimaryInput
                id="LastNameInput"
                value={lastName}
                name="lastName"
                onChange={({ target }) => setLastName(target.value)}
                label="Apellidos"
                required
              />
            </Grid>
            <Grid className={classes.gridItem} item xs={12} sm={6}>
              <PrimaryInput
                id="EmailInput"
                value={email}
                name="email"
                type="email"
                onChange={({ target }) => setEmail(target.value)}
                label="E-Mail"
                required
              />
            </Grid>
            <Grid className={classes.gridItem} item xs={12} sm={6}>
              <PrimaryInput
                id="PhoneInput"
                value={phone}
                name="phone"
                onChange={({ target }) => setPhone(target.value)}
                label="Teléfono"
                required
              />
            </Grid>
            <Grid className={classes.gridItem} item xs={12}>
              <Autocomplete
                value={space}
                onChange={(event, newValue) => {
                  setSpace(newValue);
                }}
                id="ComboBox"
                options={DummyData}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Espacios de Interes"
                    variant="filled"
                  />
                )}
              />
            </Grid>
            <Grid className={classes.gridItem} item xs={12}>
              <PrimaryInput
                id="ContentInput"
                value={content}
                name="content"
                label="Mensaje"
                onChange={({ target }) => setContent(target.value)}
                multiline
                rows={12}
                size="small"
              />
            </Grid>
            <div className={classes.buttonContainer}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.button}
              >
                Enviar
              </Button>
            </div>
          </Grid>
        </div>
      </form>
    </Layout>
  );
};

export default Contact;
