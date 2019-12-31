import React from 'react';
import '../styles/sass/App.scss';
import Hero from './Hero';
import Nav from './Nav';

const App = () => {
  return (
    <div>
      <Nav /> 
      <Hero />
    </div>
  );
}

export default App;
