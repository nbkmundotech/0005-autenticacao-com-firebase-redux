import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import reducers from './reducers';
import Router from './Router';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyDEl54wSC_RJUXjxi7Fw_XyVjBzQwbTiIo",
      authDomain: "autenticacao-com-firebase.firebaseapp.com",
      databaseURL: "https://autenticacao-com-firebase.firebaseio.com",
      storageBucket: "autenticacao-com-firebase.appspot.com",
      messagingSenderId: "509772403891"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
