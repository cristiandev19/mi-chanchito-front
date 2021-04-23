import {
  Button, Dialog, DialogContent, DialogTitle, makeStyles, TextField,
} from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';

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
  loginTitle: {
    color      : '#2E598C',
    textAlign  : 'center',
    fontWeight : 'bold',
  },
  loginContent: {
    minWidth: '400px',
  },
  loginButtonContainer: {
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
  blueButton: {
    backgroundColor : '#2E598C',
    color           : 'white',
    '&:hover'       : {
      backgroundColor: '#2E598C',
    },
  },
  whiteButton: {
    backgroundColor : 'white',
    color           : '#686868',
    '&:hover'       : {
      backgroundColor: '#EBE9E9',
    },
  },
}));

const LoginModal = ({ onClose, open }) => {
  const classes = useStyles();
  console.log('login modal');
  const {
    control, register, handleSubmit, errors: fieldsErrors,
  } = useForm();
  console.log('fieldsErrors', fieldsErrors);

  const handleClose = () => {
    onClose({ hola: '12' });
  };
  const handleLogin = () => {
    // setOpenLogin(true);
  };

  const handle = () => {
  };

  const onSubmit = (data) => {
    console.log('hola', data);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      maxWidth="xl"
      classes={{ paper: classes.loginContent }}
    >
      <DialogTitle id="simple-dialog-title" className={classes.loginTitle}>
        Iniciar Sesión
      </DialogTitle>
      <DialogContent>
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="email"
            render={({ field }) => (
              <TextField
                id="email"
                name="email"
                label="Correo electronico"
                variant="outlined"
                helperText={fieldsErrors?.email ? fieldsErrors?.email.message : null}
                error={fieldsErrors?.email}
              />
            )}
            control={control}
            defaultValue=""
            rules={{
              required : 'Required',
              pattern  : {
                value   : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message : 'invalid email address',
              },
            }}
          />

          <TextField
            inputRef={register('password')}
            id="password"
            name="password"
            label="Contraseña"
            variant="outlined"
          />
          <div className={classes.loginButtonContainer}>
            <Button variant="contained" color="secondary" onClick={handleLogin} className={classes.blueButton} type="submit">
              Iniciar Sesión
            </Button>

            <span>ó</span>

            <Button
              variant="contained"
              color="secondary"
              onClick={handle}
              className={classes.whiteButton}
            >
              Iniciar Sesión con Google
            </Button>

            <Button
              variant="contained"
              color="secondary"
              onClick={handle}
              className={classes.whiteButton}
            >
              Iniciar Sesión con Facebook
            </Button>
          </div>
        </form>

      </DialogContent>
    </Dialog>
  );
};

LoginModal.propTypes = {
  onClose : PropTypes.func.isRequired,
  open    : PropTypes.bool.isRequired,
};

export default LoginModal;
