import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './auth/ProtectedRoute';
import LandingPage from './components/landingpage';
import Login from './components/login';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
         <ProtectedRoute path = '/protected'  component ={LandingPage} />
         <Route component = {Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;