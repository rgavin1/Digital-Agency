import React from 'react';
import '../styles/sass/App.scss';
import Hero from './Hero';
import Nav from './Nav';
import Works from './Work';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Nav /> 
      <Hero />
      <Works />
      <Footer />
    </div>
  );
}

export default App;
