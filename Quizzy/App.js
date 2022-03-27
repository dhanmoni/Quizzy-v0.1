import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

import Layout from './src/layout/Layout'
const App = () => {
  return (
    <Provider store={store}>
      <Layout/>
    </Provider>
  );
};

export default App;
