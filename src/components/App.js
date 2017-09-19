import React, { Component } from 'react';
import {Navbar, NavItem} from 'react-materialize'

import './App.css';

export default class App extends Component {
  render() {
    return (

      
      <Navbar brand='Goal Coach' right>
       <NavItem href='get-started.html'>Getting started</NavItem>
        
      </Navbar>
      

    );
  }
}


