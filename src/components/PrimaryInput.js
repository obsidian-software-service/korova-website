import React from 'react';
import { FormControl, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  input: {
    '& div': {
      borderRadius: 0,
    },
    '& div::before': {
      borderRadius: 0,
      borderBottom: 'none',
    },
    '& input': {
      paddingTop: 24,
      paddingLeft: 12,
      paddingBottom: 6,
    },
    '& label': {
      transform: 'translate(12px, 18px) scale(1)',
    },
    '& label span': {
      display: 'none',
    },
    '& label.MuiInputLabel-shrink': {
      transform: 'translate(12px, 6px) scale(0.75)',
    },
  },
}));

const PrimaryInput = ({ className, ...otherProps }) => {
  const classes = useStyles();
  return (
    <FormControl variant="filled" size="small" fullWidth>
      <TextField
        className={`${classes.input} ${className}`}
        variant="filled"
        {...otherProps}
      />
    </FormControl>
  );
};

export default PrimaryInput;
