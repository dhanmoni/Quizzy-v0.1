import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react'


import Layout from './src/layout/Layout'
const App = () => {
  return (
    <PersistGate persistor={persistor}>
    <Provider store={store}>
      <Layout/>
    </Provider>
    </PersistGate>
  );
};

export default App;
