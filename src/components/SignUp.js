import React, { Component } from 'react';
import { Button,Navbar, NavItem,Input} from 'react-materialize'
import {firebaseApp} from '../firebase'
import {Link} from 'react-router';

export default class SignUp extends Component {

   constructor(props){
   
   super(props);

    this.state = {
     
     email : '',
     password :'',
     error:{
     	message: ''
     }

    }
   }

   signUp(){

   	 console.log('this.state' , this.state);
   	 const {email, password } = this.state;
   	 firebaseApp.auth().createUserWithEmailAndPassword(email,password)
   	 .catch(error => {
     
      console.log('error', error)
      this.setState({error})
   	 })
   }

  render() {
    return (
        <div>
       <Navbar brand='Goal Coach' right>
       <NavItem href='get-started.html'>SignUp</NavItem>
        
      </Navbar>

        <div className = "signup">
		 
		 <Input onChange={e => this.setState({email:e.target.value})} type="email" label="Email" s={6} />
		 <Input onChange={e => this.setState({password:e.target.value})} type="password" label="password" s={6} />
        

         <Button onClick={()=> this.signUp()} waves='light'>Sign Up</Button>
          </div>
        
         
         <div>{this.state.error.message}</div>

         <div> <Link to={'/signin'}>  Already a user ? Sign in here </Link> </div>
        </div>

     

    );
  }
}