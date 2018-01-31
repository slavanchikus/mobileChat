import React from 'react';

import { Provider } from 'react-redux';
import { store } from './app/reducers/store';

import MainPage from './app/components/MainPage/MainPage';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
  }
}