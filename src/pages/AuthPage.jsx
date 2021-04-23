import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import LoginModal from '../components/LoginModal';
import RegisterModal from '../components/RegisterModal';

const useStyles = makeStyles(() => ({
  buttonContainer: {
    marginTop     : '60px',
    display       : 'flex',
    flexDirection : 'column',
    alignItems    : 'center',
    '& > Button'  : {
      borderRadius : '5px',
      padding      : '10px 15px',
      width        : '300px',
      fontWeight   : '500',
      boxShadow    : 'rgba(0,0,0,0.2) 1px 1px 5px 0',
    },
    '& > Button:first-child': {
      marginBottom: '10px',
    },
  },
  loginButton: {
    backgroundColor : '#E4445A',
    color           : 'white',
    '&:hover'       : {
      backgroundColor: '#E4445A',
    },
  },
  registerButton: {
    backgroundColor : '#37699C',
    color           : 'white',
    '&:hover'       : {
      backgroundColor: '#37699C',
    },
  },
  title: {
    textAlign: 'center',
  },
}));

const AuthPage = () => {
  const classes = useStyles();
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openRegister, setOpenRegister] = React.useState(false);

  console.log('something', { openLogin, openRegister });

  const handleLogin = () => {
    setOpenLogin(true);
  };
  const handleRegister = () => {
    setOpenRegister(true);
  };

  const handleCloseLogin = (hola) => {
    console.log('hola', hola);
    setOpenLogin(false);
  };

  const handleCloseRegister = (hola) => {
    console.log('hola', hola);
    setOpenRegister(false);
  };

  return (
    <div className="auth-container">
      <div
        className="part1"
        style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/images/portada.png')` }}
      />
      <div className="part2">
        <div className="part2-content">
          <h1 className={classes.title}>Administra tu dinero de forma efectiva</h1>
          <div className={classes.buttonContainer}>
            <Button variant="contained" color="primary" onClick={handleLogin} className={classes.loginButton}>
              Iniciar Sesión
            </Button>
            <Button variant="contained" color="secondary" onClick={handleRegister} className={classes.registerButton}>
              Registrarse
            </Button>
          </div>
        </div>
      </div>

      <LoginModal open={openLogin} onClose={handleCloseLogin} />
      <RegisterModal open={openRegister} onClose={handleCloseRegister} />
      {/*
      */}
    </div>
  );
};

export default AuthPage;
