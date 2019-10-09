import React from 'react';
import './App.css';
import "materialize-css"; // It installs the JS asset only
import "materialize-css/dist/css/materialize.min.css";
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Route path="/Home" render={props => <Home {...props} />} />
      <Route path="/About" render={props => <About {...props} />} />
      
    </BrowserRouter>

  );
}

export default App;
