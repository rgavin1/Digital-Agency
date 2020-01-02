import React from 'react';
import '../styles/sass/App.scss';
import HomePage from './Home';
import NewsPage from './News';
import AboutPage from './About';
import ContactPage from './Contact';
import Nav from './Nav';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
      <Nav /> 
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/News" component={NewsPage} />
          <Route path="/About" component={AboutPage} />
          <Route path="/Contact" component={ContactPage} />
        </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
