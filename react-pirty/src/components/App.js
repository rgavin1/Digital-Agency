import React from 'react';
import '../styles/sass/App.scss';
import Hero from './Hero';
import Nav from './Nav';
import Works from './Work';

const App = () => {
  return (
    <div>
      <Nav /> 
      <Hero />
      <Works />
    </div>
  );
}

export default App;
