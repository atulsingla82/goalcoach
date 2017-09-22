import React, { Component } from 'react';
import {Navbar, NavItem,Button} from 'react-materialize'
import { firebaseApp} from '../firebase'
import './App.css';

export default class App extends Component {

 signOut(){

 	firebaseApp.auth().signOut();
 }
 


  render() {
    return (

      <div>
      <Navbar brand='Goal Coach' right>
       <NavItem href='get-started.html'>Getting started</NavItem>
        
      </Navbar>
      
      <div>
      <Button onClick={() => this.signOut()}>
       Sign Out
      </Button>
      </div>
      </div>
    );
  }
}


