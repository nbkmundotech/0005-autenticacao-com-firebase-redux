import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import Main from './components/Main';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key='login' component={LoginForm} title='Login' initial />
      <Scene key='main' component={Main} title='Main' />
    </Router>
  );
};

export default RouterComponent;
