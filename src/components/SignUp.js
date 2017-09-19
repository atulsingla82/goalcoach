import React, { Component } from 'react';
import { Button,Navbar, NavItem,Input} from 'react-materialize'
import {firebaseApp} from '../firebase'

export default class SignUp extends Component {

   constructor(props){
   
   super(props);

    this.state = {
     firstname : '',
     lastname : '',
     email : '',
     password :''

    }
   }

   signUp(){

   	 console.log('this.state' , this.state);
   	 const {firstname,lastname,email, password } = this.state;
   	 firebaseApp.auth().createUserWithEmailAndPassword(email,password)
   	 .catch(error => {
     
      console.log('error', error)

   	 })
   }

  render() {
    return (
        <div>
       <Navbar brand='Goal Coach' right>
       <NavItem href='get-started.html'>SignUp</NavItem>
        
      </Navbar>

        <div className = "signup">
		 <Input onChange={e => this.setState({firstname:e.target.value})} s={6} label="First Name" />
		 <Input onChange={e => this.setState({lastname:e.target.value})} s={6} label="Last Name" />
		 <Input onChange={e => this.setState({email:e.target.value})} type="email" label="Email" s={6} />
		 <Input onChange={e => this.setState({password:e.target.value})} type="password" label="password" s={6} />
        

         <Button onClick={()=> this.signUp()} waves='light'>button</Button>
          </div>
        </div>
     

    );
  }
}