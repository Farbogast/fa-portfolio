  
import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Homepage/Home.js';
import About from './components/About/About.js'
import Skills from './components/Skills/Skills.js'
import Works from './components/Works/Works.js'
import Contact from './components/Contact/Contact.js'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <Navbar />
        <ScrollToTop>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/skills' component={Skills} />
          <Route path='/works' component={Works} />
          <Route path='/contact' component={Contact} />
        </Switch>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
