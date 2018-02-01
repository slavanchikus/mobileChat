import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import App from './App';

class Android extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('Android', () => Android);
