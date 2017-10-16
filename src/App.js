import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
componentWillMount() {
  const config = {
    apiKey: "AIzaSyCvVmL0uQtLAgfajxUNrdED46fyYenN6So",
    authDomain: "manager-5b4f9.firebaseapp.com",
    databaseURL: "https://manager-5b4f9.firebaseio.com",
    projectId: "manager-5b4f9",
    storageBucket: "manager-5b4f9.appspot.com",
    messagingSenderId: "680758057019"
  };
  firebase.initializeApp(config);
}

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
