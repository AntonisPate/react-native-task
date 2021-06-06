import React from 'react';

import MainStackNavigator from './navigation/MainStackNavigator'
import { Provider } from "react-redux";

import store from './store/store';

export default function App() {
  return (
    <Provider store={store}>
      <MainStackNavigator />
    </Provider>
  );
}