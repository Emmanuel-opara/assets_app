import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
//Redux
import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {appReducer} from './App/redux/reducers/rootReducer';

import MainTab from './App/navigation/mainTab/mainTab';
const store = createStore(appReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainTab />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
