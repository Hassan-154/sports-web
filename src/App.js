import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import NavBar from './assets/jsFiles/NavBar'
import Home from './assets/jsFiles/Home'
import About from './assets/jsFiles/About'
import Locations from './assets/jsFiles/Locations'
import Sponsors from './assets/jsFiles/Sponsors'
import Sports from './assets/jsFiles/Sports'
import Footer from './assets/jsSections/Footer';
import Error from './assets/jsFiles/Error'
import ScrollToTop from './assets/ScrollToTop/ScrollToTop';
function App() {
  return (
    <div classNam="app">
          <Router>
      <ScrollToTop/>
        <NavBar />
        <Switch>
          <Route path='/about' component={About}/>
          <Route path='/locations' component={Locations} />
          <Route path='/sponsors' component={Sponsors} />
          <Route path='/sports' component={Sports} />
          <Route exact path='/' component={Home} />
          <Route component={Home}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
