import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Menu from './Menu';
import Welcome from './Welcome';

function App() {
  // <img src={logo} className="App-logo" alt="logo" />
  return (
    <div className="App">
     
     <Header/> 

      <div id="main-body" className="App-body">
        <Router>
            <Switch>
                  <Route path="/menu/"  component={Menu}/>
                  <Route path="/welcome/"  component={Welcome}/>
                  <Route path="/"  component={Welcome}/>
                  <Redirect to="/" /> {/* if no matching path  is found it will go to welcome    */ }

            </Switch>

        </Router>
      </div>


    <Footer/> 

    </div>
  );
}

export default App;
