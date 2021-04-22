import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Dialog, DialogTitle, makeStyles, TextField,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin : theme.spacing(1),
      width  : '25ch',
    },
  },
}));

const RegisterModal = ({ onClose, open }) => {
  const classes = useStyles();

  const handleClose = () => {
    onClose({ hola: '12' });
  };

  const handleRegister = () => {
    // setOpenLogin(true);
  };

  const handle = () => {

  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>

      <DialogTitle id="simple-dialog-title">
        Registrarse
      </DialogTitle>

      <form className={classes.root} noValidate autoComplete="off">

        <TextField id="names" label="Nombre completo" variant="outlined" />
        <TextField id="password" label="Contraseña" variant="outlined" />
        <TextField id="password-2" label="Repetir contraseña" variant="outlined" />

        <Button variant="contained" color="secondary" onClick={handleRegister}>
          Registrate
        </Button>

        <span>o</span>

        <Button variant="contained" color="secondary" onClick={handle}>
          Google
        </Button>

        <Button variant="contained" color="secondary" onClick={handle}>
          Facebook
        </Button>

        <Button variant="contained" color="secondary" onClick={handle}>
          Apple
        </Button>

      </form>

    </Dialog>
  );
};

RegisterModal.propTypes = {
  onClose : PropTypes.func.isRequired,
  open    : PropTypes.bool.isRequired,
};

export default RegisterModal;
