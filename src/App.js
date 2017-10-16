import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
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
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
