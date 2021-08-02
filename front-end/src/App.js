import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import login from './components/login'
import signup from './components/signup'
import recipe from './components/recipePage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/sign-in' exact component={login}/>
          <Route path='/sign-up' exact component={signup}/>
          <Route path='/recipe' exact component={recipe}/>


        </Switch>
      </Router>
    </>
  );
}

export default App;