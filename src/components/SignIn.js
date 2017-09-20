import React, { Component } from 'react';
import { Button,Navbar, NavItem,Input} from 'react-materialize'
import {firebaseApp} from '../firebase'
import {Link} from 'react-router';
export default class SignIn extends Component {

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

   signIn(){

   	 console.log('this.state' , this.state);
   	 const {email, password } = this.state;
   	 firebaseApp.auth().signInWithEmailAndPassword(email, password)
   	 .catch(error => {
     
      console.log('error', error)
      this.setState({error})
   	 })
   }

  render() {
    return (
        <div>
       <Navbar brand='Goal Coach' right>
       <NavItem href='get-started.html'>SignIn</NavItem>
        
      </Navbar>

        <div className = "signin">
		 
		 <Input onChange={e => this.setState({email:e.target.value})} type="email" label="Email" s={6} />
		 <Input onChange={e => this.setState({password:e.target.value})} type="password" label="password" s={6} />
        

         <Button onClick={()=> this.signIn()} waves='light'>Sign In</Button>
          </div>
        
         
         <div>{this.state.error.message}</div>

         <div> <Link to={'/signup'}>  Sign up Instead </Link> </div>
        </div>

     

    );
  }
}