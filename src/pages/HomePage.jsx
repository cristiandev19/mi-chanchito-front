import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  console.log('hey you');
  return (
    <div>
      <h1>Hola estamos en el home</h1>
      <h2>Bienvenido a mi chanchito</h2>
      <Link to="/auth">Auth</Link>
    </div>
  );
};

export default HomePage;
