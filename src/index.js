import React from 'react';
import ReactDOM from 'react-dom';
import { Router , Route , browserHistory} from 'react-router'
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

import reducer from './reducers';
import logUser from './actions';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import {firebaseApp} from './firebase';


const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user=> {

if(user){

	console.log('user has signed in or signed up')
  const {email} = user;
  store.dispatch(logUser(email));
  
	browserHistory.push('/app');
} else {

	console.log('user needs to signin or has signed out' )
  browserHistory.replace('/signin');
}
    
})



ReactDOM.render(
   <Provider store={store}>
   <Router path="/" history={browserHistory} component={App}>
   <Route path="/app" component={App} />
   <Route path="/signin" component={SignIn} />
   <Route path="/signup" component={SignUp} />
   </Router>

  </Provider>
	, document.getElementById('root'));

