import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Dialog, DialogContent, DialogTitle, makeStyles, TextField,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin : theme.spacing(1),
      width  : '300px',
    },
    display       : 'flex',
    flexDirection : 'column',
    alignItems    : 'center',
  },
  registerButtonContainer: {
    display       : 'flex',
    flexDirection : 'column',
    alignItems    : 'center',
    '& > *'       : {
      marginBottom: '10px',
    },
    '& > Button': {
      borderRadius : '5px',
      padding      : '10px 15px',
      width        : '300px',
      fontWeight   : '500',
      boxShadow    : 'rgba(0,0,0,0.2) 1px 1px 5px 0',
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

      <DialogContent>
        <form className={classes.root} noValidate autoComplete="off">

          <TextField id="names" label="Nombre completo" variant="outlined" />
          <TextField id="email" label="Email" variant="outlined" />
          <TextField id="password" label="Contraseña" variant="outlined" />
          <TextField id="password-2" label="Repetir contraseña" variant="outlined" />

          <div className={classes.registerButtonContainer}>
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

          </div>

        </form>
      </DialogContent>

    </Dialog>
  );
};

RegisterModal.propTypes = {
  onClose : PropTypes.func.isRequired,
  open    : PropTypes.bool.isRequired,
};

export default RegisterModal;
