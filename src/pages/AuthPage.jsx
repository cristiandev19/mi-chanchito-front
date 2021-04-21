import { Button, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
  buttonContainer: {
    marginTop     : '60px',
    display       : 'flex',
    flexDirection : 'column',
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

  return (
    <div className="main-container">
      <div
        className="part1"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/portada.png')` }}
      />
      <div className="part2">
        <div className="part2-content">
          <h1>Crea y construye proyectos con gente como tú</h1>
          <div className={classes.buttonContainer}>
            <Button variant="contained" color="primary" onClick={handleLogin} className={classes.blueButton}>
              Iniciar Sesión
            </Button>
            <Button variant="contained" color="secondary" onClick={handleRegister} className={classes.whiteButton}>
              Registrarse
            </Button>
          </div>
        </div>
      </div>

      {/* <Login open={openLogin} onClose={handleCloseLogin} />
      <Register open={openRegister} onClose={handleCloseRegister} /> */}
    </div>
  );
};

export default AuthPage;
