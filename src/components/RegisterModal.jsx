import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Dialog, DialogContent, DialogTitle, makeStyles, TextField,
} from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';

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
  const {
    control, handleSubmit, errors: fieldsErrors,
  } = useForm();

  const handleClose = () => {
    onClose({ hola: '12' });
  };

  // const handleRegister = () => {
  //   // setOpenLogin(true);
  // };

  const handle = () => {

  };

  const onSubmit = (data) => {
    console.log('hola', data);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>

      <DialogTitle id="simple-dialog-title">
        Registrarse
      </DialogTitle>

      <DialogContent>
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >

          <Controller
            name="names"
            render={({ field }) => (
              <TextField
                {...field}
                id="names"
                name="names"
                label="Nombre completo"
                variant="outlined"
                helperText={fieldsErrors?.names ? fieldsErrors?.names.message : null}
                error={fieldsErrors?.names}
              />
            )}
            control={control}
            defaultValue=""
            rules={{
              required: 'Required',
            }}
          />
          <Controller
            name="email"
            render={({ field }) => (
              <TextField
                {...field}
                id="email"
                name="email"
                label="Email"
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
          <Controller
            name="password"
            render={({ field }) => (
              <TextField
                {...field}
                id="password"
                name="password"
                label="Contraseña"
                variant="outlined"
                helperText={fieldsErrors?.password ? fieldsErrors?.password.message : null}
                error={fieldsErrors?.password}
              />
            )}
            control={control}
            defaultValue=""
            rules={{
              required: 'Required',
            }}
          />
          <Controller
            name="password2"
            render={({ field }) => (
              <TextField
                {...field}
                id="password2"
                name="password2"
                label="Repetir contraseña"
                variant="outlined"
                helperText={fieldsErrors?.password2 ? fieldsErrors?.password2.message : null}
                error={fieldsErrors?.password2}
              />
            )}
            control={control}
            defaultValue=""
            rules={{
              required: 'Required',
            }}
          />

          <div className={classes.registerButtonContainer}>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
            >
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
