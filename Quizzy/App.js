import React from 'react';
import Layout from './layout/Layout';

import { Provider } from 'react-redux';
import { store } from './redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <Layout/>
    </Provider>
  );
};

export default App;
